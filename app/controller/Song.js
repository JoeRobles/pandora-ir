Ext.define('Panda.controller.Song', {
    extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            'recentlyplayedscroller': {
                selectionchange: this.onSongSelect
            }
        });

        this.application.on({
            stationstart: this.onStationStart,
            scope: this
        });
    },
    //...
});