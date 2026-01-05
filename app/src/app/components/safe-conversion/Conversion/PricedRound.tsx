import { formatNumberLocale, formatCurrencySymbol } from "@library/utils/numberFormatting";
import { BestFit } from "@library/conversion-solver";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QuestionMarkTooltipComponent from "@/components/tooltip/QuestionMarkTooltip";
import { CapTableOwnershipError } from "@library/cap-table/types";
import { useTranslation } from "@config/i18n";

import { FaMinus, FaPlus } from "react-icons/fa";

export type OwnershipPctNotes = {
  error?: CapTableOwnershipError["type"];
  explanation?: string;
};

interface PricedRoundData {
  preMoney: number;
  postMoney: number;
  totalSeriesInvestment: number;
  totalShares: number;
  newSharesIssued: number;
  totalInvestedToDate: number;
  pricedConversion: BestFit;
  totalRoundDilution: number;
}

export interface PricedRoundPropsData {
  current: PricedRoundData;
  previous: PricedRoundData;
  preMoneyChange: number;
  investmentChange: number;
  targetOptionsChange: number;
}

export interface PricedRoundProps extends PricedRoundPropsData {
  updateInvestmentChange: (change: number) => void;
  updatePreMoneyChange: (change: number) => void;
  updateTargetOptionsChange: (change: number) => void;
}


const roundFactor = Math.pow(10, 5);
const quickRound = (num: number) => Math.round(num * roundFactor) / roundFactor;

