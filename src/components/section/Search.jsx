import React from 'react'

const Search = () => {
  return (
    <div id='search'>
        <div className='search__inner'>
            <label htmlFor='serachInput'>
                <span className='ir'>검색</span>
            </label>
            <input 
            type='search'
            name='serachInput'
            id='serachInput'
            autoComplete='off'
            className='serach__input'
            placeholder='검색어를 입력하세요'
            >
            </input>
        </div>
    </div>
  )
}

export default Search