Ext.define('Pandora.view.RecentlyPlayedScroller', {
    extend: 'Ext.view.View',
    alias: 'widget.recentlyplayedscroller',
    itemTpl: '<div>{name}</div>',
    store: 'RecentSongs',
});