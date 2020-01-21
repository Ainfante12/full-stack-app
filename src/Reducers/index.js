import DeleteStudent from './DeleteStudent';

export const DELETE_STUDENT =  'DELETE_STUDENT';

const deleteStudent = (objRef, id) => ({
    type: DELETE_STUDENT,
    objRef,
    id
  });

  //here i need to write a function in which i get the data from the backend

  export default DeleteStudent;


