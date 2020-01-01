import React, { Component } from 'react'
import Typed from 'react-typed';
import VisibilitySensor from "react-visibility-sensor";

import {Love} from './Icons';
import {colors} from './Styles';


export default class Appreciation extends Component {
    state= {
isVisible: false
}

     onChange =(isVisible)=> {
         if (isVisible==true) {
             this.setState({isVisible: true})

         }
}
    render() {
    return (
        <React.Fragment>
    <div className="fourth bgDark text-center position-relative w-100">
    <div className="container mw-100 vertical-center">
<div className="preMessage-div text-center">
<br/>
<h3 className="textRobot mt-5"></h3>
<Love width="80%"/>
<br/>
<small className="textRobot">an eight-hour code</small>
<br/>
<br/>
<p className="textRobot">Wanna reach out?</p>

<a target="_blank" className="text-decoration-none" href="tel:+2348104172477">
<i className="fa fa-phone icon" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
</a>

<a target="_blank" href="https://github.com/adedaniel" className="text-decoration-none">
<i className="fa fa-github icon" aria-hidden="true"></i>

&nbsp;&nbsp;&nbsp;&nbsp;
</a>
<a target="_blank" href="https://twitter.com/ijebu_developer" className="text-decoration-none">

<i className="fa fa-twitter icon" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; 
</a>
<br/><br/><br/>

<VisibilitySensor onChange={this.onChange}>
     
    <div>
<p>-</p>

    <h4 className='textRobot'>
    {this.state.isVisible ? 
    
        <Typed
                strings={["This message will self-destruct in...^500\n `3...`^1000\n `2..`^1000\n `1.`^1000\n `Poof! ☁`", "Happy New Year 🎊"]}
                typeSpeed={50}
                backSpeed={10}
                backDelay={2000}
                smartBackspace= {false}
                cursorChar={'_'}
            />
 : ""}
            
  
 
    
    </h4>
    </div>
    </VisibilitySensor>
    </div>
    <h6 className="textRobot">Thanks to Mike and Debby for their patience</h6>

    </div>

    <div className={`scrollDown text-white `}>

</div>
    </div>

    <style jsx>
    {`
    .icon{
    color: ${colors.robot};
    font-size: 30px
}
    .fourth{
height: 102vh;
width: 100vh;
margin-top: -1px;

    }
    .bgDark{
        background-color: ${colors.dark}
    }
    .vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.textRobot{
    
    color: ${colors.robot}
}
@media(max-width: 1023px){
    .preMessage-div{
        text-align: left
    }
}
@media(min-width: 1024px){
    .textRobot{
    padding: 0 20%;
    
}
.preMessage-div{
        text-align: center
    }
}
.scrollDown{
  
    position: fixed;
    bottom: 0;
    width: 100%;
}

.angles{
    color: ${colors.robot};
    font-size: 30px

}
.preMessage-div{
height: 500px
}
    `}
    </style>
    </React.Fragment>
 
    )
  }
}

 

