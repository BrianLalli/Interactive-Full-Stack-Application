// NavBar with: Links to different features Logo Login && Sign Up Buttons
// Hero div with relevent picture and a paragraph with sign up button
// Content div x 2 with relevent info on product with sign up buttons
//  FAQ ?? maybe

// import Navbar from "../../components/navbar/navbar"
import "./Landing.css";
import React from "react";
import hero1 from "../../assets/img/pexels-canva-studio-3153201.jpg";
import CardHero from "../../components/CardHero/CardHero";
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* 1st content div */}
        <div className="ae-hero relative h-min-96 w-12/12 mr-16 ml-6 bg-gradient-to-r from-cyan-500 to-blue-500 flex-wrap p-1 overflow-auto">
          <section className="m-10">
            <img
              src={hero1}
              alt="People Collaborating"
              className="ae-photo-1"
            ></img>
          </section>
          <article className="absolute inset-y-10 right-20 w-56 m-4">
            <p className="text-white text-center">
              Eiusmod commodo deserunt tempor nulla amet ex labore sit anim do
              do nulla. Ea nisi proident deserunt et magna reprehenderit ut
              nulla nostrud dolore. Nostrud dolore cupidatat pariatur sunt non
              eu proident. Proident dolore do excepteur aliquip quis irure esse
              cillum qui labore nisi.
            </p>
          </article>
            <button>
              <Link to="/About">test</Link>
            </button>
        </div>
        {/* 2nd content div  */}
        <div className="ae-hero relative h-96 w-12/12 bg-gradient-to-r from-sky-300 to-violet-800 flex-wrap p-1 mr-6 ml-16 mt-16 overflow-hidden">
          <section className="m-10 absolute right-10">
            <img
              src={hero1}
              alt="People Collaborating"
              className="ae-photo-1"
            ></img>
          </section>
          <article className="absolute inset-y-10 left-20 w-56 m-4">
            <p className="text-black text-center">
              Eiusmod commodo deserunt tempor nulla amet ex labore sit anim do
              do nulla. Ea nisi proident deserunt et magna reprehenderit ut
              nulla nostrud dolore. Nostrud dolore cupidatat pariatur sunt non
              eu proident. Proident dolore do excepteur aliquip quis irure esse
              cillum qui labore nisi.
            </p>
          </article>
        </div>
        {/* 3rd content div */}
        <div className="ae-hero-3 relative pl-20 left-52 w-6/12 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-700 flex-wrap p-1 mt-48 mb-60">
          <section className="m-10 absolute -bottom-52">
            <img
              src={hero1}
              alt="People Collaborating"
              className="ae-photo-1"
            ></img>
          </section>
          <article className="absolute m-4 top-0 left-40 overflow-hidden text-center w-56">
            <p className="text-white text-center">
              Eiusmod commodo deserunt tempor nulla amet ex labore sit anim do
              do nulla. Ea nisi proident deserunt et magna reprehenderit ut
              nulla nostrud dolore. Nostrud dolore cupidatat pariatur sunt non
              eu proident.
            </p>
          </article>
          {/* <section className="m-10 absolute right-10 -top-40">
            <img
              src={hero1}
              alt="People Collaborating"
              className="ae-photo-1"
            ></img>
          </section>
          <article className="absolute m-4 bottom-0 right-40 overflow-hidden text-center w-56">
            <p className="text-white text-center">
              Eiusmod commodo deserunt tempor nulla amet ex labore sit anim do
              do nulla. Ea nisi proident deserunt et magna reprehenderit ut
              nulla nostrud dolore. Nostrud dolore cupidatat pariatur sunt non
              eu proident. Proident dolore do excepteur aliquip quis irure esse
              cillum qui labore nisi.
            </p>
          </article> */}
        </div>
        {/* 4th contet div */}
        <div className="ae-hero-3 relative pl-20 left-1/3 w-6/12 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-700 flex-wrap p-1 mt-48 mb-60">
          {/* <section className="m-10 absolute -top-52">
            <img
              src={hero1}
              alt="People Collaborating"
              className="ae-photo-1"
            ></img>
          </section>
          <article className="absolute m-4 bottom-0 left-40 overflow-hidden text-center w-56">
            <p className="text-white text-center">
              Eiusmod commodo deserunt tempor nulla amet ex labore sit anim do
              do nulla. Ea nisi proident deserunt et magna reprehenderit ut
              nulla nostrud dolore. Nostrud dolore cupidatat pariatur sunt non
              eu proident.
            </p>
          </article> */}
          <section className="m-10 absolute right-10 -bottom-40">
            <img
              src={hero1}
              alt="People Collaborating"
              className="ae-photo-1"
            ></img>
          </section>
          <article className="absolute m-4 top-0 right-40 overflow-hidden text-center w-56">
            <p className="text-white text-center">
              Eiusmod commodo deserunt tempor nulla amet ex labore sit anim do
              do nulla. Ea nisi proident deserunt et magna reprehenderit ut
              nulla nostrud dolore. Nostrud dolore cupidatat pariatur sunt non
              eu proident. Proident dolore do excepteur aliquip quis irure esse
              cillum qui labore nisi.
            </p>
          </article>
        </div>
        {/* botton card div */}
        <CardHero />
      </>
    );
  }
}
