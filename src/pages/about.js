import React, { Component } from 'react';
import Link from 'gatsby-link'
class about extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                
                <p> If you have any questions about the contents of this site, or want to talk about collaboration, please do get in touch either 
                via social networks twitter linkedin facebook or email.</p>
                <p>Thanks for your interest.</p>
                <Link to="/">Go back to the homepage</Link> 
            </div>
        );
    }
}

export default about;