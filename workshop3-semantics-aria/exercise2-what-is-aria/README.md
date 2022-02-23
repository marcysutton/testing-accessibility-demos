# What is ARIA and how do you use it?

The first rule of ARIA (Accessible Rich Internet Applications) is "Don't use ARIA". When the time comes and you do need it, you'll want to know you're doing it right. This part of the workshop discusses the various roles, states, and properties of ARIA. In addition, you'll learn about accessibility APIs and how assistive technologies interact with web applications.

ARIA comes from a specification that you can visit and bookmark in your browser: https://www.w3.org/TR/wai-aria-1.1/

The specification lists a standard set of attributes that you can plumb into your webpages for accessibility information. "Standard" means you can't make up your own attributes, and there are requirements for using them on specific elements or in combinations.

## Exercise: Inspect date picker with DIVs and buttons, add states & properties

Using the `date-picker.js` file in `exercise2-what-is-aria` as
a reference, play around with the semantics of the date picker. For this
exercise, pay close attention to roles, states, and properties.

As you navigate the original date picker with a screen reader, pay close attention to how the month and date buttons are announced. Are you able to
reach and operate them? Is it clear which dates are already
booked or selected? How might you communicate that information with ARIA?

Make changes to the component in `components/date-picker/date-picker.js`
and test your changes in the browser with VoiceOver and/or NVDA.

You can test the before and after components on the Listing pages here:

- http://localhost:1234/workshop3-semantics-aria/listing/listing-cranberry-lake
- http://localhost:1234/workshop3-semantics-aria/exercise2/listing-cranberry-lake
