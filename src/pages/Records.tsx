import { useTranslation } from 'react-i18next';
import Input from '../components/ui/Input';

const Records = () => {
  const { t } = useTranslation();

  const records = [
    {
      id: 1,
      title: t('records.record_blood_test'),
      date: 'Dec 10, 2025',
      type: t('records.type_laboratory'),
      icon: '🧪',
      size: '1.2 MB'
    },
    {
      id: 2,
      title: t('records.record_consultation'),
      date: 'Nov 28, 2025',
      type: t('records.type_prescription'),
      icon: '📄',
      size: '800 KB'
    },
    {
      id: 3,
      title: t('records.record_xray'),
      date: 'Oct 15, 2025',
      type: t('records.type_imaging'),
      icon: '🩻',
      size: '4.5 MB'
    }
  ];

  return (
    <div className="px-6 py-4 animate-fade-in pb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-healthcare-dark">{t('records.title')}</h2>
        <div className="bg-healthcare-primary/10 p-2 rounded-full">
          <svg className="w-5 h-5 text-healthcare-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>

      <Input 
        placeholder={t('records.search_placeholder')}
        leftIcon={(
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        )}
        containerClassName="mb-6"
        className="pl-0 bg-white"
      />

      <div className="space-y-4">
        {records.map((record) => (
          <div key={record.id} className="bg-white p-4 rounded-2xl shadow-premium border border-gray-100 flex items-center justify-between hover:border-healthcare-primary/30 transition-colors cursor-pointer group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-healthcare-surface rounded-xl flex items-center justify-center text-2xl">
                {record.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-healthcare-dark group-hover:text-healthcare-primary transition-colors">{record.title}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-[10px] text-healthcare-muted font-medium">{record.date}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[10px] text-healthcare-primary font-bold uppercase tracking-wider">{record.type}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-healthcare-muted mb-1">{record.size}</p>
              <button className="text-healthcare-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-healthcare-primary/5 rounded-2xl border border-dashed border-healthcare-primary/30">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-healthcare-primary">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h4 className="text-sm font-bold text-healthcare-dark">{t('records.add_new')}</h4>
          <p className="text-[10px] text-healthcare-muted max-w-[200px]">{t('records.upload_desc')}</p>
        </div>
      </div>
    </div>
  );
};

export default Records;
