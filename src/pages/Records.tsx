import { useTranslation } from 'react-i18next';
import { FileText, Search, Download, Plus } from 'lucide-react';
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
        <h2 className="text-2xl font-bold text-healthcare-dark dark:text-white">{t('records.title')}</h2>
        <div className="bg-healthcare-primary/10 dark:bg-healthcare-primary/20 p-2 rounded-full">
          <FileText className="w-5 h-5 text-healthcare-primary" />
        </div>
      </div>
      <div className="space-y-4">
        {records.map((record) => (
          <div key={record.id} className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-premium border border-gray-100 dark:border-slate-800 flex items-center justify-between hover:border-healthcare-primary/30 transition-colors cursor-pointer group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-healthcare-surface dark:bg-slate-800 rounded-xl flex items-center justify-center text-2xl">
                {record.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-healthcare-dark dark:text-white group-hover:text-healthcare-primary transition-colors">{record.title}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-[10px] text-healthcare-muted dark:text-slate-400 font-medium">{record.date}</span>
                  <span className="text-gray-300 dark:text-slate-700">•</span>
                  <span className="text-[10px] text-healthcare-primary font-bold uppercase tracking-wider">{record.type}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-healthcare-muted dark:text-slate-500 mb-1">{record.size}</p>
              <button className="text-healthcare-primary">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-healthcare-primary/5 dark:bg-healthcare-primary/10 rounded-2xl border border-dashed border-healthcare-primary/30 dark:border-healthcare-primary/40">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm text-healthcare-primary">
            <Plus className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-healthcare-dark dark:text-white">{t('records.add_new')}</h4>
          <p className="text-[10px] text-healthcare-muted dark:text-slate-400 max-w-[200px]">{t('records.upload_desc')}</p>
        </div>
      </div>
    </div>
  );
};

export default Records;
