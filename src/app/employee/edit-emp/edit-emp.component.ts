import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})

export class EditEmpComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<EditEmpComponent>, 
              private service: EmployeeService,
              private SnackBar: MatSnackBar) { }

  public listItems: Array<string> = [];

  ngOnInit() {
    this.dropdownRefresh();
  }

  dropdownRefresh(){
    this.service.getDropDownValues().subscribe(data=>{
      data.forEach(element => {
        this.listItems.push(element["DepartmentName"]);
      });
    })
  }

  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form: NgForm){
    this.service.updateEmployee(form.value).subscribe(res=>{
      this.SnackBar.open(res.toString(), '', {
        duration: 5000,
        verticalPosition: 'top'
      });
    })
  }

}
