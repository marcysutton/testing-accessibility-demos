/**
 * @jest-environment puppeteer
 **/

import 'expect-puppeteer'
import path from 'path'
import fs from 'fs'

describe('Accessibility Tree', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:1234')
    })

    it('should display "CampSpots" text on page', async () => {
        await expect(page).toMatch('CampSpots')
    })

    it('should create a snapshot file for the accessibility tree', async() => {
        const snapshot = await page.accessibility.snapshot({
            interestingOnly: true
        })

        const assetFilePath = path.join(process.cwd(), 'workshop2-automated-testing', 'exercise4-puppeteer', 'a11y-tree.json')

        console.log(snapshot)
        fs.writeFile(
            assetFilePath,
            JSON.stringify(snapshot, null, 5), 
            () => {}
        )

        fs.stat(assetFilePath, (err, stat) => {
            expect(stat.isFile()).toBe(true)
        })
    })
    it.only('should have accessible menu toggles', async () => {
        const meganav = await page.$('#header-megamenu');
        const snapshot = await page.accessibility.snapshot({
            root: meganav
        })
        console.log(await snapshot)

        // expect(snapshot.children[1].role).toBe('button')
        // expect(snapshot.children[1].name).toBe('Plan Your Trip')

    })
})