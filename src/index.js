import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TeacherMain from "./Teacher/TeacherMain";
import StudentMain from "./Student/StudentMain";
import SchoolClassMain from "./SchoolClass/SchoolClassMain";
import DepartmentMain from "./Department/DepartmentMain";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppSchoolClass from "./AppSchool"
import Main from "./Main"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    //<TeacherMain/>
    // <StudentMain/>
    // <SchoolClassMain/>
    //<DepartmentMain/>
    <AppSchoolClass/>
    // </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();