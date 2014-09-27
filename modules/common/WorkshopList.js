var React = require('react')
var $     = React.DOM

var WorkshopListItem = React.createClass({
    render : function() {
        return $.div({
            className : 'WorkshopListItem'
        }, [
            $.div({
                key       : 'WorkshopListItemTitle',
                className : 'WorkshopListItemTitle'
            }, this.props.workshop.title),
            $.div({
                key       : 'WorkshopListItemPreview',
                className : 'WorkshopListItemPreview'
            }, this.props.workshop.description),
            $.div({
                key       : 'WorkshopListItemTime',
                className : 'WorkshopListItemTime'
            }, this.props.workshop.time)
        ])
    }
})

var WorkshopList = React.createClass({
    render : function() {
        var WorkshopListItems = this.props.workshops.map(function(workshop, index) {
            return WorkshopListItem({ key : workshop.title+index, workshop : workshop})
        })
        return $.div({
            className : 'WorkshopList'
        },[
            $.div({
                key       : 'WorkshopListHeader',
                className : 'WorkshopListHeader'
            }, 'Workshops'),
            WorkshopListItems
        ])
    }
})

module.exports = WorkshopList