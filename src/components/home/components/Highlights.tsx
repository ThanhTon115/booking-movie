import React from "react";
import { styles } from "../../../styles";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./styles.scss"

const Highlights = () => {
  return (
    <div className={`relative w-full h-[70vh] mx-auto gradient-backgorund`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto  flex flex-row items-start justify-end gap-5 px-[24px]`}
      >
        <div className="text-right">
          <h1 className={`${styles.heroHeadText} text-white`}>Nàng tiên cá</h1>
          <p></p>
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
          <div className="flex justify-end items-center mt-8  gap-5">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-[100px] outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              Đặt vé
            </button>
            <div className="flex justify-center items-center gap-2 trailer-btn cursor-pointer rounded-[100px]">
              <PlayCircleOutlined
                style={{ color: "white", fontSize: "24px" }}
                rev={undefined}
                className="text-white trailer-btn--icon"
              />
              <p className="text-white trailer-btn--text">Xem Trailer</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
      </div>
    </div>
  );
};
export default Highlights;
