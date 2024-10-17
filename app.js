document.addEventListener('DOMContentLoaded', function() {
    let selectGenre = document.querySelector('#genre');

    function displayImage() {
        let genreValue = selectGenre.value;
        let artistImageContainer = document.querySelector('.Concertimage');

        artistImageContainer.innerHTML = '';

        fetch('http://localhost:3000/artists')
            .then((response) => response.json())
            .then((data) => {
                data.forEach(artist => {
                    if (artist.genre === genreValue) {
                        
                        let artistImage = document.createElement('img');
                        artistImage.src = artist.image_url;
                        artistImage.alt = artist.name;
                        artistImage.width = 300;
                        artistImage.height = 400
            
                        artistImage.classList.add('artist-image');

                        artistImageContainer.appendChild(artistImage);
                    }
                });
            });
    }

    selectGenre.addEventListener('change', displayImage)

    let searchButton = document.querySelector('.form')

searchButton.addEventListener('submit', function(e){
    e.preventDefault()
    const searchValue = e.target.search.value.toLowerCase()

    fetch("http://localhost:3000/artists")
    .then((response)=> response.json())
    .then((data)=>{

        let description = document.querySelector('#description')
        let artistPoster = document.querySelector('img#poster')
        
        let recentEventsTitle = document.querySelector('.recentConcerts')

        
        description.innerHTML = ''
        recentEventsTitle.innerHTML = ''

        
        let upcomingEvents = document.createElement('h3')
        upcomingEvents.textContent = 'Upcoming Events:'
        description.appendChild(upcomingEvents)
        let eventList = document.createElement('ul')
        description.appendChild(eventList) 

        let recentEvents = document.createElement('h3')
        recentEvents.textContent = 'Past Events:'
        recentEventsTitle.appendChild(recentEvents)
        let pasteventlist = document.createElement('ul')
        recentEventsTitle.appendChild(pasteventlist)
        

        data.forEach(artist => {
            if(artist.name.toLowerCase() === searchValue){
                
                artist.upcoming_concerts.forEach(concert => {
                    let listItem = document.createElement('li')
                    listItem.style.padding = '15px'
                    listItem.textContent = concert
                    artistPoster.src = artist.image_url
                    eventList.appendChild(listItem) 
                })
                artist.recent_concerts.forEach(events => {
                    let pastEventItem = document.createElement('li')
                    pastEventItem.style.padding ='15px'
                    pastEventItem.textContent = events
                    pasteventlist.appendChild(pastEventItem)

                })
            }
        })
    })
})
})
