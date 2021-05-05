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
    var range = document.createRange();
    range.selectNode(myContainer);
    window.getSelection().addRange(range);
    try
    {
        document.execCommand('copy');
    } 
    catch (err)
    {
        console.log('Unable to copy');
    }

    window.getSelection().removeRange(range);
  }

}
