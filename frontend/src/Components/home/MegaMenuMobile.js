import React, { Component } from 'react'
import axios from "axios";
import ApiURL from "../../Api/ApiURL"
import {toast, ToastContainer} from "react-toastify";
import {Link} from "react-router-dom"

export default class MegaMenuMobile extends Component {
  constructor(){
    super();
    this.state={
      menuData:[]
    }
  }


componentDidMount(){
  axios.get(ApiURL.sendCategoryDetails).then((response)=>{
    this.setState({menuData:response.data})    
  }).catch((error)=>{
    toast.error("something is wrong");

  });

}


  

  menuItemClick=(event)=>{
    event.target.classList.toggle("activeMobile");
    let panel= event.target.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight= null;
    }else{
      panel.style.maxHeight=panel.scrollHeight+ "px";
    }


  }

  render() {

    let myList = this.state.menuData;
    let myView= myList.map((ParentList, i)=>{
      return <div key={i}>
          <button onClick={this.menuItemClick} className='accordion'> <img className='accordionMenuIcon' src={ParentList.parentCategoryImg} alt="" />  {ParentList.parentCategoryName}</button>
           <div className='panel'>
             <ul>
                  {
                    (ParentList.subCategory).map((childlist,i)=>{
                      return <div key={i}>
                         <li>
                          <Link to={"ProductListBySubCategory/"+ childlist.cat1_name + "/"+ childlist.cat2_name} className='accordionItem'>{childlist.cat2_name}</Link>
                          </li>
                      </div>

                    })
                  }               
            </ul>
          </div>
      </div>
    })

    return (
      <div className='accordionMenuDivMobile'>
        <div className='accordionMenuDivInsideMobile'>
          {myView}
          
        </div>
      </div>
    )
  }
}
