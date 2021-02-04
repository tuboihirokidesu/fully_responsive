import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("resize", showButton);
  //resize・・・サイズ変更
  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    showButton();
  }, []);
  return (
    <>
      <Nav scroll={scroll}>
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
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav<{ scroll: boolean }>`
  height: 12vh;
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
  background: ${({ scroll }) => (scroll ? "#242424" : "transparent")};
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
  z-index: 10;
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
    height: 100vh;
    width: 100%;
    opacity: 1;

    opacity: ${({ click }) => (click ? 1 : 0)};
    left: ${({ click }) => (click ? "0" : "-100%")};
  }
`;
const NavItems = styled.li`
  //親要素gridで子要素flexの中央揃え！
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
