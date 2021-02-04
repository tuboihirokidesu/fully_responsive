import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";

const Nav = styled.nav`
  height: 10vh;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
`;
const Logo = styled(Link)`
  color: #fff;
  cursor: pointer;
  position: flex;
  justify-self: start;
  font-size: 2rem;
  text-decoration: none;
  margin-left: 20px;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }
`;
const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavWrap = styled.ul<{ click: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;

  @media screen and (max-width: 960px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
    top: 80px;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 1;

    background: ${({ click }) => (click ? "#242424" : "")};
    opacity: ${({ click }) => (click ? 1 : 0)};
    left: ${({ click }) => (click ? "0" : "-100%")};
  }
`;
const NavItems = styled.li`
  //親要素gridで子要素flexの中央揃え！
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  text-decoration: none;
  height: 60%;
  align-items: center;
  padding: 0.5rem 1rem;

  :hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    font-size: 2.2rem;
    z-index: 1;
  }
`;
const NavLinksMobile = styled(Link)`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    margin: 2rem auto;
    width: 100%;
    text-decoration: none;
    font-size: 1.5rem;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: transparent;
    font-size: 1.2rem;
    color: #fff;
    padding: 10px 25px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;

    :hover {
      background-color: #fff;
      color: #242424;
      transition: 250ms;
    }
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to='/'>
            TRVL
            <i className='fab fa-typo3' />
          </Logo>
          <MenuIcon onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </MenuIcon>
          <NavWrap click={click}>
            <NavItems>
              <NavLinks to='/' onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='/service' onClick={closeMobileMenu}>
                Service
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='/products' onClick={closeMobileMenu}>
                Products
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinksMobile to='/sign-up' onClick={closeMobileMenu}>
                Sign Up
              </NavLinksMobile>
            </NavItems>
          </NavWrap>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
