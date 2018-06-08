import React, { Component } from "react";
//this page is the template from which individual post pages will be created.
export default class PostPage extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <span>{data.markdownRemark.frontmatter.date}</span>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html
                    }}
                />
            </div>
        );
    }
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: {
            slug:{
              eq: $slug
            }
          }){
            html
            frontmatter {
                title
                date (formatString: "DD MMMM YYYY")
            }
          }
           
    }
`