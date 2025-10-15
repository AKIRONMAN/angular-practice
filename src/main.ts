import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './main.scss',
  templateUrl: './main.html',
  imports: [CommonModule, FormsModule],
})
export class App {
  name = 'Angular';
  values = '';
  numbers: Array<string> = [];
  operations: Array<any> = [
    { icon: '+', value: 'add' },
    { icon: '-', value: 'sub' },
    { icon: '*', value: 'mul' },
    { icon: '/', value: 'div' },
  ];

  ngOnInit() {
    for (let i = 9; i >= 0; i--) {
      this.numbers.push(String(i));
    }
  }
  setNumbers(event: any, num: string) {
    this.values += num;
  }

  setOperation(event: any, op: any) {
    this.values += this.values === '' ? this.values : op.icon;
  }
  doCalculation() {
    this.values = eval(this.values);
  }
  clear() {
    this.values = '';
  }
}

bootstrapApplication(App);
