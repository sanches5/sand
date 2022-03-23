import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

export class PostComponent implements OnInit {
  @Input() name!: string;
  @Input() images!: Array<any>;
  title?: string;
  // images?: Array<any>;
  currentHelpers?: Array<any>;
  descriptionPost?: string;
  date?: Date;

  classImage = this.images?.length === 1 ? 'one' : this.images?.length == 2 ? 'few' : 'many'

  constructor() {
  }

  ngOnInit(): void {
  }

}
