import React from 'react'
import '../App.css'

export default function Navigation({serviceClick}) {
    return (
        <div >
            <div className=' text-light mx-auto my-4 t 'style={{ zIndex: 1000 }}>
                <div className="container px-5 mx-5 border border-secondary rounded-5 navbar  colDark navbar-expand p-4 mt-3 d-flex justify-content-around" style={{ zIndex: 1000 }}>
                    <div className="navbar-brand mx-2 shiny-text fw-bold text-light">DHRUV TAMRAKAR</div>
                    <div className="collapse-navbar">
                        <ul className='navbar-nav shiny-text d-flex'>
                            <li onClick={()=> serviceClick("serviceRef")} className='nav-item mx-2 px-1 boxtextshadow'>SERVICE</li>
                            <li onClick={()=> serviceClick("technologyRef")} className='nav-item mx-2 px-1 boxtextshadow'>TECHNOLOGY</li>
                            <li onClick={()=> serviceClick("portfolioRef")} className='nav-item mx-2 px-1 boxtextshadow'>PORTFOLIO</li>
                            <li onClick={()=> serviceClick("contactRef")} className='nav-item mx-2 px-1 boxtextshadow'>CONTACT</li>
                        </ul>
                    </div>
                    <div>
                        <div className="circle-container m-auto">
                            <div className="rotating-border aline-center"></div>
                            
                            <div className="icon m-auto "><i className='fa-solid fa-user fs-4'></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
