import React, { Component, Fragment} from 'react'
import NavMenuDesktop from '../Components/common/NavMenuDesktop'
import NavMenuMobile from '../Components/common/NavMenuMobile'
import Categories from '../Components/home/Categories'
import Collection from '../Components/home/Collection'
import FeaturedProduct from '../Components/home/FeaturedProduct'
import HomeTop from '../Components/home/HomeTop'
import HomeTopmobile from '../Components/home/HomeTopmobile'
import NewArrival from '../Components/home/NewArrival'
import "../Assets/css/responsive.css"
import FooterDesktop from '../Components/common/FooterDesktop'
import FooterMobile from '../Components/common/FooterMobile'


export default class Homepage extends Component {
  render() {
    return (
        
          <Fragment>

            <div className='Desktop'>
              <NavMenuDesktop></NavMenuDesktop>
              <HomeTop></HomeTop>
            </div>

            <div className='Mobile'>
              <NavMenuMobile></NavMenuMobile>
              <HomeTopmobile></HomeTopmobile>
            </div>
            
            <Collection></Collection>
            <NewArrival></NewArrival>
            <Categories></Categories>
            <FeaturedProduct></FeaturedProduct>
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
