var React = require('react');

var Menu = React.createClass({
  handleClick:function(e){
  var text=e.target.value;
  this.props.chooseVideo(text);
},
  render: function () {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
});

module.exports = Menu;