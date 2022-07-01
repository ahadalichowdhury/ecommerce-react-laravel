import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom"

export default class MegaMenu extends Component {

  constructor(props){
    super();
  }

  menuItemClick=(event)=>{
    event.target.classList.toggle("active");
    let panel= event.target.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight= null;
    }else{
      panel.style.maxHeight=panel.scrollHeight+ "px";
    }


  }

  render() {


    let myList = this.props.data;
    let myView= myList.map((ParentList, i)=>{
      return <div key={i}>
          <button onClick={this.menuItemClick} className='accordion'> <img className='accordionMenuIcon' src={ParentList.parentCategoryImg} alt="" />  {ParentList.parentCategoryName}</button>
           <div className='panel'>
             <ul>
                  {
                    (ParentList.subCategory).map((childlist,i)=>{
                      return <div key={i}>
                          <Link to={"ProductListBySubCategory/"+ childlist.cat1_name + "/"+ childlist.cat2_name} className='accordionItem'>{childlist.cat2_name}</Link>
                      </div>

                    })
                  }               
            </ul>
          </div>
      </div>
    })

    return (
      <div className='accordionMenuDiv'>
        <div className='accordionMenuDivInside'>
          {myView}
        </div>
      </div>
    )
  }
}
