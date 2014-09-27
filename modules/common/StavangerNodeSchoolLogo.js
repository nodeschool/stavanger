var React = require('react')
var utils = require('../utils')
var $     = React.DOM

var StavangerNodeSchoolLogo = React.createClass({
    render : function() {
        return $.img({
            className : 'StavangerNodeSchoolLogo',
            src       : 'graphics/stavanger-nodeschool-logo.png',
            onClick   : this.onClick
        })
    },
    onClick : function() {
        utils.navigate('/')
    }
})

module.exports = StavangerNodeSchoolLogo