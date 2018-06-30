import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/footer';
import Img from "gatsby-image";
import PostListing from '../components/Posts/Postlisting';


const IndexPage = ({ data }) => (
  <div>
    <h1>Hi!</h1>

    <p>Thanks for visiting <br/> </p>
    <p> Please check out <Link to="/blog/">the blog</Link>, or click <Link to = "/music/">here</Link> for the music.</p>
    {/* <p>{data.site.siteMetadata.title}</p> */}
    {/* <p>{data.site.siteMetadata.desc}</p> */}
{/* <p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
    </p> */}
    <Img  
    
    
    
    sizes={data.background.sizes}
    
    />
    <footer />
  </div>
)



export default IndexPage




export const query = graphql`
  query SiteMeta {
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
