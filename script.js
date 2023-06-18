/*
const trackList = [
    {
        trackName: "Circle",
        artistName: "Post Malone",
        trackDuration: "3:36",
        img: "circle"
    },
    {
        trackName: "Flower",
        artistName: "Jisoo",
        trackDuration: "3:05",
        img: "flower"
    },
    {
        trackName: "You Belong With Me",
        artistName: "Taylar Swift",
        trackDuration: "3:49",
        img: "youBelongWithMe"
    },
    {
        trackName: "Gone",
        artistName: "Rose",
        trackDuration: "3:41",
        img: "gone"
    },
    {
        trackName: "Anyone",
        artistName: "Justin Bieber",
        trackDuration: "3:11",
        img: "anyone"
    },
    {
        trackName: "Icecream",
        artistName: "Blackpink",
        trackDuration: "3:03",
        img: "icecream"
    },
    {
        trackName: "Sweater Weather",
        artistName: "The Neighbourhood",
        trackDuration: "3:57",
        img: "sweaterWeather"
    },
    {
        trackName: "Everything Goes On",
        artistName: "Porter Robinson",
        trackDuration: "2:04",
        img: "everythingGoesOn"
    },
    {
        trackName: "Viva La Vida",
        artistName: "Coldplay",
        trackDuration: "4:35",
        img: "vivaLaVida"
    },
    {
        trackName: "Whisper",
        artistName: "Boombox Cartel",
        trackDuration: "4:04",
        img: "whisper"
    }
];
*/
const trackList = [];

//api handel
const url = 'https://itunes.apple.com/search?term=blackpink';
fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data.results);
        const artists = data.results;
        return artists.map(result=>{
            
            /*
            const article = document.createElement("article"),
                artists = document.createElement('p'),
                song = document.createElement('h4'),
                img = document.createElement('img'),
                audio = document.createElement('audio'),
                audioSource = document.createElement('source')

            console.log(result); 

            artists.innerHTML = result.artistName;
            song.innerHTML = result.trackName;
            img.src = result.artworkUrl100;
            audioSource.src = result.previewUrl;
            audio.controls = true;

            article.appendChild(img);

            article.appendChild(img);
            article.appendChild(artists);
            article.appendChild(song);
            article.appendChild(audio);
            */
        }) 
        
    })
    .catch(error=>console.log("Request fail:", error))


//render the music list on the DOM
function renderTrackList(index) {
    let trackListHTML = "";

    for(let i = 0; i < trackList.length; i++) {
        const trackObject = trackList[i];
        const {trackName,artistName,trackDuration,img} = trackObject;

        const html =`
            <div class="song-container">
                <div class="song-stats">
                    <div class="song-image-continer">
                        <img src="/images/song-cover-img/${img}.png">
                    </div>
                    <div class="song-name-container">
                        <h2>
                            ${artistName} - ${trackName}
                        </h2>
                        <p>Duration - ${trackDuration}</p>
                    </div>
                </div>
                
                <div class="play-pause-button-container js-play-pause-button-container" id="play-pause-button-container">
                    <a><i class="fa-solid fa-play fa-3x js-play-pause-icon"></i></a>
                </div>
            </div>
        `; 

        trackListHTML += html;
        
    }

    document.querySelector('.js-music-list')
                .innerHTML = trackListHTML;
}

//calling the render function
renderTrackList();



//toggle PlayPause button 
let activeButtonIndex = null;
document.querySelectorAll(".js-play-pause-icon").forEach((playPauseButton,index) => {
    playPauseButton.addEventListener('click', () => {
        console.log(`Click ${index}`);

        if(index === activeButtonIndex) {
            playPauseButton.classList.remove("fa-pause");
            playPauseButton.classList.add("fa-play");
            activeButtonIndex = null;
        } else {
            pausePreviousSong();
            playPauseButton.classList.add("fa-pause");
            playPauseButton.classList.remove("fa-play");
            activeButtonIndex = index;
        }


    })
});

function pausePreviousSong() {
    if (activeButtonIndex !== null) {
        const previousButton = document.querySelectorAll(".js-play-pause-icon")[activeButtonIndex];
        previousButton.classList.remove("fa-pause");
        previousButton.classList.add("fa-play");
        console.log("this song is pause");
    }
}

//make a track to play and pause
function playPauseTrack() {
    
}
