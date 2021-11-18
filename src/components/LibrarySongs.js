import React from "react";

const LibrarySong = ({key, song, songs, setCurrentSong, audioRef, isPlaying, setSongs}) => {

    const songSelectHandler = (event) => {
        const selectedSong = songs.filter((state) => state.id === song.id)
        // console.log(id);
        // console.log(selectedSong);
        setCurrentSong(selectedSong[0]);
        
        // change state active of songs when one is selected
        const newSongs = songs.map((newSong) => {
            if(newSong.id === song.id){
                return{
                    ...newSong,
                    active: true
                };
            }else{
                return{
                    ...newSong,
                    active: false
                }
            }
        })
        setSongs(newSongs);
        
        
        // chech if song is playing if yes, wait until new song is loaded and play it.
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }

        }
    }


    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected': ''}`}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <p>{song.artist}</p>
            </div>
        </div>
    )
}

export default LibrarySong;