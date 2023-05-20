// Test commit msg
import logo from '../assets/logo.svg'

export function Header() {
    return (
        <header style={{gridArea: "h"}} className='flex items-center border my-4 py-10 '>
            <img style={{width: "200px"}} src={logo} alt="logo" />
            <h1 className='text-3xl mx-5'>Best clothes shop</h1>
        </header>
    )
}