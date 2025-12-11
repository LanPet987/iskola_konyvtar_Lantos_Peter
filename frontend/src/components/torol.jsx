import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/torol.css"

function Torol() {
    const [konyvID, setKonyvID] = useState("");
    const [uzenet, setUzenet] = useState("");
    const handleTorles = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`http://localhost:3000/konyvek/${konyvID}`);
            setUzenet("Könyv sikeresen törölve.");
        } catch (error) {
            console.error("Hiba a könyv törlésekor:", error);
            setUzenet("Hiba történt a könyv törlésekor.");
        }
    };
    return (
        <div>
            <h2>Könyv törlése</h2>
            <form onSubmit={handleTorles}>
                <label>
                    Könyv ID:
                    <input
                        type="text"
                        value={konyvID}
                        onChange={(e) => setKonyvID(e.target.value)}
                    />
                </label>
                <button type="submit" id="torles">Törlés</button>
            </form>
            {uzenet && <p>{uzenet}</p>}
        </div>
    );
}

export default Torol;