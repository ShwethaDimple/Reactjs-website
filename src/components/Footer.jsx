import React from 'react'
import './Footer.css'
  
    export default function Footer() {
      return (
        <div>
          <div className="footer-box">
            <div className="footer-title">
              <div className="footer-heading">
                <h2>Subscribe to Mailing List</h2>
              </div>
              <div className="footer-input">
                <input type="text" />
              </div> 
              <button className="btn footer-btn">Submit</button>
            </div>
            <div className="container footer-contain">
              <div className="row">
                <div className="col-lg-3 col-md-1 col-sm-1 logo-col">
                  <img
                    src="./images/navbarlogo.webp"
                    alt=""
                    className="footer-logo"
                  />
                </div>
                 <div className="col-lg-3 col-md-1 col-sm-1 footer-content1">
                  <h4 className="footer-heading1">Get Started</h4>
                  <div className="footer-content-links1">
                    <ul>
                      <li>
                        <a href="https://thrivebizconsultant.com/">Home</a>
                      </li>
                       <li>
                        <a href="https://thrivebizconsultant.com/medical-billing/">
                          Services
                        </a>
                      </li> 
                      <li>
                        <a href="https://thrivebizconsultant.com/contact/">
                          Contact
                        </a>
                      </li>
                      <li>
                        <a href="https://thrivebizconsultant.com/blog/">Blog</a>
                      </li>
                      <li>
                        <a href="https://thrivebizconsultant.com/payment/">
                          Payment
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> 
                <div className="col-lg-3 col-md-1 col-sm-1 footer-content2">
                  <h4 className="footer-heading2">Blogpost</h4>
                  <div className="footer-content-links2">
                    <ul>
                      <li>
                        <a href="https://thrivebizconsultant.com/benefits-of-outsourcing-from-thrive-biz-consultant/">
                          Benefits Of Outsourcing from Thrive Biz Consultant
                        </a>
                      </li>
                      <li>
                        <a href="https://thrivebizconsultant.com/credential-validation-service/">
                          Credential Validation Service
                        </a>
                      </li>
                      <li>
                        <a href="https://thrivebizconsultant.com/fundamental-administrative-services/">
                          Fundamental Administrative Services
                        </a>
                      </li>
                      <li>
                        <a href="https://thrivebizconsultant.com/web-services-administrator/">
                          The demand of Web Services Administrator Increasing Day by
                          day
                        </a>
                      </li>
                      <li>
                        <a href="https://thrivebizconsultant.com/what-are-the-four-principles-of-accessible-customer-service/">
                          What are The Four Principles Of Accessible Customer
                          Service
                        </a>
                      </li>
                      <li>
                        <a href="https://thrivebizconsultant.com/what-happens-to-medical-bills-when-workers-comp-is-denied/">
                          What Happens To Medical Bills When Workers Comp Is Denied
                        </a>
                      </li>
                      <li>
                        <a href="https://thrivebizconsultant.com/blog/">
                          More Blogposts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-1 col-sm-1 footer-content-links3">
                    <ul>
                        <li>
                         <i class="fas fa-phone-alt"></i>
                         <a href="#">678.310.5934</a>
                        </li>
                        <li>
                          <i class="fas fa-envelope"></i>
                          <a href="#">info@thrivebiz.us</a>
                        </li>
                        <li>
                         <i class="fas fa-building"></i>
                         <a href="#">770.336.6410</a>
                        </li>
                        <li>
                           <i class="fas fa-clock"></i>
                            <a href="#">Monday to Friday-9:00 am to 5:00 pm</a>
                        </li>
                        <li>
                         <i class="fas fa-clock"></i>
                         <a href="#">Saturday & Sunday Closed</a>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="container-fluid footer-bar">
                <h6>Powered by & Copyright © 2022 THRIVE BIZ CONSULTANT – All Rights Reserved.</h6>
            </div>
          </div>
        </div>
      );
    }
    