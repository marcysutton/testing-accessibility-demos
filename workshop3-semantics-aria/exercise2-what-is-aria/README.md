# What is ARIA and how do you use it?

The first rule of ARIA (Accessible Rich Internet Applications) is "Don't use ARIA". When the time comes and you do need it, you'll want to know you're doing it right. This part of the workshop discusses the various roles, states, and properties of ARIA. In addition, you'll learn about accessibility APIs and how assistive technologies interact with web applications.

ARIA comes from a specification that you can visit and bookmark in your browser: [https://www.w3.org/TR/wai-aria-1.1/]

The specification lists a standard set of attributes that you can plumb into your webpages for accessibility information. "Standard" means you can't make up your own attributes, and there are requirements for using them on specific elements or in combinations.

## Exercise: Inspect date picker grid with ARIA roles vs. tables

Using the completed `date-picker-table.js` and `date-picker-grid.js` files in
`exercise2-what-is-aria` as a reference, play around with the semantics of the
date picker calendar.

There are three approaches to compare in DevTools and assisitve technology:

- A group of button elements for each of the days
- An HTML table with rows for weeks in the calendar and cells for the days
- An HTML table with ARIA grid roles bolted on top

Apply one or more of these approaches to the live page in `components/page-listing-detail.js`
and test your changes in the browser with VoiceOver or NVDA.
