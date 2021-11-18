 
export const playAudio = (isPlaying, audioRef) => {
    
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