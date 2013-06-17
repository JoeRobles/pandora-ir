Ext.define('Panda.controller.Station', {
    extend: 'Ext.app.Controller',
    views: ['StationsList'], // creates getter named 'getStationsListView' -> returns reference to StationsList class
    models: ['Station'],     // creates getter named 'getStationModel'     -> returns reference to Station model class
    controllers: ['Song'],   // creates getter named 'getSongController'   -> returns the Song controller instance
    stores: ['Stations'],    // creates getter named 'getStationsStore'    -> returns the Stations store instance
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
});