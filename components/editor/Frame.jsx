import { memo, useContext } from "react";
import { mapDataContext } from "../../hooks/useMapData";
import { Spacer, Text } from "@nextui-org/react";
const Frame = (props) => {
  const mapData = useContext(mapDataContext);

  return (
    <div className="">
      <div className='frame-container shadow-2xl' style={{ backgroundColor: "white", padding: "8px" }}>
        <div style={{ padding: "3px", backgroundColor: "white", border: "1px solid black" }}>
          <div id='frame' style={{ border: "2px solid black" }} className='relative border-2'>
            <div
              style={{
                backgroundImage: `linear-gradient(to top, white,80%, transparent)`,
              }}
              className='flex flex-col justify-end  text-center absolute z-[1000] inset-x-0 bottom-0 h-28 w-100'>
              <Text className='mt-5 city content-center text-[26px] font-montserrat font-medium  break-words leading-7'>{mapData.title} </Text>
              <Text className='country text-base tracking-widest font-montserrat font-medium '>
                <span className=''>{mapData.divider}</span>
              </Text>
              <Text className='subtitle text-xs font-light' style={{ color: "#949595" }}>
                {mapData.tagline}{" "}
              </Text>
              <Spacer/>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Frame);
