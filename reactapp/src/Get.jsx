import axios from "axios";
import React, { Component } from "react";
import './Get.css'
class Get extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8082/api/v1/user/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
      <div>
        <center>  
        <h2>Responses of the Hotel Survey</h2> <br/>
        <div className="tab">
      <table border={1}>
      <thead>
        <tr>
          <th>UserId</th>
          <th>Name</th>
          <th>Email</th>
          <th>PhoneNo</th>
          <th>Restaurant Name</th>
          <th>No. of Times Visited</th>
          <th>Rating of how you are Greeted</th>
          <th>Waiting time for Seating</th>
          <th>Rating of attractiveness of the Staff</th>
          <th>How is Food menu</th>
          <th>Rating of quality of Food</th>
          <th>More liked Dish</th>
          <th>Clenliness & Hygine</th>
          <th>Overall Rating</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.userid}>
            <td>{user.userid}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneno}</td>
            <td>{user.qone}</td>
            <td>{user.qtwo}</td>
            <td>{user.qthree}</td>
            <td>{user.qfour}</td>
            <td>{user.qfive}</td>
            <td>{user.qsix}</td>
            <td>{user.qseven}</td>
            <td>{user.qeight}</td>
            <td>{user.qnine}</td>
            <td>{user.qten}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
        </center>
    </div>
    );
  }}
  
export default Get;