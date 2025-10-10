class header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="masthead" class="site-header header-primary">
        <!-- header html start -->
        <div class="container-fluid top-header top-header-travel">
          <div class="row">
            <div class="col-lg-6">
              <div class="left-container">
                <a href="tel:+91 7821021521"> <i class="fa fa-phone"></i> +91 7821021521</a>
                <a href=""> <i class="fa fa-map-o"></i> Pune,India</a>
              </div>
            </div>
            <div class="col-lg-6 text-left">
              <div class="right-container">
                <div class="social-media">
                  <a class="header-social-media" href="mailto:connect@travolex.com">
                    <i class="fa fa-envelope"></i> connect@travolex.com
                  </a>
                  <span title="Facebook"><a class="header-social-media" href="https://www.facebook.com/TravelWithTravolex?mibextid=LQQJ4d"><i class="fa fa-facebook"></i></a></span>
                  <span title="Instagram"><a class="header-social-media" href="https://www.instagram.com/travelwith_travolex?igsh=MzRlODBiNWFlZA=="><i class="fa fa-instagram"></i></a></span>
                  <span title="Linked In"><a class="header-social-media" href="https://www.linkedin.com/company/travelwithtravolex"><i class="fa fa-linkedin"></i></a></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom-header">
          <div class="container d-flex justify-content-between align-items-center pt pbb">
            <div class="site-identity">
              <h1 class="site-title">
                <a href="https://www.travolex.com">
                  <img class="white-logo" src="assets/images/travollex.png" alt="logo">
                  <img class="black-logo" src="assets/images/travollex.png" alt="logo">
                </a>
              </h1>
            </div>

            <div class="main-navigation d-none d-lg-block">
              <nav id="navigation" class="navigation">
                <ul>
                  <li><a href="https://www.travolex.com">Home</a></li>

                  <li class="menu-item-has-children">
                    <a href="services">Services</a>
                    <ul>
                      <li><a href="top-visa-consultancy-services-in-pune-india">Visa Assistance</a></li>
                      <li><a href="best-international-and-domestic-holiday-packages-in-pune-india">Holiday Packages</a></li>
                      <li><a href="best-travel-insurance-agency-in-pune-india">Travel Insurance</a></li>
                      <li><a href="best-flight-booking-agency-in-pune-india">Air Ticketing</a></li>
                      <li><a href="customized-mice-services">MICE</a></li>
                      <li><a href="best-forex-exchange-services-in-pune-india">Forex</a></li>
                      <li><a href="top-hotel-booking-agency-in-pune-india">Hotel Booking</a></li>
                      <li><a href="best-train-ticket-booking-agency-pune-india">Train Booking</a></li>
                    </ul>
                  </li>

                  <li><a href="about">About Us</a></li>

                  <li class="menu-item-has-children">
                    <a href="tour-packages">Tour Packages</a>
                    <ul>
                      <li><a href="international-tour-packages">International Packages</a></li>
                      <li><a href="domestic-tour-packages">Domestic Packages</a></li>
                      <li><a href="corporate-travel-management-agency">Corporate Travel</a></li>
                    </ul>
                  </li>

                  <!-- Blogs with dropdown -->
                  <li class="menu-item-has-children">
                    <a href="blog">Blogs</a>
                    <ul>
  <li><a href="blog.html?category=domestic">Domestic Travel</a></li>
  <li><a href="blog.html?category=corporate">Corporate Travel</a></li>
  <li><a href="blog.html?category=international">International Travel</a></li>
  <li><a href="blog.html?category=budget">Budget Travel</a></li>
  <li><a href="blog.html?category=adventure">Adventure Travel</a></li>
    <li><a href="blog.html?category=honeymoon">Honeymoon Packages</a></li>
