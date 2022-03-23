import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-input',
  styleUrls: ['./input.component.css'],
  template: `
    <input type="text" [placeholder]="placeholder" />
  `,
})
export class InputComponent implements OnInit {
  @Input() placeholder!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
