// This is my new first compoent I have to created

import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink : "Home"
        };
    }
  
    changeHomeLink(newLink) {
        this.setState({
            homeLink: newLink
        });
    }

    callFunction() {
        alert("Hello I'm parent function");
    }

    render() {
        let userDetail = {
            name: "Sujal",
            skills: ["PHP","Laravel","nodejs","vueJs"]
        };
        return(
            <div className="container">
                <div className='row'>
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header home={this.state.homeLink}/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"max"} 
                            initialAge={26} 
                            user={userDetail} 
                            callFunc={this.callFunction}
                            changeLinkName={this.changeHomeLink.bind(this)}
                            initialLinkName={this.state.homeLink}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('app'));