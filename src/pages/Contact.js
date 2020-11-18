import React from "react";
import {Container} from "../components/Grid/index";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Nav from "../components/Navbar/Navbar";

function Contact() {
    return(
        <>
            <Nav />
            <Container>
                <Form/>
            </Container>
            <Footer/>
            
        </>
    );
    
}

export default Contact;
