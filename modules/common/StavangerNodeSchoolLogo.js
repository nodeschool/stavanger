var React = require('react')
var $     = React.DOM

var StavangerNodeSchoolLogo = React.createClass({
    render : function() {
        return $.img({
            className : 'StavangerNodeSchoolLogo',
            src       : 'graphics/stavanger-nodeschool-logo.png'
        })
    }
})

module.exports = StavangerNodeSchoolLogo