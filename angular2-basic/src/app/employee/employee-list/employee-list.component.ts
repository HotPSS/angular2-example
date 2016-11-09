import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable, DataTableResource } from 'angular-2-data-table';

import { Employee, EmployeeModel, MockedEmployee, EmployeeService } from '../shared';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  public employeeResource = new DataTableResource(MockedEmployee);
  public employeeList: Employee[] = [];
  public employeeCount: number = 0;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employeeResource.count().then(count => this.employeeCount = count);
   }

  ngOnInit() {

  }

  reloadEmployee(params) {
    //this.employeeResource.query(params).then(items => this.employeeList = items);
    this.employeeService.get(params).then(items => this.employeeList = items)
  }

  editClicked(items) {
    this.router.navigate(['employee/update', items.id]);
  }
}
