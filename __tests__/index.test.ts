import { describe, expect, test } from 'vitest'

import { Selector } from "../src"


describe('selector', () => {

    test('is Group', () => {

        const selector = new Selector()
        expect(selector.children).toBeTruthy()

    })

    test('async: is Group', async () => {
        await new Promise(function (resolve) {

            const selector = new Selector()
            expect(selector.children).toBeTruthy()
            resolve(true)
        })

    })

})