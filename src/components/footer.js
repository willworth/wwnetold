import React from 'react'
import Link from 'gatsby-link'
import logo from "../images/logo.svg";
const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: '#A77E58',
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
         <p> You made it to the bottom! </p>


    </div>
  </div>
)

export default Footer
