import React from 'react'

const Posts = ({ posts, loading, toggle }) => {
    if(loading) {
        return <h2>Loading....</h2>
    }
    //const toggle = true; // state will change when toggle button is clicked in the sidebar

    if(toggle === false){
        return (
            <div className="container container-2">
                {posts.map(post => (
                <a href="#!"  className="p-4" >
                    
                    <div className="card mb-5">
                        <div className="card-header">
                            {post.title} <button type="button" className="btn  btn-sm cancel">
                                <i className="bi bi-x"></i>
                            </button>
                        </div>
                        <div className='card-body mt-4'>
                            {post.body}
                        </div> 
                    </div>
                    
                </a>
                ))}
                   
            </div>
        ) 
   
   
    } else {
        return (
            <div className="container container-1">
                {posts.map(post => (
                    <a href="#!">
                        <div className="card mb-5">
                            <div className="card-header">
                                {post.title} <button type="button" className="btn  btn-sm cancel">
                                    <i className="bi bi-x"></i>
                                </button>
                            </div>
                            <div className='card-body mt-4'>
                                {post.body}
                            </div> 
                        </div>
                    </a>
                ))}
            </div>
        )
    }
    
}


export default Posts