import { useTranslation } from "react-i18next";

export default function StatsBanner() {
  const { t } = useTranslation();

  const stats = [
    {
      value: "95%",
      label: t("stats.recommendation"),
    },
    {
      value: "2 ta",
      label: t("stats.branches"),
    },
    {
      value: "200kg",
      label: t("stats.meat"),
    },
    {
      value: "100+",
      label: t("stats.samsas"),
    },
    {
      value: "95%",
      label: t("stats.delivery"),
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-10 my-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-4xl font-bold text-red-600">{stat.value}</p>
            <p className="mt-2 text-gray-700 text-sm font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}