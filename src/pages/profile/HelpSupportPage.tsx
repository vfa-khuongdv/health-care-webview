import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, ChevronDown } from "lucide-react";
import Input from "../../components/ui/Input";
import PageHeader from "../../components/ui/PageHeader";
import SectionHeader from "../../components/ui/SectionHeader";

const HelpSupportPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const faqs = [
    { q: t("help.faq_booking_q"), a: t("help.faq_booking_a") },
    { q: t("help.faq_records_q"), a: t("help.faq_records_a") },
    { q: t("help.faq_cancel_q"), a: t("help.faq_cancel_a") },
  ];

  return (
    <div className="animate-slide-up">
      <PageHeader title={t("help.title")} onBack={() => navigate("/profile")} />

      <div className="px-6 mt-4 space-y-8 pb-20">
        {/* Search Bar */}
        <Input
          placeholder={t("help.search_placeholder")}
          leftIcon={<Search className="w-5 h-5" />}
          className="pl-0"
        />

        {/* Contact Options */}
        <div className="space-y-4">
          <SectionHeader>{t("help.contact_us")}</SectionHeader>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "📞", label: t("help.call") },
              { icon: "💬", label: t("help.chat") },
              { icon: "✉️", label: t("help.email") },
            ].map((item) => (
              <button
                key={item.label}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-gray-50 dark:border-slate-800 shadow-sm flex flex-col items-center space-y-2 group active:scale-95 transition-all"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-[10px] font-bold text-healthcare-dark dark:text-white/70">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <SectionHeader>{t("help.popular_faqs")}</SectionHeader>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-gray-50 dark:border-slate-800 shadow-sm space-y-2"
              >
                <h4 className="text-sm font-bold text-healthcare-dark dark:text-white/70 flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 text-gray-300 dark:text-slate-700" />
                </h4>
                <p className="text-[11px] text-healthcare-muted dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Ticket */}
        <div className="bg-linear-to-br from-healthcare-primary to-healthcare-secondary dark:from-healthcare-primary/50 dark:to-healthcare-secondary/50 p-6 rounded-3xl text-white dark:text-white/70 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="font-bold text-lg mb-1">
              {t("help.not_found_title")}
            </h4>
            <p className="text-white/80 text-[11px] mb-4">
              {t("help.not_found_desc")}
            </p>
            <button className="bg-white text-healthcare-primary dark:bg-healthcare-primary/50 dark:text-white/70 px-5 py-2.5 rounded-xl text-xs font-bold active:scale-95 transition-transform shadow-premium">
              {t("help.create_ticket")}
            </button>
          </div>
          <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 right-4 text-5xl opacity-20">
            🆘
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportPage;
