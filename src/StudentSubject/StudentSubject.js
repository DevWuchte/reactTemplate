import React from "react";
import { Col, Row } from "react-bootstrap";

const StudentSubject = (props) => {
    const studentSubject = props.studentSubject;

    const backgroundColor = studentSubject.grade === 5 ? 'red' : 'green';

    const gradeCellStyle = {
        backgroundColor: backgroundColor,
        padding: '5px',
        color: 'white',
        textAlign: 'center', 
        maxWidth: '100px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    };

    return (
        <>
        <Row>
            <Col>{studentSubject.studentSubjectId}</Col>
            <Col>{studentSubject.subject.name}</Col>
            <Col>{studentSubject.subject.nameShort}</Col>
            <Col><div style={gradeCellStyle}>{studentSubject.grade}</div></Col>
        </Row>
        </>
    );
            
}

export default StudentSubject;
