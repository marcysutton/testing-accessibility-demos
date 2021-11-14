/**
 * @jest-environment puppeteer
 */

import 'expect-puppeteer'
import path from "path"
import fs from "fs"

describe('Accessibility Tree', () => {
  beforeAll(async () => {
    await page.goto('http://0.0.0.0:1234')
  })

  it('should display "CampSpots" text on page', async () => {
    await expect(page).toMatch('CampSpots')
  })

  it('should take a snapshot of the accessibility tree', async () => {
    const snapshot = await page.accessibility.snapshot({
        interestingOnly: false
    })
    const assetFilePath = path.join(process.cwd(), 'workshop2-automated-testing', 'exercise4-puppeteer', "a11y-tree.json")

    // output a11y-tree.json file!
    fs.writeFile(
        assetFilePath,
        JSON.stringify(snapshot, null, 4), () => {}
    )

    // assert that it exists!
    fs.stat(assetFilePath, (err, stat) => {
        expect(stat.isFile()).toBe(true)
    })
  })
})