# Modernize Giveaway – front-end challenge

This is a responsive landing page built as a technical test for the senior front-end developer position. The project consists of replicating a provided design using semantic HTML, CSS, and JavaScript, with attention to mobile responsiveness, form validation, and visual polish.

## 📦 Features

- Pixel-perfect implementation based on provided desktop and mobile mockups
- Responsive layout (`1024px` max on desktop, adapts down to `320px` but the mobile breakpoint starts at `767px` as requested)
- Background color animation (`backgroundCycle`) combined with a transparent texture image
- Custom phone input masking: `(XXX) XXX-XXXX`
- Form validation:
  - `Name`: min 2 characters
  - `Phone`: required + correct format
  - `Email`: required + valid structure
- Disabled button and fields after successful submission (simulated)
- Submit button changes to `"Submitted"` regardless of network status (as requested)
- Advertorial block with clipped border effect and inline link
- I also loaded Montserrat font to better reflect the Sketch mockup

## 🧠 Notes and tricky parts

Here are some of the things I found tricky or interesting during the process:

- **Inset shadows on input fields**: Getting consistent rendering across browsers required close attention to detail.
- **Font size handling**: I opted to use `rem` for text sizing, but this project would benefit from a more scalable and coherent relative units strategy.
- **Combining animated background and texture**: The background color cycle was already in place, and adding a `.png` texture over it without breaking the animation was tricky. I chose to use a `::before` pseudo-element so both layers remained independent and controllable.
- **Forms are complex by nature**: While many tools now auto-generate them, hand-coding one requires attention to multiple details like setting the correct input `type` values and respecting accessibility best practices.
- **UX-wise, labels matter**: This version could be improved by adding `<label>` elements for each field. Research shows that relying only on placeholders increases cognitive load and leads to errors. It's a well-established best practice to use visible labels.
- **Asymmetric inputs for `City` and `State`**: This was a visual and UX challenge. In desktop, both fit side-by-side, but on mobile I decided to stack them into separate rows. This keeps the experience comfortable for users with smaller screens or accessibility needs.
- **What took more time**: I spent more time on remembering how to get the clpthpath right for the outer rectangle in the Even more savings section and on figuring out the disabled simulation of the form.
- **Time spent**: I worked on it during short time spans, mostly from tuesday to thursday, I estimate in total it took around 6-7 hours.