import React from "react";

// logo
import {ReactComponent as Logo} from "../logo.svg";

// imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic  } from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryState, setLibraryState}) => {


    return(
        <nav>
            <Logo className="logo" />
            <button onClick={ () => setLibraryState(!libraryState) }>
                <FontAwesomeIcon icon={faMusic} />
                <p>Library</p>

            </button>
        </nav>
    )
}

export default Nav;