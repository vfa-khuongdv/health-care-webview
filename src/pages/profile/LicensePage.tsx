import PageHeader from "../../components/ui/PageHeader";
import { FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

interface License {
  name: string;
  version: string;
  license: string;
  url: string;
}

const licenses: License[] = [
  {
    name: "React",
    version: "^19.2.0",
    license: "MIT",
    url: "https://github.com/facebook/react",
  },
  {
    name: "React DOM",
    version: "^19.2.0",
    license: "MIT",
    url: "https://github.com/facebook/react",
  },
  {
    name: "React Router DOM",
    version: "^7.11.0",
    license: "MIT",
    url: "https://github.com/remix-run/react-router",
  },
  {
    name: "Vite",
    version: "^7.2.4",
    license: "MIT",
    url: "https://github.com/vitejs/vite",
  },
  {
    name: "Tailwind CSS",
    version: "^4.1.18",
    license: "MIT",
    url: "https://github.com/tailwindlabs/tailwindcss",
  },
  {
    name: "Lucide React",
    version: "^0.562.0",
    license: "ISC",
    url: "https://github.com/lucide-icons/lucide",
  },
  {
    name: "i18next",
    version: "^25.7.3",
    license: "MIT",
    url: "https://github.com/i18next/i18next",
  },
  {
    name: "react-i18next",
    version: "^16.5.0",
    license: "MIT",
    url: "https://github.com/i18next/react-i18next",
  },
  {
    name: "TypeScript",
    version: "~5.9.3",
    license: "Apache-2.0",
    url: "https://github.com/microsoft/TypeScript",
  },
];

const LicensePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-healthcare-surface dark:bg-healthcare-dark">
      <PageHeader title={t("license.title")} showBack={true} />

      <div className="px-4 py-3">
        <p className="text-xs text-healthcare-text-secondary dark:text-gray-400 mb-3">
          {t("license.description")}
        </p>

        <div className="space-y-2">
          {licenses.map((lib) => (
            <div
              key={lib.name}
              className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-slate-700"
            >
              <div className="flex items-start gap-2">
                <div className="text-healthcare-primary dark:text-healthcare-secondary shrink-0">
                  <FileText size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-healthcare-dark dark:text-white/70">
                    {lib.name}
                  </h3>
                  <div className="text-xs text-healthcare-text-secondary dark:text-gray-400 mt-0.5">
                    <span>{lib.version}</span>
                    <span className="mx-1.5">•</span>
                    <span>{lib.license}</span>
                  </div>
                  <a
                    href={lib.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-healthcare-primary dark:text-healthcare-secondary hover:underline inline-block mt-1"
                  >
                    {t("license.repository")} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-2 bg-healthcare-primary/5 dark:bg-healthcare-secondary/5 rounded-lg">
          <p className="text-xs text-healthcare-text-secondary dark:text-gray-400 text-center">
            {t("license.footer")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LicensePage;
