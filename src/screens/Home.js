import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class Home extends Component {

    render() {
        return (
            <div id="container">
                <Navigation pageTitle="Home" />
                <ul>
                    <li>authentication/authorization</li>
                    <li>how to isolate one user request from another</li>
                    <li>learn how unit tests work</li>
                    <li>
                        <s>form and or validation libraries</s><br />
                        <code><a href="https://www.npmjs.com/package/react-validation" rel="noopener noreferrer" target="_blank">https://www.npmjs.com/package/react-validation</a></code>
                    </li>
                    <li><s>are there other view (screen) modules that would work better </s><br />
                        <code>https://blog.bitsrc.io/11-react-component-libraries-you-should-know-178eb1dd6aa4</code>
                    </li>
                    <li><s>security...</s><br />
                        <pre>fsms uses (client side) cookies to store users ID and email (mail).<br />
                        There are is a csrf (spring) filter that looks for the following props <br />
                        in the header: mail (email), fullname, uid</pre>
                    </li>
                    <li><s> how react coexists with intellij java project...</s>
                        <pre>
                            src/main/java/<br />
                            src/main/webapp/js/react/<br />
                            ... point webpack.json to the js/react folder
                        </pre>
                    </li>
                    <li><s> cross origin</s></li>
                    <li><s> form validation: there are form validation libraries but often it's built into the component</s></li>
                </ul>

                <h3>Resources ...</h3>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=93p3LxR9xfM" target="_blank" rel="noopener noreferrer">original vid this project was based on</a></li>
                    <li><a href="https://www.youtube.com/watch?v=kJeXr1K3nyg" target="_blank" rel="noopener noreferrer">simple react counter tutorial</a></li>
                    <li><a href="https://www.youtube.com/watch?v=OSSpVLpuVWA" target="_blank" rel="noopener noreferrer">Redux Tutorial - Learn React/Redux in one video</a></li>
                </ul>

                <h3>What's coming ...</h3>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=mxK8b99iJTg" target="_blank" rel="noopener noreferrer">Introducing React Hooks</a></li>
                </ul>
            </div>
        );
    }
}

export default Home;