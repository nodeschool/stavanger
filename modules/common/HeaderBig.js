var React = require('react')
var $     = React.DOM

var StavangerNodeSchoolHouse = require('./StavangerNodeSchoolHouse')
var StavangerNodeSchoolLogo  = require('./StavangerNodeSchoolLogo')

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

module.exports = HeaderBig