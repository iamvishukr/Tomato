import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownoload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download  <br />Tamato App </p>

<div className="app-download-platforms">
<img src={assets.play_store} alt="" />
<img src={assets.app_store} alt="" />

</div>

    </div>
  )
}

export default AppDownoload
