import alan from "../assets/alan.png"
import icici from "../assets/icici.png"
import examedi from "../assets/examedi.png"
import fynd from "../assets/fynd.png"
import judge from "../assets/judge.png"
import okadoc from "../assets/okadoc.png"
import radius from "../assets/radius.png"
import tyho from "../assets/tyho.png"

function Logos() {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center content-center">
        <div className="font-semibold mb-[40px] text-[#B2B2B2] tracking-[1.5px] text-[14px] font-lato">
            LOVED BY DEVELOPERS AT
        </div>
        <div className="flex justify-evenly h-[66px] w-full">
            <img src={tyho} width={"53px"}/>
            <img src={okadoc} width={"107px"} />
            <img src={alan} width={"107px"} />
            <img src={icici} width={"215px"} />
            <img src={examedi} width={"168px"} />
            <img src={fynd} width={"96px"} />
            <img src={judge} width={"81px"} />
            <img src={radius} width={"93px"} />
        </div>
      </div>
    </div>
  );
}

export default Logos;
