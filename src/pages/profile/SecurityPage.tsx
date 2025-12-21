import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Key, Fingerprint, Smartphone, ExternalLink } from "lucide-react";
import PageHeader from "../../components/ui/PageHeader";
import SectionHeader from "../../components/ui/SectionHeader";
import OptionItem from "../../components/ui/OptionItem";
import Toggle from "../../components/ui/Toggle";

const SecurityPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [biometrics, setBiometrics] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="animate-slide-up">
      <PageHeader
        title={t("security.title")}
        onBack={() => navigate("/profile")}
      />

      <div className="px-6 mt-4 space-y-6 pb-20">
        {/* Password Section */}
        <div className="space-y-4">
          <SectionHeader>{t("security.login_settings")}</SectionHeader>
          <OptionItem
            label={t("security.change_password")}
            onClick={() => {}}
            icon={<Key className="w-5 h-5" />}
          />
        </div>

        {/* Advanced Security */}
        <div className="space-y-4">
          <SectionHeader>{t("security.advanced_security")}</SectionHeader>

          <OptionItem
            label={t("security.face_touch_id")}
            sublabel={t("security.face_touch_id_sub")}
            icon={<Fingerprint className="w-5 h-5" />}
            rightElement={
              <Toggle
                value={biometrics}
                onToggle={() => setBiometrics(!biometrics)}
              />
            }
          />

          <OptionItem
            label={t("security.two_factor")}
            sublabel={t("security.two_factor_sub")}
            icon={<Smartphone className="w-5 h-5" />}
            rightElement={
              <Toggle
                value={twoFactor}
                onToggle={() => setTwoFactor(!twoFactor)}
              />
            }
          />
        </div>

        {/* Data & Privacy */}
        <div className="space-y-4">
          <SectionHeader>{t("security.privacy")}</SectionHeader>
          <OptionItem
            label={t("security.privacy_policy")}
            onClick={() => {}}
            rightElement={
              <ExternalLink className="w-5 h-5 text-gray-300 dark:text-slate-700 group-hover:text-healthcare-primary transition-colors" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
