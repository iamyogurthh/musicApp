const trackList = [];

//api handel
const url = `https://itunes.apple.com/search?term=blackpink`;
        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data.results);
                const artists = data.results;
                artists.forEach((result) => {
                    const trackObject = {
                        trackName: result.trackName,
                        artistName: result.artistName,
                        trackDuration: result.trackDuration,
                        img: result.artworkUrl100,
                        genre: result.primaryGenreName
                    };

                    trackList.push(trackObject);
                });

                renderTrackList();
            })
            .catch(error => console.log("Request fail:", error));

// render the music list on the DOM
function renderTrackList() {
    let trackListHTML = "";

    for (let i = 0; i < trackList.length; i++) {
        const trackObject = trackList[i];
        const { trackName, artistName, trackDuration, img, genre } = trackObject;

        const html = `
            <div class="song-container">
                <div class="song-stats">
                    <div class="song-image-continer">
                        <img src="${img}">
                    </div>
                    <div class="song-name-container">
                        <h2>
                            ${artistName} - ${trackName}
                        </h2>
                        <p>Genre - ${genre}</p>
                    </div>
                </div>
                
                <div class="play-pause-button-container js-play-pause-button-container" id="play-pause-button-container-${i}">
                    <a><i class="fa-solid fa-play fa-2x js-play-pause-icon" id="play-pause-icon-${i}"></i></a>
                </div>
            </div>
        `;

        trackListHTML += html;
    }

    document.querySelector('.js-music-list').innerHTML = trackListHTML;

    // toggle Play/Pause button 
    document.querySelectorAll(".js-play-pause-icon").forEach((playPauseButton, index) => {
        playPauseButton.addEventListener('click', () => {
            console.log(`Click ${index}`);

            if (playPauseButton.classList.contains("fa-pause")) {
                playPauseButton.classList.remove("fa-pause");
                playPauseButton.classList.add("fa-play");
                pauseTrack();
            } else {
                pausePreviousSong();
                playPauseButton.classList.remove("fa-play");
                playPauseButton.classList.add("fa-pause");
                activeButtonIndex = index;
                playTrack(index);
            }
        });
    });
}

let activeButtonIndex = null;

function pausePreviousSong() {
    if (activeButtonIndex !== null) {
        const previousButton = document.querySelector(`#play-pause-icon-${activeButtonIndex}`);
        previousButton.classList.remove("fa-pause");
        previousButton.classList.add("fa-play");
        pauseTrack();
        console.log("Previous song paused");
    }
}

function pauseTrack() {
    // Logic to pause the currently playing track
}

function playTrack(index) {
    // Logic to play the track at the specified index
}

// calling the render function
renderTrackList();



