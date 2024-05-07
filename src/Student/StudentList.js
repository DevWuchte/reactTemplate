import React, {useState} from 'react'
import {Col, Row,Form} from "react-bootstrap";
import Student from "./Student";
import Teacher from "../Teacher/Teacher";

const StudentList = (props) => {
    const students = props.students;
    const [searchCriteria, setSearchCriteria] =
        useState({studentId: "", surname: "", firstname: "", sex: "", birthDate: "", weight: "", height:""});

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
                <Col>Surname
                    <Form.Control className="mt-3" type="text" placeholder="Enter search criteria" name="surname"
                                  value={searchCriteria.surname} onChange={updateFilter} size="sm">
                    </Form.Control>
                </Col>
                <Col>Firstname
                    <Form.Control className="mt-3" type="text" placeholder="Enter search criteria" name="firstname"
                                  value={searchCriteria.firstname} onChange={updateFilter} size="sm">
                    </Form.Control>
                </Col>
                <Col>Sex
                    <Form.Control className="mt-3" type="text" placeholder="Enter search criteria" name="sex"
                                  value={searchCriteria.sex} onChange={updateFilter} size="sm">
                    </Form.Control>
                </Col>
                <Col></Col>
            </Row>
            <hr/>
            <Row className="mb-3">
                <Col>StudentId</Col>
                <Col>Surname</Col>
                <Col>Firstname</Col>
                <Col>Sex</Col>
                <Col>Birthdate</Col>
                <Col>Weight</Col>
                <Col>Height</Col>
                <Col>Actions</Col>
                <Col>Actions</Col>
            </Row>
            {/*{students.map(t => <Student student={t}></Student>)}*/}
            {/*  {students.filter(student => student.surname.includes(searchCriteria.surname)).map(student => <Student*/}
            {/*    student={student}/>)}*/}

            {students.filter(student => student.surname.includes(searchCriteria.surname) &&
                student.firstname.includes(searchCriteria.firstname)     &&
                student.sex.includes(searchCriteria.sex))
                .map((student, index) => (<Student key = {student.studentId}
                                               index = {index}
                                               student = {student}
                                               delete = {props.delete}
                                               edit={props.edit} />))}
        </>
    )
}

export default StudentList;