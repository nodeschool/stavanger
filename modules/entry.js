var React = require('react')
var $     = React.DOM

var StavangerNodeSchoolHouse = React.createClass({
    render : function() {
        return $.img({
            className : 'StavangerNodeSchoolHouse',
            src       : '/graphics/schoolhouse.svg'
        })
    }
})

var StavangerNodeSchoolLogo = React.createClass({
    render : function() {
        return $.img({
            className : 'StavangerNodeSchoolLogo',
            src       : '/graphics/stavanger-nodeschool-logo.png'
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

var StavangerNodeSchool = React.createClass({
    render : function() {
        return $.div({
            key       : 'StavangerNodeSchool',
            className : 'StavangerNodeSchool'
        }, [
            HeaderBig({
                key : 'HeaderBig'
            })
        ])
    }
})

React.renderComponent(StavangerNodeSchool(), document.body)
