var React            = require('react')
var $                = React.DOM
var WorkshopListItem = require('./WorkshopListItem')

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