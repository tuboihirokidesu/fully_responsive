import styled from "styled-components";

const ServicesContainer = styled.h1`
  background-image: url("/images/img-2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  height: 100vh;
  font-size: 100px;
  text-align: center;
  padding-top: 300px;
`;

const Services = () => {
  return <ServicesContainer>Services</ServicesContainer>;
};

export default Services;
