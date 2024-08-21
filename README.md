

# Movie Database Application

This is a simple React application that allows users to browse a collection of movies, view details, and vote for their favorite movies. The application is structured with a focus on modular components, leveraging React Context for state management, and implementing routing with React Router.

## Project Structure

```plaintext
src/
  components/
    PageWrapper/
      index.jsx
    SearchMovie/
      index.jsx
    FilterMovie/
      index.jsx
    MovieList/
      index.jsx
    MovieCard/
      index.jsx
    MovieVote/
      index.jsx
  pages/
    HomePage/
      index.jsx
    AboutPage/
      index.jsx
    MoviesPage/
      index.jsx
    MovieDetails/
      index.jsx
  contexts/
    MovieContext.js
  App.js
  app.css
```

## Features

- **Browse Movies:** Users can browse a list of trending movies.
- **Search Movies:** A search bar allows users to find movies by title.
- **Filter Movies:** Users can filter movies based on specific criteria (e.g., popularity).
- **Movie Details:** Clicking on a movie shows detailed information about it.
- **Vote for Movies:** Users can vote for their favorite movies directly from the movie card or detail page.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tiffjai/movie.git
   cd movie
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Components

### `PageWrapper`
A component that wraps all pages with common elements like the navbar and footer.

### `Navbar`
Provides navigation links to the home page, movies page, and about page.

### `SearchMovie`
A component that provides a search input and handles searching for movies by title.

### `FilterMovie`
A component that allows users to filter movies based on specific criteria.

### `MovieList`
Displays a list of movies. It maps over the `movies` array and renders `MovieCard` components.

### `MovieCard`
Displays individual movie details including title, year, and a link to the movie's detail page. It also includes the `MovieVote` component to allow users to vote for the movie.

### `MovieVote`
A button component that allows users to vote for a movie. The `onVote` function is passed as a prop to handle the voting logic.

### `HomePage`
The landing page that welcomes users and provides a link to browse movies.

### `AboutPage`
Provides information about the project, its purpose, and possibly the API used.

### `MoviesPage`
Displays a list of trending movies with options to search and filter.

### `MovieDetails`
Displays detailed information about a specific movie, including a voting option.

## State Management

### `MovieContext`
This context is used to manage the state across the application, including the list of movies, the selected movie, loading states, and error handling.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

