import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    id: new FormControl(''),
    inscriptionDate: new FormControl(new Date()),
    avatarUrl: new FormControl(''),
    score: new FormControl(0),
    stars: new FormControl(0)
  });


  students: Student[] = [{
    firstName: "Victor",
    lastName: "Hernandez",
    id: "12312323",
    inscriptionDate: new Date(),
    avatarUrl: "https://source.unsplash.com/7YVZYZeITc8",
    score: 4.0,
    stars: 4
  }];



  showFormCreate: boolean = false;

  constructor() { }

  deleteStudent(indexOfElement: number){
    this.students.splice(indexOfElement,1);
  }

  toggleFormCreate() {
    this.showFormCreate = !this.showFormCreate;
  }

  onSubmit() {

    let newStudent: Student = {
      firstName: "",
      lastName: "",
      id: "",
      inscriptionDate: null,
      avatarUrl: "",
      score: 0,
      stars: 0
    };

    console.log(this.studentForm.value);
    newStudent.firstName = this.studentForm.value.firstName;
    newStudent.lastName = this.studentForm.value.lastName;
    newStudent.id = this.studentForm.value.id;
    newStudent.inscriptionDate = this.studentForm.value.inscriptionDate;
    newStudent.avatarUrl = this.studentForm.value.avatarUrl;
    newStudent.score = this.studentForm.value.score;
    newStudent.stars = this.studentForm.value.stars;

    this.students.push(newStudent);
    this.studentForm.reset();

  }

  ngOnInit(): void {
  }

}
