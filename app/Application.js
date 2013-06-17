Ext.application({
    name: 'Panda',    
    autoCreateViewport: true,
    models: ['Station', 'Song'],    
    stores: ['Stations', 'RecentSongs', 'SearchResults'],
    launch: function() {
        // This is fired as soon as the page is ready
    }
});