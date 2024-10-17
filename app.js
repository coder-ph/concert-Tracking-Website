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
            let artistName =document.querySelector('.artist-name')
            
            
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
                    artistName.querySelector('h2').textContent=artist.name
                    
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
    const submitButton = document.querySelector('.myrecentconcert')
    submitButton.addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()

        const artistObj={
            name:e.target.querySelector('.myartistName').value,
            genre: e.target.querySelector(".mygenre").value,
            image_url: e.target.querySelector(".myimageurl").value,
            location: e.target.querySelector(".artistLocation").value,
            upcoming_concerts: [e.target.querySelector(".upcomingConcerts").value],
            recent_concerts:[e.target.querySelector(".recentConcerts").value],
            rating:e.target.querySelector(".rating").value,
        } 
        postMyArtist(artistObj)
    }

    function postMyArtist(artistObj) {
        fetch("http://localhost:3000/artists", {
            method: 'POST',
            headers:{
                'content-type': 'application/json' 
            },
            body: JSON.stringify(artistObj)
        })
        .then((response)=> response.json())
        .then((data)=> alert('Your data has been received and we are verifying the availability of the event'))
        .catch((error) => console.error('Error',error))
    }
   
    const commentHandler = document.querySelector('.commentHandler')
    commentHandler.addEventListener('submit', function(e) {
        e.preventDefault()
        const artistHolder = e.target.querySelector(".artistNameComment").value
        
        const comment= e.target.querySelector('#comment').value
        
        const commentHolder = document.querySelector(".commentLog")
        
        const commentParagraph = document.createElement('p')
        commentParagraph.classList.add('parHolder')
        commentParagraph.textContent = `${artistHolder}: ${comment}`
        commentHolder.appendChild(commentParagraph)
        commentHandler.appendChild(commentHolder)
        
    
    })

})
