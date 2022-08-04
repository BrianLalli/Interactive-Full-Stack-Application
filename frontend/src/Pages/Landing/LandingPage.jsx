// NavBar with: Links to different features Logo Login && Sign Up Buttons
// Hero div with relevent picture and a paragraph with sign up button
// Content div x 2 with relevent info on product with sign up buttons
//  FAQ ?? maybe

// import Navbar from "../../components/navbar/navbar"
import "../../index.css";
import React from "react";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="ae-hero h-80 w-12/12 bg-gradient-to-r from-cyan-500 to-blue-500 cent">
          <section>
            <img src="../../assets/img/pexels-canva-studio-3153201"></img>
          </section>
        </div>
      </>
    );
  }
}
