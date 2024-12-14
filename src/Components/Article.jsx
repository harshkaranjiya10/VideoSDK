import down from "../assets/down.png";
import upRight from "../assets/upRight.png";
function Article(props) {
  return (
    <div className="flex text-[#5568FE] mx-10 my-8 content-evenly text-center text-[20px] font-lato blur-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        <img src={props.arrow === "down" ? down : upRight} width={"30px"} className="mx-[14px]"/>
        <button onClick={()=>{}} className="underline">
        {props.label}
        </button>
    </div>
  );
}

export default Article;
