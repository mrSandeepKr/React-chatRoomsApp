import React from 'react'
import SearchOutlined from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
    return (
        <div className='sidebar__search'>
            <div className='sidebar__search-container'>
                <SearchOutlined />
                <input placeholder='Search or start a new chat' type='text' />
            </div>
        </div>
    )
}

export default SearchBar