import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class InputText extends Component {
  constructor (props) {
    super (props);
    this.state = {
      text: '',
      isRedirect: false
    };
    // this.handleUserInput = this.handleUserInput.bind(this);
    // this.checkValidForm = this.checkValidForm.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.value;
    this.setState({text: name});
  }

  checkValidForm = () => {
    const regex = /^\w+$/;
    let name = this.state.text;
    if( name === '') {
      alert('You need to enter characters');
    }
    else if( regex.test(name) ) {
      this.setState({ isRedirect: true });
    }
    else {
      alert('Login fail, please try again !');
    }
  }

  render() {
    // let { from } = this.props.location.state || { from: { pathname: "/" } };
    // const { redirectToReferrer } = this.state;

    if (this.state.isRedirect) return <Redirect push to={`/home-page/${this.state.text}`} />;
    
    return (
     <div className="form_container">
        <h4>Username</h4>
        <div className="input-group">
          <input id="inputText" type="text" className="form-control" name="text" placeholder="Input characters" required
          value={this.state.text} onChange={this.handleUserInput}/>
        </div>
        <button type="button" onClick={ this.checkValidForm } >Login</button>
     </div>
    );
  }
}

export default InputText;