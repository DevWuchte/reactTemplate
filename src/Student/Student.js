import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

const Student = (props) => {
    const student = props.student;

    return(
        <>
            <Row>
                <Col>{student.studentId}</Col>
                <Col>{student.surname}</Col>
                <Col>{student.firstname}</Col>
                <Col>{student.sex}</Col>
                <Col>{student.birthDate}</Col>
                <Col>{student.weight}</Col>
                <Col>{student.height}</Col>
                <Col className="mb-1">
                    <Button variant={"success"} className="me-1"  onClick={() => props.edit(student.studentId)} >Edit</Button>
                    <Button variant={"danger"} className="me-1"  onClick={() => props.delete(student.studentId)} >Delete</Button>
                </Col>
                <Col>
                    <Link to={`/students/${student.studentId}/studentSubjects`}>
                        <Button size="sm=3" variant="primary">StudentSubjects</Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}
export default Student;