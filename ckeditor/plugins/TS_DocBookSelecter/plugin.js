
CKEDITOR.plugins.add( 'TS_DocBookSelecter', {
    icons: 'Pirate',
	init: function( editor ) {
		editor.addCommand( 'selectFile', {
            exec: function( editor ) {
                
            }
        });
        editor.ui.addButton( 'Pirate', {
            label: 'DocBook',
            command: 'selectFile',
            toolbar: 'document'
        });	
    }
});

