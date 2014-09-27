module.exports = {

    mapAndSortWorkshops : function(workshops) {
        var _workshops = Object.keys(workshops).map(function(key) {
            return workshops[key]
        })
        return _workshops
    },

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