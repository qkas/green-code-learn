import React from 'react'

const Header = (props: any) => {
  return (
    <div>
      <nav className='fixed top-0 w-full items-center justify-between border-b border-b-[var(--highlight)]'>
        <a href='#topPage' className='text-[var(--accent)] px-3 font-bold text-3xl'>
          LOGO
        </a>
      </nav>
    </div>
  )
}

export default Header