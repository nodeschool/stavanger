var React       = require('react')
var Header      = require('../common/HeaderBig')
var $           = React.DOM

var WorkshopperLink = React.createClass({
    render : function() {
        if (!this.props.workshop.workshopper) return
        return $.a({
            className : 'WorkshopperLink',
            href       : this.props.workshop.workshopper
        }, this.props.workshop.workshopper)
    }
})

var WorkshopPage = React.createClass({
    render : function() {
        return $.div({
            className : 'WorkshopPage'
        }, [
            $.h1({
                key       : 'Title',
                className : 'Title'
            },this.props.workshop.title),
            WorkshopperLink({
                key  : 'Workshopper',
                workshop : this.props.workshop
            }),
            $.div({
                key       : 'Time',
                className : 'Time'
            }, this.props.workshop.date+' '+this.props.workshop.time),
            $.div({
                key : 'Description',
                dangerouslySetInnerHTML : {
                    __html : this.props.workshop.body
                }
            })
        ])
    }
})

module.exports = WorkshopPage