import React from 'react'
import "../pages/Info.css"
import {Link} from "react-router-dom";
import BackgroundImage from  "../assets/info-hund.png"


function Info() {







  return (


    <div className="info" style={{backgroundImage: `url(${BackgroundImage})`}}>

    <div className="info-headertext">Vi är ett hunddagis i Stockholm
    
    
      <h2 className="info-small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec blandit purus, non congue quam. Nulla vel libero eget sapien auctor bibendum. Integer sollicitudin ipsum eget nisi semper imperdiet. Sed posuere nibh vitae commodo vestibulum. Nunc ultricies, erat vitae finibus interdum, turpis enim bibendum lectus, ut ullamcorper arcu felis quis arcu. Morbi maximus enim a felis fermentum ultricies. Vivamus in dictum nunc. Donec vel ultricies libero. Vestibulum sed molestie orci. Quisque ut justo eget metus dignissim laoreet id nec leo. Quisque maximus, nisl at dictum pretium, tortor lorem mollis augue, id consequat dui urna nec nibh. Mauris fringilla, massa sit amet aliquet pretium, lorem dui elementum neque, id porta tortor magna eu ex.


</h2>

    
    </div>
   </div>
  )
}

export default Info