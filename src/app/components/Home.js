import React from 'react';

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status : 0
        };
        setTimeout(() => {
            this.setState({
                status : 1
            });
        },3000);
    }

    increaseAge() {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <div>
                <p>This is new Component</p>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.state.age}</p>
                <p>Status : {this.state.status}</p>
                <p>User Name : {this.props.user.name}</p>
                <h2>Skills</h2>
                <ul>
                    {this.props.user.skills.map((skills, i) => <li key={i}>{skills}</li>)}
                </ul>
                <hr />
                {/*<button onClick={this.increaseAge.bind(this)} className="btn btn-primary">Increase Age</button>*/}
                <button onClick={() => this.increaseAge()} className="btn btn-primary">Increase Age</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    // children: React.PropTypes.element.isRequired
};