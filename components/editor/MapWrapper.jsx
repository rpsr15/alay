
import MapProperties from "./MapProperties";
import Map from "./Map";
import Frame from "./Frame";
import { Button, Icon } from "semantic-ui-react";
const MapWrapper = (props) => {
  const cartTotal = 2000;
  return (
    <section>
      <div className='flex flex-col lg:flex-row bg-red'>
        <div
          id='frame-container'
          className='lg:w-7/12 py-14 flex items-center justify-center'
          style={{ backgroundColor: "#E5E5E5" }}>
          <Frame>
            <div style={{ zoom: 0.67, overflow: "hidden" }}>
              <Map />
            </div>
          </Frame>
        </div>
        <div className='w-full lg:w-5/12 shadow-mg'>
          <MapProperties />
        </div>
        <div id='pane-ref'></div>
      </div>
      <div style={{  }} className='w-full px-10 py-5'>
        <Button
        style={{ color: 'black',backgroundColor:"#F8AB8C"}}
          className='w-full'
          content={
            <div className='flex justify-between text-xl'>
              <div>
                <Icon name='cart' />
                
                <label>&nbsp;{"₹"+cartTotal}</label>
              </div>

              <div>
              <label>Add to cart &nbsp;</label>
              <Icon name="right arrow"/>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default MapWrapper;
