import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DepartmentService } from '../../services/department.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})

export class EditDepComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<EditDepComponent>, 
              private service: DepartmentService,
              private SnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form: NgForm){
    this.service.updateDepartment(form.value).subscribe(res=>{
      this.SnackBar.open(res.toString(), '', {
        duration: 5000,
        verticalPosition: 'top'
      });
    })
  }

}
