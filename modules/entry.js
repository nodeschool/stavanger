var React = require('react')
var $     = React.DOM

var StavangerNodeSchoolHouse = React.createClass({
    render : function() {
        return $.img({
            className : 'StavangerNodeSchoolHouse',
            src       : 'graphics/schoolhouse.svg'
        })
    }
})

var StavangerNodeSchoolLogo = React.createClass({
    render : function() {
        return $.img({
            className : 'StavangerNodeSchoolLogo',
            src       : 'graphics/stavanger-nodeschool-logo.png'
        })
    }
})

var HeaderBig = React.createClass({
    render : function() {
        return $.div({
            className : 'HeaderBig'
        }, [
            StavangerNodeSchoolHouse({
                key : 'StavangerNodeSchoolHouse'
            }),
            StavangerNodeSchoolLogo({
                key : 'StavangerNodeSchoolLogo'
            }),
            $.div({
                key       : 'HeaderBigTitle',
                className : 'HeaderBigTitle'
            },'STAVANGER NODESCHOOL')
        ])
    }
})

var LandingPageWelcome = React.createClass({
    render : function() {
        return $.p({
            className : 'LandingPageWelcome'
        },'Stavanger NodeSchool organizes javascript workshops in and around Stavanger, Norway.')
    }
})

var InstallStavangerNodeSchoolModule = React.createClass({
    render : function() {
        return $.div({
            className : 'InstallStavangerNodeSchoolModule'
        },[
            $.code({
                key : 'InstallStavangerNodeSchoolModuleCode'
            },'$ npm install -g stavanger-nodeschool')
        ])
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
            // LandingPageWelcome({
            //     key : 'LandingPageWelcome'
            // })
        ])
    }
})

var StavangerNodeSchool = React.createClass({
    render : function() {
        return $.div({
            key       : 'StavangerNodeSchool',
            className : 'StavangerNodeSchool'
        }, [
            LandingPage({
                key : 'HeaderBig'
            })
        ])
    }
})

React.renderComponent(StavangerNodeSchool(), document.body)
