var React = require('react')
var $     = React.DOM

var WorkshopListItemRegister = React.createClass({
    render : function() {
        var registerButton;
        if (this.props.hovering) registerButton = $.div({
            key       : 'WorkshopListItemRegisterButton',
            className : 'WorkshopListItemRegisterButton',
            onClick   : this.onRegister
        },'register!')
        return $.div({
            key          : 'WorkshopListItemRegister',
            className    : 'WorkshopListItemRegister'
        }, [registerButton])
    },
    onRegister : function() {
        alert('Soon laddy, soon!')
    }
})

var WorkshopListItem = React.createClass({
    render : function() {
        return $.div({
            className    : 'WorkshopListItem',
            onMouseEnter : this.onMouseEnter,
            onMouseLeave : this.onMouseLeave
        }, [
            $.div({
                key       : 'WorkshopListItemId',
                className : 'WorkshopListItemId'
            }, '# '+this.props.workshop.id),
            $.div({
                key       : 'WorkshopListItemTitle',
                className : 'WorkshopListItemTitle'
            }, this.props.workshop.title),
            WorkshopListItemRegister({
                hovering : this.state.hovering
            }),
            $.div({
                key       : 'WorkshopListItemTime',
                className : 'WorkshopListItemTime'
            }, this.props.workshop.time)
        ])
    },
    getInitialState : function() {
        return {
            hovering : false
        }
    },
    onMouseEnter : function() {
        this.setState({hovering:true})
    },
    onMouseLeave : function() {
        this.setState({hovering:false})
    }
})

module.exports = WorkshopListItem