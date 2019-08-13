import React, { Component } from 'react'

export default class UserForm extends Component {
    render() {
        return (
            <div>
                <form>
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
                        <option>Audit Supervisor</option>
                        <option>Auditor</option>
                        <option>Intern</option>
                    </select>
                    <br />
                    <button type="submit">Save</button>
                    <button>Clear</button>
                </form>
            </div>
        )
    }
}
