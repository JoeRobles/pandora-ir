Ext.define('Panda.controller.Station', {
    extend: 'Ext.app.Controller',
    refs: [{
        // A component query
        ref: 'stationsList',
        selector: 'stationslist',
    }],
    stores: ['Stations', 'SearchResults'],    // creates getter named 'getStationsStore'    -> returns the Stations store instance
//    views: ['StationsList'], // creates getter named 'getStationsListView' -> returns reference to StationsList class
//    models: ['Station'],     // creates getter named 'getStationModel'     -> returns reference to Station model class
//    controllers: ['Song'],   // creates getter named 'getSongController'   -> returns the Song controller instance

    init: function() {
        // Start listening for events on views
        // Listen for the select event on the NewStation combobox
        this.control({
            'stationslist': {
                selectionchange: this.onStationSelect
            },
            'newstation': {
                select: this.onNewStationSelect
            }
        });
    },
    onLaunch: function() {
        // Use the automatically generated getter to get the store
        var stationsStore = this.getStationsStore();        
        stationsStore.load({
            callback: this.onStationsLoad,
            scope: this
        });
    },
    onNewStationSelect: function(field, selection) {
        var selected = selection[0],
            store = this.getStationsStore(),
            list = this.getStationsList();

        if (selected && !store.getById(selected.get('id'))) {
            // If the newly selected station does not exist in our station store we add it
            store.add(selected);
        }

        // We select the station in the Station list
        list.getSelectionModel().select(selected);
    },
    onStationsLoad: function() {
        var stationsList = this.getStationsList();
        stationsList.getSelectionModel().select(0);
    },
    onStationSelect: function(selModel, selection) {
        // Fire an application wide event
        this.application.fireEvent('stationstart', selection[0]);
    }
});