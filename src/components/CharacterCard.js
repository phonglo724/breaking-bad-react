import React from 'react'

export default function CharacterCard(props) {

    return (
        <div>
            <div
            key={props.character.char_id}
            >
                <div className="character-front">
                    <img alt="crew" src={props.character.img} />
                    <h1>{props.character.nickname}</h1>
                </div>
                <div className="character-back">
                    <p>Name: {props.character.name}</p>
                </div>
            </div>
        </div>
    )
}
