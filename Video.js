var React = require('react');

var Video = React.createClass({
  render: function () {
    return (
      <div>
        <video controls autostart autoplay src={this.props.src}/>
      </div>
    );
  }
});

module.exports = Video;