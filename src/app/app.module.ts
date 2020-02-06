import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { Department } from 'c:/Pconproject/tourofheroes/my-app/projects/practice-app/src/app/models/department-model';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { FormsModule } from '@angular/forms'
import { MatDialogModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { EditDepComponent } from './department/edit-dep/edit-dep.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';

import { DepartmentService } from './services/department.service';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    ShowDepComponent,
    EditDepComponent,
    AddDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatTableModule, MatButtonModule, MatIconModule,
    HttpClientModule,
    MatSortModule,    
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    MatDatepickerModule, MatNativeDateModule 
  ],
  providers: [DepartmentService, EmployeeService],
  bootstrap: [AppComponent],
  entryComponents:[AddDepComponent, EditDepComponent, AddEmpComponent, EditEmpComponent]
})

export class AppModule { }
