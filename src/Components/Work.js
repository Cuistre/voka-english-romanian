import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Work = () => {

    const [word, setWord] = useState({})
    const [words, setWords] = useState([])
    const [english, setEnglish] = useState(false)
    const [romanian, setRomanian] = useState(false)

    useEffect(() => {
        axios.get('https://voka-5d13c-default-rtdb.europe-west1.firebasedatabase.app/words.json')
            .then(response => {
                let Words = []
                for (let key in response.data) {
                    Words.push({
                        ...response.data[key],
                        id: key
                    })
                }

                let index = Math.floor(Math.random() * Words.length)
                setWord(Words[index])
                setWords(Words)
            })
    }, [])

    const onClickedEnglish = () => {
        let newEnglish = { ...english }
        newEnglish = true
        setEnglish(newEnglish)
    }

    const onClickedRomanian = () => {
        let newRomanian = { ...romanian }
        newRomanian = true
        setRomanian(newRomanian)
    }

    const onClickedNewWord = () => {
        let index = Math.floor(Math.random() * words.length)
        setWord(words[index])

        let newEnglish = { ...english }
        newEnglish = false
        setEnglish(newEnglish)

        let newRomanian = { ...romanian }
        newRomanian = false
        setRomanian(newRomanian)
    }

    return (
        <div>
            <h1>Réviser</h1>

            <div className="container">
                <div className="row bg-light align-items-center">
                    <div className="col-4">
                        <div className="p-4 text-dark">
                            Français
                        </div>
                    </div>
                    <div className="col-4">
                        <button onClick={onClickedEnglish} className="btn btn-outline-primary">Anglais</button>
                    </div>
                    <div className="col-4">
                        <button onClick={onClickedRomanian} className="btn btn-outline-primary">Roumain</button>
                    </div>
                </div>

                <div className="row bg-light mt-4 align-items-center">
                    <div className="col-4">
                        <div className="p-4 text-dark">
                            {word.french}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="p-4 text-dark">
                            {english ? word.english : ""}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="p-4 text-dark">
                            {romanian ? word.romanian : ""}
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={onClickedNewWord} className="btn btn-outline-secondary mt-3">Mot suivant</button>

        </div>
    );
};

export default Work;