Ext.application({
    name: 'Panda',    
    autoCreateViewport: true,
    models: ['Station', 'Song'],    
    stores: ['Stations', 'RecentSongs', 'SearchResults'],
    controllers: ['Station', 'Song'],
    launch: function() {
        // This is fired as soon as the page is ready
    }
});