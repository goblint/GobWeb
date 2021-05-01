import { Component, OnInit } from '@angular/core';
import { PAPERS } from '../papers';
import { DISSERTATIONS } from '../dissertations';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {

  papers = PAPERS;
  dissertations = DISSERTATIONS;

  headElementsPapers = ['Title', 'Conference'];
  headElementsDissertations = ['Title', 'Date'];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
