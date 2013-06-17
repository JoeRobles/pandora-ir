Ext.define('Panda.controller.Station', {
    extend: 'Ext.app.Controller',
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