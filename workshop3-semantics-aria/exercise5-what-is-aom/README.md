# What is the Accessibility Object Model (aom)?

Just as we have the Document Object Model (DOM) and CSS Object Model (CSSOM), we also have the experimental Accessibility Object Model. Learn how to inspect a component and when the AOM will come in handy.

The AOM is a potential set of APIs in development in the Web Incubator Community Group (WICG). The
intent is to standardize approaches for getting and setting accessibility information with JavaScript
as opposed to the current approach of applying accessibility information with HTML and ARIA. Browser
makers use these community-grown standards approaches to inform what they build into their technologies. The AOM repo can be found here: https://github.com/WICG/aom

As developers and technologists, it's helpful to know what is being discussed and on the horizon.
It should also be understood that AOM is an experimental, future technology currently
with limited use. Parts of the proposals have also met some valid resistance due to privacy
concerns around event tracking of screen readers.

View what can currently be used in Chrome, Firefox, or Safari:
https://github.com/WICG/aom/blob/gh-pages/caniuse.md

## How to enable AOM

### Chrome

For web platform related features: Browse to `chrome://flags`, enable `enable-experimental-web-platform-features`.

### Firefox

`about:config accessibility.AOM.enabled = true`

## Exercise: Inspect current ARIA information on a component and theorize where AOM could be helpful

In Chrome or Safari, inspect accessibility information using the JavaScript console:

```javascript
const element = document.querySelector('.some-icon-button')
element.role
element.ariaLabel
```

Set attributes to override the page markup and see how it is reflected in the DOM:

```javascript
element.role = 'button'
console.log(element.role)
```