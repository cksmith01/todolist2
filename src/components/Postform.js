import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
// import { TODO_ITEM } from "../actions/types";
import $ from 'jquery';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            category: '',
            description: '',
            createDate: ''
        }
        // this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onChange(e) {
        // this.clearErrMsg();
        // console.log('onChange', this.state, e.target.name, e.target.value);
        // this.setState( { [e.target.name]: e.target.value } );
    }

    handleChange(date) {
        this.setState({
            createDate: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: $('#title').val(),
            description: $('#description').val(),
            id: $('#id').val(),
            category: $('#category').val(),
            createDate: $('#createDate').val()
        }
        console.log('post='+post.id+"|"+post.title+"|"+post.description);
        if (post.title == "" || post.description == "" || post.category == "" || post.createDate == "") {
            $('#errMsg').html("All fields are required");
        } else {
            this.props.createPost(post);
            this.clearForm();
            this.setState({
                createDate: ''
            });
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
        $('#category').val('');
        $('#createDate').val('');
        $('#errMsg').html("");
        $('#date').focus();
        $('#formTitle').html("Add Post");
    }

    render() {

        const divStyle = {
            'width':'200px',
            'float':'left'
        }

        return (
            <div>
                <div className="formTitle"><h3 id="formTitle">Add Post</h3></div>
                <form onSubmit={this.onSubmit} id="postForm" autocomplete="off" >
                    <fieldset>
                        <div style={divStyle}>
                            <label>Date</label>
                            <DatePicker selected={this.state.createDate} onChange={this.handleChange} id="createDate" />
                        </div>
                        <div style={divStyle}>
                            <label>Category</label>
                            <select name="category" id="category">
                                <option>...</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div>
                        <div className="clearfix"></div>
                        <div>
                            <label>Title</label>
                            <input type="text" name="title" size="60" id="title" />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea name="description" rows="10" cols="60" id="description" />
                        </div>
                        <div>
                            <button type="submit">Save</button>
                            <button type="button" onClick={this.clearForm}>Clear</button>
                            <input type="hidden" name="id" id="id" />
                        </div>
                    </fieldset>
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