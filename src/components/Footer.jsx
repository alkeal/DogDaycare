import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"


function Footer() {
  return (
    <div className="footer">
        <div className="media"></div>
        <InstagramIcon/> <FacebookIcon/> <TwitterIcon/>
        <p>&copy; 2023 DogDayCareStockholm.se</p>
    </div>
  )
}

export default Footer