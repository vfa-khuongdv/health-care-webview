import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Camera, ChevronRight } from "lucide-react";

const Profile = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      id: "personal",
      icon: "👤",
      label: t("profile.personal_info"),
      sub: t("profile.personal_info_sub"),
      path: "/profile/personal",
    },
    {
      id: "notifications",
      icon: "🔔",
      label: t("profile.notifications"),
      sub: t("profile.notifications_sub"),
      path: "/profile/notifications",
    },
    {
      id: "security",
      icon: "🔒",
      label: t("profile.security"),
      sub: t("profile.security_sub"),
      path: "/profile/security",
    },
    {
      id: "help",
      icon: "❓",
      label: t("profile.help"),
      sub: t("profile.help_sub"),
      path: "/profile/help",
    },
    {
      id: "license",
      icon: "📜",
      label: t("profile.license"),
      sub: t("profile.license_sub"),
      path: "/profile/license",
    },
  ];

  return (
    <div className="pb-8">
      <div className="animate-fade-in">
        {/* Profile Header - More Compact */}
        <div className="bg-linear-to-b from-healthcare-primary/10 to-transparent dark:from-healthcare-primary/20 px-5 pt-6 pb-4 rounded-b-3xl">
          <div className="flex items-center space-x-4">
            {/* Profile Image - Smaller and Left-aligned */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 p-1 shadow-lg">
                <div className="w-full h-full rounded-xl bg-healthcare-primary/10 dark:bg-healthcare-primary/20 flex items-center justify-center text-3xl">
                  🧔🏻‍♂️
                </div>
              </div>
              <button className="absolute -bottom-1 -right-1 bg-healthcare-primary text-white p-1.5 rounded-lg shadow-lg border-2 border-white dark:border-slate-800">
                <Camera className="w-3 h-3" />
              </button>
            </div>

            {/* Profile Info - Side by side for compactness */}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-healthcare-dark dark:text-white/70 truncate">
                Johnathan Doe
              </h2>
              <p className="text-[11px] text-healthcare-muted dark:text-slate-400 mt-0.5">
                {t("profile.blood_type")}: O+ | {t("profile.age")}: 28
              </p>

              {/* Compact Stats - Horizontal */}
              <div className="flex space-x-4 mt-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-healthcare-primary font-bold text-sm">
                    178
                  </span>
                  <span className="text-[9px] text-healthcare-muted dark:text-slate-500 uppercase">
                    cm
                  </span>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-healthcare-primary font-bold text-sm">
                    72
                  </span>
                  <span className="text-[9px] text-healthcare-muted dark:text-slate-500 uppercase">
                    kg
                  </span>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-healthcare-primary font-bold text-sm">
                    110/80
                  </span>
                  <span className="text-[9px] text-healthcare-muted dark:text-slate-500 uppercase">
                    BP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Options - More Compact */}
        <div className="px-4 mt-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="w-full bg-white dark:bg-slate-900 p-3 rounded-xl flex items-center justify-between border border-gray-50 dark:border-slate-800 shadow-sm hover:border-healthcare-primary/20 transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-healthcare-surface dark:bg-slate-800 rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-healthcare-dark dark:text-white/70">
                    {item.label}
                  </h3>
                  <p className="text-[10px] text-healthcare-muted dark:text-slate-500 leading-tight">
                    {item.sub}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-healthcare-primary transition-colors" />
            </Link>
          ))}
        </div>

        {/* Logout Button - More Compact */}
        <div className="px-4 mt-5">
          <button className="w-full py-3 rounded-xl border-2 border-red-300 dark:border-red-900/20 text-red-500 dark:text-red-400 font-semibold text-sm hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors active:scale-[0.98]">
            {t("profile.logout")}
          </button>
        </div>

        {/* Version Display - More Compact */}
        <div className="px-4 mt-4 pb-2 text-center">
          <p className="text-[10px] text-healthcare-muted dark:text-slate-500">
            {t("profile.version")} {import.meta.env.VITE_APP_VERSION || "1.0.0"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
