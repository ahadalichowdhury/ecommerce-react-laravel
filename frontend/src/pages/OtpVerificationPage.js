import React, { Component, Fragment } from 'react'
import FooterDesktop from '../Components/common/FooterDesktop'
import FooterMobile from '../Components/common/FooterMobile'
import NavMenuDesktop from '../Components/common/NavMenuDesktop'
import NavMenuMobile from '../Components/common/NavMenuMobile'
import OtpVerification from '../Components/common/OtpVerification'


export default class OtpVerificationPage extends Component {
    constructor({match}){
        super();
        this.state={
            mobileNo: match.params.mobileNo,

        }
    }
  render() {
    return (
        <Fragment>
        <div className='Desktop'>
         <NavMenuDesktop></NavMenuDesktop>
       </div>

       <div className='Mobile'>
         <NavMenuMobile></NavMenuMobile>
       </div>

       <OtpVerification mobileNo={this.state.mobileNo}></OtpVerification>


       <div className="Mobile">
         <FooterMobile></FooterMobile>
       </div>
       <div className="Desktop">
         <FooterDesktop></FooterDesktop>
       </div>
   </Fragment>
    )
  }
}
