import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.css']
})
export class TechnologyCardComponent implements OnInit {

  //Recibe los objetos que son enviados desde Technology (1)
  @Input() technology: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
