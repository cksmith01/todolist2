import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
// import { TODO_ITEM } from "../actions/types";
import $ from 'jquery';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: ''
        }
        // this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        // this.clearErrMsg();
        // console.log('onChange', this.state, e.target.name, e.target.value);
        // this.setState( { [e.target.name]: e.target.value } );
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: $('#title').val(),
            description: $('#description').val(),
            id: $('#id').val()
        }
        console.log('post='+post.id+"|"+post.title+"|"+post.description);
        if (post.title == "" || post.description == "") {
            $('#errMsg').html("Both fields are required");
        } else {
            this.props.createPost(post);
            this.clearForm();
        }
    }

    clearErrMsg() {
        $('#errMsg').html("");
    }

    clearForm() {
        console.log('clearForm called');
        // this.state.id = '';
        // this.state.title = '';
        // this.state.description = '';
        $('#id').val('');
        $('#title').val('');
        $('#description').val('');
        $('#errMsg').html("");
        $('#title').focus();
    }

    render() {
        return (
            <div>
                <h3>Add Post</h3>
                <form onSubmit={this.onSubmit} id="postForm">
                    <fieldset>
                        <div>
                            <label>Title</label>
                            <input type="text" name="title" size="60" id="title" />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea name="description" rows="8" cols="60" id="description" />
                        </div>
                        <button type="submit">Save <img className="buttonIcon" onClick={this.submit} src="./icons/round-save-24px.svg" /></button>
                        <button type="button" onClick={this.clearForm}>Clear</button>
                    </fieldset>
                    <input type="hidden" name="id" id="id" />
                </form>
                <div id="errMsg" className="errMsg"></div>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    items: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { createPost })(PostForm);

//CKS:WIP - 2019-08-08 ... this doesn't work for some reason
// const mapDispatchToProps = (dispatch) => {
//     const createPost = (postData) => dispatch => {
//         fetch(BASE_URL+'addPost', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(postData)
//         }).then(res => res.json())
//         .then(item => dispatch({
//             type: TODO_ITEM,
//             payload: item
//         })).catch(e => console.warn(e));
//     };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(PostForm);