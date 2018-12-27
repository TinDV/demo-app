import React, { Component } from 'react';

class InputText extends Component {
  constructor (props) {
    super (props);
    this.state = {
      text: '',
      formError: { text: '' },
      // textValid: false,
      // formValid: false,
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.checkValidForm = this.checkValidForm.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.value;
    this.setState({text: name});
  }

  checkValidForm() {
    const regex = /[a-z]+[A-Z]+[1-9]/;
    let name = this.state.text;
    if( name == '') {
      alert('You need to enter characters');
    }
    else if( regex.test(name) ) {
      window.location.href = '/home-page';
    }
    else {
      alert('Login fail, please try again !');
    }
  }

  render() {
    return (
     <div className="form_container">
        <h4>Username</h4>
        <div className="input-group">
          <input id="inputText" type="text" className="form-control" name="text" placeholder="Input characters" required 
          value={this.state.text} onChange={this.handleUserInput}/>
        </div>
        <button type="button" onClick={this.checkValidForm}>Login</button>
     </div>
    );
  }
}

export default InputText;