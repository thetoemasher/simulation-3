import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props) {
    let { username, profile_picture } = props;
    return(
        <div>
            <Link to='/dashboard'>
                <button>Home</button>
            </Link>
            <Link to='/new'>
                <button>New Post</button>
            </Link>
            <Link to='/'>
                <button>Logout</button>
            </Link>
            <h4>{username}</h4>
            <img src={profile_picture} alt={`Photo of ${username}`}/>
        </div>
    )
}

function mapStateToProps( state ) {
    let { username, profile_picture } = state;
    return { username, profile_picture };
}

export default connect(mapStateToProps)(Nav);