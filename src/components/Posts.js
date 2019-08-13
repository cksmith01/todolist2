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
        evt.preventDefault();
        console.log('deleteItem called', evt.target.id);
        if (window.confirm("Are you sure?")) {
            this.props.deletePost(evt.target.id);
        }
        console.log('deleteItem finished', evt.target.id);
    }

    editItem(evt) {
        evt.preventDefault();
        console.log('editItem: '+evt.target.id);
        var item = this.props.items.filter(function(item) {
            if (item.id == evt.target.id) return item;
        });
        if (item && item.length > 0) {
            $('#id').val(item[0].id);
            $('#title').val(item[0].title);
            $('#category').val(item[0].category);
            $('#createDate').val(item[0].createDate);
            $('#description').val(item[0].description);
            $('#formTitle').html("Edit Post");
        }
    }

    render() {
        const titleBar = {
            'float': 'left',
            'width': '79%',
            'font-size': '120%'
        };
        const buttonBar = {
            'float': 'right',
            'width': '19%',
            'text-align': 'right'
        };
        const postItems = this.props.items.map(post => (
            <div key={post.id} className="postMessage" id={post.id}>
                <table width="100%">
                    <tr>
                        <td rowspan="2" width="10%" valign="top">
                            {post.category} <br />
                            <span className="smallGray">{post.createDate}</span>
                        </td>
                        <td width="75%" valign="top">
                            <h4>{post.title}</h4>
                        </td>
                        <td width="15%" valign="top">
                            <img className="imgButton" onClick={this.editItem} id={post.id} src="./icons/round-create-24px.svg" title="Edit" />
                            <img className="imgButton" onClick={this.deleteItem} id={post.id} src="./icons/round-delete-24px.svg" title="Delete" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" width="90%" valign="top">
                            <p dangerouslySetInnerHTML={{__html: post.description.replace(/(?:\r\n|\r|\n)/g, '<br />')}} />
                        </td>
                    </tr>
                </table>
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