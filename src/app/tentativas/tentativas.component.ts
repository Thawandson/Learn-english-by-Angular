import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges{

  @Input() public tentativas: number = 0

  public coracoes: Array<coracao> = [
    new coracao(true),
    new coracao(true),
    new coracao(true)
  ]

  constructor() { 
   }
  ngOnChanges(): void {
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false
    }
  }
  ngOnInit(): void {
    
  }
  

}
