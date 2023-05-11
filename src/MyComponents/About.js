import React from 'react'
import { Footer } from './Footer'
import Header from './Header'
export const About = () => {
    return (
        <>
        <Header title="My Todos List" searchBar={false} /> 

        <div>
            This is a simple React Todo App 
        </div>
        <Footer />
        </>

    )
}
