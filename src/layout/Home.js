import React from "react";
import img2 from "./job2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const styleHome = { style: "width: 10rem; height: 5rem;" };
  return (
    <div>
      <article
        style={{
          backgroundImage: `url(${img2})`,
          maxWidth: "1300px",
          padding: "20px 10px",
          margin: "30px 80px",
          maxHeight: "900px",
        }}
      >
        <h1 className="card justify-content-start shadow-lg p-3 mb-5 bg-body rounded">
          Online Job Portal
        </h1>
        <div style={styleHome}>
          {/* TextBox For Information */}

          <div class="d-flex justify-content-end p-5 m-5">
            <div className="justify-content-start">
              <div className="ui form justify-content-start">
                <h1 class="request_text">Get In Touch</h1>
                <form action="/action_page.php">
                  <div class="form-group justify-content-start">
                    <input
                      type="text"
                      className="form-control justify-content-start shadow-lg p-3 mb-2 bg-body rounded"
                      placeholder="Name"
                      name="Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      className="form-control align-self-center shadow-lg p-3 mb-2 bg-body rounded"
                      placeholder="Email"
                      name="Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      className="form-control align-self-center shadow-lg p-3 mb-2 bg-body rounded"
                      placeholder="Phone Number"
                      name="Email"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      className="form-control align-self-center shadow-lg p-3 mb-2 bg-body rounded"
                      placeholder="Message"
                      rows="5"
                      id="comment"
                      name="Message"
                    ></textarea>
                  </div>
                </form>
                <div className="btn btn-dark">SEND</div>
              </div>
            </div>
          </div>
          {/* TextBox For Information */}
        </div>

        <div class="card justify-content-start shadow-lg p-1 mb-1 bg-body rounded">
          <div class="card justify-content-start shadow-lg p-3 mt-5 mb-3 bg-body rounded">
            <div class="footer_taital_main justify-content-start">
              <div class="row justify-content-start">
                <div class="col-lg-6 col-sm-6 justify-content-start">
                  {/* <div class="footer_logo"><img src="images/footer-logo.png"></div> */}
                  <h6 class="card d-flex flex-column mb-3">
                    Job portal service was developed for creating an interactive
                    job vacancy form for candidates. This web application manage
                    updates both from the job seekers.
                    It’s unique development methodology helps in acquiring the
                    client and candidate information and separating them
                    according to the job requirements and vacancies.
                  </h6>
                </div>
                <div class="col-lg-3 col-sm-4 justify-content-center">
                  <h2 class="useful_text">Contact Info</h2>
                  <h4 class="addres_link active">
                    <Link to="/">Mantain Office Address:</Link>
                  </h4>
                  <h4 class="addres_link active">
                    <Link to="/">Customer Service:</Link>
                  </h4>
                </div>
                <div class="col-lg-3 col-sm-6 justify-content-around">
                  <h2 class="useful_text">Discover</h2>
                  <div class="discover_menu">
                    <ul>
                      <li>
                        <Link to="/">Help</Link>
                      </li>
                      <li>
                        <Link to="/">How It Works</Link>
                      </li>
                      <li>
                        <Link to="/">subscribe</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
