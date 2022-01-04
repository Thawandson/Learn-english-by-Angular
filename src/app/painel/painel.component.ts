import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit,OnDestroy {

  public frases: Frase[] =  FRASES  
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = '' 
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3
  @Output() public encerrarJogo: EventEmitter<string> =  new EventEmitter()  

  constructor(){
    this.rodadaFrase = this.frases[this.rodada]
  }

  ngOnInit(): void {
  }  

  ngOnDestroy(): void {      
  }
  
  public atulizarResposta(resposta:Event):void{      
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  public verificarResposta():void{

    if(this.rodadaFrase.frasePortugues == this.resposta){        
          //troca a rodada 
          this.rodada++
          
          //troca a pergunta em ingles da rodada
          this.rodadaFrase = this.frases[this.rodada]
          
          //atualiza o progresso  
          this.progresso = (this.progresso + 25)

          if(this.rodada === 4 ){
             this.encerrarJogo.emit('vitoria')
          }

          //Limpa a resposta/textArea após o acerto
          this.resposta = ''

    }else{   
      this.tentativas--
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
      }
    }  
  }








}
