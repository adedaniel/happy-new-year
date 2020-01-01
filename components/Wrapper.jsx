import React, { Component } from 'react';
import Intro from './Intro';
import PreMessage from './PreMessage'
import NewYearMessage from './NewYearMessage'
import Appreciation from './Appreciation'

class Wrapper extends Component {
    state={
        isVerified: false,
        isGottenMessage: false,
    }
    onVerify=()=>{
     this.setState({isVerified: !this.state.isVerified})
 }
 onGetMessage=()=>{
    this.setState({isGottenMessage: !this.state.isGottenMessage})
 
 }
  render() {
    return (
      <React.Fragment>
      <Intro isVerified={this.state.isVerified} onVerify={this.onVerify}/>
      {this.state.isVerified ?  <PreMessage isGottenMessage={this.state.isGottenMessage} onGetMessage={this.onGetMessage}/> : "" }
      {this.state.isGottenMessage ? <React.Fragment> 
        
        <NewYearMessage/> 
        
        <Appreciation/>
        
        </React.Fragment> : "" }
      
     
      </React.Fragment>
    )
  }
}

export default Wrapper
