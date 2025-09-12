offset: ["start start", "end end"]

"start start" - The first element defines when the animation should begin
First "start": refers to the target element (the element being tracked)
Second "start": refers to the viewport (the visible area of the browser)
This means: "Start the animation when the start of the target element reaches the start of the viewport"

"end end" - The second element defines when the animation should end
First "end": refers to the target element
Second "end": refers to the viewport
This means: "End the animation when the end of the target element reaches the end of the viewport"