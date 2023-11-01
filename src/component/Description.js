import React from 'react'; // Import the React library for building components.
import Button from 'react-bootstrap/Button'; // Import the Button component from the React Bootstrap library.
import Card from 'react-bootstrap/Card'; // Import the Card component from the React Bootstrap library.
import { useParams, useNavigate } from 'react-router-dom'; // Import the useParams and useNavigate hooks from the React Router DOM library.

const Description = ({ movies }) => {
    const { id } = useParams(); // Extract the 'id' parameter from the URL using useParams hook.
    const navigate = useNavigate(); // Get the navigation function using useNavigate.

    const film = movies.find((movie) => movie.id === Number(id)); // Find the movie with the specified 'id' from the 'movies' array.

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={film.posterURL} alt="moviecard" width="100%" height="300px" />
                {/* Display the movie poster image with title and description */}
                <Card.Body>
                    <Card.Title>{film.title}</Card.Title> {/* Display the movie title */}
                    <Card.Text>{film.description}</Card.Text> {/* Display the movie description */}
                    <Button variant="primary">watch</Button> {/* Display a "watch" button */}
                    <Button variant="primary" onClick={() => navigate('/')} >GO TO HOME</Button>
                    {/* Display a "GO TO HOME" button that navigates back to the home page */}
                </Card.Body>
                <iframe width="560" height="315" src={film.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                {/* Embed a YouTube video player with the specified 'film.trailer' URL */}
            </Card>
        </div>
    );
}

export default Description; // Export the Description component for use in other parts of the application.
