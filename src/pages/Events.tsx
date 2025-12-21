import { useTranslation } from "react-i18next";
import { Calendar, MoreHorizontal, Clock } from "lucide-react";

const Events = () => {
  const { t } = useTranslation();

  const events = [
    {
      id: 1,
      doctor: "Dr. Sarah Wilson",
      specialty: t("doctor.specialty_cardiologist"),
      date: "Dec 24, 2025",
      time: "10:00 AM",
      status: t("events.status_upcoming"),
      color: "bg-blue-500",
    },
    {
      id: 2,
      doctor: "Dr. James Miller",
      specialty: t("doctor.specialty_dentist"),
      date: "Dec 20, 2025",
      time: "02:30 PM",
      status: t("events.status_upcoming"),
      color: "bg-green-500",
    },
    {
      id: 3,
      doctor: "Dr. Emily Chen",
      specialty: t("doctor.specialty_eye"),
      date: "Dec 15, 2025",
      time: "09:00 AM",
      status: t("events.status_completed"),
      color: "bg-gray-400",
    },
  ];

  return (
    <div className="px-6 py-4 animate-fade-in pb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-healthcare-dark dark:text-white">
          {t("events.title")}
        </h2>
        <div className="bg-healthcare-primary/10 dark:bg-healthcare-primary/20 p-2 rounded-full">
          <Calendar className="w-5 h-5 text-healthcare-primary" />
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-premium border border-gray-100 dark:border-slate-800 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${event.color}`}></div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    event.status === t("events.status_upcoming")
                      ? "text-healthcare-primary"
                      : "text-gray-400 dark:text-slate-500"
                  }`}
                >
                  {event.status}
                </span>
              </div>
              <button className="text-gray-400">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-base font-bold text-healthcare-dark dark:text-white mb-1">
              {event.doctor}
            </h3>
            <p className="text-xs text-healthcare-muted dark:text-slate-400 mb-4">
              {event.specialty}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-healthcare-primary/60 dark:text-healthcare-primary/40" />
                <span className="text-xs font-semibold text-healthcare-dark dark:text-slate-300">
                  {event.date}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-healthcare-primary/60 dark:text-healthcare-primary/40" />
                <span className="text-xs font-semibold text-healthcare-dark dark:text-slate-300">
                  {event.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-linear-to-r from-healthcare-primary to-healthcare-secondary text-white py-4 rounded-2xl font-bold shadow-healthcare active:scale-95 transition-all">
        {t("events.book_new")}
      </button>
    </div>
  );
};

export default Events;
