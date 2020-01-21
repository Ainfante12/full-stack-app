import React, {Component} from 'react';
import { Card } from 'antd';
import { Avatar } from 'antd';
import ReactDOM from 'react-dom';


class StudentStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
    };
    }

toggleStudentHandler = () => {
    const { Meta } = Card;
    ReactDOM.render(
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<Avatar shape="square" size={100} icon="user" />}
        >
          <Meta title="Student Name" description="Campus Name" />
        </Card>,
        document.getElementById('container'),
      );
}
}


// const CampusStudents = props => {
//     const students = props.students;
//     const noStudents = (students === undefined || students === null);
    
//     return noStudents
//     ? ' no students yet'
//     : students.map(student => (
//       <Link to={`/Models/Students.js`} key={student.id}>
//         <li>{`${Student.first_name} ${Student.last_name}`}</li>
//       </Link>
//     ));
// };

export default StudentStatus
