import BoxItem from "./BoxItem";
import pie from "../assets/box/pie.png";
import globe1 from "../assets/box/globe1.png";
import rect from "../assets/box/rect.png";

function Card() {
  return (
    <div className="w-[auto] ml-40">
      <div className=" grid col-span-2 justify-end">
        <div className="flex justify-end">
          <div className="w-[317px] h m-10 mr-0">
            <BoxItem
              imgSrc={pie}
              title="<80ms Geo-latency"
              subtitle="Join from anywhere in the world, connect to your nearest data center"
              additional={() => {
                return (
                  <div className="flex">
                    <img src={globe1} alt="globe" />
                  </div>
                );
              }}
            />

            <BoxItem
              imgSrc={pie}
              title="<80ms Geo-latency"
              subtitle="Join from anywhere in the world, connect to your nearest data center. Join from anywhere in the world, connect to your nearest data center"
              additional={""}
            />
            <BoxItem
              imgSrc={pie}
              title="<80ms Geo-latency"
              subtitle="Join from anywhere in the world, connect to your nearest data center"
              additional={() => {
                return (
                  <div className="flex">
                    <img src={rect} alt="globe" />
                  </div>
                );
              }}
            />
          </div>
          <div className="w-[317px] h m-10">
            <BoxItem
              imgSrc={pie}
              title="<80ms Geo-latency"
              subtitle="Join from anywhere in the world, connect to your nearest data center. Join from anywhere in the world, connect to your nearest data center"
              additional={""}
            />
            <BoxItem
              imgSrc={pie}
              title="<80ms Geo-latency"
              subtitle="Join from anywhere in the world, connect to your nearest data center"
              additional={() => {
                return (
                  <div className="flex">
                    <img src={rect} alt="globe" />
                  </div>
                );
              }}
            />
            <BoxItem
              imgSrc={pie}
              title="<80ms Geo-latency"
              subtitle="Join from anywhere in the world, connect to your nearest data center"
              additional={() => {
                return (
                  <div className="flex">
                    <img src={globe1} alt="globe" />
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
