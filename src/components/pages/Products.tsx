import styled from "styled-components";

const ProductsContainer = styled.h1`
  background-image: url("/images/img-1.jpg");
  background-position: center;
  background-size: fill;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;
  height: 100vh;
  text-align: center;
  padding-top: 300px;
`;

const Products = () => {
  return <ProductsContainer>Products</ProductsContainer>;
};

export default Products;
