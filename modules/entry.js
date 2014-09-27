var React = require('react')
var $     = React.DOM

var StavangerNodeschool = React.createClass({
    render : function() {
        return $.dom({
            key       : 'StavangerNodeschool'
            className : 'StavangerNodeschool'
        }, 'dis be main, YAH!')
    }
})

React.renderComponent(StavangerNodeschool(), document.body)