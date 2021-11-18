import React from "react";
// import { playAudio } from "../playSong";

const LibrarySong = ({songInfo, song, songs, setCurrentSong, audioRef, isPlaying, setSongs}) => {

    const songSelectHandler = async (event) => {
        const selectedSong = songs.filter((state) => state.id === song.id)
        await setCurrentSong(selectedSong[0]);
        
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
        await setSongs(newSongs);
        
        
    //    playAudio(isPlaying,audioRef);
    if(isPlaying) audioRef.current.play();

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