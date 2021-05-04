import { Component, OnInit } from '@angular/core';
import { PAPERS } from '../papers';
import { DISSERTATIONS } from '../dissertations';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {

  papers: any = []; 
  dissertations: any = [];

  headElementsPapers = ['Title', 'Conference', 'Year', 'Citation'];
  width = ['col-md-5', 'col-md-1', 'col-md-1'];
  headElementsDissertations = ['Title', 'Date'];

  constructor() { 
  }

  ngOnInit(): void {
    this.papers = PAPERS;
    this.dissertations = DISSERTATIONS;
    
  }

}
