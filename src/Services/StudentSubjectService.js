import http from "../Services/http-common";

const ROOT = "studentSubjects";

const getAll = ()     => { return http.get(`${ROOT}`); };
const get = (id) => { return http.get(`${ROOT}/${id}`); };
const create = (data) => { return http.post(`${ROOT}`, data); };
const update = (data) => { return http.put(`${ROOT}`, data); };
const remove = (id) => { return http.delete(`${ROOT}/${id}`); };
const studentSubjects = (studentId) => { return http.get(`${ROOT}/${studentId}/studentSubjects`);
};

const exportedObject = {
    getAll, get, create, update, remove, studentSubjects};

export default exportedObject;