import { fixacao } from "../src/fixacao";

describe("retorna um array com as letras do input", () => {

    test("quando o input é uma palavra", () => {
        // given
        const input = "Micha"

        // when
        const result = fixacao(input)

        // then
        const expected = ['M', 'i', 'c', 'h', 'a']
        expect(result).toEqual(expected)
    })

    test("quando o input é uma frase", () => {
        // given
        const input  = "Oi, eu sou a Micha!"
        
        // when
        const result = fixacao(input)
        
        // then
        const expected = ['O', 'i', ',', ' ', 'e', 'u', ' ', 's', 'o', 'u', ' ', 'a', ' ', 'M', 'i', 'c', 'h', 'a', '!']
        expect(result).toEqual(expected)
    })

    test("quando o input é uma string vazia", () => {
        // given
        const input = ""
        
        // when
        const result = fixacao(input)
        
        // then
        const expected:Array<String> = []
        expect(result).toEqual(expected)
    })

})

/* input - output
"Micha" - ['M', 'i', 'c', 'h', 'a'] 
"Oi, eu sou a Micha!" - ['O', 'i', ',', ' ', 'e', 'u', ' ', 's', 'o', 'u', ' ', 'a', ' ', 'M', 'i', 'c', 'h', 'a', '!']
"" - []
*/

/*
export const fixacao = (palavra: string) :Array<String> => {
    const arrayString = palavra.split("")
    return arrayString
}
*/