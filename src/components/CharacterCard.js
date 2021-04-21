import React from 'react';

export default function CharacterCard(props) {

    return (
        <div className="character-container">
            <div
            key={props.character.char_id}
            className="character-card"
            >
                <div className="character-front">
                    <img alt="crew" src={props.character.img} className="cast-image" />
                    <h1 className="nickname">{props.character.nickname}</h1>
                </div>
                <div className="character-back">
                    <p><u>Name:</u> {props.character.name}</p>
                    <p><u>Occupation:</u> {props.character.occupation}</p>
                </div>
            </div>
        </div>
    )
}
