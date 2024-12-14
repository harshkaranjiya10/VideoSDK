import Article from "./Article";

function Heading(props) {
  return (
    <div className="h-[708px] flex flex-col justify-center content-center ">
      <div className=" text-white text-center font-extrabold ">
        <div className="flex justify-center">
            <div className="flex justify-center items-center content-center text-lato text-[12px] mb-5 p-0.8 rounded-full bg-[#e6e6e66f] w-[178px]">
                <div className="m-1.5 font-lato text-center ">
                    SWITCH TO VIDEOSDK
                </div>
            </div>
        </div>

        <div className="text-[45px] font-lato align-text-bottom">
          Upgrade from{" "}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#D64E5F] to-[#5568FE] font-extrabold inline-block"          >
            Twilio to VideoSDK
          </span>
          <div >with Enterprise-grade Video Infrastructure</div>
        </div>
      </div>

      <div>
        <div className="text-[#A8A8A8] text-center text-[20px] font-lato drop-shadow">
          Built for scalability, security, and seamless integration,{" "}
          <div>VideoSDK is the perfect upgrade from Twilio.</div>
        </div>
      </div>

        <div className="flex align-middle justify-center content-center m-10">
            <button className="py-[14px] px-[20px] font-sans w-[260px] h-[50px] text-white bg-[#5568FE] rounded-[5px]">
                Talk to Our Migration Expert
            </button>
        </div>
            <div className="flex content-evenly justify-center mt-2">
                <Article label="Read Migration Guide" arrow="upRight"  />
                <Article label="VideoSDK vs Twilio" arrow="down" />
                <Article label="Why not Zoom" arrow="down" />
            </div>
    </div>
  );
}

export default Heading;
