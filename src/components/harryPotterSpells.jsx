import { useState, useEffect } from "react"

export default function HarryPotterSpells() {
    const [spell, setSpell] = useState([])
    useEffect(() => {
        const fetchSpell = async() => {
            try {
                const response = await fetch(`https://hp-api.herokuapp.com/api/spells`)
                const data = await response.json()
                setSpell(data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchSpell()
    }, [])
    console.log(spell[0])
    return (
        <div className="spells-image-container">
            <div className="name-container">
                <img className="spells-image" src="src/assets/h-p-spells.jpeg" />
                <p className="name">Harry Potter spells</p>
            </div>
        </div>
    )
}