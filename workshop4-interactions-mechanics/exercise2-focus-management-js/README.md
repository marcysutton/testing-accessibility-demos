# Focus Management with JavaScript

Modals, drop downs, removing or reordering items...these are all scenarios where focus management with JavaScript is key to a good user experience. In this section we'll examine the best approaches to intuitive key event handling and navigation. You'll also gain experience with implementing roving tabindex and writing automated tests for a date picker component.

Our goal for keyboard focus management should be to make interfaces intuitive and streamlined, while keeping
things simple as much as possible. Avoid relying on hidden keyboard shortcuts for functionality and instead
follow established conventions and navigation patterns, with obvious keyboard focus states to show keyboard 
users where they are on the screen.

Roving tabindex is a technique to reduce the number of tab stops in a component that should act as a single
control. Examples could include calendar widgets, numerical onscreen keyboards, ARIA menus, and tab switchers.
In our date picker, we will implement roving tabindex so that the grid has one tab stop that can be manipulated
using the arrow keys.

## Exercise: Implement roving tabindex for the date picker

Developing for focus management in a specific component is a lot easier with a limited workspace.
To support this workflow, there is a Storybook file set up for you in the components directory:
`/workshop4-interactions-mechanics/components/date-picker/DatePicker.stories.jsx`.

You can run Storybook to develop in an isolated environment with the command `yarn run storybook`.

To implement roving tabindex, you will need to manage the tabindex attribute for focusable items using
JavaScript key events. One item should have `tabindex=0` at a time, while the other items should have
`tabindex="-1"`. In React, we will use an array of dates to compare against our group of date buttons
when setting a currently focused date in response ot the arrow keys.

You can compare the original date picker to a more complete version in this directory for reference,
including a Storybook rendering:

- `exercise2-focus-management/date-picker.js`
- `exercise2-focus-management/DatePicker.stories.jsx`
