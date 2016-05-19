var React = require("react");

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className='text-centered'>About</h1>
        <p>This is a weather application built on react and taught to me by some fucking septic tank who doesnt go into enough detail and assumes too much</p>
        <p>here are some of the tools the tool used</p>
        <ul>
          <li>  
            <a href="https://facebook.github.io/react">React</a> - this was the JavaScript framework used. 
          </li>
          <li>
            <a href="http://openweathermap.org">OpenWeatherMap was used to search for localised weather data</a>
          </li>
        </ul>
      </div>
    )
  }
});

module.exports = About;