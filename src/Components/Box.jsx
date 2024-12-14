import React from "react";
import BoxItem from "./BoxItem";
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

function Box() {
  return (

    <div className="h-[1246px]">
      
      {/* Enterprise */}
      <div
        className="pt-10 font-lato "
        style={{
          backgroundImage: `
            radial-gradient(circle at 794.43px 14.59px, rgba(73, 59, 185, 0.6) 0%, transparent 249.55px),
            radial-gradient(circle at 894px 15.67px, rgba(203, 67, 113, 0.6) 0%, transparent 266.91px),
            radial-gradient(circle at 595.75px 15.85px, rgba(174, 73, 176, 0.6) 0%, transparent 243.94px)
        `,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div className="py-10 text-[#D0D4DD] text-[16px] font-medium leading-[16px] tracking-[1.5px] h-[16px] flex justify-center content-center ">
            Enterprise Essentials
          </div>
          <div className="pb-5">
            <div className="text-[#FFFFFF] text-[45px] font-extrabold leading-[auto] h-[54px] flex justify-center content-center align-middle">
              Scalable and Privacy-first Infrastructure
            </div>
          </div>
          <div className="pb-10 flex text-center justify-center align-middle w-[700px] h-[60px] mx-auto my-auto">
            <div className="text-[#7D7D7D] font-semibold tracking-[1.5px]">
              VideoSDK seamlessly replaces Twilio, delivering an unparalleled
              video experience that auto scales with your needs.
            </div>
          </div>
        </div>
      </div>


      {/* Boxes  */}
      <div
        className="flex justify-center items-center p-10"
        style={{
          backgroundImage: `
          radial-gradient(circle at 995.75px 255.85px, rgba(203, 67, 113, 1) 0%, transparent 273.94px),
          radial-gradient(circle at 994px 725.67px, rgba(174, 73, 176, 1) 0%, transparent 276.91px),
          radial-gradient(circle at 994.43px 474.59px, rgba(73, 59, 185, 1) 0%, transparent 269.55px)
        `,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-3 gap-x-6 gap-y-6 max-w-screen-xl mx-auto ">
          <div className="row-span-2 flex flex-col justify-end rounded-[12px] bg-gradient-to-b from-[#536EFF] to-[#D2A8FF] p-4">
            <div className="flex flex-col items-center text-center">
              <div className="text-[#FFFFFF] font-lato font-bold text-lg">
                Global mesh network
              </div>
              <div className="text-[#D0D4DD] font-lato leading-[24px]">
                Handle massive concurrent meetings volumes extra content here
              </div>
            </div>
            <div className="mt-4">
              <img src={globe1} alt="Globe" />
            </div>
          </div>

          <BoxItem
            imgSrc={medal}
            title="99.99% Uptime"
            subtitle="Rock solid reliability"
          />

          <BoxItem
            imgSrc={media}
            title="Adaptive quality"
            subtitle="On demand superior quality"
          />

          <BoxItem
            imgSrc={call}
            title="99.98% Success"
            subtitle="Highest call success rate ever"
          />

          <BoxItem
            imgSrc={pie}
            title="Advanced analytics"
            subtitle="Bird-eye-view insights in hand"
          />

          <div className="col-span-2 rounded-[12px] border-solid border-[2px] border-[#ffffff70] flex flex-col items-center p-4 shadow-md h-auto">
            <img src={secure} alt="Secure" className="w-[50px] h-[50px] mb-2" />
            <div className="text-[#FFFFFF] font-lato font-bold text-lg">
              100% Secure with compliance
            </div>
            <div className="text-[#848484] font-lato text-sm mt-2">
              We take your privacy very seriously
            </div>
            <div className="flex justify-evenly items-center w-full mt-4">
              <img
                src={hippa}
                alt="Secure"
                className="w-[112.5px] h-[90px] mb-2"
              />
              <img
                src={soc2}
                alt="Secure"
                className="w-[96.43px] h-[90px] mb-2"
              />
              <img src={iso} alt="Secure" className="w-[90px] h-[90px] mb-2" />
              <img
                src={certin}
                alt="Secure"
                className="w-[192.86px] h-[90px] mb-2"
              />
              <img src={gdpr} alt="Secure" className="w-[90px] h-[90px] mb-2" />
            </div>
          </div>

          <div className="h-row-span-2 rounded-[12px] border-[#ffffff70] border-solid border-[2px] flex flex-col items-center p-4 shadow-md">
            <img src={help} alt="Help" className="w-[42px] h-[50px]" />
            <div className="text-[#FFFFFF] font-lato font-bold text-lg m-6">
              24x7 Handhold support
            </div>
            <div className="text-[#848484] font-lato text-sm ">
              Private channels
            </div>
            <div className="text-[#848484] font-lato text-sm ">
              Dedicated support team
            </div>
            <div className="text-[#848484] font-lato text-sm ">
              Guaranteed SLAs always within reach
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
