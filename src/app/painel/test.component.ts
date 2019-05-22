 export class Test{

    public idade: number
    public numero: number
    public numeroTest: number

    somar(x: number, y: number): number{
        return x+y
    }

    testeComIfElse(): string{
        if(this.idade  > 9){
            return "verdade"
        }else{
            return "mentira"
        }
    }
    
    verificarValorMaiorEMenorEIgual(): number{
        
        if(this.numero == this.numeroTest){
            return this.numero
        }else if(this.numero > this.numeroTest){
            return this.numero
        }else{
            return this.numero
        }
    }
}