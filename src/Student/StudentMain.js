import '../App.css';
import {useEffect, useState} from "react";
import StudentDataService from "../Services/StudentDataService";
import Misc from "../Utilities/Misc";
import {Button, Col, Container, Row} from "react-bootstrap";
import StudentList from "./StudentList";
import StudentSingle from "./StudentSingle";
import SchoolClassDataService from "../Services/SchoolClassDataService";
import {useParams} from "react-router-dom";



const StudentsList = (props) => {

    //Zustände
    const [loadState, setLoadState] = useState({state: Misc.LoadState.Load, error: null});
    const [loadCrudState, setLoadCrudState] = useState({state: Misc.LoadState.Load, error: null});
    const [students, setStudents] = useState([]);
    const [mode, setMode] = useState(Misc.cBlank);
    const [currentStudent, setCurrentStudent] = useState({});
    const [crudState, setCrudState] = useState({state: Misc.LoadCrudState.Blank, message: ''});
    const [schoolClasses, setSchoolClasses] = useState([]);

    const {id} = useParams();
    const from = props.from;


    useEffect(() => {
        //lade die Listen.
        load(id);
        loadSchoolClasses();

    }, [id]);

    const load = async (id) => {
        try {
            if (id) {
                if (from == "schoolClass") {
                    const response = await SchoolClassDataService.students(id);
                    setStudents(response.data);
                }
            }else {
                const response = await StudentDataService.getAll();
                setStudents(response.data)
            }
        } catch (e) {
            console.log(e)
        }
    };

    const loadSchoolClasses = async () => {
        SchoolClassDataService.getAll()
            .then(response => {
                setSchoolClasses(response.data);
                setLoadState({state: Misc.LoadState.Show});
            })
            .catch(error => setLoadState({
                state: Misc.LoadState.Error,
                error: error.message
            }))
    };

    const add = () =>{
        if (mode === Misc.LoadCrudState.Blank)
            setMode(Misc.LoadCrudState.Add);
        else
            setMode(Misc.LoadCrudState.Blank)

    }

    const edit = (studentId) => {
        let student = students.find(s => s.studentId === studentId);
        setCurrentStudent(student);
        setMode(Misc.LoadCrudState.Edit);
    }

    const save = async (student) => {
        let response = true;
        console.log("save");
        try {
            //insert (create)
            if (student.studentId === '') {
                response = await StudentDataService.create(student);
                const studentNew = response.data;
                setStudents([...students, studentNew]);
            }
            //update
            else {
                response = await StudentDataService.update(student);
                const studentNew = response.data;
                setStudents(students.map(s => (s.studentId === studentNew.studentId ? studentNew : s)));
            }
            setCrudState({ state: Misc.LoadCrudState.Success, message: Misc.getTimeMessage("Successfully saved") });
        } catch (e) {
            setCrudState({ state: Misc.LoadCrudState.Error, message: e.response.data });
        }
    }


    const deleteF = async (studentId) => {
        try {
            await StudentDataService.remove(studentId);
            setStudents(students.filter(student => student.studentId !== studentId));
            setMode(Misc.cBlank);
            setCrudState({state: Misc.LoadCrudState.Delete, message: Misc.getTimeMessage("Successfully deleted")});
        } catch (e) {
            setCrudState({state: Misc.LoadCrudState.Error,message: e.response.data});
        }
    }


    //Layout
    return (
        <>
            {loadState.state === Misc.LoadState.Load && <Misc.Loading page="Student"/>}
            {loadState.state === Misc.LoadState.Error && <Misc.Error message={loadState.error}/>}
            {loadState.state === Misc.LoadState.Show &&
                <Container fluid>
                    <Row className="mt-3">
                        <Col lg="1">
                            <Button size="sm-1" variant="success" onClick={add} active>
                                Add
                            </Button>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <h3>Student/innen</h3>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            Anzahl der Student/innen: {students.length}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <StudentList students={students}
                                         edit={edit}
                                         delete={deleteF}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className={crudState.state === Misc.LoadCrudState.Error ? 'text-danger' : 'text-success'}>
                            <h4>{crudState.message}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {mode===Misc.LoadCrudState.Blank &&<></>}
                            {mode===Misc.LoadCrudState.Add && <StudentSingle save={save} schoolClasses={schoolClasses}/>}
                            {mode===Misc.LoadCrudState.Edit && <StudentSingle save={save} student={currentStudent} schoolClasses={schoolClasses}/>}
                        </Col>
                    </Row>
                </Container>}
        </>
    );
}
export default StudentsList;