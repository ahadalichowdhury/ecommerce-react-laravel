import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import axios from 'axios';
import ApiURL from "../../Api/ApiURL";
import {toast, ToastContainer} from "react-toastify";

export default class FooterMobile extends Component {
  constructor() {
    super();
    this.state={
        footerData:"",
        facebookLink:"",
        twitterLink:"",
        instagramLink:"",
        address:"",
        aboutCompany:"",
        deliveryNotice:"",
        loaderDiv:"",
        mainDiv:"d-none",
    }
}

componentDidMount() {
  let SiteInfoFooter= sessionStorage.getItem("SiteInfoFooter");

    if(SiteInfoFooter==null){
        axios.get(ApiURL.sendSiteInfo).then(response=> {
            let  StatusCode =response.status;
            if(StatusCode==200){
                let  JSONData =(response.data)[0];
                this.setState({
                    facebookLink:JSONData['facebook_link'],
                    twitterLink:JSONData['twitter_link'],
                    instagramLink:JSONData['instagram_link'],
                    address:JSONData['address'],
                    aboutCompany:JSONData['about_company'],
                    deliveryNotice:JSONData['delivery_notice'],
                    loaderDiv:"d-none",
                    mainDiv:""
                })

                sessionStorage.setItem("SiteInfoFooter",JSON.stringify(JSONData))
            }
            else{
                toast.error("Something Went Wrong ! Try Again",{
                    position:"bottom-center"
                });
            }

        }).catch(error=> {
            toast.error("Something Went Wrong ! Try Again",{
                position:"bottom-center"
            });
        });
    }
    else{

        let FooterDataJSON=JSON.parse(SiteInfoFooter);

        this.setState({
            facebookLink:FooterDataJSON['facebook_link'],
            twitterLink:FooterDataJSON['twitter_link'],
            instagramLink:FooterDataJSON['instagram_link'],
            address:FooterDataJSON['address'],
            aboutCompany:FooterDataJSON['about_company'],
            deliveryNotice:FooterDataJSON['delivery_notice'],
            loaderDiv:"d-none",
            mainDiv:""
        })
    }
}

  render() {
    return (
      <Fragment>
         <div className="card">


         <div className={this.state.loaderDiv}>
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
        </div>
        <Container fluid={true} className={this.state.mainDiv}>
            <Row className="px-0 my-5">
                <Col sm={6} xs={6}>
                    <h5 className='footer-menu-title mt-3'>ADDRESS</h5>
                    <p>{ ReactHtmlParser(this.state.address) }</p>
                </Col>
                <Col sm={6} xs={6} className="p-3">
                    <h5 className='footer-menu-title'>Social Link</h5>
                   <div className="d-flex justify-content-space-between p-3">
                        <Link to={"/onboard"}  href={this.state.facebookLink}><i className='fab m1 h4 fa-facebook'></i></Link>
                        <Link to={"/onboard"}  href={this.state.instagramLink}><i className='fab m1 h4 fa-instagram'></i></Link>
                        <Link to={"/onboard"}  href={this.state.twitterLink}><i className='fab m1 h4 fa-twitter'></i></Link>
                   </div>
                </Col>
            </Row>
        </Container>
        <Container fluid={true} className="bg-dark">
            <Container>
                <Row className="px-0 text-center">
                    <h6 className="text-white">WE DELIVER IN</h6>
                    <p className="footer-text text-white">{ ReactHtmlParser(this.state.deliveryNotice) }</p>
                </Row>
            </Container>
        </Container>
        </div>
      </Fragment>
    )
  }
}
