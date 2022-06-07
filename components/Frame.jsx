import { useEffect } from "react";
const Frame = (props) => {
  return (
    <div className=' shadow-2xl' style={{ backgroundColor: "white", padding: "8px" }}>
      <div style={{ padding: "3px", backgroundColor: "white", border: "1px solid black" }}>
        <div id='frame' style={{ border: "2px solid black" }} className='relative border-2'>
          <div
            style={{
              backgroundImage: `linear-gradient(to top, white,80%, transparent)`,
            }}
            className='content-center text-center absolute z-[1000] inset-x-0 bottom-0 h-28 w-100'>
            <div className='mt-5 city content-center text-3xl font-montserrat font-medium '>{props.title} </div>
            <div className='country text-base tracking-widest font-montserrat font-medium '>
              <span className=''>{props.divider}</span>
            </div>
            <div className='subtitle text-xs font-light' style={{ color: "#949595" }}>
              {props.tagline}{" "}
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Frame;
