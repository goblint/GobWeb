import { Component, OnInit } from '@angular/core';
import { PAPERS } from '../papers';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {

  papers = PAPERS;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
