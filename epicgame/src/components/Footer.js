import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="ficons">
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-youtube"></i>
                        </div>

                        <div className="fmedias">
                            <p>Resources</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <h6>Support-A-Creator</h6>
                                    <h6>Publish on Epic Games</h6>
                                    <h6>Careers</h6>
                                </div>
                                <div className="col-md-4">
                                    <h6>Company</h6>
                                    <h6>Fan Art Policy</h6>
                                    <h6>UX Research</h6>
                                </div>
                                <div className="col-md-4">
                                    <h6>Store EULA</h6>
                                    <h6>Online Services</h6>
                                    <h6>Community Rules</h6>
                                </div>
                            </div>
                            <br />

                            <p>Made By Epic Games</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Battle Breakers</h6>
                                    <h6>Fortnite</h6>
                                    <h6>Infinity Blade</h6>
                                    <h6>Robo Recall</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6>Shadow Complex</h6>
                                    <h6>Spyjinx</h6>
                                    <h6>Unreal Tournament</h6>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <br />

                        <div className="row">
                            <div className="col-md-7">
                                <div className="ftxt">                            
                                <p>©️ 2021, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.   </p>
                                <br /><br />
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h6>Terms of Services</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6>Privacy Policy</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6>Store Refund Policy</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="flogo">
                                    <img src="https://cdn2.unrealengine.com/eg-shield-logo-white-f8185c103d8d.svg" alt="" />
                                    <img src="https://cdn2.unrealengine.com/ue-logo-white-e34b6ba9383f.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
