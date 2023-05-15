import React, { useState } from "react";
import Constants from "../Utilities/Constants";
import "../Utilities/LIStyle.css";

export default function LoggInn(props) {
    const initialFormData = Object.freeze({
        epost: "epost@mail.com",
        brukernavn: "Kult brukernavn",
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
        <div className="container">
            <h1>APP2000 Prosjekt</h1>

            <h2>Registrer deg</h2>
            <div className="mt-3">
                <label className="h3 form-label">Epost</label>
                <input value={formData.epost} name="epost" type="text" className="form-control" onChange={handleChange} />
            </div>

            <div className="mt-3">
                <label className="h3 form-label">Brukernavn</label>
                <input value={formData.brukernavn} name="brukernavn" type="text" className="form-control" onChange={handleChange} />
            </div>

            <div className="mt-3">
                <label className="h3 form-label">Passord</label>
                <input value={formData.passord} name="passord" type="password" className="form-control" onChange={handleChange} />
            </div>

            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Registrer</button>
            <button onClick={refreshPage} className="btn btn-secondary btn-lg w-100 mt-3">Tilbake til logg inn</button>
        </div>
    );
}