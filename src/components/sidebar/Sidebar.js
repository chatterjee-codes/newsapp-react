import React, {useContext} from 'react';
import SidebarFeedback from './SidebarFeedback';
import SidebarHeader from './SidebarHeader';
import SidebarToggle from './SidebarToggle';


const Sidebar = () => {
  

    return (
        <div>
            {/* static header card component */}
            <SidebarHeader />

            {/* toggle card component */}
            <SidebarToggle />

            {/* feedback card component */}
            <SidebarFeedback />


        </div>
         
    )
    

}


export default Sidebar
