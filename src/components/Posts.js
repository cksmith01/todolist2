import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchPosts, deletePost } from '../actions/postActions';
import { TODO_LIST, DELETE_ITEM } from '../actions/types';
import {BASE_URL} from '../constants'
import $ from 'jquery';


class Posts extends Component {

    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
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

    editItem(evt) {
        console.log('editItem: '+evt.target.id);
        var item = this.props.items.filter(function(item) {
            if (item.id == evt.target.id) return item;
        });
        if (item && item.length > 0) {
            $('#id').val(item[0].id);
            $('#title').val(item[0].title);
            $('#description').val(item[0].description);
        }
    }

    render() {
        const buttonBar = {
            'textAlign': 'right',
            width: '100%'
        };
        const postItems = this.props.items.map(post => (
            <div key={post.id} className="postMessage" id={post.id}>
                <h4>{post.title} ({post.id})</h4>
                <p>{post.description}</p>
                <div style={buttonBar}>
                    <button onClick={this.editItem} id={post.id} className="smallButton">Edit</button>
                    <button onClick={this.deleteItem} id={post.id} className="smallButton">Delete</button>
                </div>
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
    editItem: PropTypes.func.isRequired,
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
        },
        editPost: (id) => {
            console.log('editPost: '+id)
            if (id && id.length > 0) {
                console.log('were here');

                $('#title').val('id clicked '+id);
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);