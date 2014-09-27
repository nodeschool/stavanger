var React        = require('react')
var $            = React.DOM
var HeaderBig    = require('../common/HeaderBig')
var WorkshopList = require('../common/WorkshopList')
var InstallStavangerNodeSchoolModule = require('../common/InstallStavangerNodeSchoolModule')

var LandingPageWelcome = React.createClass({
    render : function() {
        return $.p({
            className : 'LandingPageWelcome'
        },'Stavanger NodeSchool organizes javascript workshops in and around Stavanger, Norway.')
    }
})

var LandingPage = React.createClass({
    render : function() {
        return $.div({
            className : 'LandingPage'
        },[
            HeaderBig({
                key : 'HeaderBig'
            }),
            InstallStavangerNodeSchoolModule({
                key : 'InstallStavangerNodeSchoolModule'
            }),
            LandingPageWelcome({
                key : 'LandingPageWelcome'
            }),
            WorkshopList({
                key       : 'WorkshopList',
                workshops : this.props.workshops
            })
        ])
    }
})

module.exports = LandingPage