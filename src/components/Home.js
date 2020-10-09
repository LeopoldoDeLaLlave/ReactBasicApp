import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pizza from '../pizza.png'
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        const { posts } = this.props;
        const postList = posts.length ? (posts.map(p => {
            return (
                <div className="post card" key={p.id}>
                    <img src={Pizza} alt="Pizza" className="pizza"/>
                    <div className="card-content">
                        <Link to={"/"+p.id}>
                            <span className="card-title red-text">{p.title}</span>
                        </Link>
                        <p>{p.body}</p>
                    </div>
                </div>
            )
        })) : (
                <div className="center">'No posts yet'</div>
            )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }

}

const mapStateToProps= (state)=>{
    return{
        posts: state.posts
    }
};

export default connect(mapStateToProps)(Home);