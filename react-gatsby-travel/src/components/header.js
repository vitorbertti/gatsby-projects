import * as React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';

const Header = ({ siteTitle }) => {
  return (
    <Nav>
      <NavLink to="/">TRAVEL</NavLink>
      <Bars />
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) /2);
  z-index: 100;
  position: relative;
`;

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem;
  height: 100%;
  cursor: pointer;
`;

const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
