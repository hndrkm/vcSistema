import React from 'react';
import axios from 'axios'

class Login extends React.Component {

  state = {
    user: ""
  }

  login() {
    const user = document.querySelector('#user').value;
    console.log(this.getUser(user))
  }
  getUser = async (userId) => {
    const res= await axios.get('http://localhost:4000/api/users/' + userId);
    return res;
  }

  render() {
    return (
      <div className="card text-center">
        
          <div>Usuario</div>
          
          <div className="card-body">
          <input id="user" placeholder="user.." type="text"/>
        <button onClick={this.login}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login;