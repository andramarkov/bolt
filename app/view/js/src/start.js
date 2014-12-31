
jQuery(function ($) {
    // Get configuration
    var config = $('script[data-config]').first().data('config');
    for (var key in config) {
        bolt[key] = config[key];
    }

    // Initialize objects
    bolt.files = new Files();
    bolt.folders = new Folders();
    bolt.stack = new Stack();
    bolt.sidebar = new Sidebar();
    bolt.navpopups = new Navpopups();
    bolt.moments = new Moments();
    bolt.imagelist = [];
    bolt.filelist = [];

    // Initialisation
    bolt.datetimes.init();
    //
    init.ckeditor();
    init.confirmationDialogs();
    init.magnificPopup();
    init.dataActions();
    window.setTimeout(function () {
        init.keyboardShortcuts();
    }, 1000);
    init.dropZone();
    init.popOvers();
    init.activityWidget();
    init.dropDowns();
    init.deferredWidgets();
    init.passwordInput();
    init.dashboardCheckboxes();
    init.sortables();
    init.omnisearch();
    init.uploads();
    init.geolocation();
    init.focusStatusSelect();
    init.depublishTracking();

    $('[data-bind]').each(function () {
        var data = $(this).data('bind');
        //console.log('Binding: ' + data.bind);

        switch (data.bind) {
            case 'editcontent': init.bindEditContent(data); break;
            case 'editfile': init.bindEditFile(data); break;
            case 'editlocale': init.bindEditLocale(data); break;
            case 'filebrowser': init.bindFileBrowser(); break;
            case 'ckfileselect': init.bindCkFileSelect(); break;
            case 'prefill': init.bindPrefill(); break;
            case 'slug': init.bindSlug(data); break;
            case 'useragents': init.bindUserAgents(); break;
            case 'video': init.bindVideo(data); break;
            default: console.log('Binding ' + data.bind + ' failed!');
        }
    });
});
