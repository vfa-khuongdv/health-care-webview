import { useTranslation } from 'react-i18next';

interface DoctorProps {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
}

const DoctorCard = ({ name, specialty, rating, reviews }: DoctorProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-4 rounded-3xl shadow-premium border border-gray-50 flex space-x-4 active:scale-[0.98] transition-all cursor-pointer">
      <div className="w-20 h-24 rounded-2xl bg-healthcare-primary/10 overflow-hidden shrink-0">
        <div className="w-full h-full flex items-center justify-center text-3xl opacity-50 grayscale group-hover:grayscale-0 transition-all">
          👨‍⚕️
        </div>
      </div>
      <div className="flex flex-col justify-between py-1 grow">
        <div>
          <h3 className="font-bold text-healthcare-dark truncate">{name}</h3>
          <p className="text-xs font-semibold text-healthcare-muted uppercase tracking-wider">{specialty}</p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-bold text-healthcare-dark">{rating}</span>
            <span className="text-[10px] text-healthcare-muted">({reviews} {t('doctor.reviews')})</span>
          </div>
          <button className="p-1.5 rounded-lg bg-healthcare-primary/5 text-healthcare-primary hover:bg-healthcare-primary hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
