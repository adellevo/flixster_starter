## Week 1 Assignment: Flixster

Submitted by: Adelle Vo 

Estimated time spent: **8** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://adellevo.github.io/flixster_starter/)

### Application Features

#### CORE FEATURES

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### STRETCH FEATURES

- [x] Deploy website using GitHub Pages. 
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [x] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

![Flixster](https://media.giphy.com/media/PzOSvRS7qHyJ47A5ZO/giphy.gif)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I think the topics discussed in my labs prepared me to complete the assignment. I learned how to programmatically create DOM elements through JavaScript, which is something I had to use for the movie card popups. I didn't feel unprepared to complete any features. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would have added more information to my movie card popups.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I thought that implementing the project's core features was pretty straightforward since they mostly aligned with the topics we went over in our labs from earlier in the week. I thought that the stretch features were a little tricky, and that was mostly due to my unfamaliarity with the syntax for passing variables to an onlick defined via the innerHTML property of a DOM element. I noticed that one of my peers used some advanced styling features that I've never explored, so maybe I'll look into those for the next project. 

### Open-source libraries used

- N/A

### Shout out

Thanks to Phineas and Yilika for helping me conceptualize the popup functionality of my movie cards! 

