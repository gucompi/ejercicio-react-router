import React from 'react';

class Home extends React.Component {
    constructor(){
        super();
        console.log("Hola desde Home!");
    }
    render() {
        return (
            <h1>Home!</h1>
        );
    }
}

export default Home;