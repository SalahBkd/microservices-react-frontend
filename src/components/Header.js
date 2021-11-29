import React from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            <HeaderTitle>
                <h2>Microservices Front-End</h2>
            </HeaderTitle>
            <HeaderLogo>
                <img src={logo} alt="logo"/>
            </HeaderLogo>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00ACEA;
  color: white;
  width: 100vw;
  height: 10vh;
`;

const HeaderTitle = styled.div`
  text-transform: uppercase;
  font-weight: bold;
`;

const HeaderLogo = styled.div`
  img {
    width: 60px;
    height: 60px;
    //overflow: hidden;
  }
`;

export default Header;
