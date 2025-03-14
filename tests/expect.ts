//Реализовать хелпер expect, кроме метода toBe добавить (1-2шт.) 
// полезные, на ваш взгляд, экспектейшены

type Expect = {
    toBe: (expectedResult: any) => string,
    toBeValidOperator: (expectedResult: any) => string,
    toBeNumber: (expectedResult: any) => string,
}

export function expect(actualResult: any): Expect{
    return {
        toBe: function (expectedResult: any): string {
            if (actualResult === expectedResult)
            {
                return '[Test PASSED]: '
            }
            else
            {
                return '[Test FAILED]: '
            }
        },

        toBeValidOperator: function (expectedResult: any): string {
            const validOperators = ["+", "-", "*", "/"];
            if (validOperators.includes(actualResult))
            {
                return '[Test PASSED]: '
            }
            else
            {
                return '[Test FAILED]: '
            }
        },

        toBeNumber: function (expectedResult: any): string {
            if (typeof actualResult === 'number')
            {
                return '[Test PASSED]: '
            }
            else
            {
                return '[Test FAILED]: '
            }
        }
    }
}