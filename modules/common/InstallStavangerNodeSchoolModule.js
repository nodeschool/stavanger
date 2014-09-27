var React = require('react')
var $     = React.DOM

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

module.exports = InstallStavangerNodeSchoolModule