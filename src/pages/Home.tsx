import React from "react";
import hedwig from "../images/hedwigweb.jpg";


const Home = () => {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <div className="container pt-3">
          <h1 className="title">Arizona Onstage Productions</h1>
          <p className="description">
            Bringing Broadway and Off-Broadway to Tucson for over 15 years!
          </p>
          {/*  a href = "<?php echo $ticketUrl ?>" target="_blank"> 
				<button className="btn btn-lg mtb-25 tickets">
				Buy Tickets!
				</button>
            </a> */}
        </div>
      </div>

      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="alert alert-danger" style={{ fontSize: "32px" }}>
                We are working on getting new dates due to the ever changing
                COVID 19 regulations. We want our cast, crew and audiences safe!
              </p>
            </div>
          </div>

          {/* End Row */}

          <div className="row mtb-25 py-3">
            <div className="col-md-offset-2 col-md-8 mx-auto">
              <img src={hedwig} className="img-responsive img-rounded" />
            </div>
          </div>

          {/* End Row */}
        </div>
        <div className="about-section py-2">
          <div className="container">
            <div className="pb-2 mt-4 mb-2 border-bottom">
              <h1>About Us</h1>
            </div>
            <p>
              Arizona Onstage Productions is devoted to bringing theater and
              musical theater that is unique, thought provoking, and often
              unexpected. Founded by Kevin Johnson in 2003, Arizona Onstage
              Productions has been the recipient of 18 Arizona Daily Star MAC
              Awards for excellence in the theater. Our education outreach
              involves students and professionals from the Tucson community.
            </p>

            <p>
              Our production of Les Miserables (MAC WINNER - Best Musical, Best
              Director, Best Actor, Best Actress) played to over 3,000 people
              earning standing ovations and critical praise. <br />
              "Electrifying" - Kathy Allen, Arizona Daily Star <br /> "The
              theatrical event of the year!" -Sherilyn Forrester, Tucson Weekly
            </p>

            <p>
              Please consider making a donation via PayPal of any amount to
              Arizona Onstage Productions
            </p>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="JUT8RCHGKYF9C"
              />
              <input
                type="submit"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
                value="Make a Contribution"
                className="btn btn-lg donate"
              />
              <img
                alt=""
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
            <p className="mtb-25">
              For Questions and More information: <br />
              (520) 882-6574 <br />
              azonstage@yahoo.com
            </p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Home;
