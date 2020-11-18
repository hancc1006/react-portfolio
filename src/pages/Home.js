import React, { useEffect, useState } from "react";
import Sidenav from "../components/SideNav/SideNav";
import Info from "../components/Info/homedescription";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Home() {
    return(
        <>
            <Nav/>
            <Info/>
            <Footer/>
        </>
    );
    
}

export default Home;
