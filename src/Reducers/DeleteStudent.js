import { DELETE_BY_ID, DELETE_STUDENT } from './index';



const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';


const gotStudents = students => ({
  type: GET_ALL_STUDENTS,
  students
});


const addedStudent = newStudent => ({
  type: ADD_STUDENT,
  newStudent
});

//here is where i fetch the api from backend

const initialState = {
  students: [],
  singleStudent: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return { ...state, students: [...action.students] };
    case ADD_STUDENT:
      return { ...state, students: [...state.students, action.newStudent] };
    case DELETE_STUDENT:
      if (action.objRef === 'students') {
        const oldStudents = [...state.students];
        const newStudents = oldStudents.filter(
        );
        return { ...state, students: newStudents };
      } else {
        return state;
      }
    default:
      return state;
  }
};