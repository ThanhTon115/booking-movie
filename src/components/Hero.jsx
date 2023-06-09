import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-[60vh] mx-auto gradient-backgorund`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto  flex flex-row items-start justify-end gap-5 px-[24px]`}
      >
        <div className="text-right">
          <h1 className={`${styles.heroHeadText} text-white`}>Nàng tiên cá</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            “Nàng Tiên Cá” là câu chuyện được yêu thích về Ariel - một nàng tiên
            cá trẻ xinh đẹp và mạnh mẽ với khát khao phiêu lưu. Ariel là con gái
            út của Vua Triton và cũng là người ngang ngạnh nhất, nàng khao khát
            khám phá về thế giới bên kia đại dương. Trong một lần ghé thăm đất
            liền, nàng đã phải lòng Hoàng tử Eric bảnh bao. Trong khi tiên cá bị
            cấm tiếp xúc với con người, Ariel đã làm theo trái tim mình. Nàng đã
            thỏa thuận với phù thủy biển Ursula hung ác để cơ hội sống cuộc sống
            trên đất liền. Nhưng cuối cùng việc này lại đe dọa tới mạng sống của
            Ariel và vương miện của cha nàng.
          </p>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-[100px] outline-none w-fit text-white font-bold shadow-md shadow-primary mt-8"
          >
            Đặt vé
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
