import React from "react";

// icon
// imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic  } from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryState, setLibraryState}) => {


    return(
        <nav>
            <h1>Waves</h1>
            <button onClick={ () => setLibraryState(!libraryState) }>
                <FontAwesomeIcon icon={faMusic} />
                <p>Library</p>

            </button>
        </nav>
    )
}

export default Nav;