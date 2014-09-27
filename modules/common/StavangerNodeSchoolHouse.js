var React = require('react')
var $     = React.DOM

var StavangerNodeSchoolHouse = React.createClass({
    render : function() {
        return $.img({
            className : 'StavangerNodeSchoolHouse',
            src       : 'graphics/schoolhouse.svg'
        })
    }
})

module.exports = StavangerNodeSchoolHouse