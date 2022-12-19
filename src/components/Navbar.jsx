import React from "react";
import { useRef } from "react";
import Logo from "../assets/Images/logo.png"
import "./navbar.css"
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <div>
            <main className="mainac"></main>
            <header>
                <Link to="/"><img src={Logo} alt="logo" id="logoConectaRecycle" /></Link>
                <nav ref={navRef}>
                    <ul className="nav-li">

                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/blog"><li>NOSSO BLOG</li></Link>
                        <Link to="/quemsomos"> <li> QUEM SOMOS </li></Link>
                        <Link to="/nossaspevs"><li>NOSSAS PEVs</li></Link>
                        <Link to="/parceiros"><li>PARCERIAS</li></Link>
                        <Link to="/faleconosco"><li>FALE CONOSCO</li></Link>

                        <div className="nav-buttons">
                        <Link to="/cadastro"><button className="cadastro">Cadastre-se </button></Link>
                        <Link to="/login"><button className="login">Login</button></Link>
                        </div>

                    </ul>

                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>

                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>



            </header>
        </div>
    )
}

export default Navbar