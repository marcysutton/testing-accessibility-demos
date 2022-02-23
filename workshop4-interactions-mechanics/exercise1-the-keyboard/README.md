# The keyboard as the most essential testing tool

In this section we'll explore how to ensure your site can be used without a mouse or trackpad. You'll learn various CSS visibility techniques and how they impact keyboard and screen reader users.

Skip links are an ergonomic mechanism for keyboard and screen reader users to skip over sections of repetitive
content, such as menus. Not only are they useful for keyboard access, they are also a requirement in
[WCAG Success Criterion 2.4.1, Bypass Blocks (Level A)](https://www.w3.org/TR/WCAG21/#bypass-blocks).

Skip links are commonly used to "Skip to Main Content" to get past header content and occasionally for "Back to
Top" on a long page. Internal anchor links can point to an ID attribute on a container element, such as
`<a href="#main">` pointing to `<main id="main">`. Skip links should be visible to all keyboard users, i.e. not
visually-hidden for screen reader use only as was once done in the past.

Skip links can also be a useful pattern for non-modal dialogs or other designs where it would be nice to skip
around the page by keyboard.

## Exercise: Implement a skip links component

For this exercise, add functionality to a Skip Links component in the `components` directory. In the
`components/header.js` file, import your component and implement it for the "Skip to Main Content" variant that
points to `#main`.

In the `App.js` folder within `workshop4-interactions-mechanics`, import the component and
provide a "Back to top" variant that skips back to the `#header` element.

Choose a CSS Visibility method that will render the skip links for all users but only show them on focus.

- http://localhost:1234/workshop4-interactions-mechanics/component-sandbox

You can use the files in `exercise1-the-keyboard` for reference.

- `exercise1-the-keyboard/skip-links.js`
- `exercise1-the-keyboard/skip-links.scss`
- `exercise1-the-keyboard/App.js`
- `exercise1-the-keyboard/header.js`
