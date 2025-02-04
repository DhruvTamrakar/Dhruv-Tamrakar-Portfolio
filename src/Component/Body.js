import React from 'react'
import myimage from "../Media/boy.png"
import skill1 from "../Media/skill-1.webp"
import skill2 from "../Media/skill-2.webp"
import skill3 from "../Media/skill-3.webp"
import skill4 from "../Media/skill-4.png"
import skill5 from "../Media/skill-5.png"
import skill6 from "../Media/skill-6.webp"
import skill7 from "../Media/skill-7.webp"
import skill8 from "../Media/skill-8.webp"
import skill9 from "../Media/skill-9.png"
import website from "../Media/download.png"
import quizimg from "../Media/Quizimg.jpg"
import todoimg from "../Media/ToDoimg.jpg"
import bankimg from "../Media/Bankimg.jpg"
import '../App.css'

export default function Body({ sectionRef, serviceClick, adduser, users, setname, setemail, setmessage }) {
    const skills = [skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9];
    const portsolios = [
        {
            'name': 'Bank Management Coding (HTML, CSS, JS)',
            'link': 'https://dhruvtamrakar.github.io/Bank_Management_Prototype/',
            'img': bankimg
        },
        {
            'name': 'Advace Quiz Coding (HTML, CSS, JS)',
            'link': 'https://dhruvtamrakar.github.io/Advance_Quiz/',
            'img': quizimg
        },
        {
            'name': 'To-Do List Coding (HTML, CSS, JS)',
            'link': 'https://dhruvtamrakar.github.io/To_Do_List/',
            'img': todoimg
        },
        {
            'name': '4-Website Coding (HTML, CSS, JS)',
            'link': '#',
            'img': website
        },
        {
            'name': '5-Website Coding (HTML, CSS, JS)',
            'link': '#',
            'img': website
        },
        {
            'name': '6-Website Coding (HTML, CSS, JS)',
            'link': '#',
            'img': website
        },
    ]

    return (
        <div>
            {/* Body Part1 */}
            <div className='position-relative '>

                <div className="container-expand d-flex justify-content-center mt-5 px-5 border-bottom border-secondary  " >

                    <div className='container col-6  d-flex flex-column px-5 py-5 gap-3 ' style={{ zIndex: 100 }}>
                        <div >
                            <h1 className="fw-bold textcolor col-12 container  " style={{ fontSize: 80 }}>FRONTEND DEVELOPER</h1>
                        </div>
                        <div className='mb-5 container'>
                            <p className='col-12 text-light'>I am Dhruv - <span><a href="">web-developer</a> </span>with a passion for creating beautiful and responsive websites.</p>

                            <button onClick={() => serviceClick("portfolioRef")} className="btn btn-outline-light rounded btnart m-3">View My Work</button>
                        </div>
                    </div>
                    <div className='container col-5   p-4 position-relative d-flex justify-content-center'>
                        <div className='d-flex flex-column opacity-25 text-secondary user-select-none col-12' >
                            <p className='fs-5 px-4 my-auto'>console.log() </p>
                            <p className='fs-3 d-flex my-auto justify-content-end px-4' >console.alert() </p>
                            <p className='fs-4 px-1 my-auto' >$ npm install git</p>
                            <p className='fs-5 px-5 d-flex my-auto justify-content-end'>Class = "container"</p>
                            <p className='fs-1  d-flex justify-content-end'>Front-End Devloper</p>
                            <p className='fs-4 d-flex  px-5 justify-content-end'>Grid-Template-Column</p>
                            <p className='fs-5 my-auto'>npm start</p>
                        </div>
                        <div className=' position-absolute col-12 d-flex justify-content-center ' style={{ bottom: 0, left: 0, zIndex: 10 }}>
                            <img src={myimage} width={500} alt="" />
                        </div>
                    </div>
                </div>
                <div className='position-absolute' style={{ bottom: 1, left: -200, zIndex: 0 }}>
                    <div className='rotating-border-color-change col-4 ' ></div>
                </div>
            </div>
            {/* body Part 2 */}
            <div ref={sectionRef.serviceRef} className='container-expand mb-5 px-5 py-5 border-bottom border-secondary diagonal-gradient-border'>
                <div><p className="fs-1 textcolor d-inline-block ms-5 px-5">MY SERVICES</p></div>
                <div className="col-12 my-5 py-5">
                    <div className='col-12 px-5 text-light d-flex flex-column gap-5 position-relative h-auto'>
                        <div className='col-6 border-end border-secondary position-relative ' style={{ height: 500, zIndex: 1 }}></div>
                        <div className='col-5 border skillart  border-secondary  rounded-4 p-4 mx-auto position-absolute colDark' style={{ top: 0, left: 170, zIndex: 10 }}>
                            <div className='d-flex gap-1'>
                                <div className='fs-3 text-primary p-1 mx-1'><i className='fa-solid fa-laptop-code'></i></div>
                                <div className='shiny-text fs-2'>Website Development</div>
                            </div>
                            <div className='mx-2' style={{ fontSize: 12 }}>
                                I create websites based on your ready-made design. Wheather it's a Landing page or a business card website. I will make it look greate and work smoothly on any device.
                            </div>
                        </div>
                        <div className='col-5 border skillart border-secondary rounded-4 p-4 mx-auto position-absolute colDark' style={{ top: 180, right: 170, zIndex: 10 }}>
                            <div className='d-flex gap-1'>
                                <div className='fs-3 text-primary p-1 mx-1'><i className='fa-solid fa-pen-nib'></i></div>
                                <div className='shiny-text fs-2'>Web Design</div>
                            </div>
                            <div className='mx-2' style={{ fontSize: 12 }}>
                                I can design your website from scratch. i create modern, simple, and user-friendly design that match your brand and goals.
                            </div>
                        </div>
                        <div className='col-5 border skillart border-secondary rounded-4 p-4 mx-auto position-absolute colDark' style={{ bottom: 0, left: 170, zIndex: 10 }}>
                            <div className='d-flex gap-1'>
                                <div className='fs-3 text-primary p-1 mx-1'><i className='fa-solid fa-window-maximize'></i></div>
                                <div className='shiny-text fs-2'>Frontend Development</div>
                            </div>
                            <div className='mx-2' style={{ fontSize: 12 }}>
                                I create frontend based on your demand design. And add features according to your needs. I will make it look greate and work smoothly on any device.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Body Part 3  */}
            <div ref={sectionRef.technologyRef} className="container-expand mt-5 border-bottom border-secondary px-5 ">
                <div><p className="fs-1 textcolor d-inline-block mx-5 px-5">SKILLS</p></div>
                <div className="container text-light  ">
                    <div><p className="fs-3 mx-auto col-12 text-center shiny-text">The Skills, tools and technologies I Use:</p></div>
                    <div className="container-fluid d-flex col-8 my-5 justify-content-center align-items-center flex-wrap">
                        {skills.map((skill, index) => (
                            <div key={index} className="d-flex align-items-stretch  " style={{ width: "150px", height: "150px" }}>
                                <img src={skill} className="img-fluid w-50 h-50 boxshadow" style={{ objectFit: "cover" }} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Body Part 4 */}
            <div ref={sectionRef.portfolioRef} className='container-expand styled-div border-bottom border-secondary py-5 mb-5'>
                <div><p className="fs-1 textcolor d-inline-block mx-5 px-5">PORTFOLIO</p></div>

                <div className='container d-flex flex-wrap my-5 gap-5  justify-content-center align-item-center' >
                    {portsolios.map((element, index) => {
                        return (
                            <div className="card col-3 skillart " key={index} style={{ zIndex: 100 }}>
                                <img src={element.img} alt="" className="card-img-top" />
                                <a href={element.link} className='nav-link'>
                                    <div className="card-body ">
                                        <h4 className="card-title fw-bold ">{element.name}</h4>
                                        <i className='fa-solid fa-share'></i>
                                    </div>
                                </a>
                            </div>)
                    })}
                </div>
            </div>
            {/* Body Part 5 */}
            <div ref={sectionRef.contactRef} className='container-expand border-bottom border-secondary py-5'>
                <div className='d-flex justify-content-center gap-1 align-item-center px-5 '>
                    <div className='col-5 text-light d-flex justify-content-start  flex-column px-auto  '>
                        <div><p className="p-1 d-inline-block fs-3 textcolor d-inline-block col-12 ">DO YOU HAVE A PROJECT TO DISCUSS?</p></div>
                        <div className='col-12'>
                            <p className='fs-4 d-inline-block shiny-text'>GET IN TOUCH</p>
                            <i className='fa-regular fa-message m-1 px-2 fs-5 shiny-text'></i>
                        </div>
                        <div className='d-flex col-12 gap-1 justify-content-center my-3'>
                            <div className="col-6">
                                <p className="fs-5">CONTACT</p>
                                <a href="#">tamrakardhruv2004@gmail.com</a>
                            </div>
                            <div className='col-6'>
                                <p className="fs-5">SOCIAL MEDIA</p>
                                <div className='col-5 d-flex gap-2 fs-4  '>
                                    <i className='fa-brands fa-linkedin boxshadow'></i>
                                    <i className='fa-brands fa-facebook boxshadow'></i>
                                    <i className='fa-brands fa-instagram boxshadow'></i>
                                    <i className='fa-brands fa-whatsapp boxshadow'></i>
                                    <i className='fa-brands fa-telegram boxshadow' ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className="col-12 text-light fs-5 shiny-text">CONTACT FORM</div>
                        <form onSubmit={(e)=>adduser(e)}>

                            <div className="container form text-light mx-auto col-12 ">
                                <div className='my-4'>
                                    <label htmlFor="Name" className="form-label ">Name</label>
                                    <input type="text" onChange={(e) => setname(e.target.value)} className="colDark inputart  form-control text-light" />
                                </div>
                                <div className='my-4'>
                                    <label htmlFor="Email" className="form-label ">Email</label>
                                    <input type="text" onChange={(e) => setemail(e.target.value)} className="colDark inputart  form-control text-light" />
                                </div>
                                <div className='my-4'>
                                    <label htmlFor="Message" className="form-label ">Message</label>
                                    <input type="text" onChange={(e) => setmessage(e.target.value)} className="colDark  inputart form-control text-light" />
                                </div>
                                <div><button type='submit' className='btn btnart btn-outline-light rounded '>SEND</button></div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <div className="container-fluid  container-expand border-bottom border-secondary py-5">
                <div><p className="fs-1 textcolor d-inline-block mx-5 px-5 ">FEEDBACKS</p></div>
                <div className='text-light d-flex justify-content-center gap-5 my-2 flex-wrap'>
                    {users.map(user => (

                        <div key={user.id} className='border rounded col-4 p-3 skillart'>
                            <p className="fs-4 d-inline shiny-text">{user.name}</p>
                            <p className='fs-6 '><a href="#" className=''>{user.email}</a></p>
                            <p className='border rounded p-2'>{user.message}</p>
                        </div>

                    ))}
                </div>
            </div>

            {/* Body Footer */}
            <div className="container-expand">
                <p className='text-light text-center my-5' style={{ fontSize: 10 }}>@2025 - All rights reserved, Web design and development - Dhruv Tamrakar</p>
            </div>
        </div>
    )
}
