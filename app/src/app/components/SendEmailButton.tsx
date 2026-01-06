import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaEnvelope } from "react-icons/fa6";
import { sendCapTableEmail, SendEmailResponse } from "@/services/emailService";
import { useTranslation } from "@config/i18n";

interface SendEmailButtonProps {
  worksheetId?: string;
  worksheetName?: string;
}

const SendEmailButton: React.FC<SendEmailButtonProps> = ({ worksheetId }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [recipients, setRecipients] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState<SendEmailResponse | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const handleSend = async () => {
    if (!worksheetId || !recipients.trim()) {
      return;
    }

    setIsSending(true);
    setResult(null);

    // Parse recipients (comma or space separated)
    const recipientList = recipients
      .split(/[,\s]+/)
      .map(email => email.trim())
      .filter(email => email.length > 0);

    const response = await sendCapTableEmail(worksheetId, {
      recipients: recipientList,
      senderMessage: message.trim() || undefined,
    });

    setResult(response);
    setIsSending(false);

    if (response.success) {
      // Close modal after successful send
      setTimeout(() => {
        setShowModal(false);
        setRecipients("");
        setMessage("");
        setResult(null);
      }, 2000);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setRecipients("");
    setMessage("");
    setResult(null);
  };

  return (
    <div>
      <Button
        className="w-28 bg-purple-600 hover:bg-purple-700 text-white dark:text-white cursor-pointer"
        onClick={() => setShowModal(true)}
        disabled={!worksheetId}
      >
        <span className="flex items-center justify-center gap-2">
          <span>{t('email.button')}</span>
          <FaEnvelope size={14} />
        </span>
      </Button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          <div 
            className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity"
            onClick={handleClose}
          ></div>

          <div className="relative z-10 bg-white dark:bg-gray-900 text-left overflow-hidden shadow-xl transform transition-all sm:max-w-2xl sm:w-full mx-4 rounded-lg">
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
                  {t('email.title')}
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('email.description')}
                </p>

                {/* Recipients input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('email.recipients')}
                  </label>
                  <Input
                    type="text"
                    value={recipients}
                    onChange={(e) => setRecipients(e.target.value)}
                    placeholder={t('email.recipientsPlaceholder')}
                    className="w-full"
                    disabled={isSending}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {t('email.multipleRecipients')}
                  </p>
                </div>

                {/* Optional message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('email.message')}
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('email.messagePlaceholder')}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-[100px]"
                    disabled={isSending}
                  />
                </div>

                {/* Result message */}
                {result && (
                  <div className={`p-4 rounded ${result.success ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                    <p className={`text-sm ${result.success ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                      {result.success ? (
                        <>
                          {t('email.success')}
                          {result.remainingEmails !== undefined && (
                            <span className="ml-2 text-xs">
                              ({result.remainingEmails} {t('email.remainingEmails')})
                            </span>
                          )}
                        </>
                      ) : (
                        <>
                          {result.error === 'Rate limit exceeded. Maximum 5 emails per worksheet per hour.' 
                            ? t('email.rateLimitExceeded')
                            : t('email.error')}
                          {result.invalidEmails && result.invalidEmails.length > 0 && (
                            <div className="mt-1">
                              <strong>{t('email.invalidEmails')}</strong> {result.invalidEmails.join(', ')}
                            </div>
                          )}
                          {result.error && !result.invalidEmails && (
                            <div className="mt-1 text-xs">
                              {result.error}
                            </div>
                          )}
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-gray-200 dark:bg-gray-800 px-6 py-4 flex justify-end gap-3">
              <Button
                type="button"
                variant="secondary"
                className="px-6"
                onClick={handleClose}
                disabled={isSending}
              >
                {t('email.cancel')}
              </Button>
              <Button
                type="button"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6"
                onClick={handleSend}
                disabled={isSending || !recipients.trim()}
              >
                {isSending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t('email.sending')}
                  </>
                ) : (
                  t('email.send')
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendEmailButton;
