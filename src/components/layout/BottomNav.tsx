import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BottomNav = () => {
  const { t } = useTranslation();

  const navItems = [
    { id: 'home', path: '/', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ), label: t('nav.home') },
    { id: 'events', path: '/events', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), label: t('nav.events') },
    { id: 'records', path: '/records', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ), label: t('nav.records') },
    { id: 'profile', path: '/profile', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ), label: t('nav.profile') }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-lg border-t border-gray-100 flex items-center justify-around px-4 pb-1 pt-1 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-20 md:max-w-md md:mx-auto md:rounded-t-3xl">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }: { isActive: boolean }) => `flex flex-col items-center space-y-1 transition-all duration-300 relative ${
            isActive ? 'text-healthcare-primary' : 'text-healthcare-muted hover:text-healthcare-primary/70'
          }`}
        >
          {({ isActive }: { isActive: boolean }) => (
            <>
              <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-healthcare-primary/10' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
              {isActive && (
                <div className="w-1 h-1 bg-healthcare-primary rounded-full absolute bottom-[-4px]"></div>
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
