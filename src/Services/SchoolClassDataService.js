import http from "../Services/http-common";

const ROOT = "schoolClasses";

const getAll = ()     => { return http.get(`${ROOT}`); };
const get = (id) => { return http.get(`${ROOT}/${id}`); };
const create = (data) => { return http.post(`${ROOT}`, data); };
const update = (data) => { return http.put(`${ROOT}`, data); };
const remove = (id) => { return http.delete(`${ROOT}/${id}`); };
const students = (schoolClassId) => { return http.get(`${ROOT}/${schoolClassId}/students`);
};

const exportedObject = {
    getAll, get, create, update, remove, students};

export default exportedObject;