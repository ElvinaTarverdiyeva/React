import React, { Component } from 'react'

class News extends Component {
    render() {
        return (
            <div >
                <section className="newspage1">
                    <div className="container">
                        <h4>News</h4>
                        <div className="row">
                            <div className="col-md-6 div1">
                            <img src="https://images-ext-1.discordapp.net/external/j87YXdtvsrcIUfJ4ZIU_qPc-Snt-O_yFC93I2xfZaRQ/%3Fh%3D480%26resize%3D1%26w%3D8544/https/cdn2.unrealengine.com/battlefield-2042-gameplay-trailer-1920x1080-230723a759b2.jpg?width=1202&height=676" alt="" />
                            <p>19H AGO</p>
                            <h6>Battlefield 2042 Gameplay Trailer and Q&A with Design Director, Daniel Berlin</h6>
                            <a href="#">Read More</a>
                            </div>
                            <div className="col-md-6 div1">
                            <img src="https://images-ext-2.discordapp.net/external/bmKM1aahJhCtha62jQ6_gZL_mvV4rZClxpLGirGnPKo/%3Fh%3D480%26resize%3D1%26w%3D854/https/cdn2.unrealengine.com/blog-post-1920x1080-092eecdd73e5.png" alt="" />
                            <p>19H AGO</p>
                            <h6>Battlefield 2042 Gameplay Trailer and Q&A with Design Director, Daniel Berlin</h6>
                            <a href="#">Read More</a>
                            </div>
                           
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default News
