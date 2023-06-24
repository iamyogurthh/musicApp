//search function
let searchValue = '';
const updateValue = () => {
    searchValue = document.querySelector(".js-input-box").value;
    //check searchValue exist
    if(!searchValue || searchValue === '') {
        alert("Enter the song name");
    } else {
        const url = `https://itunes.apple.com/search?term=${searchValue}`;
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
                clearSearchValue();
            })
            .catch(error => console.log("Request fail:", error));

    }
}

const searchButton = document.querySelector(".js-search-button");
searchButton.addEventListener("click", updateValue);

//function to clear search value 
function clearSearchValue() {
    trackList.splice(0,trackList.length);
}