import React from 'react'
import PropTypes from "prop-types";
// import { useState } from 'react'
const Context = React.createContext()

function CoinsContextProvider(props) {

    const YoutubeEmbed = ({ embedId }) => (
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      );

      YoutubeEmbed.propTypes = {
        embedId: PropTypes.string.isRequired
      };
    // const [search, setSearch] = useState("")
    // const [results, setResults] = useState([])
    // const [searchInfo, setSearchInfo] = useState({})

    // const handleSearch = async e => {
    //     e.preventDefault();
    //     if (search === "") return;

    //     const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&
    //                     prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=15&srsearch=${search}`

    //     const response = await fetch(endpoint)

    //     if (!response.ok) {
    //         throw Error(response.statusText)
    //     }

    //     const json = await response.json()

    //     setResults(json.query.search)
    //     setSearchInfo(json.query.searchinfo)
    // }


    return (
        <Context.Provider value={YoutubeEmbed}>
            {props.children}
        </Context.Provider>

    )
}

export {CoinsContextProvider, Context}
