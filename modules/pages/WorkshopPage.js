var React       = require('react')
var Header      = require('../common/HeaderBig')
var $           = React.DOM

var WorkshopPage = React.createClass({
    render : function() {
        return $.div({
            className : 'WorkshopPage'
        }, [
            $.div({
                key : 'tmp'
            },this.props.workshop.title)
        ])
    }
})

module.exports = WorkshopPage