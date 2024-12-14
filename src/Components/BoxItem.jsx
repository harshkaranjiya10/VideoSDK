// BoxItem.jsx
import React from "react";

import globe1 from "../assets/box/globe1.png";
import medal from "../assets/box/medal.png";
import media from "../assets/box/media.png";
import pie from "../assets/box/pie.png";
import call from "../assets/box/call.png";
import help from "../assets/box/help.png";
import secure from "../assets/box/secure.png";
import certin from "../assets/box/certin.png";
import gdpr from "../assets/box/gdpr.png";
import iso from "../assets/box/iso.png";
import soc2 from "../assets/box/soc2.png";
import hippa from "../assets/box/hippa.png";

function BoxItem({ imgSrc, title, subtitle, additional }) {
  return (
    <div
      className={
        "rounded-[12px] border-solid border-[2px] border-[#ffffff70] flex flex-col items-center mb-8 shadow-md"
      }
    >
      <img src={imgSrc} alt={title} className="w-[42px] h-[42px] m-3.5" />
      <div className="text-[#FFFFFF] font-lato font-bold text-lg m-[10px]">
        {title}
      </div>
      <div className="text-[#848484] font-lato text-sm mt-2 p-8">{subtitle}</div>
      <div>{typeof additional === "function" ? additional() : additional}</div>
    </div>
  );
}

export default BoxItem;
