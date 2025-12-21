import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();

  const menuItems = [
    { id: 'personal', icon: '👤', label: t('profile.personal_info'), sub: t('profile.personal_info_sub'), path: '/profile/personal' },
    { id: 'notifications', icon: '🔔', label: t('profile.notifications'), sub: t('profile.notifications_sub'), path: '/profile/notifications' },
    { id: 'security', icon: '🔒', label: t('profile.security'), sub: t('profile.security_sub'), path: '/profile/security' },
    { id: 'payment', icon: '💳', label: t('profile.payment'), sub: t('profile.payment_sub'), path: '/profile/payment' },
    { id: 'help', icon: '❓', label: t('profile.help'), sub: t('profile.help_sub'), path: '/profile/help' },
  ];

  return (
    <div className="pb-10">
      <div className="animate-fade-in">
        {/* Profile Header */}
        <div className="bg-linear-to-b from-healthcare-primary/10 to-transparent px-6 pt-10 pb-6 rounded-b-[40px]">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-white p-1 shadow-premium">
                <div className="w-full h-full rounded-2xl bg-healthcare-primary/10 flex items-center justify-center text-4xl">
                  🧔🏻‍♂️
                </div>
              </div>
              <button className="absolute -bottom-2 -right-2 bg-healthcare-primary text-white p-2 rounded-xl shadow-lg border-2 border-white">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            <h2 className="mt-4 text-xl font-bold text-healthcare-dark">Johnathan Doe</h2>
            <p className="text-xs text-healthcare-muted">{t('profile.blood_type')}: O+ | {t('profile.age')}: 28</p>
            
            <div className="flex space-x-8 mt-6">
              <div className="text-center">
                <p className="text-healthcare-primary font-bold text-lg">178</p>
                <p className="text-[10px] text-healthcare-muted font-bold uppercase tracking-widest">{t('profile.height')}</p>
              </div>
              <div className="text-center">
                <p className="text-healthcare-primary font-bold text-lg">72kg</p>
                <p className="text-[10px] text-healthcare-muted font-bold uppercase tracking-widest">{t('profile.weight')}</p>
              </div>
              <div className="text-center">
                <p className="text-healthcare-primary font-bold text-lg">110/80</p>
                <p className="text-[10px] text-healthcare-muted font-bold uppercase tracking-widest">{t('profile.bp')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="px-6 mt-6 space-y-3">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path}
              className="w-full bg-white p-4 rounded-2xl flex items-center justify-between border border-gray-50 shadow-sm hover:border-healthcare-primary/20 transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-healthcare-surface rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold text-healthcare-dark">{item.label}</h3>
                  <p className="text-[10px] text-healthcare-muted">{item.sub}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-300 group-hover:text-healthcare-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="px-6 mt-8">
          <button className="w-full py-4 rounded-2xl border-2 border-red-50 text-red-500 font-bold text-sm hover:bg-red-50 transition-colors active:scale-[0.98]">
            {t('profile.logout')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
