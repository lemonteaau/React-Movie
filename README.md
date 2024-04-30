# React Movie

An intuitive movie searching and tracking application built with React. Users can search for movies, view movie details, rate movies, and keep track of the movies they have watched.

<img width="1389" alt="image" src="https://github.com/lemonteaau/React-Movie/assets/104964583/00c841e8-3e01-4366-80b7-dd5f6d008ba3">


## Features

- Search for movies using the OMDb API
- View detailed information about a selected movie
- Rate movies on a scale of 1 to 10 stars
- Add movies to a personal "watched" list
- Responsive and user-friendly interface

![React-Movie-demo](https://github.com/lemonteaau/React-Movie/assets/104964583/597c6ba4-5757-4939-96ac-f88a8da7eea7)


## Installation

1. Clone the repository:

   ```
   git clone https://github.com/lemonteaau/React-Movie.git
   ```

2. Navigate to the project directory:

   ```
   cd React-Movie
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

- Enter a movie title in the search bar to search for movies.
- Click on a movie from the search results to view its details.
- In the movie detail view, you can:
  - Rate the movie by selecting the number of stars.
  - Add the movie to your watched list by clicking the "Add to watched list" button.
- The watched movies list displays the movies you have marked as watched.
- The watched movies summary shows the total count, average IMDb rating, average user rating, and average runtime of your watched movies.

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## API

This application uses the [OMDb API](http://www.omdbapi.com/) to fetch movie data. You need to obtain an API key from the OMDb website and replace the `KEY` constant in the `App.js` file with your own API key.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License


This project is licensed under the MIT License. See [MIT LICENSE](https://github.com/lemonteaau/React-Movie/blob/main/LICENSE) for more information.

## Acknowledgements


- This project is based on a project from JONAS SCHMEDTMANN's "The Ultimate React Course". The course provided the foundation and guidance for building this app.
- [OMDb API](http://www.omdbapi.com/) for providing the movie data.
- [React](https://reactjs.org/) for the JavaScript library used to build the application.
- [GitHub](https://github.com/) for hosting the repository and providing version control.
