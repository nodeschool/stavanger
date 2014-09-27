var React = require('react')
var utils = require('../utils')
var $     = React.DOM

var StavangerNodeSchoolHouse = React.createClass({
    render : function() {
        return $.img({
            className : 'StavangerNodeSchoolHouse',
            src       : 'graphics/schoolhouse.svg',
            onClick   : this.onClick
        })
    },
    onClick : function() {
        utils.navigate('/')
    }
})

module.exports = StavangerNodeSchoolHouse