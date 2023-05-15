import React, { useState } from "react";
import Registrer from "./Registrer";
import Constants from "../Utilities/Constants";
import AuthServices from "../Utilities/AuthServices";
import "../Utilities/LIStyle.css";
import { useNavigate } from "react-router-dom";

export default function LoggInn() {
    const [showingRegistrerForm, setShowingRegistrerForm] = useState(false);
    const nav = useNavigate();

    const initialFormData = Object.freeze({
        brukernavn: "Brukernavn",
        passord: "******"
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
                        nav("/Markedsplass");
                    } else {
                        feilmelding.innerHTML = "Feil brukernavn eller passord";
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
            {showingRegistrerForm === false && (
                <div>
                    <h1>APP2000 Prosjekt</h1>

                    <h2>Logg inn</h2>

                    <div className="mt-3">
                        <label className="h3 form-label">Brukernavn</label>
                        <input value={formData.brukernavn} name="brukernavn" type="text" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="mt-3">
                        <label className="h3 form-label">Passord</label>
                        <input value={formData.passord} name="passord" type="password" className="form-control" onChange={handleChange} />
                    </div>

                    <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Logg inn</button>
                    <button
                        onClick={() => setShowingRegistrerForm(true)}
                        className="btn btn-secondary btn-lg w-100 mt-3">
                        Har du ikke bruker? Registrer deg her
                    </button>
                    <div id="feilmelding"></div>
                </div>
            )}

            {showingRegistrerForm && <Registrer onBrukerCreated={onBrukerCreated} />}
        </div>
    );

    function onBrukerCreated(createdBruker) {
        if (createdBruker === null) {
            return
        }

        alert('Registrering vellykket');
        setShowingRegistrerForm(false);
    }
}