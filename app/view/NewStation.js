Ext.define('Panda.view.NewStation', {
    emptyText: 'Search station',
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.newstation',
    store: 'SearchResults',
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
});