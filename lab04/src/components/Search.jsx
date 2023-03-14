
const Search = ({children, searchInfoList, fetchSearchTopStories }) => {
    const [searchInfo, setSearchInfo] = searchInfoList
    const {searchTerm} = searchInfo
    
    const onSearchChange = event => {
        setSearchInfo({...searchInfo, searchTerm: event.target.value})
    }
    
    const onSearchSubmit = event => {
        fetchSearchTopStories(searchTerm)
        event.preventDefault()
    }

    return (
        <form onSubmit={onSearchSubmit}>
            <input type="text" value={searchTerm} onChange={onSearchChange} />
            <button type="submit">{children}</button>
        </form>
    )
}

export default Search