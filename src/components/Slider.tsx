import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const images = [
  "https://png.pngtree.com/thumb_back/fh260/background/20240204/pngtree-vegetable-samosa-served-with-sauces-ramadan-indian-food-pakistani-food-image_15586165.png",
  "https://img.goodfon.ru/wallpaper/big/0/76/somsa-samsa-samosa-somsa.webp",
  "https://st4.depositphotos.com/20376588/38787/i/450/depositphotos_387875716-stock-photo-puff-pastries-meat-samosa-samsa.jpg",
  "https://uzbloknot.com/wp-content/uploads/2020/09/img_20200919_135532_6236430340984439999247.jpg",
  "https://dostavo4ka.uz/upload-file/2021/07/18/6245/5b1cee63-83ed-4106-a0b1-3c9cf533bea4.jpg",
  "https://ru.ferganatourism.uz/d/assets_images_img_www_s-tandyromjpg6f3b57e0d6354787d4fd35133d419cd7.jpg",
];

export default function ImageSliderSection() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-16 bg-white/10 backdrop-blur ">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-10">
        {t("slider.title")}
      </h2>

      <div className="w-full max-w-4xl rounded-2xl mx-auto aspect-video relative">
       <AnimatePresence>
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slider ${current + 1}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover rounded-2xl absolute top-0 left-0"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
 