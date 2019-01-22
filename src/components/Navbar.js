import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <nav
        className="bg-grey-darker py-6 px-2 md:px-6 fixed w-full z-10 pin-t shadow-lg"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container mx-auto flex items-center justify-between flex-wrap ">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <a
            className="text-white no-underline hover:text-white hover:no-underline"
            href="#"
          >
            <span className="text-xl lg:text-2xl pl-2">
              <i className="em em-grinning" /> Brand McBrandface
            </span>
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white"
          >
            ☰
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 hidden"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white no-underline"
                href="#"
              >
                Active
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
