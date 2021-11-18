# Accessibility Testing with Jest-Puppeteer

Sometimes you need to throw another tool at the job to test for accessibility, and Puppeteer might be that tool. [Puppeteer](https://github.com/puppeteer/puppeteer) is a Node.js test API for Headless Chrome with some pretty great features. It might be worth considering when other frameworks let you down for things like accessibility tree snapshots or pesky browser-DOM quirks.

To start Puppeteer via Jest-Puppeteer, run this command:

```
yarn test:puppeteer
```