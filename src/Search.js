import React from 'react'
import { useState } from 'react'
// import { Context } from "./CoinsContext"

function Search(props) {

    // const context = useContext(Context)
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [searchInfo, setSearchInfo] = useState({})

    const handleSearch = async e => {
        e.preventDefault();
        if (search === "") return;

        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&
                        prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=15&srsearch=${search}`

        const response = await fetch(endpoint)

        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json()

        setResults(json.query.search)
        setSearchInfo(json.query.searchinfo)
    }



    return (
        <div>
            <form onSubmit={handleSearch} class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
                <h4 style={{color:"white"}}>Powered by Wikipedia</h4>
                <a href="/" class="navbar-brand mb-0 h1">Home</a>

                <button
                    type='submit'
                    class="btn btn-outline-success"
                >
                        Search
                </button>
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder='Which Crypto Coin are you looking for?'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

            </form>
            {(searchInfo.totalhits) ? <p className='result-count'>Search Results: {searchInfo.totalhits}</p> : ""}
            <div className='result-card'>
                {
                    results.map((result, i) => {
                        const url = `https://en.wikipedia.org/?curid=${result.pageid}`

                        return (
                            <div key={i}>
                                <h3>{result.title}</h3>
                                <p dangerouslySetInnerHTML={{__html: result.snippet}}></p>
                                <a href={url}>Read More</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default Search
