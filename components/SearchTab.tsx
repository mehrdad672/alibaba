import Link from 'next/link'
import React from 'react'

type Props = {
    title: string;
    children?:
    React.ReactNode
  };

const SearchTab = (props: Props) => {
  return (
    <Link href=''>
        {props.children}
        <span>{props.title}</span>
    </Link>
  )
}

export default SearchTab