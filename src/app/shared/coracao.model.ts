export class Coracao{
    
    constructor(
        public cheio: boolean, 
        public urlCoracaoCheio: string = '../../assets/imagens/coracao_cheio.png',
        public urlCoracaoVazio: string = '../../assets/imagens/coracao_vazio.png'
    ){}

    public existeCoracao(): string{
        if(this.cheio)
            return this.urlCoracaoCheio
        else
            return this.urlCoracaoVazio
    }
}