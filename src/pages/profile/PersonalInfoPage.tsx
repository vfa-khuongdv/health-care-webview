import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Input from '../../components/ui/Input';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';

const PersonalInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="animate-slide-up pb-10">
      <PageHeader title={t('profile.personal_info')} onBack={() => navigate('/profile')} />

      <div className="px-6 mt-4 space-y-6">
        <Card padding={true}>
          <div className="space-y-4">
            <Input 
              label={t('profile.full_name')}
              type="text"
              defaultValue="Johnathan Doe"
            />

            <Input 
              label={t('profile.email_address')}
              type="email"
              defaultValue="johnathan.doe@example.com"
            />

            <Input 
              label={t('profile.phone_number')}
              type="tel"
              defaultValue="+1 (555) 000-1234"
            />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold text-healthcare-muted uppercase tracking-widest px-1">{t('profile.gender')}</label>
                <div className="mt-1 p-4 bg-healthcare-surface rounded-2xl border border-transparent focus-within:border-healthcare-primary/30 transition-all">
                  <select className="w-full bg-transparent outline-none text-sm font-medium text-healthcare-dark appearance-none">
                    <option>{t('profile.male')}</option>
                    <option>{t('profile.female')}</option>
                    <option>{t('profile.other')}</option>
                  </select>
                </div>
              </div>
              <Input 
                label={t('profile.dob')}
                type="date"
                defaultValue="1995-05-15"
              />
            </div>
          </div>
        </Card>

        <button className="w-full py-4 bg-healthcare-primary text-white rounded-2xl font-bold shadow-lg shadow-healthcare-primary/30 active:scale-[0.98] transition-all">
          {t('profile.save_changes')}
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
