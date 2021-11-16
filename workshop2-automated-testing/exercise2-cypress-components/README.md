# Accessibility Component Testing with Cypress

Cypress added a new flavor of their platform for Component Testing. It’s a nice solution for integrating components using their APIs and infrastructure. Say you’ve got a full test suite for end-to-end tests but you need some accessibility tests with faster performance. Cypress Component Testing might be a worthwhile tool to try.

One caveat is that Cypress Component Testing requires a Webpack config to operate. This monorepo uses Parcel instead so Cypress Component Testing added some duplication of tooling code. If you’re already using Webpack,  you’re all good.

To start Component Testing with Cypress, run this command:

```
yarn run test:components
```

## Exercise 2: Write component tests for the MegaNav with Cypress

Using a mounted component in Cypress, write tests that assert the following behavior:

- Focusing on a top-level menu button
- Activating the menu via click
- Asserting focus doesn’t go to items in the closed menu
- Asserting focus does go to items in the open menu
