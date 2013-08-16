YUI.namespace('WebConsole');

YUI.add('web-console', function (Y) {
    var CSS_ID_WEBCONSOLE_PANEL = 'webconsole_panel';

    var _instance = null;

    function WebConsole(config) {
        var _panel;
        this.test = function() {
            Y.log('WebConsole.test()');
        };

        this.getPanel = function() {
            if (typeof _panel === 'undefined') {
                var panelContent = Y.Node.create(Y.one('#' + CSS_ID_WEBCONSOLE_PANEL).getHTML());
                var panelCfg = {
                    srcNode : panelContent,
                    width : '80%',
                    zIndex : 90,
                    modal : true,
                    render : false
                };
                var panel = new Y.Panel(panelCfg);
                _panel = panel;
            }
            return _panel;
        }

        this.show = function() {
            var panel = this.getPanel();
            panel.render().show();
        };
    }

    function show() {
        if (!_instance) {
            var cfg = {};
            _instance = new WebConsole(cfg);
        }
        _instance.show();
    }

    Y.WebConsole = {
        show: show
    }
}, '0.1.0', {
    requires: [
        'node'
    ]
});