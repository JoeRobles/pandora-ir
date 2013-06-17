Ext.define('Panda.controller.Station', {
    extend: 'Ext.app.Controller',
    views: ['StationsList'], // creates getter named 'getStationsListView' -> returns reference to StationsList class
    models: ['Station'],     // creates getter named 'getStationModel'     -> returns reference to Station model class
    controllers: ['Song'],   // creates getter named 'getSongController'   -> returns the Song controller instance
    stores: ['Stations'],    // creates getter named 'getStationsStore'    -> returns the Stations store instance
    refs: [{
        // A component query
        selector: 'viewport > #west-region > stationslist',
        ref: 'stationsList'
    }],
    init: function() {
        this.control({
            'stationslist': {
                selectionchange: this.onStationSelect
            },
            'newstation': {
                select: this.onNewStationSelect
            }
        });
    },
    onStationSelect: function(selModel, selection) {
        this.application.fireEvent('stationstart', selection[0]);
    },
    onLaunch: function() {
        // Use the automatically generated getter to get the store
        var stationsStore = this.getStationsStore();        
        stationsStore.load({
            callback: this.onStationsLoad,
            scope: this
        });
    },
    onStationsLoad: function() {
        var stationsList = this.getStationsList();
        stationsList.getSelectionModel().select(0);
    },
});