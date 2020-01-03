import React, { Component } from "react";
import Typed from "react-typed";
import VisibilitySensor from "react-visibility-sensor";

import { colors } from "./Styles";

export default class PreMessage extends Component {
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
        <div className="second bgDark text-center position-relative w-100">
          <div className="container mw-100 vertical-center">
            <div className="preMessage-div">
              <VisibilitySensor onChange={this.onChange}>
                <div>
                  <p>-</p>
                  <h1 className="textRobot">
                    {this.state.isVisible ? (
                      <Typed
                        strings={[
                          "Good Day 007,",
                          "If you are reading this, then our 8-hour future messaging deployment has successfully reached its time destination",
                          "In that case, you are in year 2020 ",
                          "The message you are about to receive will contain information you have been trained to handle ",
                          "The Fate of the World now rests in your hands...",
                          "Goodluck!"
                        ]}
                        typeSpeed={50}
                        backSpeed={20}
                        backDelay={3000}
                        smartBackspace={false}
                        cursorChar={"_"}
                        onComplete={this.props.onGetMessage}
                      />
                    ) : (
                      ""
                    )}
                  </h1>
                </div>
              </VisibilitySensor>
            </div>
          </div>
          <div
            className={`scrollDown text-white ${
              this.props.isGottenMessage ? "animated fadeIn slower" : "d-none"
            }`}
          >
            <h4 className="textRobot">Proceed</h4>
            <br />
            <div className="animated infinite bounce slow">
              <i className="fa fa-angle-down angles" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .second {
              height: 104vh;
              width: 100vh;
              margin-top: -1px;
            }
            .bgDark {
              background-color: ${colors.dark};
            }
            .vertical-center {
              margin: 0;
              position: absolute;
              top: 50%;
              -ms-transform: translateY(-50%);
              transform: translateY(-50%);
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
              .textRobot {
                padding: 0 20%;
              }
              .preMessage-div {
                text-align: left;
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
            .preMessage-div {
              height: 300px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
