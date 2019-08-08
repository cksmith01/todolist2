import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchPosts, deletePost } from '../actions/postActions';
import { TODO_LIST, DELETE_ITEM } from '../actions/types';
import {BASE_URL} from '../constants'


class Posts extends Component {

    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount called');
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps called...', nextProps);
        if (nextProps.newPost) {
            this.props.items.push(nextProps.newPost);
        }
    }

    deleteItem(evt) {
        console.log('deleteItem called', evt.target.id);
        this.props.deletePost(evt.target.id);
    }

    render() {
        const postItems = this.props.items.map(post => (
            <div key={post.id} className="postMessage">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <button onClick={this.deleteItem} id={post.id}>x</button>
            </div>
        ));
        return (
            <div id="postList">
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    items: state.posts.items,
    newPost: state.posts.item
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            console.log('fetchPosts called');
            fetch(BASE_URL+'posts')
                .then(res => res.json())
                .then((data) => {
                    console.log('fetch response', data);
                    dispatch({type: TODO_LIST, payload: data})
                })
                .catch(e => console.warn(e));
        },
        deletePost: (id) => {
            console.log('deletePost called', id);
            fetch(BASE_URL+'deletePost?id='+id)
                .then(res => res.json())
                .then(items => dispatch({
                    type: DELETE_ITEM,
                    payload: items
            })).catch(e => console.warn(e));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);