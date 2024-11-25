import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  inforreceived1: string[] = [];
  inforreceived2: string[] = [];
  inforreceived3: string[] = [];

  showInfor1: boolean = false;
  showInfor2: boolean = false;
  showInfor3: boolean = false;

  constructor(private dservice: DataService) {}

  ngOnInit(): void {}

  getInforFromService1() {
    this.inforreceived1 = this.dservice.getInfor1();
    this.showInfor1 = true;
  }

  getInforFromService2() {
    this.inforreceived2 = this.dservice.getInfor2();
    this.showInfor2 = true;
  }

  getInforFromService3() {
    this.inforreceived3 = this.dservice.getInfor3();
    this.showInfor3 = true;
  }
}
