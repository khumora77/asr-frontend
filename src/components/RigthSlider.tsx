import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const images = [
  "https://png.pngtree.com/thumb_back/fh260/background/20231026/pngtree-delectable-homemade-fried-samosa-served-on-a-captivating-dark-textured-backdrop-image_13706546.png",
  "https://img.goodfon.ru/wallpaper/big/0/76/somsa-samsa-samosa-somsa.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorRKiPT5oqZzYZ_QZtZV_vmobKvcJKaRTRGyDE-F1E_zONpos6YZcsqkRHjU62e887IU&usqp=CAU",
  "https://dostavo4ka.uz/upload-file/2021/07/18/6245/5b1cee63-83ed-4106-a0b1-3c9cf533bea4.jpg",
  "https://img.goodfon.ru/original/1920x1280/9/fc/badfon-somsa-samsa-samosa-somsa-1314.jpg",
];

export default function ContactAvatarsSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full py-16 bg-gray-100 text-center px-4">
      <h2 className="text-3xl font-bold text-red-600 mb-10">{t("title")}</h2>

      <div className="flex justify-center items-center gap-6 flex-wrap">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 ${
              idx === 2 ? "border-red-500 scale-110 z-10" : "border-gray-300"
            } shadow-lg bg-white`}
          >
            <img
              src={src}
              alt={t("avatarAlt", { index: idx + 1 })}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-gray-600 max-w-xl mx-auto">{t("description")}</p>
    </div>
  );
}