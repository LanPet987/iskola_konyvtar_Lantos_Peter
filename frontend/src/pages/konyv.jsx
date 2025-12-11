import React from "react";
import Konyvek from "../components/konyvek";
import CustomNavbar from "../components/navbar.jsx";

function Konyv() {
    return (
        <div>
            <CustomNavbar />
            <Konyvek />
        </div>
    );
}
export default Konyv;