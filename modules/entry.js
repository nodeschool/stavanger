var React       = require('react')
var $           = React.DOM
var workshops   = require('../root/workshops.json').workshops
var LandingPage = require('./pages/LandingPage')

var StavangerNodeSchool = React.createClass({
    render : function() {
        return $.div({
            key       : 'StavangerNodeSchool',
            className : 'StavangerNodeSchool'
        }, [
            LandingPage({
                key       : 'HeaderBig',
                workshops : workshops
            })
        ])
    }
})

React.renderComponent(StavangerNodeSchool(), document.body)
