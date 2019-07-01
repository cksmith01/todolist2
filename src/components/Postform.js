import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import $ from 'jquery';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.clearErrMsg();
        this.setState( { [e.target.name]: e.target.value } );
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            description: this.state.description
        }
        if (post.title === "" || post.description === "") {
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
        $('#title').val('');
        $('#description').val('');
    }

    render() {
        return (
            <div>
                <h3>Add Post</h3>
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <div>
                            <label>Title</label>
                            <input type="text" name="title" size="60" value={this.state.title} onChange={this.onChange} id="title" />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea name="description" rows="8" cols="60" value={this.state.description} onChange={this.onChange} id="description" />
                        </div>
                        <button type="submit">Save</button>
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

export default connect(null, { createPost })(PostForm);