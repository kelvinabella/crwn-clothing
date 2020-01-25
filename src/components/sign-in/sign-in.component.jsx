import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";
import {
  SignInContainer,
  SignInTitleContainer,
  SignInButtonContainer
} from "./sign-in.styles";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitleContainer>I already have an account</SignInTitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <SignInButtonContainer>
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </SignInButtonContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = disptach => ({
  googleSignInStart: () => disptach(googleSignInStart()),
  emailSignInStart: (email, password) =>
    disptach(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
