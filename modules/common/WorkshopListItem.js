var React = require('react')
var utils = require('../utils')
var $     = React.DOM

var WorkshopListItem = React.createClass({
    render : function() {
        return $.div({
            className : 'WorkshopListItem',
            onClick   : this.navigateToWorkshop
        }, [
            $.div({
                key       : 'WorkshopListItemId',
                className : 'WorkshopListItemId'
            }, '# '+this.props.workshop.id),
            $.div({
                key       : 'WorkshopListItemTitle',
                className : 'WorkshopListItemTitle'
            }, this.props.workshop.title),
            $.div({
                key       : 'WorkshopListItemTime',
                className : 'WorkshopListItemTime'
            }, this.props.workshop.date)
        ])
    },
    navigateToWorkshop : function() {
        utils.navigate('/'+this.props.workshop.id)
    }
})

module.exports = WorkshopListItem