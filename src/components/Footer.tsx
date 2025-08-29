import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold uppercase text-red-500 mb-2">
            {t("footer.orderTitle")}
          </h2>
          <Link to={"/menu"}>
            <p className="text-lg font-semibold">📞 90 303 59 35</p>
          </Link>
        </div>
        <div className="mt-2 text-gray-300 text-center md:text-left">
          <p>{t("footer.hoursLabel")}</p>
          <p>🕘 09:30 - 23:00</p>
          <p>🕙 10:30 - 22:30</p>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-5xl font-bold mb-1">Asr-Somsa</h3>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Olot Somsa. {t("footer.rights")}
      </div>
    </footer>
  );
}
