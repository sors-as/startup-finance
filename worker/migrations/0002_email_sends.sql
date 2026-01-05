-- Migration for email sends tracking
-- Adds table to track email sends for rate limiting and analytics

CREATE TABLE email_sends (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  worksheet_id TEXT NOT NULL,
  recipients TEXT NOT NULL, -- JSON array of recipient emails
  message_id TEXT, -- Resend message ID for tracking
  sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (worksheet_id) REFERENCES finance_worksheets(id) ON DELETE CASCADE
);

-- Index for rate limiting queries (worksheet_id + sent_at)
CREATE INDEX idx_email_sends_worksheet_time ON email_sends(worksheet_id, sent_at);

-- Index for analytics queries
CREATE INDEX idx_email_sends_sent_at ON email_sends(sent_at);
