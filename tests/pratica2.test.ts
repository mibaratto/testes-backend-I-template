import { pratica2 } from "../src/pratica2"


describe("Praticando com Jest PRATICA 2", () => {

    test("verificar se o dado de entrada é um number", () => {
        const result = pratica2("10" as any)
        expect(typeof result).toBeNull
    })

    // test("verifica se o dado de entrada é par", () => {
    //         // lógica do primeiro teste
    // })

    // test("verifica se o dado de entrada é impar", () => {
    //     // lógica do primeiro teste
    // })

    // test("verifica se o dado de entrada é inteiro", () => {
    //     // lógica do primeiro teste
    // })
})


// export const pratica2 = (n: number): boolean | null => {
//     if (typeof n !== "number") {
//         return null
//     }

//     if (!Number.isInteger(n)) {
//         return null
//     }

//     return n % 2 == 0
// }


//---------
            // given - as variáis usadas
            // when - metodo testato
            // then - asserções (teste em si)