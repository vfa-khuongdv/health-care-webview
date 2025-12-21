import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeader from '../../components/ui/SectionHeader';
import OptionItem from '../../components/ui/OptionItem';
import Toggle from '../../components/ui/Toggle';

const SecurityPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [biometrics, setBiometrics] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="animate-slide-up">
      <PageHeader title={t('security.title')} onBack={() => navigate('/profile')} />

      <div className="px-6 mt-4 space-y-6 pb-20">
        {/* Password Section */}
        <div className="space-y-4">
          <SectionHeader>{t('security.login_settings')}</SectionHeader>
          <OptionItem 
            label={t('security.change_password')}
            onClick={() => {}}
            icon={(
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            )}
          />
        </div>

        {/* Advanced Security */}
        <div className="space-y-4">
          <SectionHeader>{t('security.advanced_security')}</SectionHeader>
          
          <OptionItem 
            label={t('security.face_touch_id')}
            sublabel={t('security.face_touch_id_sub')}
            icon={(
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 20c4.083 0 7.774-2.147 9.412-5.945M12.057 6.098L12 6H5.19a2.988 2.988 0 00-2.455 1.158 4.1 4.1 0 00-.59 2.148c0 1.956.845 3.53 1.905 4.022M16.557 9.282A2.001 2.001 0 0015 8.192V8.19a1.993 1.993 0 00-1.007.29L12 9l-.493-.518a1.992 1.992 0 00-1.007-.29h-.001a1.992 1.992 0 00-1.557 1.091" />
              </svg>
            )}
            rightElement={<Toggle value={biometrics} onToggle={() => setBiometrics(!biometrics)} />}
          />

          <OptionItem 
            label={t('security.two_factor')}
            sublabel={t('security.two_factor_sub')}
            icon={(
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            )}
            rightElement={<Toggle value={twoFactor} onToggle={() => setTwoFactor(!twoFactor)} />}
          />
        </div>

        {/* Data & Privacy */}
        <div className="space-y-4">
          <SectionHeader>{t('security.privacy')}</SectionHeader>
          <OptionItem 
            label={t('security.privacy_policy')}
            onClick={() => {}}
            rightElement={(
              <svg className="w-5 h-5 text-gray-300 dark:text-slate-700 group-hover:text-healthcare-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
