var React        = require('react')
var utils        = require('./utils')
var workshops    = require('../root/workshops.json')
var Header       = require('./common/HeaderBig')
var LandingPage  = require('./pages/LandingPage')
var WorkshopPage = require('./pages/WorkshopPage')
var $            = React.DOM

workshops = utils.mapAndSortWorkshops(workshops)

var StavangerNodeSchool = React.createClass({
    render : function() {
        var Page = this.getPageByUrl()
        return $.div({
            key       : 'StavangerNodeSchool',
            className : 'StavangerNodeSchool'
        }, [
            Header({
                key   : 'Header',
                small : this.state.url != '/' 
            }),
            Page
        ])
    },
    getInitialState : function() {
        return {
            url : utils.removeTheHashMaybe(window.location.hash)
        }
    },
    componentDidMount : function() {
        if ('onhashchange' in window) {
            window.onhashchange = function (e) {
                this.setState({url : e.newURL.split('#')[1]})
            }.bind(this)
        }
    },
    getPageByUrl : function() {
        var _workshop = utils.workShopInUrl(workshops, this.state.url)
        if (_workshop != undefined) return WorkshopPage({ key : 'WorkshopPage', workshop  : _workshop })
        if (this.state.url == '/')  return LandingPage({  key : 'LandingPage',  workshops : workshops })
        utils.navigate('/')
    }
})

React.renderComponent(StavangerNodeSchool(), document.body)
