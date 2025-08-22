import { useTranslation } from "react-i18next";

export default function AsosiyOyna() {
  const { t } = useTranslation();

  return (
    <div
      className="relative w-full h-screen bg-center bg-cover flex justify-center items-center text-black text-center px-4"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/indian-foods-isolated-black-background-hot-samosas-fly-smoke_783023-3051.jpg')",
      }}
    >
      <div className="absolute -top-70 bottom-0 left-10 w-1/6  z-10 flex justify-center items-center pointer-events-none">
        <img
          width={600}
          src="https://olotsomsa.com/image/olot.png"
          alt={t("main.leftImageAlt")}
          className=" animate-spin "
          style={{ animationDuration: "5s" }}
        />
      </div>

      <div className="absolute top-80 bottom-0 right-10 w-1/6 z-10 flex justify-center items-center pointer-events-none">
        <img
          width={600}
          src="https://olotsomsa.com/storage/images1/RCSbWuE40T4cM4wQ58xAHO6QhNRW3EkhuFIDOfbw.png"
          alt={t("main.rightImageAlt")}
          className=" animate-spin"
          style={{ animationDuration: "6s" }}
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto bg-white/10 rounded-2xl text-red-700  px-8 py-8 backdrop-blur ">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          {t("main.welcome")}
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto text-black font-sans">
          {t("main.description1")}
        </p>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-black font-sans">
          {t("main.description2")}
        </p>
      </div>
    </div>
  );
}