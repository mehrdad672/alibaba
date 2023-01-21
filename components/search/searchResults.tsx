import React from 'react'
import Ticket from './ticket'

type Props = {}

const SearchResults = (props: Props) => {
  return (
    <div className='flex justify-center mt-4 '>
        <div className='w-[850px] ' id='display-results'>
            
        </div>
        <div id='filter-section'></div>
    </div>
  )
}

export default SearchResults