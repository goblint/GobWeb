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

  headElementsPapers = ['title', 'conference / journal', 'year', 'citation'];
  headElementsDissertations = ['title', 'date'];

  constructor() {
  }

  ngOnInit(): void {
    this.papers = PAPERS;
    this.dissertations = DISSERTATIONS;
  }

}
