import styled from "styled-components";

const SignUpContainer = styled.h1`
  background-image: url("/images/img-8.jpg");
  background-position: center;
  background-size: fill;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;
  height: 100vh;
  text-align: center;
  padding-top: 300px;
`;

const SignUp = () => {
  return <SignUpContainer>Sign-Up</SignUpContainer>;
};

export default SignUp;
