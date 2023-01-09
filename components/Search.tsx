import React from 'react'
import SearchTab from './SearchTab'

type Props = {}

const Search = (props: Props) => {
  return (
    <div id='search_container' className='w-[1200px] h-[256px] rounded-2xl mx-auto bg-white'>
        <div id='search_tabs_container' className='w-full '>
            <SearchTab title='پرواز داخلی' ></SearchTab>
           
        </div>
    </div>
  )
}

export default Search