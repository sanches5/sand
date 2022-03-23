import { Component, OnInit } from '@angular/core';
// import Post from './post/post.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  image = 'https://i.pinimg.com/736x/a1/c3/80/a1c380747c6a070c995c1a13f90ce51d.jpg' //avatar
  someName: any;

  images = [
    {src: 'https://i.pinimg.com/564x/ab/e9/85/abe9857c69f08f10ffa4f4f076b76964.jpg', id: '1'},
    {src: 'https://i.pinimg.com/236x/c8/26/5f/c8265f701764d7c93424b3a890a4ed2b.jpg', id: '2'},
    {src: 'https://i.pinimg.com/236x/e5/bc/43/e5bc43362668885ff260961c9b7635e6.jpg', id: '3'},
  ]


  constructor() { }

  ngOnInit(): void {
    this.someName = 'something name'
  }

}
