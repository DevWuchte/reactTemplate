import schoolClass from "./SchoolClass";
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row, Form} from "react-bootstrap";
import department from "../Department/Department";
import teacher from "../Teacher/Teacher";


const SchoolClassSingle = (props) => {


    const initialSchoolClassState = {
        schoolClassId: '',
        name: 'TestW',
        level: '10',
        description: 'TestW',
        department: {departmentId: 0},
        teacher: ''
    };
    
    //Wenn nur ein 1 Department im props.departments mitgebeben wurde soll diese DepartmentId in der neuen SchoolClass hinterlegt werden 
    if(!Array.isArray(props.departments)) {
        initialSchoolClassState.department.departmentId = props.departments.departmentId;
    }
    useEffect(() => {
        console.log(props.departments, "DEPARTMENTS in SchoolClassSingle")
    }, []);
    const [schoolClass, setSchoolClass] = useState(initialSchoolClassState);

   
    
    const update = (event) => {
        const { name, value } = event.target;
        if (name === "department") {
            setSchoolClass({ ...schoolClass, [name]: { departmentId : value} });
        } else if (name === "teacher") {
            setSchoolClass({ ...schoolClass, [name]: { teacherId: value } });
        } else {
            setSchoolClass({ ...schoolClass, [name]: value });
        }
    };


    

    useEffect(() => {
        if (props.schoolClass) {
            setSchoolClass(props.schoolClass)
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
                    <Form.Label htmlFor="schoolClassId">SchoolClassId</Form.Label>
                </Col>
                <Col sm="2">
                    <Form.Control type="number" name="schoolClassId" value={schoolClass.schoolClassId} readOnly disabled
                                  onChange={update}/>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm="2">
                    <Form.Label htmlFor="name">Name</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Name" name="name" value={schoolClass.name}
                                  onChange={update}/>
                </Col>
                <Col sm="2">
                    <Form.Label htmlFor="department">Department</Form.Label>
                </Col>
                <Col sm="4">
                    {Array.isArray(props.departments) ? (
                        <Form.Select onChange={update} name="department" value={schoolClass.department.departmentId}>
                            <option value="">Select Department</option>
                            {props.departments.map(department => (
                                <option key={department.departmentId} value={department.departmentId}>{department.name}</option>
                            ))}
                        </Form.Select>
                    ) : (
                        <Form.Control type="text" placeholder={props.departments.name} disabled name="department" value={props.departments.name}>
                        </Form.Control>
                    )}
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm="2">
                    <Form.Label htmlFor="level">Level</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Level" name="level" value={schoolClass.level}
                                  onChange={update}/>
                </Col>
                <Col sm="2">
                    <Form.Label htmlFor="title">Description</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Description" name="description"
                                  value={schoolClass.description}
                                  onChange={update}/>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm="2">
                    <Form.Label htmlFor="teacher">Teacher</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Select onChange={update} name="teacher" value={schoolClass.teacher.teacherId}>
                        <option value="">Select Teacher</option>
                        {props.teachers.map(teacher => (
                            <option key={teacher.teacherId} value={teacher.teacherId}>{teacher.fullName}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
            <Row className="mt-4 mb-5">
                <Col lg="1">
                    <Button size="sm-1" variant="success" onClick={() => 
                    {console.log(schoolClass,"SchoolCLass")
                        props.save(schoolClass)}}>
                        {schoolClass.schoolClassId === '' ? "Insert" : "Update"}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SchoolClassSingle;
