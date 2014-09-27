module.exports = {

    removeTheHashMaybe : function(hash) {
        return (hash.indexOf('#') == 0) ? hash.slice(1,hash.length) : hash
    },

    workShopInUrl : function(workshops, url) {
        var _workshops = workshops.filter(function(workshop) {
            return '/'+workshop.id == url
        }.bind(this))
        return _workshops[0]
    },

    navigate : function(to) {
        window.location.hash = to
    }

}