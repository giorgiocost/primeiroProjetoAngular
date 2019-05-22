import { Test } from './test.component'
import { not } from '@angular/compiler/src/output/output_ast';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';

let classTeste = new Test()

describe("Teste da função toBe", () =>{
    //verifica o VALOR e TIPO
    it("deve verficar se os valor e tipo são iguais",() =>{
        expect(classTeste.somar(1, 9)).toBe(10)
    });
});

describe("Teste da função toEqual", () =>{
    //verifica o VALOR
    let obj1 = {valor: true}
    let obj2 = {valor: true}

    it("deve verficar se os valor do obj são iguais",() =>{
        expect(obj1).toEqual(obj2)
    });
});

describe("Teste da função toMatch", () =>{
    //compara com expressões
    let obj1 = "Curso de teste"

    it("Teste da função",() =>{
        expect(obj1).toMatch(/teste/)
    });
});

describe("Teste da função toBeDefined", () =>{
    //verifica se o objeto foi definido
    let obj1 = "Foi definido"

    it("Teste da função",() =>{
        expect(obj1).toBeDefined()
    });
});


describe("Teste da função toBeUndefined", () =>{
    //verifica se o objeto não foi definido
    let obj1

    it("Teste da função",() =>{
        expect(obj1).toBeUndefined()
    });
});

describe("Teste da função toBeNull", () =>{
    //verifica se o objeto é Null
    let obj1 = null

    it("Teste da função",() =>{
        expect(obj1).toBeNull()
    });
});

describe("Teste da função toBeTruthy", () =>{
    //verifica se o objeto não é (false, 0, undefined e NaN)
    let obj1 = "false"

    it("Teste da função",() =>{
        expect(obj1).toBeTruthy()
    });
});

describe("Teste da função toBeFalsy", () =>{
    //verifica se o objeto não é (false, 0, undefined e NaN)
    let obj1 = false

    it("Teste da função",() =>{
        expect(obj1).toBeFalsy()
    });
});

describe("Teste da função toContain", () =>{
    //verificar se contem determinada palavra ex: 'Mundo'
    let obj1 = "Olá Mundo"

    it("verificar se contem determinada palavra ex: 'Mundo'",() =>{
        expect(obj1).toContain("Mundo")
    });
});

describe("Teste da função toBeLessThan", () =>{
    //verificar se o obj < 11
    let obj1 = 10

    it("verificar se o obj < 11",() =>{
        expect(obj1).toBeLessThan(11)
    });
});


describe("Teste da função toBeGreaterThan", () =>{
    //verificar se o obj > 9
    let obj1 = 10

    it("verifica se o obj > 9",() =>{
        expect(obj1).toBeGreaterThan(9)
    });
});

describe("Teste da função toThrow",() =>{
    // verificar se um erro é retornado
    var erro = function comErro(): Error{
        throw "Mensagem de erro"
    }

    it("verificar se um erro é retornado",()=>{
        expect(erro).toThrow();
    })
})



describe("Teste de If e Else",()=>{
    
    it("verificar se a idade é maior que 9 {mock = 10}",()=>{
        classTeste.idade = 10
        expect(classTeste.testeComIfElse()).toBeTruthy()
    })

    it("verficar se a idade é menor que 9 {mock = 2}",()=>{
        classTeste.idade = 2
        expect(classTeste.testeComIfElse()).toBeTruthy()
    })
})

describe("Teste de Maior, Menor e Igual",()=>{
    
    it("10 == 10?",()=>{
        classTeste.numero = 10
        classTeste.numeroTest = 10
        expect(classTeste.verificarValorMaiorEMenorEIgual()).toEqual(classTeste.numeroTest)
    })

    it("10 > 2",()=>{
        classTeste.numero = 10 
        classTeste.numeroTest = 2       
        expect(classTeste.verificarValorMaiorEMenorEIgual()).toBeGreaterThan(classTeste.numeroTest)
    })

    it("2 < 10",()=>{
        classTeste.numero = 2
        classTeste.numeroTest = 10
        expect(classTeste.verificarValorMaiorEMenorEIgual()).toBeLessThan(classTeste.numeroTest)
    })
})