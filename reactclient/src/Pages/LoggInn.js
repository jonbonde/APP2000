import React, { useState } from "react";
import Registrer from "./Registrer";
import Constants from "../Utilities/Constants";
import AuthServices from "../Utilities/AuthServices";

export default function LoggInn() {
    const [showingRegistrerForm, setShowingRegistrerForm] = useState(false);

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

    

    return (
        <div className="container">
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

                    <button onClick={loggInn} className="btn btn-dark btn-lg w-100 mt-5">Logg inn</button>
                    <button
                        onClick={() => setShowingRegistrerForm(true)}
                        className="btn btn-secondary btn-lg w-100 mt-3">
                        Har du ikke bruker? Registrer deg her
                    </button>
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