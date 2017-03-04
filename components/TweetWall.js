const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps) {
    if (nextProps.newTweets.length > 0) {
      return true
    } else {
      return false
    }
  }

  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: nextProps.newTweets.concat(this.state.tweets)
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

module.exports = TweetWall;
