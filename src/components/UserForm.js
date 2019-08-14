import React, { Component } from 'react'
import DatePicker from "react-datepicker/es";
import PropTypes from 'prop-types';
import $ from "jquery";
import {connect} from "react-redux";
import {createUser} from "../actions/userActions";

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            primaryRole: '',
            activationDate: ''
        }
        // this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            activationDate: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            userId: $('#userId').val(),
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            primaryRole: $('#primaryRole').val(),
            activationDate: $('#activationDate').val()
        }
        console.log('userId='+user.userId+"|"+user.email);
        if (user.firstName == "" || user.lastName == "" || user.email == "" || user.primaryRole == "") {
            $('#errMsg').html("All fields are required");
        } else {
            this.props.createUser(user);
            this.clearForm();
            this.setState({
                activationDate: ''
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
        return (
            <div>
                <form>
                    <input type="hidden" name="userId" id="userId" />
                    <label>First Name</label>
                    <input type="text" name="firstName" size="30" />
                    <label>Last Name</label>
                    <input type="text" name="lastName" size="30" />
                    <label>Phone</label>
                    <input type="text" name="phone" size="30" />
                    <label>Email</label>
                    <input type="text" name="email" size="30" />
                    <label for="role">Primary Role</label>
                    <select name="role" placeholder="Please Select..." className="select-css">
                        <option>...</option>
                        <option>Admin</option>
                        <option>Audit Manager</option>
                        <option>Audit Supervisor</option>
                        <option>Auditor</option>
                        <option>Intern</option>
                    </select>
                    <br />
                    <label for="role">Activation Date</label>
                    <DatePicker selected={this.state.activationDate} onChange={this.handleChange} id="activationDate" />
                    <button type="submit">Save</button>
                    <button type="button" onClick={this.clearForm}>Clear</button>
                </form>
            </div>
        )
    }
}

UserForm.propTypes = {
    createUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    users: state.users,
    newUser: state.newUser
});

export default connect(mapStateToProps, { createUser })(UserForm);
