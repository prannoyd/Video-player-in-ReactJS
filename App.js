var React = require('react');
var ReactDOM = require('react-dom');
var Video = require('./Video');
var Menu = require('./Menu');

var VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

var App = React.createClass({
  getInitialState: function () {
    return { src: VIDEOS.fast };
  },
  
  chooseVideo:function(newVideo){
  this.setState({
    src:VIDEOS[newVideo]
  });
},

  render: function () {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);