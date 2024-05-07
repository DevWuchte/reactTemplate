import React, {useState} from 'react';
import {Col, Row, Form} from "react-bootstrap";

import Teacher from "../Teacher/Teacher";
import StudentSubject from "../StudentSubject/StudentSubject";

const StudentSubjectList = (props) => {
    const studentSubjects = props.studentSubjects;
    const [searchCriteria, setSearchCriteria] = useState({grade: ""});

    const updateFilter = (event) => {
        const {name, value} = event.target;
        setSearchCriteria({...searchCriteria, [name]: value});
    }
    
    const filteredStudentSubjects = studentSubjects.filter(studentSubject => {
        if (!searchCriteria.grade) return true;
        return studentSubject.grade === parseInt(searchCriteria.grade);
    });

    return (
        <>
            <Row className="mb-3">
                <Col></Col>
                <Col>
                    Grade
                    <Form.Control
                        className="mt-3"
                        type="text"
                        placeholder="Enter search criteria"
                        name="grade"
                        value={searchCriteria.grade}
                        onChange={updateFilter}
                        size="sm"
                    />
                </Col>
                <Col></Col>
            </Row>
            <hr/>
            <Row className="mb-2">
                <Col className="mb-2">Id StudentSubject</Col>
                <Col>Gegenstand</Col>
                <Col>NameShort</Col>
                <Col>Note</Col>
            </Row>
            {filteredStudentSubjects.map((studentSubject, index) => (
                <StudentSubject
                    key={studentSubject.studentSubjectId}
                    index={index}
                    studentSubject={studentSubject}
                />
            ))}
        </>
    );
}

export default StudentSubjectList;
