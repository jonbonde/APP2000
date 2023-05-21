import React, { useState } from "react";
import Constants from "../Utilities/Constants";
import { motion } from "framer-motion";

export default function LagInnlegg(props) {
    const navn = window.localStorage.getItem("navn");
    const initialFormData = Object.freeze({
        title: "",
        content: "",
        bilde: ""
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const nyBilde = "..\\Utilities\\Bilder" + formData.bilde.slice(11);

    const handleSubmit = (e) => {
        e.preventDefault();

        const postToCreate = {
            postId: 0,
            title: formData.title,
            content: formData.content,
            bilde: nyBilde,
            brukerNavn: navn
        };

        const bildeToCreate = {
            bildeNavn: nyBilde,
            file: formData.bilde
        }

        const url = Constants.API_URL_CREATE_POST;
        const bildeUrl = Constants.API_URL_UPLOAD_BILDE;

        fetch(bildeUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bildeToCreate)
        })
            .then((response) => response.json())
            .then((responseFromServer) => {
                console.log(responseFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
                console.log(bildeToCreate);
            });

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postToCreate)
        })
            .then((response) => response.json())
            .then((responseFromServer) => {
                console.log(responseFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onPostCreated(postToCreate);
    };

    return (
        <form className="skjema">
            <h1 className="skjemaTitle">Create new commission</h1>

            <div className="mt-5">
                <label className="h3 form-label">Title</label>
                <input value={formData.title} name="title" type="text" className="form-control" placeholder="Commission title" onChange={handleChange} required />
            </div>

            {/* <div className="mt-4 ">
                <label className="h3 form-label">Beskrivelse</label>
                <input value={formData.content} name="content" type="text" className="form-control" rows="3" onChange={handleChange} />
            </div> */}

            <div className="mt-4 ">
                <label className="h3 form-label">Description</label>
                <textarea value={formData.content} name="content" type="text" className="form-control" placeholder="Give some details on how you want your website to look and feel" rows="3" onChange={handleChange} required />
            </div>


            <div className="mt-4">
                {/* <label className="h3 form-label">Last opp bilde</label>
                <input value={formData.bilde} name="bilde" type="file" className="form-control" accept="image/jpeg, image/png, image/jpg, image/webp" onChange={handleChange} /> */}
                <label className="h3 form-label">Upload a picture</label>
                <input value={formData.bilde} name="bilde" type="file" className="form-control" accept="image/jpeg, image/png, image/jpg, image/webp" onChange={handleChange} />
            </div>
            <div className="toWireframe">
                <motion.a
                    initial={{
                        color: "white",
                        backgroundImage: "linear-gradient(130deg, #e91779, #244dd1)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 87,
                        damping: 15.5,
                    }}

                    whileHover={{
                        //scale:1.02,
                        borderRadius: "100px",
                        backgroundImage: "linear-gradient(130deg, #fff, #fff)",
                        color: "#e91779"
                    }}
                    whileTap={{
                        scale: 0.9
                    }}

                    href="/Test"
                    className="bigButton button1" >
                    Create a wireframe
                </motion.a>
            </div>
            <div className="submitReset">
                <motion.a
                    initial={{
                        color: "white",
                        backgroundImage: "linear-gradient(130deg, #e91779, #244dd1)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 87,
                        damping: 15.5,
                    }}

                    whileHover={{
                        //scale:1.02,
                        borderRadius: "100px",
                        backgroundImage: "linear-gradient(130deg, #fff, #fff)",
                        color: "#e91779"
                    }}
                    whileTap={{
                        scale: 0.9
                    }}

                    onClick={handleSubmit}
                    className="submitButton" >
                    Submit
                </motion.a>
                <motion.a
                    initial={{
                        color: "white",
                        backgroundImage: "linear-gradient(130deg, #e91779, #244dd1)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 87,
                        damping: 15.5,
                    }}

                    whileHover={{
                        //scale:1.02,
                        borderRadius: "100px",
                        backgroundImage: "linear-gradient(130deg, #fff, #fff)",
                        color: "#e91779"
                    }}
                    whileTap={{
                        scale: 0.9
                    }}

                    onClick={() => props.onPostCreated(null)}
                    className="resetButton" >
                    Reset forms
                </motion.a>
            </div>
            {/* <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Send inn</button>
            <button onClick={() => props.onPostCreated(null)} className="btn btn-secondary btn-lg w-100 mt-3">Nullstill</button> */}
        </form>
    );
}