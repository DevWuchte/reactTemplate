import department from "./Department";
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row, Form} from "react-bootstrap";


const DepartmentSingle = (props) => {
    const update = (event) => {
        console.log()
        const {name,value} = event.target;
        setDepartment({...department,[name]:value})
    };

    const save = () => {

    };


    const initialDepartmentState = {
        departmentId: '',
        name: 'AAA',
        nameShort: 'AAA',
    };

    const [department, setDepartment] = useState(initialDepartmentState);

    useEffect(() => {
        if (props.department) {
            setDepartment(props.department)
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
                    <Form.Label htmlFor="departmentId">DepartmentId</Form.Label>
                </Col>
                <Col sm="2">
                    <Form.Control type="number" name="departmentId" value={department.departmentId} readOnly disabled
                                  onChange={update}/>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm="2">
                    <Form.Label htmlFor="name">Name</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Name" name="name" value={department.name}
                                  onChange={update}/>
                </Col>
                <Col sm="2">
                    <Form.Label htmlFor="nameShort">NameShort</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="Enter NameShort" name="nameShort" value={department.nameShort}
                                  onChange={update}/>
                </Col>
            </Row>
            <Row className="mt-4 mb-5">
                <Col lg="1">
                    <Button size="sm-1" variant="success" onClick={() => props.save(department)}
                          disabled =  {department.departmentId === '' ? "Insert" : "Update"}
                    >
                         {department.departmentId === '' ? "Insert" : "Update"}
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Insert, Update or Delete is not yet possible in this table! Buttons are distable!</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default DepartmentSingle;
