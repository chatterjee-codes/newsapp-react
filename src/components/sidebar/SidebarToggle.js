import React, {useContext} from 'react';
import HomeState from '../../context/home/HomeState';
import HomeContext from '../../context/home/HomeContext'

const SidebarToggle = () => {
    // const homeContext = useContext(HomeContext)
    // homeContext.getNews();
    return (
        <div className="card">
            <h2>View Toggle</h2>
            <div className="row">

                <div className="col">
                    <i className="bi bi-ui-radios-grid"></i>
                </div>

                <div className="col">
                    <i className="bi bi-ui-radios"></i>
                    {/* <p>{HomeState.getNews}</p> */}
                </div>
            </div>
        </div>
    )
}


export default SidebarToggle