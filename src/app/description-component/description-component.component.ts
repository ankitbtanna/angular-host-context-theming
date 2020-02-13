import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-component',
  templateUrl: './description-component.component.html',
  styleUrls: ['./description-component.component.scss']
})
export class DescriptionComponentComponent implements OnInit {

  public length = 0;
  constructor() { }

  ngOnInit() {
  }

  updateLength(element) {
    this.length = element.textLength;
  }

}
