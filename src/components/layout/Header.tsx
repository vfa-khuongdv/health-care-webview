import { useTranslation } from 'react-i18next';
import Input from '../ui/Input';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="px-6 pt-8 pb-4 bg-healthcare-surface dark:bg-healthcare-dark sticky top-0 z-100 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-healthcare-muted dark:text-slate-400 text-sm font-medium">{t('common.good_morning')}</p>
          <h1 className="text-2xl font-bold text-healthcare-dark dark:text-white">Khuong DV</h1>
        </div>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-premium">
             <div className="w-full h-full bg-healthcare-primary flex items-center justify-center text-white font-bold text-lg">
               KD
             </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 text-healthcare-muted mb-4 opacity-80">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-wider">{t('common.location')}</span>
      </div>

      <Input 
        placeholder={t('common.search_placeholder')}
        leftIcon={(
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        )}
        wrapperClassName="bg-white dark:bg-slate-800 border-gray-100 dark:border-slate-700 shadow-premium focus-within:ring-2 focus-within:ring-healthcare-primary/20 transition-all"
        className="h-12 pl-0 dark:text-white dark:placeholder:text-slate-500"
      />
    </header>
  );
};

export default Header;
