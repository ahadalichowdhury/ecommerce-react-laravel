import React, { Component, Fragment } from 'react'
import ApiURL from '../Api/ApiURL'
import FooterDesktop from '../Components/common/FooterDesktop'
import FooterMobile from '../Components/common/FooterMobile'
import NavMenuDesktop from '../Components/common/NavMenuDesktop'
import NavMenuMobile from '../Components/common/NavMenuMobile'
import ListByCategory from "../Components/ProductDetails/ListByCategory"
import axios from "axios"



export default class ProductListByCategoryPage extends Component {


  constructor({match}) {
    super();
    this.state={
      Category:match.params.Category,
      ProductData:[]
    }
}

componentDidMount() {
  
    window.scroll(0,0)
    axios.get(ApiURL.ProductListByCategory(this.state.Category)).then(response=> {
      this.setState({ProductData:response.data})
  }).catch(error=> {

  });
   
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


      
     <ListByCategory Category={this.state.Category}  ProductData={this.state.ProductData}></ListByCategory>
   
     


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
