import {pratica3} from '../src/pratica3'


describe("testes da pratica 3", () => {

    test("verifica se recebe dois numeros e retorna com um obj com duas propriedades", () => {
        const result = pratica3(3, 5)
         const expectedResult = {
            soma: 8,
            mult: 15
         }
        expect(result).toEqual(expectedResult)
    })

})