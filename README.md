# Music Concert Application
## verview
This Music Concert Application allows users to view and manage concerts of internationally renowned artists across multiple genres like UK Drill, R&B, and Hip Hop. Users can add new artists, view their concert details, and check upcoming and recent concerts. This project dynamically changes based on the artist selection and provides an interactive way to explore music concerts.

## Features
- Dynamic Artist Selection: Users can select an artist from different genres, and the application updates the details and images dynamically.
- Add New Artists: Users can add new artists by submitting their details through a form.
- View Concert Information: Displays recent and upcoming concert details for selected artists.
- Interactive Interface: Smooth, user-friendly UI with dynamic updates based on user inputs.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: JSON server (for simulating API)
- Tools: Local JSON server for artist and concert data

# Installation
## Prerequisites
- Ensure you have Node.js installed.
- Install JSON Server globally using the following command:
```
    npm install -g json-server
```
## Setup
```
    git clone https://github.com/your-username/music-concert-app.git
    cd music-concert-app

```
### Install Dependencies: If there are any dependencies, install them using:
```
    npm install
```    
### Start JSON Server: Run the following command to start the JSON server:
```
json-server --watch db.json
```
### Run the Application: `Open index.html` in your browser to view the application.

## Usage
- On the homepage, select a genre to view a list of artists.
- Clicking an artist dynamically updates the concert information, displaying recent and upcoming concerts along with the artist's image.
- To add a new artist, fill out the form with details like artist name, genre, image URL, location, and concert dates.
- Upon submission, the artist is added to the list and can be viewed with the newly entered details.

## API Endpoints
The application uses a JSON server to simulate the backend. Here are the key endpoints:

- GET /artists: Retrieves the list of artists.
- POST /artists: Adds a new artist to the database.
- PUT /artists/{id}: Updates artist details.
- DELETE /artists/{id}: Deletes an artist from the database.

## Sample JSON Structure
Here's an example of the artist data structure used in the application:

```
{
  "id": 1,
  "name": "Central Cee",
  "genre": "UK Drill",
  "image_url": "https://example.com/central-cee.jpg",
  "location": "London",
  "upcoming_concerts": "2024-12-25T19:00:00",
  "recent_concerts": "2023-11-05T20:00:00"
  "rating": 7
}
```
## Project Structure
```
├── index.html          # Main HTML file
├── styles.css          # Stylesheet for the application
├── app.js              # Main JavaScript logic
├── db.json             # JSON data for simulating the backend
└── README.md           # Project documentation
```
