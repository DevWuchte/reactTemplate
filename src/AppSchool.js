import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TeacherMain from "./Teacher/TeacherMain";
import StudentMain from "./Student/StudentMain";
import SchoolClassMain from "./SchoolClass/SchoolClassMain";
import DepartmentMain from "./Department/DepartmentMain";
import StudentSubjectMain from "./StudentSubject/StudentSubjectMain";

import Main from "./Main.js";


const AppSchool = () => {

    return (
        <>
            {
                <BrowserRouter>
                    <Routes>
                        <Route path="/main" element={<Main/>}/>
                        <Route path="/departments" element={<DepartmentMain/>}/>
                        <Route path="/teachers" element={<TeacherMain/>}/>
                        <Route path="/schoolClasses" element={<SchoolClassMain/>}/>
                        <Route path="/students" element={<StudentMain/>}/>

                        <Route path="/departments/:id/schoolClasses" element={<SchoolClassMain from='department'/>}/>
                        <Route path="/schoolClasses/:id/students" element={<StudentMain from='schoolClass'/>}/>
                        <Route path="/teachers/:id/schoolClasses"   element={<SchoolClassMain from='teacher'/>}/>
                        <Route path="/students/:id/studentSubjects" element={<StudentSubjectMain from='student' />} />
                    </Routes>
                </BrowserRouter>
            }
        </>
    )
}
export default AppSchool;