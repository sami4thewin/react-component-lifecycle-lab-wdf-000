const React = require('react');

class Tweet extends React.Component {


  
  render() {
    return (
      <div className="tweet">{this.props.text}</div>
    )
  }
}

module.exports = Tweet;
