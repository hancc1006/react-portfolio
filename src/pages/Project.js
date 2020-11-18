import React from "react";
import Card from "../components/Card/Card";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {Container, Col, Row} from "../components/Grid/index";
import directory from "../assets/directory.png";
import schema from "../assets/schema.png";
import budget from "../assets/Budget_Tracker.png";
import quiz from "../assets/Question start.png";
import snowy from "../assets/snowy-mountians.jpg";
import password from "../assets/03-javascript-homework-demo.png";
function Project() {
    return(
        <>
            <Nav/>
            <Container>
                <Row>
                    <Col size="sm-4">
                        <Card
                        title={"Employee Directory"}
                        image={directory}
                        description={"This project is to allow users to view their employee directory and sort and filter."}
                        github={"https://github.com/hancc1006/employee-directory.io"}
                        deployed={"https://emp-direct-01.herokuapp.com/"}
                        isDeployed={"Deployed"}/>
                    </Col>
                    <Col size="sm-4">
                        <Card
                        title={"Employee Tracker"}
                        image={schema}
                        description={"This allows users to add, remove, or view employees and department."}
                        github={"https://github.com/hancc1006/employee-tracker.io"}
                        deployed={""}
                        isDeployed={""}
                        />
                    </Col>
                    <Col size="sm-4">
                        <Card
                        title={"Budget Tracker"}
                        image={budget}
                        description={"This is a budget tracker that allows users to add or remove fund for their own goals"}
                        github={"https://github.com/hancc1006/budget-pwa.io"}
                        deployed={"https://budget-app-100.herokuapp.com/"}
                        isDeployed={"Deployed"}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4">
                        <Card 
                        title={"Coding Quiz"}
                        image={quiz}
                        description={
                        "This is a fun game to test the user's knowledge in coding."}
                        github={"https://github.com/hancc1006/coding_quiz.io"}
                        deployed={""}
                        isDeployed={""}
                        />
                    </Col>
                    <Col size="md-4">
                        <Card
                        title={"Readme File Generator"}
                        image={snowy}
                        description={"This will create a readme file for the github project."}
                        github={"https://github.com/hancc1006/node.io"}
                        deployed={""}
                        isDeployed={""}
                        />
                    </Col>
                    <Col size="md-4">
                        <Card
                        title={"Password Generator"}
                        image={password}
                        description={"Generates a random password for the user."}
                        github={"https://github.com/hancc1006/HW3.io"}
                        deployed={""}
                        isDeployed={""}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer/>
          
        </>
    );
    
}

export default Project;