</ul>

                  </li>

                  <li><a class="contact-btn" href="contact">Get In Touch</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div class="mobile-menu-container"></div>
      </header>
    `;
  }
}

class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 

            <footer id="colophon" class="site-footer footer-primary foot-bg">
            <div class="top-footer">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <aside class="widget widget_text">
                      <div class="textwidget widget-text">
                        <div class="footer-logo">
                          <a href="https://www.travolex.com">
                            <img src="assets/images/travollex1.png" class="" alt="">
                          </a>
                        </div>
                        <p>
                          Our primary focus is on providing end-to-end Travel Assistance to all our
                          clients with their regular travel requirements, including Flight and Rail
                          Ticketing, Holiday Packages, and Organizing MICE Events.
                        </p>
                    </aside>
                  </div>
                  <div class="col-lg-2 col-md-6">
                    <aside class="widget widget_recent_post">
                      <h3 class="widget-title">Services</h3>
                      <ul>
                        <li>
                          <a href="top-visa-consultancy-services-in-pune-india"> Visa Assistance</a>
                        </li>
                        <li>
                        <a href="top-hotel-booking-agency-in-pune-india"> Hotel Booking</a>
                      </li>
                       
                        <li>
                          <a href="best-train-ticket-booking-agency-pune-india"> Train Ticketing</a>
                        </li>
                        <li>
                        <a href="best-forex-exchange-services-in-pune-india">Forex exchange </a>
                      </li>
                      <li>
                      <a href="best-international-and-domestic-holiday-packages-in-pune-india"> Holiday Packages </a>
                    </li>
                    <li>
                      <a href="best-travel-insurance-agency-in-pune-india"> Travel Insurance </a>
                    </li>
                    <li>
                      <a href="best-flight-booking-agency-in-pune-india"> Air Ticketing </a>
                    </li>
                    <li>
                      <a href="customized-mice-services"> MICE </a>
                    </li>
                   
                      </ul>
                    </aside>
                  </div>
                  <div class="col-lg-2 col-md-6">
                    <aside class="widget widget_recent_post">
                      <h3 class="widget-title">Links</h3>
                      <ul>
                        <li>
                          <a href="https://www.travolex.com"> Home</a>
                        </li>
                        <li>
                          <a href="about"> About Us </a>
                        </li>
                        <li>
                        <a href="services"> Services </a>
                      </li>
                        <li>
                          <a href="tour-packages"> Tour Packages</a>
                        </li>
                        <li>
                          <a href="contact"> Contact</a>
                        </li>
                        <li>
                        <a href="https://www.travolex.com/sitemap"> Sitemap</a>
                      </li>
                      </ul>
                    </aside>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <aside class="widget widget_text">
                      <h3 class="widget-title">Contact Us</h3>
                      <div class="textwidget widget-text">
                        <ul>
                          <li>
                            <a href="tel: +91 7821021521">
                              <i class="fas fa-phone-alt"></i> +91 7821021521
                            </a>
                          </li>
                          <li>
                            <a href="mailto:connect@travolex.com">
                              <i class="fas fa-envelope"></i> connect@travolex.com
                            </a>
                          </li>
                          <li>
                            <a href="https://goo.gl/maps/DKcGwE3LzeGxGKa36"><i class="fas fa-map-marker-alt"></i>Office
                              713/714, Clover Hills
                              Plaza, Undri, Pune, Maharashtra 411060</a>
                          </li>
                        </ul>
                        <div class="header-social social-links">
                          <ul>
                            <li><a href="https://www.facebook.com/TravelWithTravolex?mibextid=LQQJ4d"><i class="fab fa-facebook-f"
                                  aria-hidden="true"></i></a></li>
                            <li><a href="https://www.instagram.com/travelwith_travolex?igsh=MzRlODBiNWFlZA=="><i class="fab fa-instagram"
                                  aria-hidden="true"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/travelwithtravolex"><i
                                  class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                      </div>
                  </div>
                  </aside>
                </div>
              </div>
            </div>
            <div class="buttom-footer">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="copy-right">Copyright © 2024 Valiant Business Soultions All Rights Reserved.</div>
                  </div>
                  <div class="col-md-6 text-right">
                    <div class="copy-right">Design and Developed by <a href="https://visionarybizz.com"> Visionary
                        Services</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
            `;
  }
}

customElements.define("header-element", header);
customElements.define("footer-element", footer);
