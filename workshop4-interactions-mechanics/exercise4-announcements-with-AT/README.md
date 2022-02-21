# Announcements with Assistive Technology

There are many situations where new information is presented in our applications that needs to be announced in screen readers: chat boxes, alerts and errors, toast notifications, and more. Learn how to add ARIA Live Regions to an application, when to make announcements, and how much to say.

Sometimes, screen readers need to be notified of things happening on the screen without their focus being moved. That's where
ARIA Live Regions come in. You can apply them with `role=alert`, `role=status`, `aria-live=assertive` or `aria-live=polite` on
page load, and by adding text to them assistive technologies will make an announcement. There are more ways to configure Live
Regions, such as the `aria-atomic` attribute which will change how much of the text is announced (all or parts of it?).

There is also the topic of client-side routing, which is an opportunity to tie focus management and announcements together.

## Exercise: Implement global form validation and test in a screen reader

For this exercise, add an ARIA Live Region to the Submit Your Spot page under the Resources section of the meganav. If any of the
fields are empty on submit (besides the checkbox or submit button), append a message to an element set up as a Live Region using
one of the methods above. You can compare the working `page-submit-listing.js` file in `exercise4-announcements-with-AT` to compare.

- `exercise4-announcements-with-AT/page-submit-listing.js`
- http://localhost:1234/workshop4-interactions-mechanics/exercise4/submit-listing
