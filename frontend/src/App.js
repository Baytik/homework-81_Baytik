import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {createLink, fetchLink} from "./store/actions/actions";

class App extends Component {

    state = {
      url: '',
    };

    changeInputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    createLink = async () => {
        const Link = {
            originalUrl: this.state.url
        };
        await this.props.createLink(Link);
        await this.props.fetchLink();
    };

  render() {
      console.log(this.props.links)
    return (
        <div className="App">
          <h1>Shorten your link</h1>
            <div>
          <input type="text" name="url" placeholder="Enter url here" onChange={this.changeInputHandler} value={this.state.url}/>
            </div>
          <button onClick={this.createLink}>Shorten</button>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    links: state.links.links
});

const mapDispatchToProps = dispatch => ({
    createLink: (link) => dispatch(createLink(link)),
    fetchLink: () => dispatch(fetchLink())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
