import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Department = (props) => {
    const department = props.department;

    return(
        <>
            <Row>
                <Col>{department.departmentId}</Col>
                <Col>{department.name}</Col>
                <Col>{department.nameShort}</Col>
                <Col className="mb-1">
                    <Button variant={"success"} className="me-1"  onClick={() => props.edit(department.departmentId)} >Edit</Button>
                    <Button variant={"danger"} className="me-1" onClick={() => props.delete(department.departmentId)} >Delete</Button>
                </Col>
                <Col>
                    <Link to={`${department.departmentId}/schoolClasses`}>
                        <Button size="sm=3" variant="primary">Schulklassen</Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}
export default Department;