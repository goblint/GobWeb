import { Component, OnInit } from '@angular/core';
import { AUTHORS } from '../authors';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  
  authors: any = []; 

  constructor() { }

  ngOnInit(): void {
    this.authors = AUTHORS;
  }

}
