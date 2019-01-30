# Airmap Front End Take Home Exercise

### Objective

Design a single page application, using React with Redux, that contains the following pages:

1. An About page, which should just contain text with information about the application. Just a simple description of who built the app and when is fine.
2. A Home page, which displays a collection of cat gifs in a carousel.
    1. We recommend using the public Giphy "Search" API to retrieve your data: [Giphy "Search" API](https://developers.giphy.com/docs/) (Note: you will need to create an app on Giphy's site to obtain an API key.) 
    2. You should fetch at least 5 gifs at a time, so the carousel will have several gifs the user can flip through.
    3. Your carousel should have a ‘Next’ button that will display the next gif when it is clicked.
        1. The Next button should be disabled when the user is viewing the last gif in the collection.
    4. Your carousel should have a ‘Previous’ button that will display the last gif the user viewed when it is clicked. 
        2. The Previous button should be disabled if the user is viewing the first gif in the collection. 
    5. The Home page should fetch the gifs upon load. It should display some kind of loader component instead of the carousel while the data is being fetched.
    6. Your data and internal UI state should be managed in Redux. You can use any redux architecture strategy you prefer.
3. Both pages should share a navigation bar that contains links to the Home page and the About page.

#### Additional Notes:
- You can use any React CSS framework, such as Bootstrap, Material UI, Semantic UI, etc. for styling the UI, or no framework. 
- You can use any async library to handle your API call, such as Fetch, Axios, ES7 async/await, etc.
- You can use any async redux middleware to manage your redux async actions, such as redux thunk, redux-saga, etc.
- We recommend using a React Quickstart repo like create-react-app to bootstrap your project. 

#### Bonus Points:
- Implementation of unit testing
- Graceful error handling of the API call
