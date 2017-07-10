import React from 'react';

export class Home extends React.Component{
    render(){
        return(
            <div>
                <p>This is new Component</p>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.props.age}</p>
                <p>User Name : {this.props.user.name}</p>
                <h2>Skills</h2>
                <ul>
                    {this.props.user.skills.map((skills,i) => <li key={i}>{skills}</li>)}
                </ul>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};