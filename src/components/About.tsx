import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <img
          width={300}
          src="https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-ti87-p-kartinki-samsa-na-prozrachnom-fone-3.png"
          alt="samsa"
          className="animate-spin"
          style={{ animationDuration: "6s" }}
        />

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t("description1")}
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            {t("description2")}
          </p>
        </div>
      </div>
    </div>
  );
}