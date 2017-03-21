import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar';
import logo from './banner_web.jpeg';
import axios from 'axios';

class App extends Component {

    componentWillMount() {
        axios.get('http://localhost:8000/api/2')
            .then(response=> {
                console.log(response.data.object);
            })
            .catch(response=> {
                console.log(response.data.object);
            });
    }

    renderChildren(){
        if(this.props.children){
            return(
                <div className="panel panel-default">
                    <div className="panel-body">
                        {this.props.children}
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="text-center">
                    <img src={logo} alt="Logo"/>
                </div>
                <NavBar />
                {this.renderChildren()}
            </div>
        );
    }
}

export default App;
