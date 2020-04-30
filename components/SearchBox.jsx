import React, { useState } from 'react'

export default function SearchBox({ requestSearch }) {
    const [query, setQuery] = useState('')
    const searchClick = (e) => {
        e.preventDefault();
        if (!query) return;
        requestSearch(query);
        setQuery("");
    }
    // const updateQuery = e => setQuery(e.target.value)
    return (
        <div className='container'>
            <input
                type="text"
                name="input"
                id="input"
                placeholder="Add Input...."
                value={query}
                className="input"
                onChange={e => setQuery(e.target.value)}
            />
            <button data-testid='search-button' onClick={searchClick}>Query</button>
        </div>
    )
}
