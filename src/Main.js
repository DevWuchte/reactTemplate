import React from "react";
import { Col, Row, Form } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Main = () => {


    return (
    <>
        {
         <Row>
            <Col sm={3}>
                <ul>
                    <hr/>
                    <h1>React Main-App</h1>
                    <hr/>
                    <li><Link to="/departments">Departments</Link></li>
                    <hr/>
                    <li><Link to="/schoolClasses">SchoolClasses</Link></li>
                    <hr/>
                    <li><Link to="/students">Students</Link></li>
                    <hr/>
                    <li><Link to="/teachers">Teachers</Link></li>
                    <hr/>
                    <li><Link to="/students/1/studentSubjects">StudentSubjects von Student 1</Link></li>
                    <hr/>
                    <li><Link to="/departments/1/schoolClasses">SchulKlassen der BG</Link></li>
                </ul>
            </Col>
         </Row>
        }
    </>)
}
export default Main