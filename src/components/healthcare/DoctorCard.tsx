import { useTranslation } from 'react-i18next';
import { Star, Plus } from 'lucide-react';

interface DoctorProps {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
}

const DoctorCard = ({ name, specialty, rating, reviews }: DoctorProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-premium border border-gray-50 dark:border-slate-800 flex space-x-4 active:scale-[0.98] transition-all cursor-pointer">
      <div className="w-20 h-24 rounded-2xl bg-healthcare-primary/10 dark:bg-healthcare-primary/20 overflow-hidden shrink-0">
        <div className="w-full h-full flex items-center justify-center text-3xl opacity-50 grayscale group-hover:grayscale-0 transition-all">
          👨‍⚕️
        </div>
      </div>
      <div className="flex flex-col justify-between py-1 grow">
        <div>
          <h3 className="font-bold text-healthcare-dark dark:text-white truncate">{name}</h3>
          <p className="text-xs font-semibold text-healthcare-muted dark:text-slate-400 uppercase tracking-wider">{specialty}</p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-bold text-healthcare-dark dark:text-slate-200">{rating}</span>
            <span className="text-[10px] text-healthcare-muted dark:text-slate-400">({reviews} {t('doctor.reviews')})</span>
          </div>
          <button className="p-1.5 rounded-lg bg-healthcare-primary/5 text-healthcare-primary hover:bg-healthcare-primary hover:text-white transition-colors">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
