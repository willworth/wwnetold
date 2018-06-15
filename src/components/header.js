import React from 'react'
import Link from 'gatsby-link'
import logo from "../images/logowheat.svg";
import styled from 'styled-components';


const HeaderWrapper = styled.div `
// background: #516272;
 background: #607744;
 background: #011627;
// background: #b89e97;
// background: #8b7765;
      margin-Bottom: 1.45rem; 
`;


const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  
`;

const MainNav = styled.nav`
 ul {
   list-style: none;
   display: flex;
   li {
      margin-left: 10px;
      a {
        text-decoration: none;
        color: wheat;
        text-shadow: 1px 1px #000000;
        &:hover {
          border-bottom: 2px solid black;
        }
      }
   }
 }
  
`;






const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
    <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <img src={logo} alt="Will Worth Logo" />
            </Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home< /Link>
              </li>
              <li>
                <Link to="/blog">Blog < /Link>
              </li>
              <li>
                <Link to="/music">Music < /Link>
              </li>
              <li>
                <Link to="/about">About < /Link>
              </li>
            </ul>
          </MainNav>
     </HeaderContainer>
  </ HeaderWrapper>
)

export default Header
