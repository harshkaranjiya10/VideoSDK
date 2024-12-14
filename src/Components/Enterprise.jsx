function Enterprise() {
  return (
    <div
      className="py-10 font-lato "
      style={{
        backgroundImage: `
            radial-gradient(circle at 794.43px 204.59px, rgba(73, 59, 185, 0.6) 0%, transparent 249.55px),
            radial-gradient(circle at 894px 255.67px, rgba(203, 67, 113, 0.6) 0%, transparent 266.91px),
            radial-gradient(circle at 595.75px 225.85px, rgba(174, 73, 176, 0.6) 0%, transparent 243.94px)
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
        <div className="mb-10 flex text-center justify-center align-middle w-[700px] h-[60px] mx-auto my-auto">
          <div className="text-[#7D7D7D] font-semibold tracking-[1.5px]">
            VideoSDK seamlessly replaces Twilio, delivering an unparalleled
            video experience that auto scales with your needs.
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Enterprise;
