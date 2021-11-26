import React, { useState, useEffect } from 'react';
// import fire from '../config/firebase'
import axios from 'axios'

const Fill = () => {

    const [inputs, setInputs] = useState({
        french: "",
        english: "",
        romanian: ""
    })

    const addClickedHandler = (event, id) => {
        event.preventDefault()

        const word = {
            french: inputs.french,
            english: inputs.english,
            romanian: inputs.romanian
        }

        axios.post('https://voka-5d13c-default-rtdb.europe-west1.firebasedatabase.app/words.json', word)
            .then(response => {
                console.log(response)
            })

        document.getElementById("french").value = ""
        document.getElementById("english").value = ""
        document.getElementById("romanian").value = ""

    }

    const inputChangedHandler = (event, id) => {
        const newInputs = { ...inputs }
        switch (id) {
            case 1:
                newInputs.french = event.target.value
                break;
            case 2:
                newInputs.english = event.target.value
                break;
            case 3:
                newInputs.romanian = event.target.value
                break;
            default:
                break;
        }
        setInputs(newInputs)
    }

    let form = (
        <form>
            <p>
                <label htmlFor="mot1">Français</label>
                <input onChange={(e) => inputChangedHandler(e, 1)} type="text" name="french" id="french" className="form-control"></input>
            </p>
            <p>
                <label htmlFor="mot1">Anglais</label>
                <input onChange={(e) => inputChangedHandler(e, 2)} type="text" name="english" id="english" className="form-control"></input>
            </p>
            <p>
                <label htmlFor="mot2">Roumain</label>
                <input onChange={(e) => inputChangedHandler(e, 3)} type="text" name="romanian" id="romanian" className="form-control"></input>
            </p>
            <button onClick={addClickedHandler} className="btn btn-outline-primary">Ajouter</button>
        </form>
    )

    return (



        <div className="container">
            <h1>Renseigner</h1>

            {form}
        </div>
    );
};

export default Fill;