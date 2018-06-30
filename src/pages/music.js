import React, { Component } from 'react';
import Link from 'gatsby-link'
class music extends Component {
    render() {
        return (
            <div>
                <h1>Music</h1>
                <p>I'll update this page with new music soon!</p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/JFtiUm9SUvQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



                <Link to="/">Go back to the homepage</Link> 
            </div>
        );
    }
}

export default music;