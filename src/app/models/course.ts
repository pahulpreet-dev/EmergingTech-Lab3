import { Signup } from './signup';

export class Course {

  _id: string;
  courseCode: string;
  courseName: string;
  section: string;
  semester: string;
  student: Signup;
}
