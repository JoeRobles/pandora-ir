Ext.define('Pandora.store.RecentSongs', {
    extend: 'Ext.data.Store',
    model: 'Pandora.model.Song',
 
    // Make sure to require your model if you are
    // not using Ext JS 4.0.5
    requires: 'Pandora.model.Song'
});