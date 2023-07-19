
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import './footer.css'

const footerQuickLinks = [
    {
      display: "Loans",
      url: "#",
    },
    {
      display: "Cards",
      url: "#",
    },
  
    {
      display: "Investment",
      url: "#",
    },
  
    {
      display: "Apply",
      url: "#",
    },
  ];
  
  const footerInfoLinks = [
    {
      display: "Calculator",
      url: "#",
    },
    {
      display: "Credit Score",
      url: "#",
    },
  
    {
      display: "Financial Literacy",
      url: "#",
    },
  
    {
      display: "Credit Management",
      url: "#",
    },
  ];

  const footerInfotLinks = [
    {
      display: "Patner",
      url: "#",
    },
    {
      display: "Become a Partner",
      url: "#",
    },
  
    {
      display: "About Us",
      url: "#",
    },
  
    {
      display: "Contact Us",
      url: "#",
    },
  ];

const Footer = () => {
    return (
      <footer className="footer">
        <Container>
            <Row>
                <Col className="footer1">
                {/* <span className="logo">
                    <img src={finurl}  alt=""  style={{ width: "10%", height: "10%", }}/>
                   </p> */}

                   <div className="follows" >
                   {/* <span>
                        {" "}
                        <a href="#">
                            <a href="" className="logo "><img src={finurl}  alt=""  style={{ width: "10%", height: "10%", }}/> </a>
                        </a></span> */}
                    <p className="mb-0 footer-follow">Follow Us</p>
                     <br />
                     <span>
                        {" "}
                        <a href="#">
                            <i className="ri-facebook-line"></i>
                        </a>
                     </span>
                     <span>
                        {" "}
                        <a href="https://instagram.com/finurl.in?igshid=MzRlODBiNWFlZA==">
                            <i className="ri-instagram-line"></i>
                        </a>
                     </span>
                     <span>
                        {" "}
                        <a href="https://www.linkedin.com/company/finurl/">
                            <i className="ri-linkedin-line"></i>
                        </a>
                     </span>
                     <span>
                        {" "}
                        <a href="#">
                            <i className="ri-twitter-line"></i>
                        </a>
                     </span>
                   </div>
                </Col>
                <Col className="footer1">
                    <h6 className="footer-title">Products</h6>
                    {/* <br /> */}
                    <ListGroup className='link-list'>
                      {footerQuickLinks.map((item, index) => (
                        <ListGroupItem key={index} className=' link-item'>
                            {" "}
                            <a href={item.url}>{item.display}</a>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                </Col>

                <Col className="footer1">
                   <h6 className="footer-title">
                    Resourses
                   </h6>
                   <ListGroup className='link-list'>
                      {footerInfoLinks.map((item, index) => (
                        <ListGroupItem key={index} className='link-item'>
                            {" "}
                            <a href={item.url}>{item.display}</a>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                </Col>
                <Col className="footer1">
                   <h6 className="footer-title">
                    Services
                   </h6>
                   <ListGroup className='link-list'>
                      {footerInfotLinks.map((item, index) => (
                        <ListGroupItem key={index} className='link-item'>
                            {" "}
                            <a href={item.url}>{item.display}</a>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                </Col>


                {/* <Col className="footer1">
                 
                    <h6 className="footer-title1">Get In Touch</h6>
                      <div className="add">
                    <p className="address">55 Main Street, 2nd Block, New York</p>
                    <p className="address">support@gmail.com</p></div>
                </Col> */}
            </Row>
        </Container>
      </footer>
    )
}

export default Footer;