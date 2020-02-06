import { Component, OnInit, ViewChild } from '@angular/core';

import{ MatTableDataSource, MatSort } from '@angular/material';
import { Employee } from 'c:/Pconproject/tourofheroes/my-app/projects/practice-app/src/app/models/employee-model';
import { EmployeeService } from '../../services/employee.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AddEmpComponent } from '../../employee/add-emp/add-emp.component';
import { EditEmpComponent } from '../edit-emp/edit-emp.component';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: EmployeeService,
              private dialog: MatDialog,
              private SnackBar: MatSnackBar) { 
                this.service.listen().subscribe((m:any)=>{
                  console.log(m);
                  this.refreshEmpList();
                })
              }

  listData : MatTableDataSource<any>;
  displayedColumns : string[] = ['Options', 'EmployeeID', 'EmployeeName', 'Department', 'MailId', 'DOJ']

  @ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data => {this.listData = new MatTableDataSource(data); 
                                                 this.listData.sort = this.sort; })
                                                 
   /* var dummyData = [{DepartmentID:1, DepartmentName:"IT"}, 
                     {DepartmentID:2, DepartmentName:"Accounts"}, 
                     {DepartmentID:3, DepartmentName:"HR"}, 
                     {DepartmentID:4, DepartmentName:"RnD"}]
    this.listData = new MatTableDataSource(dummyData);  */ 
  }

  applyFilter(filtervalue: string){
    this.listData.filter= filtervalue.trim().toLocaleLowerCase();
  }

  onEdit(emp: Employee){
    this.service.formData = emp;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; 
    dialogConfig.width = "70%";
    this.dialog.open(EditEmpComponent, dialogConfig);   
  }

  onDelete(id: number){
    if(confirm('Are you sure, you want to delete Employee?')){
      this.service.deleteEmployee(id).subscribe(res=> {
        this.refreshEmpList();
        this.SnackBar.open(res.toString(), '', {
          duration: 5000,
          verticalPosition: 'top'
        });
      });
    }
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; 
    dialogConfig.width = "70%";
    this.dialog.open(AddEmpComponent, dialogConfig);
  }

}
