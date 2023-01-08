
import React from 'react'

interface Props  {
Icon :React.ElementType
Title: string
}

const Headeritem = ({Icon,Title}: Props) => {
  return (
    <button className='flex space-x-2 px-3 font-semibold items-center  py-2 rounded-xl hover:bg-gray-100'>
    <p className=' text-gray-500 text-lg'>{Title}</p>
    <Icon className='w-6 h-6 text-gray-600'/>
    </button>
  )
}

export default Headeritem