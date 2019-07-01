import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { sendMessage } from '../actions/contactActions';
// import { CONTACT_SEND } from '../actions/types';
import $ from 'jquery';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            response: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        console.log('Contact component built...');
    }

    onChange(e) {
        this.clearErrMsgs();
        this.setState( { [e.target.name]: e.target.value } );
    }

    clearErrMsgs() {
        $('#errMsg').html('');
        $('#respMsg').html('')
    }

    onSubmit(e) {
        e.preventDefault();
        const message = {
            name: this.state.name,
            message: this.state.message
        }
        if (message.name === "" || message.message === "") {
            document.getElementById('errMsg').innerHTML = "Both fields are required";
        } else {
            this.props.sendMessage(message);
            // this.sendMessage(message);
        }
    }

    componentWillMount(props) {
        console.log('Contact.componentWillMount called');
        // console.log(' ??? '+props.contactResponse);
    }

    shouldComponentUpdate(props) {
        console.log('Contact.shouldComponentUpdate called');
        console.log(' ??? '+props.response);
        return true;
    }

    componentWillReceiveProps(nextProps) {
        console.log('Contact.componentWillReceiveProps called ....'+nextProps);
        if (nextProps.contactResponse) {
            this.props.response = nextProps.contactResponse;
        }
    }

    clearForm() {
        $('#name').val('');
        $('#message').val('');
    }

    render() {
        return (
            <div id="container">
                <Navigation pageTitle="Contact" />
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.onChange} id="name" size="40" />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea name="message" rows="4" cols="50" value={this.state.message} onChange={this.onChange} id="message"></textarea>
                        </div>
                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </fieldset>
                </form>
                <div id="errMsg" className="errMsg"></div>
                <div id="respMsg">
                    {this.props.contactResponse}
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    response: PropTypes.object,
    name: PropTypes.object,
    message: PropTypes.object
};

const mapStateToProps = state => ({
    contactResponse: state.posts.response,
    name: state.posts.name,
    message: state.posts.message
});

export default connect(mapStateToProps, { sendMessage })(Contact);
