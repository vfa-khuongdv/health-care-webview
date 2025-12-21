import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home, Calendar, FileText, User } from "lucide-react";

const BottomNav = () => {
  const { t } = useTranslation();

  const navItems = [
    { id: "home", path: "/", icon: Home, label: t("nav.home") },
    { id: "events", path: "/events", icon: Calendar, label: t("nav.events") },
    {
      id: "records",
      path: "/records",
      icon: FileText,
      label: t("nav.records"),
    },
    { id: "profile", path: "/profile", icon: User, label: t("nav.profile") },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 glass-effect border-t-0 flex items-center justify-around px-4 pb-1 pt-1 z-20 md:max-w-md md:mx-auto md:rounded-t-3xl transition-all duration-300">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }: { isActive: boolean }) =>
              `flex flex-col items-center space-y-1 transition-all duration-300 relative ${
                isActive
                  ? "text-healthcare-primary"
                  : "text-healthcare-muted hover:text-healthcare-primary/70"
              }`
            }
          >
            {({ isActive }: { isActive: boolean }) => (
              <>
                <div
                  className={`p-2 rounded-xl transition-colors ${
                    isActive ? "bg-healthcare-primary/10" : ""
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {item.label}
                </span>
                {isActive && (
                  <div className="w-1 h-1 bg-healthcare-primary rounded-full absolute bottom-[-4px]"></div>
                )}
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default BottomNav;
