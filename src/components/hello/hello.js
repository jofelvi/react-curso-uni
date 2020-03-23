import React, { Component } from 'react';


class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "hola mundo ",
            apellido: ""
        }
    }

    render() {
        return (
            <div>
                {this.state.nombre}
            </div>
        );
    }
}

export default Hello;
