import React from "react";
import { useState } from "react";
import $ from "jquery";

function RegistrerBruker() {
    const [mail, setMail] = useState("");
	const [brukernavn, setBruker] = useState("");
    const [passord, setPassord] = useState("");
    const [result, setResult] = useState("");

    const handleMail = (e) => {
        setMail(e.target.value);
    };

    const handleBrukernavn = (e) => {
        setBruker(e.target.value);
    };

    const handlePassord = (e) => {
        setPassord(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };

	return (
		<div className="registrer">
            <h1>Registrer ny bruker</h1>
            <form
                action="http://localhost:8000/RegistrerBruker.php"
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <label htmlFor="mail">Mail: </label>
                <input
                    type="text"
                    id="mail"
                    name="mail"
                    value={mail}
                    onChange={(event) => handleMail(event)}
                />
                <label htmlFor="brukernavn">Brukernavn: </label>
                <input
                    type="text"
                    id="brukernavn"
                    name="brukernavn"
                    value={brukernavn}
                    onChange={(event) => handleBrukernavn(event)}
                />
                <label htmlFor="passord">Passord: </label>
                <input
                    type="password"
                    id="passord"
                    name="passord"
                    value={passord}
                    onChange={(event) => handlePassord(event)}
                />
                <br />
                <button type="submit">Registrer deg</button>
            </form>
            <h1>{result}</h1>
        </div>
	);
}

export default RegistrerBruker;
