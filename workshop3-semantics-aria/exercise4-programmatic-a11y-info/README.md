# Programmatic accessibility information with HTML and ARIA

Accessibility has a cool benefit of making your pages machine readable, and ARIA has a big part to play in that. In this section you'll learn how to plumb accessibility information through other areas of your application to create programmatic associations and enable assistive technologies.

Some ARIA attributes (and WCAG success criteria) require programmatic relationships and dynamic values.
Examples include:

- `aria-labelledby` and `aria-activedescendant` with associated IDREFs (id references)
- Spinbuttons and range sliders: `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Various dynamic states: `aria-checked`, `aria-selected`, `aria-disabled`, `aria-pressed`, etc.
- Structural relationships and owned elements: `role=grid` and `role=gridcell`, `role=menu` and `role=menuitem`

## Exercise: Expose calendar grid relationships and labels for non-visual access

Using the `date-picker.js` file in `exercise4-programmatic-a11y-info` for
reference, play around with the semantics of the date picker. For this
exercise, pay close attention to the structure and accessible names.

There are multiple approaches to compare in DevTools and assistive technology:

- A DIV with CSS grid and buttons for the calendar
- An HTML table with rows for weeks in the calendar and cells for the date buttons

Convert the date picker DIV grid to an HTML table. Using `aria-labelledby` on
the table, describe its purpose (which month is showing?). Do the table headers
for the days of the week make sense as abbreviated? How might you expose more
descriptive names for these cells?
