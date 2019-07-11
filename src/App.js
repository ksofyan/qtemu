import { Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  onChange = (e) =>{
    const{target: {value, id}} = e

    console.log('value', value)
    this.setState({
      [id]:value
    })
  }

  handleSubmit = () => {
    if (this.state.username.length > 0 && this.state.password.length > 0  ){
      alert('anda masuk')
    }
    else {
      alert('isi username & password anda')
    }
  }

  render() {
    return (
      <Row type="flex" justify="space-around" align="middle" className='container'>
        <Col >
          <Form className="login-form">
            <Form.Item>
              <Input value={this.state.username} id='username' onChange = {this.onChange}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password" value={this.state.password} id='password'
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"

                onClick={this.handleSubmit}
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}
