import React, { Component, Fragment } from 'react';
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MegaMenuMobile from '../home/MegaMenuMobile';
import {Link, Redirect} from "react-router-dom"
import SessionHelper from '../../SessionHelper/SessionHelper';


export default class NavMenuMobile extends Component {
  constructor(){
    super();
    this.state={
        SideNavState: "sideNavClose",
        ContentOverState: "ContentOverlayClose",
        Searchkey:"",
        homeRedirect: false,
        SearchRedirectStatus: false,

    }
    this.SearchOnChange= this.SearchOnChange.bind(this);
    this.searchOnClick= this.searchOnClick.bind(this);
    this.searchRedirect= this.searchRedirect.bind(this);
    this.homeRedirect= this.homeRedirect.bind(this);
    this.onLogOut= this.onLogOut.bind(this);
}

    MenuBarClickHandler=()=>{
        this.sideNav();
        
    }
    ContentOverlayClickHandler=()=>{
        this.sideNav();

    }

    sideNav=()=>{
        let SideNavState= this.state.SideNavState;
        //let ContentOverState=this.state.ContentOverState;

        if(SideNavState === 'sideNavOpen'){
            this.setState({SideNavState: 'sideNavClose',ContentOverState:'ContentOverlayClose'});
        }else{
            this.setState({SideNavState: 'sideNavOpen',ContentOverState:'ContentOverlayOpen'});
        }
   
    }
    SearchOnChange(event){
        let Searchkey=event.target.value;
        this.setState({Searchkey:Searchkey})
      }
      searchOnClick(){
        let Searchkey=this.state.Searchkey;
        if(Searchkey.length>=2){
          this.setState({SearchRedirectStatus: true})
        }
      }

      searchRedirect(){
        if(this.state.SearchRedirectStatus === true){
          return <Redirect to={'/ProductListBySearch/'+this.state.Searchkey}></Redirect>
        }
      }
      onLogOut(){
        SessionHelper.removeUserMobile();
        this.setState({homeRedirect:true});
    
      }
      homeRedirect(){
        if(this.state.homeRedirect === true){
          return <Redirect to={'/'}></Redirect>
        }
      }
  
  
    render() {
        if(SessionHelper.getUserMobile()=== null){
            return (

                <Fragment>
                   <Navbar fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                       <a onClick={this.MenuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                       <Link to="/">
                             <img className='nav-img' src="https://th.bing.com/th/id/R.74aa68f1332364923fd25057a241544a?rik=mSiyiWX4tzrMAw&pid=ImgRaw&r=0" alt="" />
                       </Link>
                       <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i> </Link>
                       <Link to="/notification" className="btn bell"><i className="fa h4  fa-bell"></i></Link>
                       <input  onChange={this.SearchOnChange} type="text" className='search-text-field-mobile'/>
                       <button onClick={this.searchOnClick} type='button' className='site-btn '><i className='fa fa-search'></i></button>
                   </Navbar>
                       <div  className={this.state.SideNavState}>
                      
                     <div className="item-sign">
                     <div className="cart-btn-mobile">
                      <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Link>
                      </div>
                      <Link to="/onboard" className='signin mt-4'>SIGNIN</Link>
                     </div>
                     
                           <hr/>
                           <MegaMenuMobile></MegaMenuMobile>
                       </div>
       
                       <div onClick={this.ContentOverlayClickHandler}  className={this.state.ContentOverState}>
       
                       </div>
                       {this.searchRedirect()}
                       {this.homeRedirect()}
       
                   </Fragment>
       
           )
        }
        else{
             return (

                <Fragment>
                   <Navbar fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                       <a onClick={this.MenuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                       <Link to="/">
                             <img className='nav-img' src="https://th.bing.com/th/id/R.74aa68f1332364923fd25057a241544a?rik=mSiyiWX4tzrMAw&pid=ImgRaw&r=0" alt="" />
                       </Link>
                       <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i> </Link>
                       <Link to="/notification" className="btn bell"><i className="fa h4  fa-bell"></i></Link>
                       <input  onChange={this.SearchOnChange} type="text" className='search-text-field-mobile'/>
                       <button onClick={this.searchOnClick} type='button' className='site-btn '><i className='fa fa-search'></i></button>
                   </Navbar>
                       <div  className={this.state.SideNavState}>
                      
                     <div className="item-sign">
                     <div className="cart-btn-mobile">
                      <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Link>
                      </div>
                      <Link to="/onboard" onClick={this.onLogOut}>LOGOUT</Link>
                     </div>
                     
                           <hr/>
                           <MegaMenuMobile></MegaMenuMobile>
                       </div>
       
                       <div onClick={this.ContentOverlayClickHandler}  className={this.state.ContentOverState}>
       
                       </div>
                       {this.searchRedirect()}
                       {this.homeRedirect()}
       
                   </Fragment>
       
           )

        }
       
   
  }
}
