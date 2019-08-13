import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import PostForm from '../components/Postform';
import Posts from '../components/Posts';

class PostList extends Component {
    render() {
        return (
            <div id="container">
                <Navigation pageTitle="Posts" />
                <table>
                    <tbody>
                        <tr>
                            <td width="60%" valign="top"><Posts /></td>
                            <td valign="top" className="editPanelRight"><PostForm /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PostList;