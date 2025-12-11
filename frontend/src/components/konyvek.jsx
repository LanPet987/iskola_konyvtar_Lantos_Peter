import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/table.css"
import "../css/konyvek.css"

function Konyvek() {
    const [konyvek, setKonyvek] = useState([]);
    useEffect(() => {
        const fetchKonyvek = async () => {
            try {
                const response = await axios.get("http://localhost:3000/konyvek");
                setKonyvek(response.data);
            } catch (error) {
                console.error("Hiba a könyvek lekérésekor:", error);
            }
        };
        fetchKonyvek();
    }, []);

    return (
        <div >
            <h2>Könyvek listája</h2>
            <table>
                <thead>
                    <tr>
                        <th>Könyv ID</th>
                        <th>Cím</th>
                        <th>Szerző ID</th>
                        <th>Tanuló ID</th>
                    </tr>
                </thead>
                <tbody>
                    {konyvek.length > 0 ?
                        konyvek.map((konyv) => (
                            <tr key={konyv.konyv_ID}>
                                <td>{konyv.konyv_ID}</td>
                                <td>{konyv.cim}</td>
                                <td>{konyv.szerzo_ID}</td>
                                <td>{konyv.tID}</td>
                            </tr>
                        )) : <tr><td colSpan="4">Nincs megjeleníthető könyv</td></tr>}
                </tbody>
            </table>
        </div>
    )
}
export default Konyvek;