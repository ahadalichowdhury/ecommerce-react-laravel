import React, { Component } from 'react'
import { Fragment } from 'react'
import {Container,Row, Col, Card} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../Api/ApiURL";
import ReactHtmlParser from 'react-html-parser';
import {toast, ToastContainer} from "react-toastify";
import SessionHelper from '../../SessionHelper/SessionHelper';

export default class Purchese extends Component {

  constructor(){
    super();
    this.state={
      purchese:"",
      loaderDiv:"",
      mainDiv:"d-none",
    }
  }


  componentDidMount(){
    window.scroll(0, 0);

    let siteInfo_purchase_guide=SessionHelper.getPurcheseSession();

    if(siteInfo_purchase_guide==null){
      axios.get(ApiURL.sendSiteInfo).then((response)=>{

        let statusCode = response.status;
        if(statusCode == 200){
          let JSONData = (response.data)[0]['purchase_guide'];
          this.setState({purchese: JSONData,loaderDiv:"d-none",mainDiv:""});
         SessionHelper.setPrivacySession(JSONData);
        }
  
  
  
      }).catch((error)=>{
        toast.error("something is wrong");
  
      });

    }
    else{
      this.setState({purchese:siteInfo_purchase_guide,loaderDiv:"d-none",mainDiv:""});

    }
   
  }


  render() {
    return (
      <Fragment>
      <Container>
          <Row className="d-flex justify-content-center p-2">
              <Col className="mt-4 card" lg={10} md={10} sm={12} xs={12}>

              <Card className={this.state.loaderDiv}>
                              <Card.Body>
                                  <div className="ph-item">
                                      <div className="ph-col-12">
                                          <div className="ph-row">
                                              <div className="ph-col-12"></div>
                                              <div className="ph-col-12"></div>
                                              <div className="ph-col-12"></div>
                                              <div className="ph-col-12"></div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="ph-item">
                                      <div className="ph-col-12">
                                          <div className="ph-row">
                                              <div className="ph-col-12"></div>
                                              <div className="ph-col-12"></div>
                                              <div className="ph-col-12"></div>
                                              <div className="ph-col-12"></div>
                                          </div>
                                      </div>
                                  </div>

                              </Card.Body>
                          </Card>
                <Card className={this.state.mainDiv}>

                  <Card.Body>

                  { ReactHtmlParser(this.state.purchese) }

                  </Card.Body>
                </Card>



              </Col>
          </Row>
      </Container>
    </Fragment>
    )
  }
}
