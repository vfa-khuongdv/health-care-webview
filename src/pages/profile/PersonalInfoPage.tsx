import React from "react";
import { useTranslation } from "react-i18next";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";

const PersonalInfoPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-slide-up pb-10">
      <PageHeader title={t("profile.personal_info")} showBack={true} />

      <div className="px-6 mt-4 space-y-6">
        <Card padding={true}>
          <div className="space-y-4">
            <Input
              label={t("profile.full_name")}
              type="text"
              defaultValue="Johnathan Doe"
            />

            <Input
              label={t("profile.email_address")}
              type="email"
              defaultValue="johnathan.doe@example.com"
            />

            <Input
              label={t("profile.phone_number")}
              type="tel"
              defaultValue="+1 (555) 000-1234"
            />

            <div className="grid grid-cols-2 gap-4">
              <Select label={t("profile.gender")}>
                <option>{t("profile.male")}</option>
                <option>{t("profile.female")}</option>
                <option>{t("profile.other")}</option>
              </Select>
              <Input
                label={t("profile.dob")}
                type="date"
                defaultValue="1995-05-15"
              />
            </div>
          </div>
        </Card>

        <button className="w-full py-4 bg-healthcare-primary text-white dark:bg-healthcare-primary/5 dark:text-white/70 dark:shadow-none rounded-2xl font-bold shadow-lg shadow-healthcare-primary/30 active:scale-[0.98] transition-all">
          {t("profile.save_changes")}
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
