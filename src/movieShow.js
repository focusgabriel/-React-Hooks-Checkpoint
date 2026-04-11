import Playlist from "./movie";
import Movies from "./movieList"

function MoviePlaylist(){
    return(
        <>
            {Movies.map((item, index) => (
                <Playlist
                    key={index}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                    posterURL={item.posterURL} 
                />
            ))}
        </>
    )
}

export default MoviePlaylist;