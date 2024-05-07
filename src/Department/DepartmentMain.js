import '../App.css';
import {useEffect, useState} from "react";
import Misc from "../Utilities/Misc";
import DepartmentDataService from "../Services/DepartmentDataService";
import {Button, Col, Container, Row} from "react-bootstrap";
import DepartmentList from "./DepartmentList";
import DepartmentSingle from "./DepartmentSingle";




const DepartmentsList = () => {

    //Zustände

    const [loadState, setLoadState] = useState({state: Misc.LoadState.Load, error: null});
    const [loadCrudState, setLoadCrudState] = useState({state: Misc.LoadState.Load, error: null});
    const [departments, setDepartments] = useState([]);
    const [mode, setMode] = useState(Misc.cBlank);
    const [currentDepartment, setCurrentDepartment] = useState({});
    const [crudState, setCrudState] = useState({state: Misc.LoadCrudState.Blank, message: ''});

    //Business Logic
    //lade die Liste der Department
    //fetch von React oder Methoden von Axios
    //Haupt(problem): Datenzugriff asynchron

    useEffect(() => {
        //load - lade die Liste der Department
        load();

    }, []);

    const load = async () => {

        DepartmentDataService.getAll()
            .then(response => {
                setDepartments(response.data);
                setLoadState({state: Misc.LoadState.Show});
            })
            .catch(error => setLoadState({
                state: Misc.LoadState.Error,
                error: error.message}))
    };


    const add = () =>{
        if (mode === Misc.LoadCrudState.Blank)
            setMode(Misc.LoadCrudState.Add);
        else
            setMode(Misc.LoadCrudState.Blank)

    }

    const edit = (departmentId) => {
        let department = departments.find(d => d.departmentId === departmentId);
        setCurrentDepartment(department);
        setMode(Misc.LoadCrudState.Edit);
    }

    const save = async (department) => {
        let response = true;
        console.log("save");
        try {
            //insert (create)
            if (department.departmentId === '') {
                response = await DepartmentDataService.create(department);
                const departmentNew = response.data;
                setDepartments([...departments, departmentNew]);
            }
            //update
            else {
                response = await DepartmentDataService.update(department);
                const departmentNew = response.data;
                setDepartments(departments.map(d => (d.departmentId === departmentNew.departmentId ? departmentNew : d)));
            }
            setCrudState({ state: Misc.LoadCrudState.Success, message: Misc.getTimeMessage("Successfully saved") });
        } catch (e) {
            setCrudState({ state: Misc.LoadCrudState.Error, message: e.response.data });
        }
    }


    const deleteF = async (departmentId) => {
        try {
            await DepartmentDataService.remove(departmentId);
            setDepartments(departments.filter(department => department.departmentId !== departmentId));
            setMode(Misc.cBlank);
            setCrudState({state: Misc.LoadCrudState.Delete, message: Misc.getTimeMessage("Successfully deleted")});
        } catch (e) {
            setCrudState({state: Misc.LoadCrudState.Error,message: e.response.data});
        }
    }


    //Layout
    return (
        <>
            {loadState.state === Misc.LoadState.Load && <Misc.Loading page="Department"/>}
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
                            <h3>Department</h3>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            Anzahl der Departments: {departments.length}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DepartmentList departments={departments}
                                         edit={edit}
                                         delete={deleteF}/>
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
                            {mode===Misc.LoadCrudState.Add && <DepartmentSingle save={save}/>}
                            {mode===Misc.LoadCrudState.Edit && <DepartmentSingle save={save} department={currentDepartment}/>}
                        </Col>
                    </Row>
                </Container>}
        </>
    );
}
export default DepartmentsList;