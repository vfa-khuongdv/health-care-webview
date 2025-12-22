import { ChevronLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  icon?: React.ReactNode;
  onBack?: () => void;
}

const PageHeader = ({ title, icon, onBack }: PageHeaderProps) => {
  return (
    <header className="px-6 pt-6 pb-4 glass-effect sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center space-x-3">
        {onBack ? (
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-healthcare-surface dark:bg-slate-800 text-healthcare-dark dark:text-white active:scale-90 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        ) : (
          icon && (
            <div className="bg-healthcare-primary/10 dark:bg-healthcare-primary/20 p-2 rounded-xl">
              {icon}
            </div>
          )
        )}
        <h1 className="text-2xl font-bold text-healthcare-dark dark:text-white">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
