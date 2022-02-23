# How Screen Readers Overlap with Keyboard Access

Screen readers allow users to navigate our pages beyond just the Tab key. In this part of the workshop, you'll learn the different interaction modes for screen readers, and how to enable & test them in an application. We will also discuss the importance (and limitations) of analytics and WebAIM user surveys for prioritizing user flows.

It's possible to make a keyboard-accessible widget that doesn't work at all in screen readers. That's why
it's so important to test your components frequently with assistive technology. Don't stop at VoiceOver on
the Mac, either: NVDA or JAWS on Windows is a must as well as mobile screen readers!

## Exercise: Test roving tabindex with screen readers

Building on our date picker example from module 2, fire up VoiceOver on the Mac and/or NVDA on Windows to
see if the roving tabindex still works. You should be able to navigate the calendar grid with the arrow
keys without the screen reader getting stuck on the table or text content.

NVDA tip: try switching between modes using the NVDA keys `Insert + Spacebar`.

Files for your changes and testing:

- `exercise3-screen-reader-overlap/date-picker.js`
- http://localhost:1234/workshop4-interactions-mechanics/exercise3/listing-cranberry-lake
