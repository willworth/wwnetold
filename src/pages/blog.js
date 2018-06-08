import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/footer';
import Img from "gatsby-image";
import PostListing from '../components/Posts/Postlisting';


const Blog = ({ data }) => (
  <div>
    <h1>This is the blog page.</h1>
    
<p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
    </p>
    <Link to="/about/">Go to about</Link>
    <footer />
  </div>
)



export default Blog




export const query = graphql`
  query BlogPage {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark (sort:{
      fields: [frontmatter___date],
      order: DESC
    }){
      edges {
        node {
          id
          frontmatter {
            title
            date (formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }

        background: imageSharp(id: {regex: "/beach.jpg/"}){
          sizes(maxWidth: 1240) {
            ...GatsbyImageSharpSizes
          }
        }
  }

`;
