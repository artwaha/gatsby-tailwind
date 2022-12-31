import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className='font-sans max-w-lg m-auto'>
            <nav>
                <ul className='flex list-none pl-0'>
                    <li className='pr-8'><Link to="/" className='text-black'>Home</Link></li>
                    <li><Link to="/about" className='text-black'>About</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className="text-purple-800">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout