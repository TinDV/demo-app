import React, { Component } from 'react';

class InputText extends Component {
  constructor (props) {
    super (props);
    this.state = {
      text: '',
      formError: { text: '' },
      textValid: false,
      formValid: false,
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.checkValidForm = this.checkValidForm.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.value;
    this.setState({text: name});
  }

  checkValidForm() {
    const regEmail = /[a-z]+[A-Z]+[1-9]/;
    let name = this.state.text;
    console.log(name);
    if( regEmail.test(name)) {
      alert('Succeed')
    } else {
      alert('Login fail, please try again !')
    }
  }

  render() {
    return (
     <div className="form_container">
        <h4>Login</h4>
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