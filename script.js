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

function renderTrackList() {
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
                
                <div class="play-pause-button-container">
                    <a  onClick="togglePlayPauseButton()"><i class="fa-solid fa-play fa-3x" id="play-pause-icon"></i></a>
                </div>
            </div>
        `;

        trackListHTML += html;
    }

    document.querySelector('.js-music-list')
                .innerHTML = trackListHTML;
}

renderTrackList();

const playPauseButton = document.getElementById("play-pause-icon");

function togglePlayPauseButton() {
   if(playPauseButton.classList.contains("fa-pause")) {
        playPauseButton.classList.remove("fa-pause");
        playPauseButton.classList.add("fa-play");
   } else {
        playPauseButton.classList.add("fa-pause");
        playPauseButton.classList.remove("fa-play");
   }
}