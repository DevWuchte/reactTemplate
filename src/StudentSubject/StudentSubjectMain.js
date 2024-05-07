import '../App.css';
import { useEffect, useState } from "react";
import StudentSubjectDataService from "../Services/StudentSubjectDataService";
import Misc from "../Utilities/Misc";
import { Button, Col, Container, Row } from "react-bootstrap";
import StudentSubjectList from "./StudentSubjectList";
import StudentSubjectSingle from "./StudentSubjectSingle";
import SchoolClassDataService from "../Services/SchoolClassDataService";
import { useParams } from "react-router-dom";
import StudentDataService from "../Services/StudentDataService"
const StudentSubjectsList = (props) => {
    const { id } = useParams(); 

    // Zustände
    const [loadState, setLoadState] = useState({ state: Misc.LoadState.Load, error: null });
    const [studentSubjects, setStudentSubjects] = useState([]);
    const [mode, setMode] = useState(Misc.cBlank);
    const [currentStudentSubject, setCurrentStudentSubject] = useState({});
    const [crudState, setCrudState] = useState({ state: Misc.LoadCrudState.Blank, message: '' });
    const [schoolClasses, setSchoolClasses] = useState([]);

    useEffect(() => {
        load(id);

    }, [id]);

    const load = async (id) => {
        try {
            if (id) {
                const response = await StudentDataService.studentSubjects(id);
                setStudentSubjects(response.data);
                setLoadState({ state: Misc.LoadState.Show });
            } else {
                const response = await StudentSubjectDataService.getAll();
                setStudentSubjects(response.data);
                setLoadState({ state: Misc.LoadState.Show });
            }
        } catch (error) {
            // Fehlerbehandlung
            setLoadState({ state: Misc.LoadState.Error, error: error.message });
        }
    };
    
    

    // Layout
    return (
        <>
            {loadState.state === Misc.LoadState.Load && <Misc.Loading page="StudentSubject" />}
            {loadState.state === Misc.LoadState.Error && <Misc.Error message={loadState.error} />}
            {loadState.state === Misc.LoadState.Show &&
                <Container fluid>
                    <Row className="mt-3">
                        <Col lg="1">

                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <h3>Student Subjects</h3>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            Number of Student Subjects: {studentSubjects.length}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <StudentSubjectList studentSubjects={studentSubjects}/>
                        </Col>
                    </Row>
                </Container>}
        </>
    );
};

export default StudentSubjectsList;
