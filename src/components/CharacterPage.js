import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterPage(props) {

    const displayCharacters = () => props.characters.map(character => {
        return <CharacterCard 
            key={character.char_id} 
            character={character}
        />
    })

    return (
        <div>
            <ul>
                { displayCharacters() }
            </ul>
        </div>
    )
}
