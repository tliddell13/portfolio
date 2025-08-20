import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig, socialprofiles } from "../../content_option";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import resume_pic from "../../images/CV_pic.png";
import resume from "../../components/Liddell_CV.pdf";
export const ContactUs = () => {

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.MAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("PHONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.PHONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <div className="social">
              <a href={socialprofiles.github} className="github social">
                <FaGithub size="2em" />
              </a>
              <a href={socialprofiles.linkedin} className="linkedin social">
                <FaLinkedin size="2em" />
              </a>
            </div>
          </Col>
          <Col lg="7">
            <div className="mb-5 po_items_ho">
              <div className="po_item"> 
                <img src={resume_pic} alt="" />
                <div className="content">
                  <a href={resume} target="_blank" rel="noopener noreferrer">Download CV</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
