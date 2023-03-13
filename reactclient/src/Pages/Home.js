import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div class="main">
            <header>
                <div class="header-container">
                    <h1 class="header-title">Nettside AS</h1>
                    <div class="hamburger-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div class="dropdown-menu">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="textbox-container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. </p>
                </div>
            </header>
            <section>
                <div class="button-container">
                    <a href="#" class="button button1">Markedplass</a>
                    <a href="#" class="button button2">Lag Anbud</a>
                </div>
            </section>
            <footer>
                <div class="footer-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;