import React from 'react'
import './Footer.css'
export default function Footer2() {
    return (
        <footer>
            <div className="site-footer">
                <div className="aboutUs">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h3 className='about'>About Us</h3>
                            <p className="text-justify">Amatuer Astronomy Club NITK is a place for you to explore your intrests of the cosmos and participate and organize various events and conduct projects to enhance your technical and soft skills.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="social">
                    <div className='rows'>
                        <div>Social Media Handles</div>
                        <ul className="social-icons">
                            <li><a className="facebook" href="https://instagram.com/aac.nitk"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="instagram" href="https://instagram.com/aac.nitk"><i className="fa fa-instagram"></i></a></li>
                            <li><a className="linkedin" href="https://instagram.com/aac.nitk"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="contact">
                    <div>Contact Us</div>
                    <a href="astronomy@nitk.edu.in" style={{color:"inherit"}}><div><i className="fa fa-envelope"></i> astronomy@nitk.edu.in</div></a>
                </div>
            </div>

            <div className="copy">
                <p className="copyright-text">&copy; Website designed by AAC NITK</p>
            </div>

        </footer>
    )
}
