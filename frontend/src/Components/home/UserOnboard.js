import React, { Component, Fragment } from 'react';
import {Container,Row, Col, Button, Form} from "react-bootstrap"
import validation from '../../Validation/validation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiURL from '../../Api/ApiURL'
import {Redirect} from "react-router-dom"
import SessionHelper from '../../SessionHelper/SessionHelper';


export default class UserOnboard extends Component {
  constructor(){
    super();
    this.state={
      btn:"Next",
      mobileNo:"",
      userRedirect:false,
    }
    this.onChangeResult=this.onChangeResult.bind(this);
    this.onClickResult=this.onClickResult.bind(this);
    this.onUserRedirect=this.onUserRedirect.bind(this);
  }
  onChangeResult(event){
    let mobileNo=event.target.value;
    this.setState({mobileNo:mobileNo});
  }
  onUserRedirect(){
    if(this.state.userRedirect == true){
      return <Redirect to={"otpVeriication/"+this.state.mobileNo}></Redirect>
    }

  }


 onClickResult(){
  let mobile=this.state.mobileNo;
  if(mobile.length==0){
    toast.error("Mobile Number Required")
   }
  else if(!(validation.MobileRegx).test(mobile)){
    toast.error("Mumber Validation is not correct")
  }else{

    this.setState({btn:"Processing...."});
    axios.get(ApiURL.createOtp(mobile)).then((response)=>{
      this.setState({btn:"Next"});

      if(response.status == 200 && response.data=="1"){
        toast.success("Verification code has been send successfully");
        this.setState({userRedirect:true})

      }else{
        this.setState({btn:"Next"});
        toast.error("something is wrong");
      }


    }).catch((error)=>{
      toast.error(error)

    })

  }

 }
  render() {
    
    return (
      <Fragment>
        <Container>
            <Row className="d-flex justify-content-center p-2">
                <Col className="mt-4 card" lg={10} md={10} sm={12} xs={12}>
                  <Row >
                      <Col className="d-flex justify-content-center text-center" lg={6} md={6} sm={12} xs={12}>
                        <Form>
                          <h4 className='section-title'>USER CONTACT PAGE</h4>
                                <input onChange={this.onChangeResult} type="text" placeholder="Your Phone Number"/>
                                <button onClick={this.onClickResult} className="contact-btn">{this.state.btn}</button>
                        </Form> 
                      </Col>
                      <Col className="p-0 m-0 Desktop W-100" lg={6} md={6} sm={12} xs={12}>
                            <img className="contact-img" src="https://th.bing.com/th/id/R.0f8f96cd5a41d48ff45a75120dc9c610?rik=zh49jPCx5KaqyA&pid=ImgRaw&r=0" alt="" />
                        </Col>
                  </Row>
                </Col>
            </Row>
            <ToastContainer />
            {this.onUserRedirect()}
        </Container>
      </Fragment>
    )
  }
}
