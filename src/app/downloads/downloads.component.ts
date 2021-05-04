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
    val= "@inproceedings\{Goblint2016\,\}";
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
