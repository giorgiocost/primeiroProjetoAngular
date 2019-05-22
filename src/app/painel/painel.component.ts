import { Component } from '@angular/core';
import { FRASES }  from './frases-mock';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent{

  public frases: Array<Frase> = FRASES;	
  public resposta: string

  public rodada: number = 0
  
  public rodadaFrase: Frase
  public msg: string
  public alerta: string = "alert alert-success"
  
  public progressoPainel: number = 0
  
  constructor(){
    this.atualizarRodada()
    console.log(this.rodada)
  }

  atualizarResposta(event: Event): string{
    return this.resposta = (<HTMLInputElement>event.target).value
  }

  verificarResposta(): void{
    if(this.resposta == this.rodadaFrase.frasePt){
      this.rodada++
      this.progressoPainel = this.progressoPainel + 25
      console.log(this.progressoPainel)
      this.atualizarRodada()    
    }else{
        console.log("errou: "+this.resposta+"esperado: "+this.rodadaFrase["frasePt"])
    }
  }
  
  atualizarRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
