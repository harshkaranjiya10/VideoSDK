import Card from "./Card";
function GameChanging() {
  return (
    <div
      style={{
        backgroundImage: `
          radial-gradient(circle at 4px 355.67px, rgba(203, 67, 113, 0.6) 0%, transparent 266.91px),
          radial-gradient(circle at 5px 325.85px, rgba(174, 73, 176, 0.6) 0%, transparent 243.94px),
          
          /* effect-2 */
          radial-gradient(circle at 1494.43px 704.59px, rgba(73, 59, 185, 0.6) 0%, transparent 249.55px),
          radial-gradient(circle at 1495.75px 425.85px, rgba(174, 73, 176, 0.6) 0%, transparent 243.94px), 
          radial-gradient(circle at 1494px 755.67px, rgba(203, 67, 113, 0.6) 0%, transparent 266.91px),
          
          /* Effect-3 */
          radial-gradient(circle at 704.43px 1200.59px, rgba(73, 59, 185, 0.6) 0%, transparent 249.55px),
          radial-gradient(circle at 854px 1200.67px, rgba(203, 67, 113, 0.6) 0%, transparent 266.91px),
          radial-gradient(circle at 565.75px 1200.85px, rgba(174, 73, 176, 0.6) 0%, transparent 243.94px)
          `,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-auto m-auto flex justify-end">
        <div className="flex relative -start-[25%]">
          <Circle wh="560px" />
          {/* <Circle wh="360px" /> */}
          <div className="absolute w-[432px] h-[192px] start-[71%] mt-40">
            <Head />
          </div>
        </div>
        <div className="">
          <Card />
        </div>
      </div>
    </div>
  );
}

function Circle({ wh }) {
  return (
    <div className={`w-[${wh}] h-[${wh}] relative`}>
      <div
        className={`w-[${wh}] h-[${wh}] bg-transparent rounded-full border-[1.5px] border-[rgba(79, 79, 79, 0.5)]`}
      ></div>
    </div>
  );
}

function Head() {
  return (
    <>
      <div className="relative">
        <div className="text-white text-[45px] font-extrabold font-lato  leading-[auto]">
          Game changing features
        </div>
        <div className="h-[72px] text-[20px] text-white opacity-[56%] font-lato  leading-[auto]">
          Lorem ipsum dolor sit amet consectetur. Nullam rhoncus malesuada in
          facilisis nunc nec. Turpis turpis massa id donec posuere tortor nisi.
        </div>
      </div>
    </>
  );
}

export default GameChanging;
