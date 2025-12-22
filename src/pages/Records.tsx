import { useTranslation } from "react-i18next";
import { FileText, Download, Plus, Search, Filter } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Input from "../components/ui/Input";

const Records = () => {
  const { t } = useTranslation();

  const records = [
    {
      id: 1,
      title: t("records.record_blood_test"),
      date: "Dec 10, 2025",
      type: t("records.type_laboratory"),
      icon: "🧪",
      size: "1.2 MB",
      color: "blue",
    },
    {
      id: 2,
      title: t("records.record_consultation"),
      date: "Nov 28, 2025",
      type: t("records.type_prescription"),
      icon: "📄",
      size: "800 KB",
      color: "green",
    },
    {
      id: 3,
      title: t("records.record_xray"),
      date: "Oct 15, 2025",
      type: t("records.type_imaging"),
      icon: "🩻",
      size: "4.5 MB",
      color: "purple",
    },
  ];

  return (
    <div className="animate-fade-in pb-10">
      <PageHeader
        title={t("records.title")}
        icon={<FileText className="w-6 h-6 text-healthcare-primary" />}
      />

      <div className="px-6 py-4">
        {/* Search and Filter */}
        <div className="flex space-x-3 mb-6">
          <div className="flex-1">
            <Input
              placeholder={t("common.search_placeholder")}
              leftIcon={<Search className="h-4 w-4" />}
              wrapperClassName="bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800 shadow-premium"
              className="h-11 text-xs"
            />
          </div>
          <button className="w-11 h-11 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-xl flex items-center justify-center text-healthcare-muted dark:text-slate-400 shadow-premium active:scale-95 transition-all">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {records.map((record) => (
            <div
              key={record.id}
              className="group relative bg-white dark:bg-slate-900/50 p-4 rounded-3xl shadow-premium border border-gray-100 dark:border-slate-800 flex items-center justify-between hover:border-healthcare-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-healthcare-surface dark:bg-slate-800 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-gray-50 dark:border-slate-700 transition-transform group-hover:scale-110">
                  {record.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-healthcare-dark dark:text-white group-hover:text-healthcare-primary transition-colors mb-1">
                    {record.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] text-healthcare-muted dark:text-slate-400 font-semibold bg-gray-50 dark:bg-slate-800 px-2 py-0.5 rounded-lg">
                      {record.date}
                    </span>
                    <span className="text-[10px] text-healthcare-primary font-bold uppercase tracking-wider">
                      {record.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] text-healthcare-muted dark:text-slate-500 font-medium">
                    {record.size}
                  </p>
                </div>
                <button className="w-10 h-10 bg-healthcare-primary/10 dark:bg-healthcare-primary/20 text-healthcare-primary rounded-xl flex items-center justify-center hover:bg-healthcare-primary hover:text-white transition-all active:scale-90">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <div className="mt-8 relative overflow-hidden bg-linear-to-br from-healthcare-primary/5 to-healthcare-secondary/5 dark:from-healthcare-primary/10 dark:to-healthcare-secondary/10 p-6 rounded-3xl border border-dashed border-healthcare-primary/30 dark:border-healthcare-primary/40 group cursor-pointer active:scale-[0.98] transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/50 dark:bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-premium text-healthcare-primary transition-transform group-hover:rotate-12 group-hover:scale-110">
              <Plus className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-healthcare-dark dark:text-white mb-1">
                {t("records.add_new")}
              </h4>
              <p className="text-xs text-healthcare-muted dark:text-slate-400 max-w-[220px]">
                {t("records.upload_desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
