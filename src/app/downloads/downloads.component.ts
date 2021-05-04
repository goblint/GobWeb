import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  copyMessage(elToCopy: string){
    let myContainer = <HTMLInputElement>document.getElementById(elToCopy);
    let val = myContainer.value;
    console.log(myContainer.value);
    val= "\@inproceedings\{Goblint2016\,\n\
      author    = \{Vesal Vojdani and Kalmer Apinis and Vootele R\{\\\~\{o\}\}tov and\n\
                  Helmut Seidl and Varmo Vene and Ralf Vogler\}\,\n\
      title     = \{Static race detection for device drivers: the Goblint approach\}\,\n\
      booktitle = \{Proceedings of the 31st \{IEEE\/ACM\} International Conference on \n\
                  Automated Software Engineering, \{ASE\} 2016\}\,\n\
      pages     = \{391--402\}\,\n\
      publisher = \{\{ACM\}\}\,\n\
      year      = \{2016\}\,\n\
      doi       = \{10.1145\/2970276.2970337\}\n\
  \}";
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
