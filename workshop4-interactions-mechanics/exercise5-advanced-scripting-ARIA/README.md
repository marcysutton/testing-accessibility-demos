# Advanced Scripting with ARIA

When using ARIA and JavaScript together, it’s important to learn about some of the cross-platform intricacies. The workshop wraps up with some advanced ARIA techniques related to using screen readers with a date picker, including screen reader modes and the effects of `role="application"`.

The purpose of this role is to provide a mechanism for complete control over keyboard commands in assistive technology, where
keystrokes are passed through to the browser instead of being intercepted for screen reader commands. This role causes the
component to stay in forms/focus mode, as opposed to virtual/browse mode found in NVDA and JAWS. Role=application also strips
away screen reader functions such as navigating by Headings, which means it must be used sparingly and with extreme caution.

To understand browse modes, consider typing an H key. In a text input, which automatically enters forms/focus mode, the H key
will be typed as a value in the field. In contrast, while navigating the rest of the document, the H key will cycle through
the headings on the page.

In rare scenarios, a widget that does not fall under any of the ARIA roles or patterns needs its own navigation paradigm. It
is possible that `role="application"` could make the widget easier to use in NVDA or JAWS if the key commands MUST be passed
through to the browser to function properly. But you better have a darn good reason and do adequate testing. DO NOT use this
role for existing widgets, such as treeviews, tab switchers, tables with focusable items inside, dialogs, or toolbars.

## Exercise: Make a slide carousel accessible and test in NVDA

For this final exercise, take a W3schools.com carousel in `components/slideshow/slideshow.js` and make it accessible in a
screen reader. Testing in NVDA is the true test of whether it works -- VoiceOver is only part of the equation. Things you
will need to modify to accomplish this mission:

- Make clickable controls accessible buttons with `aria-label` attributes
- Add keyboard handling to move the carousel with the arrow keys
- Put `aria-live` on the slideshow to announce new slides
- Add the application role to the slideshow to make the arrow keys function properly in fullscreen mode
- Include `aria-roledescription` to explain the slideshow application widget

You can compare to the completed file in `exercise5-advanced-scripting-ARIA/slideshow.js` for hints. There is also a
Storybook story where you can isolate your changes after running `yarn run storybook`, if you like.

- `exercise5-advanced-scripting-ARIA/slideshow.js`
- http://localhost:1234/workshop4-interactions-mechanics/adventures-hikes
- http://localhost:1234/workshop4-interactions-mechanics/exercise5/adventures-hikes
- http://localhost:6006/?path=/story/components-slideshow--default
