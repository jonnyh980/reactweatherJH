var React = require("react");
var {Link} = require('react-router');


var Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example Locations to try out</p>
        <ol>  
          <li>
            <Link to='/?location=Belfast'>Belfast, Northern Ireland</LBeink>
          </li>
          <li>
            <Link to='/?location=Shekou'>Shekou, China</Link>
          </li>
        </ol>
      </div>
    )
  }
});

module.exports = Examples;
