# Accessibility Unit Testing with Jest

Jest is a testing workhorse in modern web applications. You can test isolated components for accessibility in Jest, particularly for keyboard behavior and programmatic state. By adding Testing Library into the mix, you can get some solid testing work done and provide a contract for accessibility functionality in components.

To start unit testing with Jest, run this command:

```
yarn test
```

To keep Jest running while you’re making changes to components, keep it alive with the watch command:

```
yarn test --watch
```

_Note: To exit the process on MacOS, type `Control + C` in your Terminal._

## Exercise: Write unit tests for the ButtonSubmit component

There’s an inaccessible button on the loose! Fix it with a bit of TDD (Test Driven
Development). For the `ButtonSubmit` component, write Jest unit tests to assert
it has an accessible name and it can be reached and operated with the keyboard.
You will need to make changes to the component to make it pass, as well.

API commands you can use:

- [Testing Library/React: `render`](https://testing-library.com/docs/react-testing-library/api/#render) and [`screen`](https://testing-library.com/docs/queries/about#screen)
- [Testing Library: `FireEvent`](https://testing-library.com/docs/dom-testing-library/api-events)
- [Testing Library: `getByRole`](https://testing-library.com/docs/queries/byrole)
- [Testing Library: `getByLabelText`](https://testing-library.com/docs/queries/bylabeltext)
- [Ecosystem/UserEvent](https://testing-library.com/docs/ecosystem-user-event)
