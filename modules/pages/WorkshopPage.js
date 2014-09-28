var React       = require('react')
var Header      = require('../common/HeaderBig')
var $           = React.DOM

var WorkshopperLink = React.createClass({
    render : function() {
        if (!this.props.workshop.workshopper) return
        var workshopperName = this.props.workshop.workshopper.split('package/')[1]
        return $.a({
            className : 'WorkshopperLink',
            href      : this.props.workshop.workshopper,
            target    : '_blank'
        }, workshopperName)
    }
})

var WorkshopPageInfoBox = React.createClass({
    render : function() {
        return $.div({
            className : 'WorkshopPageInfoBox'
        }, [
            WorkshopperLink({
                key  : 'Workshopper',
                workshop : this.props.workshop
            }),
            $.div({
                key : 'Date',
                className : 'Date'
            }, this.props.workshop.date),
            $.div({
                key       : 'Time',
                className : 'Time'
            }, 'kl. '+this.props.workshop.time)
        ])
    }
})

var WorkshopPage = React.createClass({
    render : function() {
        return $.div({
            className : 'WorkshopPage'
        }, [
            WorkshopPageInfoBox({
                workshop : this.props.workshop
            }),
            $.h1({
                key       : 'Title',
                className : 'Title'
            },this.props.workshop.title),
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