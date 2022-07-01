import React, { Component, Fragment } from 'react'
import FooterDesktop from '../Components/common/FooterDesktop'
import FooterMobile from '../Components/common/FooterMobile'
import NavMenuDesktop from '../Components/common/NavMenuDesktop'
import NavMenuMobile from '../Components/common/NavMenuMobile'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import SuggestedProduct from '../Components/ProductDetails/SuggestedProduct'
import ApiURL from '../Api/ApiURL'
import axios from "axios"
import ProductDetailsPlaceholder from '../Components/Placeholder/ProductDetailsPlaceholder'

export default class ProductDetailsPage extends Component {
  constructor({match}) {
    super();
    this.state={
        code:match.params.code,
        ProductData:[],
        isLoading:"",
        MainDiv:"d-none"
    }
}
  componentDidMount(){
  window.scroll(0,0);

  axios.get(ApiURL.ProductDetails(this.state.code)).then(response=> {
      this.setState({ProductData:response.data,isLoading:"d-none",MainDiv:" "})
  }).catch(error=> {
    alert(error)

  });
  }
  render() {

    if(this.state.MainDiv=="d-none"){

        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                </div>
                <div className="Mobile">
                    <NavMenuMobile/>
                </div>
            
                <ProductDetailsPlaceholder isLoading={this.state.isLoading}/>
                <div className="Desktop">
                    <FooterDesktop/>
                </div>
                <div className="Mobile">
                    <FooterMobile/>
                </div>

            </Fragment>

        );
    }
    
    else{
        
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                </div>
                <div className="Mobile">
                    <NavMenuMobile/>
                </div>

                <ProductDetails ProductData={this.state.ProductData}/>

                <div className="Desktop">
                    <FooterDesktop/>
                </div>
                <div className="Mobile">
                    <FooterMobile/>
                </div>

            </Fragment>

        );
    }


}
}
