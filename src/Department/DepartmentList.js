import React, {useState} from 'react'
import {Col, Row,Form} from "react-bootstrap";
import Department from "./Department";

const DepartmentList = (props) => {
    const departments = props.departments;
    const [searchCriteria, setSearchCriteria] =
        useState({departmentId: "", name: "", nameShort: ""});

    const updateFilter = (event) => {
        const {name, value} = event.target;
        console.log(event)
        setSearchCriteria({...searchCriteria, [name]: value})
        console.log(searchCriteria)
    }


    return (
        <>
            <Row className="mb-3">
                <Col></Col>
                <Col>Name
                    <Form.Control className="mt-3" type="text" placeholder="Enter search criteria" name="name"
                                  value={searchCriteria.name} onChange={updateFilter} size="sm">
                    </Form.Control>
                </Col>
                <Col>ShortName
                    <Form.Control className="mt-3" type="text" placeholder="Enter search criteria" name="nameShort"
                                  value={searchCriteria.nameShort} onChange={updateFilter} size="sm">
                    </Form.Control>
                </Col>
                <Col></Col>
            </Row>
            <hr/>
            <Row className="mb-3">
                <Col>DepartmentId</Col>
                <Col>Name</Col>
                <Col>ShortName</Col>
                <Col>Action</Col>
                <Col>Action</Col>
            </Row>


            {departments.filter(department => department.name.includes(searchCriteria.name)         &&
                department.name.includes(searchCriteria.name)     &&
                department.nameShort.includes(searchCriteria.nameShort))
                .map((department, index) => (<Department key = {department.departmentId}
                                                   index = {index}
                                                   department = {department}
                                                   delete = {props.delete}
                                                   edit={props.edit} />))}
        </>
    )
}

export default DepartmentList;