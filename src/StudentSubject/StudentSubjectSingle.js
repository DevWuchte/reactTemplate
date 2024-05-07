import studentSubject from "./StudentSubject";
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row, Form} from "react-bootstrap";


const StudentSubjectSingle = (props) => {
    const update = (event) => {
        console.log()
        const {name,value} = event.target;
        setStudentSubject({...studentSubject,[name]:value})
    };

    const save = () => {

    };


    const initialStudentSubjectState = {
        studentSubjectId: '',
        
    };

    const [studentSubject, setStudentSubject] = useState(initialStudentSubjectState);

    useEffect(() => {
        if (props.studentSubject) {
            setStudentSubject(props.studentSubject)
        }
    }, [props]);

    return (
        <Container fluid>
            <Row className="mb-3">
                <Col sm="12">
                    <hr/>
                    <h3>Stammdaten</h3>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm="2">
                    <Form.Label htmlFor="studentSubjectId">StudentSubjectId</Form.Label>
                </Col>
                <Col sm="2">
                    <Form.Control type="number" name="studentSubjectId" value={studentSubject.studentSubjectId} readOnly disabled
                                  onChange={update}/>
                </Col>
            </Row>
            <Row className="mt-4 mb-5">
                <Col lg="1">
                    <Button size="sm-1" variant="success" onClick={() => props.save(studentSubject)}
                          disabled =  {studentSubject.studentSubjectId === '' ? "Insert" : "Update"}
                    >
                         {studentSubject.studentSubjectId === '' ? "Insert" : "Update"}
                    </Button>
                </Col>
            </Row>
            <Row>
            </Row>
        </Container>
    );
};

export default StudentSubjectSingle;
