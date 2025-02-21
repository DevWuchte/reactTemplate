import React, {useState} from 'react'
import {Col, Row,Form} from "react-bootstrap";
import Teacher from "./Teacher";
import Misc from "../Utilities/Misc";

const TeacherList = (props) => {
    const teachers = props.teachers;
    const [searchCriteria, setSearchCriteria] =
        useState({teacherId: "", surname: "", firstname: "", shortName: "", sex: ""});

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
                <Col>ShortName
                    <Form.Control className="mt-3" type="text" placeholder="Enter search criteria" name="shortName"
                                  value={searchCriteria.shortName} onChange={updateFilter} size="sm">
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
                <Col>TeacherId</Col>
                <Col>Surname</Col>
                <Col>Firstname</Col>
                <Col>Shortname</Col>
                <Col>Sex</Col>
                <Col>Actions</Col>
            </Row>

            {/*{teachers.map(t => <Teacher teacher={t}></Teacher>)}*/}
            {/*  {teachers.filter(teacher => teacher.surname.includes(searchCriteria.surname)).map(teacher => <Teacher*/}
            {/*    teacher={teacher}/>)}*/}

            {teachers.filter(teacher => teacher.surname.includes(searchCriteria.surname)         &&
                teacher.firstname.includes(searchCriteria.firstname)     &&
                teacher.shortName.includes(searchCriteria.shortName)     &&
                teacher.sex.includes(searchCriteria.sex))
                .map((teacher, index) => (<Teacher key = {teacher.teacherId}
                                                   index = {index}
                                                   teacher = {teacher}
                                                   delete = {props.delete}
                                                   edit={props.edit} />))}
        </>
    )
}

export default TeacherList;