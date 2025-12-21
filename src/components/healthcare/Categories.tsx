import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();

  const categories = [
    { id: 1, name: t("categories.dental"), icon: "🦷", color: "bg-blue-50" },
    { id: 2, name: t("categories.heart"), icon: "❤️", color: "bg-red-50" },
    { id: 3, name: t("categories.eye"), icon: "👁️", color: "bg-green-50" },
    { id: 4, name: t("categories.brain"), icon: "🧠", color: "bg-purple-50" },
    { id: 5, name: t("categories.bone"), icon: "🦴", color: "bg-orange-50" },
    { id: 6, name: t("categories.ear"), icon: "👂", color: "bg-yellow-50" },
  ];

  return (
    <section className="mt-8">
      <div className="px-6 flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-healthcare-dark dark:text-white">
          {t("categories.title")}
        </h2>
        <button className="text-healthcare-primary text-xs font-bold uppercase tracking-wider">
          {t("common.see_all")}
        </button>
      </div>

      <div className="flex overflow-x-auto px-6 space-x-4 no-scrollbar pb-2">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center space-y-2 shrink-0"
          >
            <div
              className={`w-16 h-16 ${cat.color} dark:bg-slate-800 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-white/50 dark:border-slate-700 active:scale-95 transition-transform cursor-pointer`}
            >
              {cat.icon}
            </div>
            <span className="text-xs font-semibold text-healthcare-muted dark:text-slate-400">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
