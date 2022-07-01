import React, { Component, Fragment } from 'react';
import {Container,Row, Col, Button, Form} from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import ApiURL from "../../Api/ApiURL"
import axios from "axios"
import { Redirect } from 'react-router-dom';
import SessionHelper from '../../SessionHelper/SessionHelper';


export default class OtpVerification extends Component {
    constructor(){
        super();
        this.state={
          btn:"Login",
          otpNo:"",
          userRedirect:false,
          mobileNo:"",
        }
        this.onChangeOtp=this.onChangeOtp.bind(this);
        this.onClickResult=this.onClickResult.bind(this);
        this.onUserRedirect=this.onUserRedirect.bind(this);
      }
      onUserRedirect(){
        if(this.state.userRedirect == true){
          return <Redirect to={"/"}></Redirect>
        }
    
      }
    
      onChangeOtp(event){
        let otp=event.target.value;
        this.setState({otpNo:otp});
      }

      onClickResult(){
        let URL=ApiURL.OtpVerification;
        let otp=this.state.otpNo;
        let mobileNo= this.state.mobileNo;

        if(otp.length==0 || otp.length>=6){
            toast.error("Your Verification is failed");
        }
        else{
            let myformData = new FormData();
            myformData.append("OTP",otp);
            myformData.append("mobileNo", mobileNo)

            axios.post(URL,myformData).then((response)=>{
                if(response.status ==200 && response.data== "1"){
                  SessionHelper.setUserMobile(mobileNo);
                    toast.success("Verification Success");
                    this.setState({userRedirect:true})

                }
                else if(response.status ==200 && response.data== "0"){
                    toast.error("Invalid otp");

                }
                else{
                    toast.error("Request fail, try again");

                }

            }).catch(()=>{

            })

        }
      }
      componentDidMount(){
        let mobileNo=this.props.mobileNo;
        this.setState({mobileNo: mobileNo})
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
                          <h4 className='section-title'>VERIFICATION CODE</h4>
                                <input onChange={this.onChangeOtp} type="text" placeholder="Please Enter Your 6 digit Verification Code" />
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
