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
            <section>
                <h1 className="title">
                    <span>B</span>
                    <span>R</span>
                    <span>E</span>
                    <span>A</span>
                    <span>K</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>                    
                    <span> &nbsp; B</span>
                    <span>A</span>
                    <span>D</span>
                </h1>
            </section>
            <ul>
                { displayCharacters() }
            </ul>
        </div>
    )
}
