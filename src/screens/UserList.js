import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import UserForm from '../components/UserForm';
import Users from '../components/Users';

class UserList extends Component {
    render() {
        return (
            <div id="container">
                <Navigation pageTitle="Users" />
                <table>
                    <tbody>
                        <tr>
                            <td width="70%" valign="top"><Users /></td>
                            <td valign="top" className="editPanelRight"><UserForm /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;