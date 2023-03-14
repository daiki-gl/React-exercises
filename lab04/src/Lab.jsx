import React, { useContext, useEffect, useState } from 'react'
import Button from './components/Button'
import Search from './components/Search'
import Table from './components/Table'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='

const Lab = () => {
    const [searchInfo, setSearchInfo] = useState({result: null, searchTerm: 'React'})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
       (async () => {
           await fetchSearchTopStories(searchInfo.searchTerm)
        })()
    },[])

    const fetchSearchTopStories = async(searchTerm, page = 0) => {
        setIsLoading(false)
       await fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
            .then(async(response) => await response.json())
            .then(async result => {
                await setSearchTopStories(result)
                setIsLoading(true)
            })
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

    const { searchTerm, result } = searchInfo

    const page = (result && result.page) || 0

        return (
            <div className="page">
                <div className="interactions">
                    <Search
                        searchInfoList={[searchInfo, setSearchInfo]}
                        fetchSearchTopStories={fetchSearchTopStories}
                    >
                        Search
                    </Search>
                </div>

                <div className="articles">
                    {isLoading ? result && (
                        <Table
                            list={result.hits}
                            searchInfoList={[searchInfo, setSearchInfo]}
                        />
                    )
                    : <p>Loading...</p>
                }
                </div>


                <footer>
                    <Button onClick={() => fetchSearchTopStories(searchTerm, page + 1)}>More</Button>
                </footer>
            </div>
        )
}

export default Lab