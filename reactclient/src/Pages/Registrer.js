import React, { useState } from "react";
import Constants from "../Utilities/Constants";
import "../Utilities/LIStyle.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoggInn(props) {
    const initialFormData = Object.freeze({
        epost: "",
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

        const brukerToCreate = {
            brukerId: 0,
            epost: formData.epost,
            brukernavn: formData.brukernavn,
            passord: formData.passord,
        }

        const url = Constants.API_URL_CREATE_BRUKER;

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(brukerToCreate)
        })
            .then((response) => response.json())
            .then((responseFromServer) => {
                console.log(responseFromServer)
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onBrukerCreated(brukerToCreate);
    };

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="RegistrerContainer">
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

            <h2>Create account</h2>
            <div className="mt-3">
                <label className="h3 form-label">Email</label>
                <input value={formData.epost} name="epost" type="text" className="form-control" placeholder="email@mail.com" onChange={handleChange} />
            </div>

            <div className="mt-3">
                <label className="h3 form-label">Username</label>
                <input value={formData.brukernavn} name="brukernavn" type="text" className="form-control" placeholder="Username" onChange={handleChange} />
            </div>

            <div className="mt-3">
                <label className="h3 form-label">Password</label>
                <input value={formData.passord} name="passord" type="password" className="form-control" placeholder="●●●●●●●●" onChange={handleChange} />
            </div>

            {/* <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Register</button> */}
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
                            Create account
                    </motion.a>
            {/* <button onClick={refreshPage} className="btn btn-secondary btn-lg w-100 mt-3">Tilbake til logg inn</button> */}
            <motion.div
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
                        onClick={refreshPage}
                        className="button button2" >
                            <Link to="/LoggInn">Back to log in</Link>
                    </motion.div>
        </div>
    );
}