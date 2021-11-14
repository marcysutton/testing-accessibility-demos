# Accessibility Component Testing with Cypress

Cypress recently came out with a new flavor of their tool: Cypress Component Testing. It’s a nice solution for integration of components that uses their APIs and infrastructure. Say you’ve got a full test suite for end-to-end tests but you need some accessibility tests with less whole-page overhead. Cypress Component Testing might be a worthwhile tool to try.

One caveat is that Cypress Component Testing requires a Webpack config to operate. This project uses Parcel instead of Webpack, so including Cypress Component Testing created some duplication of infrastructure code. But if you’re already using Webpack, that won’t be a problem.

To start Component Testing with Cypress, run this command:

```
yarn run test:components
```