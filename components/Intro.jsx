import React, { Component } from "react";
import Typed from "react-typed";
import { Confirmed, ScanVideo } from "./Icons";
import { colors } from "./Styles";

export default class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="first bgDark text-center position-relative w-100">
          <div className="container mw-100 vertical-center">
            {this.props.isVerified ? <Confirmed /> : <ScanVideo />}
            <br />
            <br />
            <h1 className=" textRobot">
              <Typed
                strings={[
                  "INITIALIZING...",
                  "AUTHENTICATING...",
                  "ACCESS GRANTED "
                ]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={2000}
                onComplete={this.props.onVerify}
              />
            </h1>
          </div>
          <div
            className={`scrollDown text-white ${
              this.props.isVerified ? "animated fadeIn slower" : "d-none"
            }`}
          >
            <div className="animated infinite bounce slow">
              <i className="fa fa-angle-down angles" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .first {
              height: 100vh;
              width: 100vh;
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

            .scrollDown {
              position: fixed;
              bottom: 0;
              width: 100%;
            }

            .angles {
              color: ${colors.robot};
              font-size: 30px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
