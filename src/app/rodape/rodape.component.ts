import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  public rodape: string = '2021 Thawandson Costa - Todos os direitos reservados.'

  constructor() { }

  ngOnInit(): void {
  }

}
