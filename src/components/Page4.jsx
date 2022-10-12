import React from 'react'
import './Page4.css'

export default function Page4() {
    return (
      <div>
        <div className="testi-box">
          <section className="testi-title">
            <div className="testi-heading">
              <h2>Testimonials</h2>
            </div>
            <div className="testi-text">
              <p>Check out what our client’s saying about us.</p>
            </div>
          </section>
          <div className="container clients">
            <div className="row">
              <div className="col-lg-6 col-md-1 col-sm-1 client1">
                <div className="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h6>
                  I used their service at the last moment when required. I really
                  found their service very professional, accurate information and
                  productive. Cheers to them.
                </h6>
                <div className="client-social1">
                  <img
                    src="./images/person1.png"
                    alt=""
                    className="client1-img"
                  />
                  <h6 className="client-name">Denise Gibson</h6>
                </div>
              </div>
            
              <div className="col-lg-6 col-md-1 col-sm-1 client2">
            
                <div className="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h6 className=' h6p'>
                  Splending service. I will definately recommend them with anyone
                  who requires administrative service. Thank you so much for your
                  kind help.
                </h6>
                <div className="client-social2">
                  <img
                    src="./images/person2.webp"
                    alt=""
                    className="client2-img"
                  />
                  <h6 className="client2-name">Lisa Kennedy</h6>
                </div>
              </div>
            </div>
          </div>


          
          <div className="container-fluid testi-images">
            <div className="row">
              <div className="col-lg-3 col-md-1 col-sm-1 first-img">
                <img
                  src="./images/logo-01-free-img.png.webp"
                  alt=""
                  className="testi-img1"
                />
              </div>
              <div className="col second-img">
                <img   
                  src="./images/logo-02-free-img.png.webp"
                  alt=""
                  className="testi-img2"
                />
              </div>
              <div className="col third-img">
                <img
                  src="./images/logo-03-free-img.png.webp"
                  alt=""
                  className="testi-img3"
                />
              </div>
              <div className="col fourth-img">
                <img
                  src="./images/logo-04-free-img.png.webp"
                  alt=""
                  className="testi-img4"
                />
              </div>
            </div>
          </div>
          <div className="container social-media">
            <div className="row">
              <div className="col social-media-text">
                <h6>Follow Us on Social Media</h6>
              </div>
              <div className="col social-media-icons">
                <div className="social-facebook">
                  <a href="https://thrivebizconsultant.com/#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </div>
              <div className=" social-twitter">
                <a href="https://thrivebizconsultant.com/#">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
              <div className=" social-youtube">
                  <a href="https://thrivebizconsultant.com/#">
                  <i class="fab fa-youtube"></i>
                  </a>
              </div>
              <div className=" social-linkdin">
                  <a href="https://thrivebizconsultant.com/#">
                  <i class="fab fa-linkedin"></i>
                  </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  