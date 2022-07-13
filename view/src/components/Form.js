import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { data: undefined, error: undefined, msg: 'Enter a number, any number, and I\'ll double it' };
    }
    render() {
        return (
            <div className='d-flex justify-content-center container-sm bg-dark text-light'>
                <div className='bg-dark text-light'>
                    <div className='row'>
                        {this.state.error ? <p className="text-danger">{this.state.error[0].msg}</p> : <p>{this.state.msg}</p>}
                    </div>
                    <div className='row'>
                        <input className="form-control-sm" type='number' onChange={(e) => this.setState({ data: e.target.value })} />
                        <button className="btn-sm btn-primary mt-2" onClick={async () => {
                            const config = {};
                            config.method = "POST";
                            config.headers = { 'Content-Type': 'application/json' };
                            config.body = JSON.stringify({ data: this.state.data });
                            const response = await fetch("/sample-route", config);
                            const result = await response.json();
                            this.setState({ error: result.errors, msg: result.msg })
                        }}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;