const PricedRound: React.FC<PricedRoundProps> = (props) => {
  const { t, locale } = useTranslation();
  const current = props.current;
  const previous = props.previous;

  const {
    preMoneyChange,
    investmentChange,
    targetOptionsChange,
    updateInvestmentChange,
    updatePreMoneyChange,
    updateTargetOptionsChange,
  } = props;

  const currentTargetOptions =
    current.pricedConversion.totalOptions /
    current.pricedConversion.totalShares;
  const previousTargetOptions =
    previous.pricedConversion.totalOptions /
    previous.pricedConversion.totalShares;
  const currentTargetOptionsChange = quickRound(
    currentTargetOptions - previousTargetOptions
  );

  const increment = (name: "preMoney" | "investment" | "options") => {
    if (name === "preMoney") {
      const change = preMoneyChange + 500_000;
      updatePreMoneyChange(change);
    } else if (name === "investment") {
      const change = investmentChange + 500_000;
      updateInvestmentChange(change);
    } else if (name === "options") {
      const change = quickRound(targetOptionsChange + 0.01);
      if (change < 1) updateTargetOptionsChange(change);
    }
  };

  const decrement = (name: "preMoney" | "investment" | "options") => {
    if (name === "preMoney") {
      const change = preMoneyChange - 500_000;
      if (previous.preMoney + change > 0) {
        updatePreMoneyChange(change);
      }
    } else if (name === "investment") {
      const change = investmentChange - 500_000;
      if (previous.totalSeriesInvestment + change > 0) {
        updateInvestmentChange(change);
      }
    } else if (name === "options") {
      const change = quickRound(targetOptionsChange - 0.01);
      updateTargetOptionsChange(change);
    }
  };
  const changes = {
    postMoney: current.postMoney - previous.postMoney,
    pps: current.pricedConversion.pps - previous.pricedConversion.pps,
    shares:
      current.pricedConversion.totalShares -
      previous.pricedConversion.totalShares,
    additionalOptions:
      current.pricedConversion.additionalOptions -
      previous.pricedConversion.additionalOptions,
    newSharesIssued:
      current.pricedConversion.newSharesIssued -
      previous.pricedConversion.newSharesIssued,
    dilution: current.totalRoundDilution - previous.totalRoundDilution,
  };

  return (
    <div className="pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="relative flex flex-col h-26 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="absolute text-nt84bluedarker dark:text-nt84lightblue top-0 right-0 p-2 z-10">
            <QuestionMarkTooltipComponent>
              <div className="max-w-72">
                {t('pricedRound.ppsTooltip')}
              </div>
            </QuestionMarkTooltipComponent>
          </div>
          <CardHeader className="pb-0 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">
              {formatCurrencySymbol(locale)}{current.pricedConversion.pps.toFixed(5)}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">
              {t('pricedRound.pps')}
            </div>
          </CardContent>
          <div className="text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {changes.pps !== 0
              ? ` (${changes.pps > 0 ? "+" : ""}${formatCurrencySymbol(locale)}${formatNumberLocale(
                  changes.pps,
                  locale
                )})`
              : ""}
          </div>
        </Card>
        <Card className="relative flex flex-col h-26 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-0 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">
              {formatNumberLocale(current.pricedConversion.newSharesIssued, locale)}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">
              {t('pricedRound.newSharesIssued')}
            </div>
          </CardContent>
          <div className="text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {changes.newSharesIssued !== 0
              ? ` (${
                  changes.newSharesIssued > 0 ? "+" : ""
                }${formatNumberLocale(changes.newSharesIssued, locale)})`
              : ""}
          </div>
        </Card>
        <Card className="relative flex flex-col h-26 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="absolute text-nt84bluedarker dark:text-nt84lightblue top-0 right-0 p-2 z-10">
            <QuestionMarkTooltipComponent>
              <div className="max-w-72">
                {t('pricedRound.additionalOptionsTooltip')}
              </div>
            </QuestionMarkTooltipComponent>
          </div>
          <CardHeader className="pb-0 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">
              {formatNumberLocale(
                current.pricedConversion.additionalOptions,
                locale
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">
              {t('pricedRound.additionalOptions')}
            </div>
          </CardContent>
          <div className="text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {changes.additionalOptions !== 0
              ? ` (${
                  changes.additionalOptions > 0 ? "+" : ""
                }${formatNumberLocale(changes.additionalOptions, locale)})`
              : ""}
          </div>
        </Card>
        <Card className="relative flex flex-col h-26 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="absolute text-nt84bluedarker dark:text-nt84lightblue top-0 right-0 p-2 z-10">
            <QuestionMarkTooltipComponent>
              <div className="max-w-72">
                {t('pricedRound.totalRoundDilutionTooltip')}
              </div>
            </QuestionMarkTooltipComponent>
          </div>
          <CardHeader className="pb-0 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">
              {current.totalRoundDilution.toFixed(2)}%
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">
              {t('pricedRound.totalRoundDilution')}
            </div>
          </CardContent>
          <div className="text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {changes.dilution !== 0
              ? ` (${changes.dilution > 0 ? "+" : ""}${changes.dilution.toFixed(
                  2
                )})`
              : ""}
          </div>
        </Card>

        <Card className="relative flex flex-col h-26 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-0 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">
              {formatCurrencySymbol(locale)}{formatNumberLocale(current.preMoney, locale)}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">
              {t('pricedRound.preMoney')}
            </div>
            <div className="flex flex-row justify-between">
              <FaMinus
                size="16"
                className="text-nt84blue hover:text-nt84bluedarker"
                name="decrement"
                onClick={() => decrement("preMoney")}
              />
              <div className="text-sm text-gray-600 dark:text-gray-200 z-10">
                {preMoneyChange !== 0
                  ? ` (${
                      preMoneyChange > 0 ? "+" : ""
                    }${formatCurrencySymbol(locale)}${formatNumberLocale(
                      current.preMoney - previous.preMoney,
                      locale
                    )})`
                  : ""}
              </div>
              <FaPlus
                size="16"
                className="text-nt84blue hover:text-nt84bluedarker"
                name="increment"
                onClick={() => increment("preMoney")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Investment */}
        <Card className="relative flex flex-col h-26 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-0 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">
              {formatCurrencySymbol(locale)}{formatNumberLocale(current.totalSeriesInvestment, locale)}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">
              {t('pricedRound.investment')}
            </div>
            <div className="flex flex-row justify-between">
              <FaMinus
                size="16"
                className="text-nt84blue hover:text-nt84bluedarker"
                name="decrement"
                onClick={() => decrement("investment")}
              />
              <div className="text-sm text-gray-600 dark:text-gray-200 z-10">
                {investmentChange !== 0
                  ? ` (${
                      investmentChange > 0 ? "+" : ""
                    }${formatCurrencySymbol(locale)}${formatNumberLocale(investmentChange, locale)})`
                  : ""}
              </div>
              <FaPlus
                size="16"
                className="text-nt84blue hover:text-nt84bluedarker"
                name="increment"
                onClick={() => increment("investment")}
              />
            </div>
          </CardContent>
        </Card>
        {/* End Investment */}

        {/* PostMoney */}
        <Card className="relative flex flex-col h-26 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-0 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">
              {formatCurrencySymbol(locale)}{formatNumberLocale(current.postMoney, locale)}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">
              {t('pricedRound.postMoney')}
            </div>
            <div className="flex flex-row justify-between">
              <FaMinus
                size="16"
                className="text-nt84blue hover:text-nt84bluedarker"
                name="decrement"
                onClick={() => decrement("preMoney")}
              />
              <div className="text-sm text-gray-600 dark:text-gray-200 z-10">
                {changes.postMoney !== 0
                  ? ` (${
                      changes.postMoney > 0 ? "+" : ""
                    }${formatCurrencySymbol(locale)}${formatNumberLocale(changes.postMoney, locale)})`
                  : ""}
              </div>
              <FaPlus
                size="16"
                className="text-nt84blue hover:text-nt84bluedarker"
                name="increment"
                onClick={() => increment("preMoney")}
              />
            </div>
          </CardContent>
        </Card>
        {/* End PostMoney */}

        {/* Target Options */}
        <Card className="relative flex flex-col h-26 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="absolute text-nt84bluedarker dark:text-nt84lightblue top-0 right-0 p-2 z-10">
            <QuestionMarkTooltipComponent>
              {t('pricedRound.targetOptionsTooltip')}
            </QuestionMarkTooltipComponent>
          </div>
          <CardHeader className="pb-0 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">
              {(currentTargetOptions * 100).toFixed(2)}%
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">
              {t('pricedRound.targetOptions')}
            </div>
            <div className="flex flex-row justify-between">
              <FaMinus
                size="16"
                className="text-nt84blue hover:text-nt84bluedarker"
                name="decrement"
                onClick={() => decrement("options")}
              />
              <div className="text-sm text-gray-600 dark:text-gray-200 z-10">
                {targetOptionsChange !== 0
                  ? ` (${targetOptionsChange > 0 ? "+" : ""}${
                      Math.round(currentTargetOptionsChange * 100)
                    })`
                  : ""}
              </div>
              <FaPlus
                size="16"
                className="text-nt84blue hover:text-nt84bluedarker"
                name="increment"
                onClick={() => increment("options")}
              />
            </div>
          </CardContent>
        </Card>
        {/* End Target Options */}
      </div>
    </div>
  );
};

export default PricedRound;
