import React, { Component } from "react";
const sampleData = [
  {
    uname: "Mary",
    email: "mary@gmail.com",
    pass: "123",
    con: "123"
  },
  {
    uname: "Robin",
    email: "rjack@gmail.com",
    pass: "111",
    con: "111"
  },
  {
    uname: "Sam",
    email: "sam@yahoo.com",
    pass: "abc",
    con: "abc"
  }
];

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: sampleData
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { person } = this.state,
      uname = this.refs.u.value,
      email = this.refs.e.value,
      pass = this.refs.p.value,
      con = this.refs.c.value;
    if (pass === con) {
      this.setState(
        {
          person: [
            ...person,
            {
              uname,
              email,
              pass,
              con
            }
          ]
        },
        () => {
          this.refs.u.value = "";
          this.refs.e.value = "";
          this.refs.p.value = "";
          this.refs.c.value = "";
        }
      );
    } else {
      alert("Password does not match confirm password!");
    }
  };

  render() {
    console.log(this.state);
    return (
      <div style={{ textAlign: "center", margin: "50px" }}>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="username" ref="u" required />
            <br />
            <input type="email" placeholder="email" ref="e" required />
            <br />
            <input type="password" placeholder="password" ref="p" required />
            <br />
            <input
              type="password"
              placeholder="confirm password"
              ref="c"
              required
            />
            <br />
            <button style={{ borderRadius: "10px", margin: "10px" }}>
              Sign up
            </button>
            <br />
          </form>
        </div>
        <div style={{ textAlign: "center", margin: "50px" }}>
          <label>
            Registered users
            <ol>
              {this.state.person.map(i => (
                <li
                  key={i.uname + Math.random()}
                >{`Name: ${i.uname} Email: ${i.email} `}</li>
              ))}
            </ol>
          </label>
        </div>
      </div>
    );
  }
}

export default Signup;
