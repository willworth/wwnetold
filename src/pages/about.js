import React, { Component } from 'react'
import Link from 'gatsby-link'
class about extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>Will Worth is a multi-instrumentalist songwriter and composer.</p>
        <p>
          Combining evocative story-telling and beautiful arrangements, his work
          features expressive melodic piano / viola combinations and electronic
          experimentation, as well as more traditional folk guitar influences.
        </p>
        <ul>

       <li style ={{  liststyle: "none"  }}> <a href="https://www.youtube.com/user/WillWorthMusic">youtube</a> <br/></li>
       <li> <a href="https://www.instagram.com/will.worth/">instagram</a> <br/></li>
       <li> <a href="https://www.facebook.com/WillWorthMusic/">facebook</a> <br/></li>
       <li> <a href="https://twitter.com/willworth">twitter</a> <br/></li>
        </ul>
        
        {/* <Link to="/">Go back to the homepage</Link> */}
      </div>
    )
  }
}

export default about
