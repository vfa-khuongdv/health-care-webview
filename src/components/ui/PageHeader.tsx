import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  icon?: React.ReactNode;
  onBack?: () => void;
  showBack?: boolean;
}

const PageHeader = ({ title, icon, onBack, showBack }: PageHeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const shouldShowBack = showBack || !!onBack;

  return (
    <header className="px-6 pt-6 pb-4 glass-effect sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center space-x-3">
        {shouldShowBack ? (
          <button
            onClick={handleBack}
            className="p-2 rounded-xl bg-healthcare-surface dark:bg-slate-800 text-healthcare-dark dark:text-white/70 active:scale-90 transition-transform"
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
        <h1 className="text-2xl font-bold text-healthcare-dark dark:text-white/70">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
