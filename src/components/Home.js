import React from 'react'
import '../css/All.css'
import logo from '../img/logo.png'

const Home = () => {
  return (
    <section id="header">
      <a href="#">
        <img src={logo} alt="Logo" class="logo" />
      </a>
      <div>
        <ul id="navbar">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="shop.html">Shop</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a href="cart.html">
              <i className="far fa-shopping-bag"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home