import React from 'react'
import Header from "./Header"
import Footer from "./Footer"


export default function NotFoundPage() {
    return (
        <>
         <Header></Header>
         <div className="not-found">
         
            <img src="/images/404.gif" alt="" />
       
         </div>
         
         <Footer></Footer>   
        </>
    )
}
