import React, { Component, Fragment } from 'react';
import {Container,Row, Col, Button, Form} from "react-bootstrap"
import ApiURL from '../../Api/ApiURL';
import validation from '../../Validation/validation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {

  constructor() {
    super();
    this.state={
        name:"",
        mobile:"",
        msg:""
    }
}

nameOnChange=(event)=>{
  let name=  event.target.value;
  this.setState({name:name})
}

mobileOnChange=(event)=>{
    let mobile=  event.target.value;
    this.setState({mobile:mobile})
}
msgOnChange=(event)=>{
    let msg=  event.target.value;
    this.setState({msg:msg})
}

onFormSubmit=(event)=>{

    let name=this.state.name;
    let mobile=this.state.mobile;
    let msg=this.state.msg;
    let sendBtn=document.getElementById("sendBtn");
    let contactForm= document.getElementById("contactForm");
   
    if(name.length==0){
      toast.error("Name Required")
    }
    else if(mobile.length==0){
      toast.error("Mobile Number Required")
    }

    else if(!(validation.NameRegx).test(name)){
      toast.error("Name Validation is not correct")
    }
    else if(!(validation.MobileRegx).test(mobile)){
      toast.error("Mumber Validation is not correct")
    }
    else if(msg.length==0){
      toast.error("Message Reqired")
    }
    else{
        sendBtn.innerHTML="Sending...."
        let MyFormData=new FormData();
        MyFormData.append("name",name)
        MyFormData.append("mobile",mobile)
        MyFormData.append("message",msg)

        axios.post(ApiURL.PostContactDetails,MyFormData).then(function (response) {
            if(response.status==200 && response.data==1){
                toast.success("Submit successfull");
                sendBtn.innerHTML="Send";
                contactForm.reset();
            }
            else{
              toast.error("submit unsuccessfull")
              sendBtn.innerHTML="Send";
            }
        }).catch(function (error) {
          toast.error("Something is wrong")
        })
    }


    event.preventDefault();
}

  render() {
    return (
      <Fragment>
        <Container>
            <Row className="d-flex justify-content-center p-2">
                <Col className="mt-4 card" lg={10} md={10} sm={12} xs={12}>
                  <Row >
                      <Col className="d-flex justify-content-center text-center" lg={6} md={6} sm={12} xs={12}>
                      <Form id="contactForm" onSubmit={this.onFormSubmit} className="onboardForm">
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.nameOnChange} className="form-control m-2" type="text" placeholder="Your Name"/>
                                        <input onChange={this.mobileOnChange} className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <input onChange={this.msgOnChange} className="form-control m-2" type="text" placeholder="Message"/>
                                        <button id="sendBtn" type="submit" className="">Send</button>
                                    </Form>
                      </Col>
                      <Col className="p-0 m-0 Desktop W-100" lg={6} md={6} sm={12} xs={12}>
                            <img className="contact-img" src="https://th.bing.com/th/id/R.0f8f96cd5a41d48ff45a75120dc9c610?rik=zh49jPCx5KaqyA&pid=ImgRaw&r=0" alt="" />
                        </Col>
                  </Row>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
      </Fragment>
    )
  }
}
export default Contact;