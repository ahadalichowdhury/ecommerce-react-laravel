import React, { Component, Fragment } from 'react';
import ContactPage from '../pages/ContactPage';
import Homepage from '../pages/Homepage'
import PrivacyPage from '../pages/PrivacyPage';
import PurchesePage from '../pages/PurchesePage';
import RefundPage from '../pages/RefundPage';
import UserOnboardPage from '../pages/UserOnboardPage';
import AboutUsPage from '../pages/AboutUsPage';
import { Route, Switch, withRouter } from 'react-router-dom';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import ProductListByCategoryPage from '../pages/ProductListByCategoryPage';
import ProductListBySubCategory from '../pages/ProductListBySubCategory';
import SearchPage from '../pages/SearchPage';
import OtpVerificationPage from '../pages/OtpVerificationPage';




 class ApiRoute extends Component {
  render() {
    return (
      <Fragment>
            
            <Switch> 
            render={(props)=><pagename {...props} key={Date.now()}/>}
                <Route exact path="/" render={(props)=><Homepage {...props} key={Date.now()}/>} /> 
                <Route exact path="/onboard" render={(props)=><UserOnboardPage {...props} key={Date.now()}/>}/>         
                <Route exact path="/contact-us" render={(props)=><UserOnboardPage {...props} key={Date.now()}/>} />
                <Route exact path="/refund" render={(props)=><RefundPage {...props} key={Date.now()}/>}/>
                <Route exact path="/policy" render={(props)=><PrivacyPage {...props} key={Date.now()}/>} />
                <Route exact path="/purchase" render={(props)=><PurchesePage {...props} key={Date.now()}/>} />
                <Route exact path="/about" render={(props)=><PurchesePage {...props} key={Date.now()}/>}/>
                <Route exact path="/ProductDetails/:code" render={(props)=><ProductDetailsPage {...props} key={Date.now()}/>}/>
                <Route exact path="/notification" render={(props)=><NotificationPage {...props} key={Date.now()}/>}/>
                <Route exact path="/favourite" render={(props)=><FavouritePage {...props} key={Date.now()}/>}/>
                <Route exact path="/ProductListByCategory/:Category" render={(props)=><ProductListByCategoryPage {...props} key={Date.now()}/>}/>                
                <Route exact path="/ProductListBySubCategory/:Category/:SubCategory" render={(props)=><ProductListBySubCategory {...props} key={Date.now()}/>}/>                
                <Route exact path="/ProductListBySearch/:SearchKey" render={(props)=><SearchPage {...props} key={Date.now()}/>}/>                
                <Route exact path="/otpVeriication/:mobileNo" render={(props)=><OtpVerificationPage {...props} key={Date.now()}/>}/>                
               
            </Switch>
            
      </Fragment>
    )
  }
}


export default withRouter(ApiRoute);
