import React, { useEffect, useState } from 'react'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='

const Search = ({ value, onChange, onSubmit, children }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChange} />
            <button type="submit">{children}</button>
        </form>
    )
}

const Table = ({ list, onDismiss }) =>
    <div className="table">
        {list.map(item =>
            <div key={item.objectID} className="table-row">
                <span style={{ width: '40%' }}>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span style={{ width: '30%' }}>
                    {item.author}
                </span>
                <span style={{ width: '10%' }}>
                    {item.num_comments}
                </span>
                <span style={{ width: '10%' }}>
                    {item.points}
                </span>
                <span style={{ width: '10%' }}>
                    <Button
                        onClick={() => onDismiss(item.objectID)}
                        className="button-inline"
                    >
                        Dismiss
                    </Button>
                </span>
            </div>
        )}
    </div>

const Button = ({ onClick, className = '', children }) =>
    <button
        onClick={onClick}
        className={className}
        type="button"
    >
        {children}
    </button>

const Lab = () => {
    const [searchInfo, setSearchInfo] = useState({result: null, searchTerm: 'React'})

    useEffect(() => {
        fetchSearchTopStories(searchInfo.searchTerm)
    },[])

    const fetchSearchTopStories = (searchTerm, page = 0) => {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
            .then(response => response.json())
            .then(result => setSearchTopStories(result))
            .catch(err => err)
    }

    const setSearchTopStories = result => {
        const { hits, page } = result
    
        const oldHits = page !== 0 ? searchInfo.result.hits : []
    
        const updatedHits = [...oldHits, ...hits]
    
        setSearchInfo({
            result: { hits: updatedHits, page }
        })
    }

   const onSearchChange = event => {
        setSearchInfo({...searchInfo,searchTerm: event.target.value})
    }

    const onSearchSubmit = event => {
        const { searchTerm } = searchInfo
        fetchSearchTopStories(searchTerm)
        event.preventDefault()
    }

    const  onDismiss = id => {
        const isNotId = item => item.objectID !== id
        const updatedHits = searchInfo.result.hits.filter(isNotId)
        setSearchInfo({
            result: { ...searchInfo.result, hits: updatedHits }
        })
    }

    const { searchTerm, result } = searchInfo
    const page = (result && result.page) || 0
        return (
            <div className="page">
                <div className="interactions">
                    <Search
                        value={searchTerm}
                        onChange={onSearchChange}
                        onSubmit={onSearchSubmit}
                    >
                        Search
                    </Search>
                </div>
                <div className="articles">
                    {result && (
                        <Table
                            list={result.hits}
                            onDismiss={onDismiss}
                        />
                    )}
                </div>
                <footer>
                    <Button onClick={() => fetchSearchTopStories(searchTerm, page + 1)}>
                        More
                    </Button>
                </footer>
            </div>
        )
}

export default Lab