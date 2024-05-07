import teacher from "./Student";
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row, Form} from "react-bootstrap";
import schoolClass from "../SchoolClass/SchoolClass";



const initialStudentState = {
    studentId: '',
    surname: 'TestW',
    firstname: 'TestW',
    sex: 'm',
    birthDate: '1990-01-01',
    weight: '',
    height: '',
    schoolClass: ''
};


const StudentSingle = (props) => {



    const update = (event) => {
        console.log()
        const {name, value} = event.target;
        if(name === "schoolClass") {
            setStudent({...student,[name]: {schoolClassId: value}});
        } else {
            setStudent({...student, [name]: value})
        }
    };


    const save = () => {

    };




    const [student, setStudent] = useState(initialStudentState);

    useEffect(() => {
        if (props.student) {
            setStudent(props.student)
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
                    <Form.Label htmlFor="studentId">StudentId</Form.Label>
                </Col>
                <Col sm="2">
                    <Form.Control type="number" name="studentId" value={student.studentId} readOnly disabled
                                  onChange={update}/>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm="2">
                    <Form.Label htmlFor="surname">Surname</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Surname" name="surname" value={student.surname}
                                  onChange={update}/>
                </Col>
                <Col sm="2">
                    <Form.Label htmlFor="firstname">Firstname</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Firstname" name="firstname" value={student.firstname}
                                  onChange={update}/>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm="2">
                    <Form.Label htmlFor="sex">Sex</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control as="select" name="sex" value={student.sex} onChange={update}>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </Form.Control>
                </Col>
                <Col sm="2">
                    <Form.Label htmlFor="birthDate">BirthDate</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="Enter BirthDate" name="birthDate" value={student.birthDate}
                                  onChange={update}/>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm="2">
                    <Form.Label htmlFor="weight">Weight</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Weight" name="weight" value={student.weight}
                                  onChange={update}/>
                </Col>
                <Col sm="2">
                    <Form.Label htmlFor="height">Height</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Height" name="height" value={student.height}
                                  onChange={update}/>
                </Col>
            </Row>
            <Row>
                <Col sm="2">
                    <Form.Label htmlFor="schoolClass">SchoolClass</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Select onChange={update} name="schoolClass">
                        <option value="">Select SchoolClass</option>
                        {props.schoolClasses.map(schoolClass => (
                            <option key={schoolClass.schoolClassId} value={schoolClass.schoolClassId}>{schoolClass.name}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
            <Row className="mt-4 mb-5">
                <Col lg="1">
                    <Button size="sm-1" variant="success" onClick={() => props.save(student)}>
                        {student.studentId === '' ? "Insert" : "Update"}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default StudentSingle;
