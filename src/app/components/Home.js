import React from 'react';

export class Home extends React.Component{
    render(){
          let content = "";
            if(true){
                content = <p>Hello It's true</p>
            }
        return(
            <div>
                <p>This is new Component</p>
                { content }{ 5 + 5 }
            </div>
        );
    }
}