import React, { useState } from "react";
import Registrer from "./Registrer";
import Constants from "../Utilities/Constants";
import AuthServices from "../Utilities/AuthServices";
import "../Utilities/LIStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { color, motion, useScroll, useTransform } from 'framer-motion';
import Markedsplass from "./Markedsplass";
import CreateCommission from "./CreateCommission";

export default function LoggInn() {
    const [showingRegistrerForm, setShowingRegistrerForm] = useState(false);
    const nav = useNavigate();
    const [logInSuccess, setLogInSuccess] = useState(false);

    const initialFormData = Object.freeze({
        brukernavn: "",
        passord: ""
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const brukerToLoggInn = {
            brukernavn: formData.brukernavn,
            passord: formData.passord
        };

        const url = Constants.API_URL_LOGG_INN;
        let myJson = "";
        const feilmelding = document.getElementById("feilmelding");

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(brukerToLoggInn)
        })
            .then((response) => response.json())
            .then((responseFromServer) => {
                myJson = responseFromServer;
                console.log(myJson);
                for (let k in myJson) {
                    if (myJson[k] === true) {
                        window.localStorage.setItem("loggetInn", true);
                        window.localStorage.setItem("navn", formData.brukernavn);
                        setLogInSuccess(true);
                    } else {
                        feilmelding.innerHTML = "Wrong username or password";
                    }
                }
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }



    return (
        <div className="LoggInnContainer">
            {(showingRegistrerForm === false && logInSuccess === false) && (
                <div>
                    <header>
                        <Link to="/">
                            <motion.div 
                                className='header-container'>
                                <h1 className='header-title'>
                                    Nettside AS
                                </h1>
                            </motion.div>
                        </Link>
                    </header>

                    <h3>Log in</h3>

                    <div className="mt-3">
                        <label className="h3 form-label">Username</label>
                        <input value={formData.brukernavn} name="brukernavn" id="navn" type="text" className="form-control" placeholder="Username" onChange={handleChange} />
                    </div>

                    <div className="mt-3">
                        <label className="h3 form-label">Password</label>
                        <input value={formData.passord} name="passord" type="password" className="form-control" placeholder="●●●●●●●●" onChange={handleChange} />
                    </div>

                    <motion.a
                        initial={{
                            color:"white",
                            backgroundImage: "linear-gradient(130deg, #e91779, #244dd1)",
                        }}
                        transition={{
                            type:"spring",
                            stiffness:87,
                            damping:15.5,
                        }}
                        
                        whileHover={{
                            //scale:1.02,
                            borderRadius:"100px",
                            backgroundImage: "linear-gradient(130deg, #fff, #fff)",
                            color:"#e91779"
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                        onClick={handleSubmit}
                        className="button button1" >
                            Log in
                    </motion.a>
                    <motion.a
                        initial={{
                            color:"white",
                            backgroundImage: "linear-gradient(130deg, #e91779, #244dd1)",
                        }}
                        transition={{
                            type:"spring",
                            stiffness:87,
                            damping:15.5,
                        }}
                        
                        whileHover={{
                            //scale:1.02,
                            borderRadius:"100px",
                            backgroundImage: "linear-gradient(130deg, #fff, #fff)",
                            color:"#e91779"
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                        onClick={() => setShowingRegistrerForm(true)}
                        className="button button2" >
                            Create account
                    </motion.a>
                    <div id="feilmelding"></div>
                </div>
            )}

            {showingRegistrerForm && <Registrer onBrukerCreated={onBrukerCreated} />}
            {logInSuccess && <Markedsplass isSuccess={true} navn={formData.brukernavn} />}
        </div>
    );

    function onBrukerCreated(createdBruker) {
        if (createdBruker === null) {
            return
        }

        alert('Registration successful');
        setShowingRegistrerForm(false);
    }
}