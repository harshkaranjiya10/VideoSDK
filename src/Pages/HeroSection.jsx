import Heading from "../Components/Heading";
import Logos from "../Components/Logos";
import Enterprise from "../Components/Enterprise";
import Box from "../Components/Box";
import GameChanging from "../Components/GameChanging";
function HeroSection() {
  return (
    <div
      className="bg-[#161616] relative pt-[100px]"
      style={{
        backgroundImage: `
        radial-gradient(circle at 704.43px 504.59px, rgba(73, 59, 185, 0.6) 0%, transparent 249.55px),
      radial-gradient(circle at 854px 355.67px, rgba(203, 67, 113, 0.6) 0%, transparent 266.91px),
      radial-gradient(circle at 565.75px 325.85px, rgba(174, 73, 176, 0.6) 0%, transparent 243.94px)
    `,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Heading className="absolute" />
      <Logos />
      {/* <Enterprise /> */}
      <Box />
      <GameChanging />
    </div>
  );
}

export default HeroSection;
