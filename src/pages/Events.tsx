import { useTranslation } from "react-i18next";
import { Calendar, MoreHorizontal, Clock, MapPin } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";

const Events = () => {
  const { t } = useTranslation();

  const events = [
    {
      id: 1,
      doctor: "Dr. Sarah Wilson",
      specialty: t("doctor.specialty_cardiologist"),
      date: "Dec 24, 2025",
      time: "10:00 AM",
      location: t("events.location_hospital"),
      status: t("events.status_upcoming"),
      color: "bg-blue-500",
    },
    {
      id: 2,
      doctor: "Dr. James Miller",
      specialty: t("doctor.specialty_dentist"),
      date: "Dec 20, 2025",
      time: "02:30 PM",
      location: t("events.location_clinic"),
      status: t("events.status_upcoming"),
      color: "bg-green-500",
    },
    {
      id: 3,
      doctor: "Dr. Emily Chen",
      specialty: t("doctor.specialty_eye"),
      date: "Dec 15, 2025",
      time: "09:00 AM",
      location: t("events.location_vision"),
      status: t("events.status_completed"),
      color: "bg-gray-400",
    },
  ];

  return (
    <div className="animate-fade-in pb-10">
      <PageHeader
        title={t("events.title")}
        icon={<Calendar className="w-6 h-6 text-healthcare-primary" />}
      />

      <div className="px-6 py-4 space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="group relative overflow-hidden bg-white dark:bg-slate-900/50 p-5 rounded-3xl shadow-premium border border-gray-100 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-healthcare-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${event.color} shadow-lg ring-4 ring-white dark:ring-slate-900`}
                  ></div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest ${
                      event.status === t("events.status_upcoming")
                        ? "text-healthcare-primary"
                        : "text-gray-400 dark:text-slate-500"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-healthcare-primary transition-colors p-1 rounded-lg hover:bg-healthcare-primary/10">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-healthcare-surface dark:bg-slate-800 flex items-center justify-center border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden">
                  <div className="w-full h-full bg-linear-to-br from-healthcare-primary/20 to-healthcare-secondary/20 flex items-center justify-center text-xl">
                    👨‍⚕️
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-healthcare-dark dark:text-white/70 mb-0.5 leading-none">
                    {event.doctor}
                  </h3>
                  <p className="text-xs font-medium text-healthcare-muted dark:text-slate-400">
                    {event.specialty}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-healthcare-muted dark:text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-slate-800/50 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-healthcare-primary/70" />
                  </div>
                  <span className="text-sm font-semibold text-healthcare-dark dark:text-slate-300">
                    {event.date}
                  </span>
                  <span className="mx-1 opacity-30">•</span>
                  <Clock className="w-4 h-4 text-healthcare-primary/70" />
                  <span className="text-sm font-semibold text-healthcare-dark dark:text-slate-300">
                    {event.time}
                  </span>
                </div>

                <div className="flex items-center space-x-3 text-healthcare-muted dark:text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-slate-800/50 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-healthcare-primary/70" />
                  </div>
                  <span className="text-sm font-medium">{event.location}</span>
                </div>
              </div>

              {event.status === t("events.status_upcoming") && (
                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-healthcare-primary dark:bg-healthcare-primary/5 text-white dark:text-white/70 shadow-premium active:scale-95 transition-all">
                    {t("common.reschedule")}
                  </button>
                  <button className="px-4 py-2.5 rounded-xl text-xs font-bold border border-gray-100 dark:border-slate-700 text-healthcare-muted dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all">
                    {t("common.cancel")}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        <button className="w-full mt-2 bg-linear-to-r from-healthcare-primary to-healthcare-secondary dark:from-healthcare-primary/5 dark:to-healthcare-secondary/5 text-white dark:text-white/70 py-4 rounded-3xl font-bold shadow-premium active:scale-95 transition-all hover:shadow-2xl">
          {t("events.book_new")}
        </button>
      </div>
    </div>
  );
};

export default Events;
