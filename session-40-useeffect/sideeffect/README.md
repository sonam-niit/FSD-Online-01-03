# use Context

- create context under context folder.
- ThemeContext
- here we implemented ThemeContext using useContext
- then created provider which is just function which taking all props childern compnent and will provide the data that you want.
- also create useTheme() function which is using context and returnig theme ( if we will not do this in every component where you wnat use these data you have to write this code.)
- just to avoid rewriting we created this.

*add provider in main.tsx*
*used it in app.tsx to apply css*
*used it in NavBar.tsx to create button by clicking on this button theme will be changed*