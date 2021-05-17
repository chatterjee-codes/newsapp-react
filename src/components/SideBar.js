import React from 'react'

const SideBar = ({toggle, changeView1, changeView2}) => {
    return (
        <div className="container">
            <div className="card m-3 p-2 sidebar-card">
                <h4>Hi Reader,</h4>
                <h6>Here's your News!</h6>
            </div>

            <div className="card m-3 p-2 sidebar-card">
                <h2>View Toggle</h2>
                <div className="toggle-btn-div">
                    <div className="card">
                        <button className="toggle-btn"  onClick={() => changeView1(toggle)}>
                            <i class="bi bi-border-width"></i>
                        </button>
                    </div>
                    <div className="card">
                        <button className="toggle-btn"  onClick={() => changeView2(toggle)} >
                            <i class="bi bi-columns-gap"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="card m-3 p-2 sidebar-card">
                <h2>Have a Feedback</h2>
                <button type="button" className="feedback-btn" data-bs-toggle="modal" data-bs-target="#myModal">
                    We're Listening
                </button>
            </div>
        </div>
    )
}


export default SideBar