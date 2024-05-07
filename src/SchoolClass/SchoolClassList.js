import React, { useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import SchoolClass from './SchoolClass';
import SchoolClassSingle from './SchoolClassSingle';
import Misc from '../Utilities/Misc';



const SchoolClassList = (props) => {
    const schoolClasses = props.schoolClasses;
    const [searchCriteria, setSearchCriteria] =
        useState({name: "", department :"", teacher: ""});

    const updateFilter = (event) => {
        const { name, value } = event.target;
        setSearchCriteria({ ...searchCriteria, [name]: value });
    };

    return (
        <>
            <Row className="mb-3">
                <Col></Col>
                <Col>Name
                    <Form.Control className="mt-3" type="text" placeholder="Enter search criteria" name="name"
                        value={searchCriteria.name} onChange={updateFilter} size="sm">
                    </Form.Control>
                </Col>
                <Col>Teacher
                    <Form.Control className="mt-3" type="text" placeholder="Enter search criteria" name="teacher"
                                  value={searchCriteria.teacher} onChange={updateFilter} size="sm">
                    </Form.Control>
                </Col>
                <Col></Col>
            </Row>
            <hr />
            <Row className="mb-3">
                <Col>SchoolClassId</Col>
                <Col>Name</Col>
                <Col>Department</Col>
                <Col>Level</Col>
                <Col>Description</Col>
                <Col>Teacher</Col>
                <Col>Actions</Col>
                <Col>Actions</Col>
            </Row>

            {schoolClasses
                .filter((schoolClass) =>
                    schoolClass.name.includes(searchCriteria.name) &&  schoolClass.teacher.fullName.includes(searchCriteria.teacher))
                .map((schoolClass, index) => (
                    <SchoolClass
                        key={schoolClass.schoolClassId}
                        index={index}
                        schoolClass={schoolClass}
                        delete={props.delete}
                        edit={props.edit}
                    />
                ))}
        </>
    );
};

export default SchoolClassList;
