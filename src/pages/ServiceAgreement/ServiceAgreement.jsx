import React from 'react'
import './ServiceAgreement.css'
import { FaChevronRight } from 'react-icons/fa';
function ServiceAgreement() {
  return (
    <div className='service-container'>
         <div className="service-banner">
  <div className="quote-text">
    <h1>Service Agreement </h1><br />
    <div style={{display: 'flex', alignItems: 'center', marginLeft: '26%',color: '#CACACA'}}> Home {'>'} {' '}<span style={{color: '#F3BD1A'}}> Service Agreement</span></div>
  </div>
</div>

<img src="/service-agreement.png" alt="" srcset="" />
    </div>
  )
}

export default ServiceAgreement