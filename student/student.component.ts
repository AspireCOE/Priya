import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  studentName:String="Priya";
  studentMark:number=477;
  joinDate:Date=new Date()
  message:String="This is data binding"
  fontColor:String="purple"

  displayMessage()
  {
    alert(this.message)
  }

}
