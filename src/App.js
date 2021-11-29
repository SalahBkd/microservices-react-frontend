import React from 'react';
import Header from "./components/Header";
import Bill from "./components/Bill";
import GlobalStyle from "./components/GlobalStyles";
import axios from "axios";

class App extends React.Component {
    state = {
        bill: [],
        loaded: false,
        error: ''
    }

    componentDidMount() {
        axios.get("http://localhost:8888/BILLING-SERVICE/fullBill/1")
            .then(bill => {
                this.setState({
                    bill: bill,
                    loaded: true
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    bill: [],
                    loaded: false,
                    error: error.message
                })
            });
    }

    render() {
        return (
            <>
                <GlobalStyle/>
                <Header/>
                <Bill bill={this.state.bill} loaded={this.state.loaded} error={this.state.error}/>
            </>
        );
    }
}

export default App;
