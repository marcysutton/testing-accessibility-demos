# Accessible Names

Naming things is hard. Here you'll learn the about crafting accessible names and descriptions for assistive technology, as well as the best approach to working with labels and placeholders for forms.

An accessible name exposes a unique name for an interactive element or landmark to describe its purpose. Things that can contribute to an accessible name include `textContent` (including children), `aria-label`, `aria-labelledby`, a `label` paired with a form control, and even `title` or 
`placeholder`. How text is exposed as an accessible name is determined by the Accessible Name
and Description Calculation specification, found in [https://www.w3.org/TR/accname-1.2/].

A note about `placeholder`: these aren't good to rely on for labeling as they aren't
visually persistent. Even though placeholder is technically exposed as a last resort and passes
automated testing tool checks, it will clear out when typing in a form field and users will forget
what they're trying to fill in. A visual label is better.

Similarly, `title` attributes are technically exposed to assistive technology but they only show
on mouse hover. That shouldn't be all that sighted users have to go on when trying to understand the
purpose of your graphical elements. Use text labels with your icons, or at least make them configurable.

## Exercise: Write an accessible name for an icon button in two ways

Using the `<IconButton>` component, play with different approaches for exposing an accessible name.
The goal is to add a name to the interactive button that reflects the graphic icon inside.

There are a few approaches for exposing a name for an icon button:

- Put an `aria-label` on the button itself
- Put an `aria-label` on a graphical child element like an `img` or a `span[role=img]`
- Use a `.visually-hidden` span or other child element with `textContent` inside

There are even more options when the icon is SVG. If the element provides rich content, it can
contain text that is exposed as a name. If the SVG is essentially an image, you can use the same
graphical image approach as above. Or you can decide to mark the SVG with `role=presentation` and
let the wrapping button element provide a name somehow.
