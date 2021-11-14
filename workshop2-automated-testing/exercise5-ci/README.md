# Accessibility Testing with Continuous Integration (CI)

In the spectrum of accessibility testing from manual to fully automated, CI is the farthest on the fully automated side. Having computers run your accessibility tests frees up human time to test more nuanced or complex things manually, or stop working for the day. While we can’t automate everything for accessibility, CI is a great resource for working efficiently and letting computers do some of the work.

To run tests in CI, push changes to a repo with a GitHub action enabled. The configured tests will run automatically!

See the GitHub Actions workflow in the root folder:

```
/.github/workflows/node.js.yml
```