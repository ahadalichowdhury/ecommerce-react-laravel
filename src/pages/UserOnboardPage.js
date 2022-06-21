import React, { Component, Fragment } from 'react'
import FooterDesktop from '../Components/common/FooterDesktop'
import FooterMobile from '../Components/common/FooterMobile'
import NavMenuDesktop from '../Components/common/NavMenuDesktop'
import NavMenuMobile from '../Components/common/NavMenuMobile'
import UserOnboard from '../Components/home/UserOnboard'

export default class UserOnboardPage extends Component {
  render() {
    return (
        <Fragment>
             <div className='Desktop'>
              <NavMenuDesktop></NavMenuDesktop>
            </div>

            <div className='Mobile'>
              <NavMenuMobile></NavMenuMobile>
            </div>

            <UserOnboard></UserOnboard>


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
