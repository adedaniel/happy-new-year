import React, { Component } from "react";

import VisibilitySensor from "react-visibility-sensor";

import { colors } from "./Styles";

export default class NewYearMessage extends Component {
  state = {
    isVisible: false
  };

  onChange = isVisible => {
    if (isVisible == true) {
      this.setState({ isVisible: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="third bgLight text-center position-relative w-100">
          <div className="container mw-100 vertical-center">
            <div className="Message-div">
              <React.Fragment>
                <h1 className="textMessage">Welcome to 2020! 🎉</h1>
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval={4000}
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={2}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={3}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={4}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={5}
                    />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <h2>
                        As you enter into the new Year, remember that it's not
                        too late to change your life. It's not too late to
                        become the person you've always hoped you could be, or
                        to love the way you've always wanted to love.
                      </h2>
                      <br />
                    </div>
                    <div className="carousel-item">
                      <h3>
                        We wake up everyday with the ability to start fresh
                      </h3>
                      <br />
                    </div>
                    <div className="carousel-item">
                      <h3>
                        Remember that ‘No one can go back and back a brand new
                        start. But anyone can start from now and make a brand
                        new ending.‘ – Carl Bard.
                      </h3>
                      <br />
                    </div>
                    <div className="carousel-item">
                      <h3>
                        So let go of all thats holding you down; for the next
                        365 days
                      </h3>
                      <br />
                    </div>
                    <div className="carousel-item">
                      <h3>
                        We are all stories in the end – let’s make ours a good
                        one!
                      </h3>
                      <br />
                    </div>
                    <div className="carousel-item">
                      <h2>Cheers to the first pages of a new Decade 🍻</h2>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .third {
              height: 101vh;
              width: 100vh;
              margin-top: -1px;
            }
            .bgLight {
              background-color: ${colors.light};
            }
            .vertical-center {
              margin: 0;
              position: absolute;
              top: 50%;
              -ms-transform: translateY(-50%);
              transform: translateY(-50%);
            }
            .textMessage {
              color: ${colors.message};
            }
            .textRobot {
              color: ${colors.robot};
            }
            @media (max-width: 1023px) {
              .preMessage-div {
                text-align: left;
              }
            }
            @media (min-width: 1024px) {
              .textMessage {
                padding: 0 20%;
              }
              .Message-div {
                text-align: center;
              }
            }
            .scrollDown {
              position: fixed;
              bottom: 0;
              width: 100%;
            }

            .angles {
              color: ${colors.robot};
              font-size: 30px;
            }
            .Message-div {
              height: 100%;
            }
            .carousel-indicators {
              bottom: -50px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
