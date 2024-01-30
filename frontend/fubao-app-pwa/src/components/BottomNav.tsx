import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  background-color: #e4e4e4;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const NavItem = styled.div`
  border: 1px solid black;
  width: 20vw;
  text-align: center;
  padding: 1vh;
  cursor: pointer;
`;

const NavCenterItem = styled.div`
  position: fixed;
  border: 3px solid #168bf2;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
`;

const BottomNav = () => {
  return (
    <Fragment>
    <NavBar>
      <Link to="/viewall">
        <NavItem>전체보기</NavItem>
      </Link>
      <NavItem>d</NavItem>
      <Link to="/map">
        <NavItem>지도</NavItem>
      </Link>
    </NavBar>
    <Link to="/collection">
      <NavCenterItem>도감</NavCenterItem>
    </Link>
    </Fragment>
  );
};

export default BottomNav;
