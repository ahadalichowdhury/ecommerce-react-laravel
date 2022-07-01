import React, { Component, Fragment } from 'react'
import FooterDesktop from '../Components/common/FooterDesktop'
import FooterMobile from '../Components/common/FooterMobile'
import NavMenuDesktop from '../Components/common/NavMenuDesktop'
import NavMenuMobile from '../Components/common/NavMenuMobile'
import ListBySubCategory from '../Components/ProductDetails/ListBySubCategory'
import axios from "axios"
import ApiURL from '../Api/ApiURL'


export default class ProductListBySubCategory extends Component {
  
  constructor({match}) {
    super();
    this.state={
      Category:match.params.Category,
      SubCategory:match.params.SubCategory,
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

     <ListBySubCategory SubCategory={this.state.SubCategory}  ProductData={this.state.ProductData}></ListBySubCategory>


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
