import React, { Component, Fragment } from 'react';
import ContactPage from '../pages/ContactPage';
import Homepage from '../pages/Homepage'
import PrivacyPage from '../pages/PrivacyPage';
import PurchesePage from '../pages/PurchesePage';
import RefundPage from '../pages/RefundPage';
import UserOnboardPage from '../pages/UserOnboardPage';
import AboutUsPage from '../pages/AboutUsPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';




export default class ApiRoute extends Component {
  render() {
    return (
      <Fragment>
              <BrowserRouter>
            <Routes> 
                <Route exact path="/" element={<Homepage/> } /> 
                <Route exact path="onboard" element={<UserOnboardPage/>}/>         
                <Route exact path="contact" element={<ContactPage/>}/>
                <Route exact path="/refund" element={<RefundPage/>}/>
                <Route exact path="/privacy" element={<PrivacyPage/>}/>
                <Route exact path="/purchese" element={<PurchesePage/>}/>
                <Route exact path="/aboutus" element={<AboutUsPage/>}/>
                <Route exact path="/productdetails" element={<ProductDetailsPage/>}/>
                <Route exact path="/notification" element={<NotificationPage/>}/>
                <Route exact path="/favourite" element={<FavouritePage/>}/>
               
                
            </Routes>
            </BrowserRouter>
      </Fragment>
    )
  }
}
