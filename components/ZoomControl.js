import { Button, Icon } from "semantic-ui-react"

const ZoomControl = ({zoomIn, zoomOut}) => {
    const onZoomIn = () => { 
        zoomIn()
     }
     const onZoomOut = () => {
        zoomOut()
      }
  return (
    <div className="bg-white" style={{ position:'absolute', top: 5, left:5, zIndex:'2000'}}>
        <button className="block" onClick={onZoomIn}>
            <Icon name='plus' size="small" className="pl-1"/>
        </button>
        <button onClick={onZoomOut}>
            <Icon name='minus' size="small" className="pl-1"/>
        </button>

    </div>
  )
}

export default ZoomControl 