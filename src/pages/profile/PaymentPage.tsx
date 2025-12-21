import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Plus, CreditCard } from "lucide-react";
import PageHeader from "../../components/ui/PageHeader";
import SectionHeader from "../../components/ui/SectionHeader";
import OptionItem from "../../components/ui/OptionItem";

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const transactions = [
    {
      id: 1,
      title: t("payment.transaction_dental"),
      date: "Dec 12, 2025",
      amount: "-$50.00",
      category: "Health",
    },
    {
      id: 2,
      title: t("payment.transaction_pharmacy"),
      date: "Dec 08, 2025",
      amount: "-$24.50",
      category: "Medicine",
    },
    {
      id: 3,
      title: t("payment.transaction_monthly"),
      date: "Dec 01, 2025",
      amount: "-$99.00",
      category: "Subscription",
    },
  ];

  return (
    <div className="animate-slide-up">
      <PageHeader
        title={t("payment.title")}
        onBack={() => navigate("/profile")}
      />

      <div className="px-6 mt-4 space-y-8 pb-20">
        {/* Virtual Card */}
        <div className="relative h-48 w-full bg-linear-to-br from-healthcare-dark to-slate-800 rounded-3xl p-6 text-white shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-8 bg-amber-400/20 rounded-lg border border-amber-400/30 flex items-center justify-center">
                <div className="w-8 h-5 bg-amber-400/40 rounded-sm"></div>
              </div>
              <span className="font-bold tracking-widest text-lg italic">
                VISA
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-white/60 text-[10px] uppercase tracking-widest">
                {t("payment.card_number")}
              </p>
              <p className="text-xl font-mono tracking-[0.2em]">
                •••• •••• •••• 4242
              </p>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/60 text-[10px] uppercase tracking-widest">
                  {t("payment.card_holder")}
                </p>
                <p className="text-sm font-bold uppercase tracking-wider">
                  Johnathan Doe
                </p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-[10px] uppercase tracking-widest">
                  {t("payment.expires")}
                </p>
                <p className="text-sm font-bold">12/28</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-50 dark:border-slate-800 shadow-sm space-y-2 group">
            <div className="w-10 h-10 bg-healthcare-primary/10 rounded-xl flex items-center justify-center text-healthcare-primary transition-transform group-active:scale-90">
              <Plus className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-healthcare-dark dark:text-white">
              {t("payment.add_card")}
            </span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-50 dark:border-slate-800 shadow-sm space-y-2 group">
            <div className="w-10 h-10 bg-healthcare-secondary/10 rounded-xl flex items-center justify-center text-healthcare-secondary transition-transform group-active:scale-90">
              <CreditCard className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-healthcare-dark dark:text-white">
              {t("payment.methods")}
            </span>
          </button>
        </div>

        {/* Transaction History */}
        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <SectionHeader>{t("payment.recent_transactions")}</SectionHeader>
            <button className="text-healthcare-primary text-[10px] font-bold uppercase tracking-widest">
              {t("payment.view_all")}
            </button>
          </div>

          <div className="space-y-3">
            {transactions.map((tx) => (
              <OptionItem
                key={tx.id}
                label={tx.title}
                sublabel={tx.date}
                variant="white"
                icon={
                  <div className="text-xl">
                    {tx.category === "Health"
                      ? "🏥"
                      : tx.category === "Medicine"
                      ? "💊"
                      : "💳"}
                  </div>
                }
                rightElement={
                  <p className="text-sm font-bold text-healthcare-dark dark:text-white">
                    {tx.amount}
                  </p>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
