# Programmatic accessibility information with HTML and ARIA

Accessibility has a cool benefit of making your pages machine readable, and ARIA has a big part to play in that. In this section you'll learn how to plumb accessibility information through other areas of your application to create programmatic associations and enable assistive technologies.

Some ARIA attributes (and WCAG success criteria) require programmatic relationships and dynamic values.
Examples include:

- `aria-labelledby` and `aria-activedescendant` with associated IDREFs (id references)
- Spinbuttons and range sliders: `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Various dynamic states: `aria-checked`, `aria-selected`, `aria-disabled`, `aria-pressed`, etc.
- Structural relationships and owned elements: `role=grid` and `role=gridcell`, `role=menu` and `role=menuitem`

## Exercise: Connect CampSpots listings with associated map

Using the completed `page-listing-map.js` file in `exercise3-programmatic-a11y-info`
as a reference, adjust the Page Listings Map page in `components` to associate listings
with locations on the map.

Techniques include:
