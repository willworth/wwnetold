import React from 'react'
import Link from 'gatsby-link'
import logo from "../images/logo.svg";
const Footer = ({ siteTitle }) => (
  <div
    style={{
      // background: '#A77E58', 
      // background: '#131515',  //gunmetal black
      // background: '#031d44',  //oxford blue  
      // background: '#011627',  //Maastricht Blue 
       //background: '#607744',  //Fern Green
       background: '#bfa89e',  
     // background: '#79a9d1',  // https://coolors.co/465561-78a1bb-ebf5ee-bfa89e-72635a
      // https://coolors.co/516272-0d1f2d-131515-031d44-0b7a75
      
      //* marginBottom: '1.45rem', */



    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <br />
      <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <img src={logo} alt="willworth.net" />
            </Link>
          </h1>
         <p>“If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.”  Van Gough </p>


    </div>
  </div>
)

export default Footer
