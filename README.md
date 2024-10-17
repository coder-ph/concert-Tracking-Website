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
### Setup
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