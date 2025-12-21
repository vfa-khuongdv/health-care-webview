import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 shadow-sm active:scale-95 transition-all"
      aria-label="Toggle Language"
    >
      <span className="text-xs font-bold uppercase tracking-wider dark:text-white text-healthcare-primary">
        {i18n.language === "en" ? "VI" : "EN"}
      </span>
      <span className="text-sm">{i18n.language === "en" ? "🇻🇳" : "🇺🇸"}</span>
    </button>
  );
};

export default LanguageSwitcher;
