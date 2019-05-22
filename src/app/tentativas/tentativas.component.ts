import { Component, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css'],
})

export class TentativasComponent  implements OnInit{
  public coracaoCheio: string = '../../assets/imagens/coracao_cheio.png'
  public coracaoVazio: string = '../../assets/imagens/coracao_vazio.png'
  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor(){
    console.log(this.coracoes)
  }
  
  ngOnInit(){}

}
