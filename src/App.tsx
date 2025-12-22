import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import BottomNav from "./components/layout/BottomNav";
import Categories from "./components/healthcare/Categories";
import DoctorCard from "./components/healthcare/DoctorCard";
import Loading from "./components/ui/Loading";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load pages
const Events = lazy(() => import("./pages/Events"));
const Records = lazy(() => import("./pages/Records"));
const Profile = lazy(() => import("./pages/Profile"));
const PersonalInfoPage = lazy(() => import("./pages/profile/PersonalInfoPage"));
const NotificationsPage = lazy(
  () => import("./pages/profile/NotificationsPage")
);
const SecurityPage = lazy(() => import("./pages/profile/SecurityPage"));
const HelpSupportPage = lazy(() => import("./pages/profile/HelpSupportPage"));
const LicensePage = lazy(() => import("./pages/profile/LicensePage"));

const Home = () => {
  const { t } = useTranslation();

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      specialty: t("doctor.specialty_cardiologist"),
      rating: 4.8,
      reviews: 124,
      image: "",
    },
    {
      id: 2,
      name: "Dr. James Miller",
      specialty: t("doctor.specialty_dentist"),
      rating: 4.6,
      reviews: 89,
      image: "",
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      specialty: t("doctor.specialty_eye"),
      rating: 4.9,
      reviews: 156,
      image: "",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="px-6 mt-4">
        <div className="glass-floating p-6 rounded-3xl text-healthcare-dark dark:text-white/70 relative overflow-hidden">
          <div className="relative z-10 w-2/3">
            <h2 className="text-xl font-bold mb-2 leading-tight dark:text-white/70">
              {t("home.hero_title")}
            </h2>
            <p className="text-xs mb-4">{t("home.hero_description")}</p>
            <button className="bg-healthcare-primary dark:bg-healthcare-secondary/20 text-white dark:text-healthcare-secondary px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-transform shadow-premium">
              {t("common.book_now")}
            </button>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute bottom-[-10%] right-[-5%] w-30 h-30 bg-healthcare-secondary/20 dark:bg-healthcare-secondary/30 rounded-full"></div>
          <div className="absolute right-4 bottom-4 text-6xl opacity-20 dark:opacity-30">
            🏥
          </div>
        </div>
      </section>

      <Categories />

      {/* Doctors Section */}
      <section className="mt-8 px-6 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-healthcare-dark dark:text-white/70">
            {t("home.nearby_doctors")}
          </h2>
          <button className="text-healthcare-primary dark:text-white/70 text-xs font-bold uppercase tracking-wider">
            {t("common.see_all")}
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </section>
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const showHeader =
    !location.pathname.startsWith("/profile") &&
    !location.pathname.startsWith("/events") &&
    !location.pathname.startsWith("/records");

  return (
    <div className="min-h-screen bg-transparent pb-24 md:max-w-md md:mx-auto md:shadow-2xl md:relative md:overflow-hidden transition-all duration-300">
      {showHeader && <Header />}

      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/records" element={<Records />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/personal" element={<PersonalInfoPage />} />
            <Route
              path="/profile/notifications"
              element={<NotificationsPage />}
            />
            <Route path="/profile/security" element={<SecurityPage />} />
            <Route path="/profile/help" element={<HelpSupportPage />} />
            <Route path="/profile/license" element={<LicensePage />} />
          </Routes>
        </Suspense>
      </main>

      <BottomNav />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
