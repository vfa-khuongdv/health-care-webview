import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeader from '../../components/ui/SectionHeader';
import OptionItem from '../../components/ui/OptionItem';
import Toggle from '../../components/ui/Toggle';

const NotificationsPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [settings, setSettings] = useState({
    appointments: true,
    records: true,
    news: false,
    offers: true,
    email: true,
    sms: false
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="animate-slide-up">
      <PageHeader title={t('notifications.title')} onBack={() => navigate('/profile')} />

      <div className="px-6 mt-4 space-y-6 pb-20">
        <div className="space-y-4">
          <SectionHeader>{t('notifications.app_notifications')}</SectionHeader>
          <OptionItem 
            label={t('notifications.appointments_label')} 
            sublabel={t('notifications.appointments_sub')} 
            rightElement={<Toggle value={settings.appointments} onToggle={() => toggle('appointments')} />}
          />
          <OptionItem 
            label={t('notifications.medical_records_label')} 
            sublabel={t('notifications.medical_records_sub')} 
            rightElement={<Toggle value={settings.records} onToggle={() => toggle('records')} />}
          />
          <OptionItem 
            label={t('notifications.health_news_label')} 
            sublabel={t('notifications.health_news_sub')} 
            rightElement={<Toggle value={settings.news} onToggle={() => toggle('news')} />}
          />
          <OptionItem 
            label={t('notifications.special_offers_label')} 
            sublabel={t('notifications.special_offers_sub')} 
            rightElement={<Toggle value={settings.offers} onToggle={() => toggle('offers')} />}
          />
        </div>

        <div className="space-y-4 pt-2">
          <SectionHeader>{t('notifications.other_channels')}</SectionHeader>
          <OptionItem 
            label={t('notifications.email_notifications')} 
            sublabel={t('notifications.email_notifications_sub')} 
            rightElement={<Toggle value={settings.email} onToggle={() => toggle('email')} />}
          />
          <OptionItem 
            label={t('notifications.sms_notifications')} 
            sublabel={t('notifications.sms_notifications_sub')} 
            rightElement={<Toggle value={settings.sms} onToggle={() => toggle('sms')} />}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
