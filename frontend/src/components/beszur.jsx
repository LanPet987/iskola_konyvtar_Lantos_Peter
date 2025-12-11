import React from "react";
import { useState } from "react";
import axios from "axios";

function Beszur() {
    const [cim, setCim] = useState("");
    const [szerzoID, setSzerzoID] = useState("");
    const [tID, setTID] = useState("");
    const [uzenet, setUzenet] = useState("");

    const handleBeszur = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/beszur", {
                cim,
                szerzo_ID: szerzoID,
                tID
            });
            setUzenet("Könyv sikeresen beszúrva.");
        } catch (error) {
            console.error("Hiba a könyv beszúrásakor:", error);
            setUzenet("Hiba történt a könyv beszúrásakor.");
        }
    };

    return (
        <div>
            <h2>Könyv beszúrása</h2>
            <form onSubmit={handleBeszur}>
                <label>
                    Cím:
                    <input
                        type="text"
                        value={cim}
                        onChange={(e) => setCim(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Szerző ID:
                    <input
                        type="text"
                        value={szerzoID}
                        onChange={(e) => setSzerzoID(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Típus ID:
                    <input
                        type="text"
                        value={tID}
                        onChange={(e) => setTID(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit" id="beszur">Beszúrás</button>
            </form>
            {uzenet && <p>{uzenet}</p>}
        </div>
    );
}

export default Beszur;

