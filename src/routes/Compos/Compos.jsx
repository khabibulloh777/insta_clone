import React from 'react'
import Header from '../../components/header/Header'
import './Compos.css'
import ComposFeed from './ComposFeed/ComposFeed'
function Compos() {
    return (
        <div className="compos">
         <Header/>
         <div className="hel">
             <ComposFeed/>
             <ComposFeed/>
             <ComposFeed/>
         </div>
        </div>
    )
}

export default Compos
