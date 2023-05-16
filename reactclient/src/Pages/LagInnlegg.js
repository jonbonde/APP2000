import React, { useState } from "react";
import Constants from "../Utilities/Constants";

export default function LagInnlegg(props) {
    const initialFormData = Object.freeze({
        title: "Innlegg x",
        content: "Dette er innlegg x og inneholder en kul beskrivelse",
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
            bilde: nyBilde
        };

        const url = Constants.API_URL_CREATE_POST;

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
        <form className="w-100 px-5">
            <h1 className="mt-5">Lag nytt innlegg</h1>

            <div className="mt-5">
                <label className="h3 form-label">Tittel</label>
                <input value={formData.title} name="title" type="text" className="form-control" onChange={handleChange} />
            </div>

            <div className="mt-4">
                <label className="h3 form-label">Beskrivelse</label>
                <input value={formData.content} name="content" type="text" className="form-control" onChange={handleChange} />
            </div>

            <div className="mt-4">
                <label className="h3 form-label">Last opp bilde</label>
                <input value={formData.bilde} name="bilde" type="file" className="form-control" accept="image/jpeg, image/png, image/jpg, image/webp" onChange={handleChange} />
            </div>

            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Send inn</button>
            <button onClick={() => props.onPostCreated(null)} className="btn btn-secondary btn-lg w-100 mt-3">Nullstill</button>
        </form>
    );
}
