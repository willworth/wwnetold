import React, { Component } from 'react';
import Link from 'gatsby-link'
class music extends Component {
    render() {
        return (
            <div>
                <h1>Music</h1>
                <p>I'll update this page with new music soon!</p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/JFtiUm9SUvQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>




                <p> If you have any questions, comments or want to talk about collaboration pease do get in touch either 
                via social networks twitter linkedin facebook or email.</p>
                <p>Thanks for your interest.</p>
                <Link to="/">Go back to the homepage</Link> 
            </div>
        );
    }
}

export default music;