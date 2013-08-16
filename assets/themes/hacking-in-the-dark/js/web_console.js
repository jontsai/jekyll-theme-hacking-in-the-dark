//YUI.namespace('WebConsole');

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
                var documentBody = Y.one(document.body);
                var winHeight = documentBody.get('winHeight');
                var winWidth = documentBody.get('winWidth');

                var panelCfg = {
                    srcNode : panelContent,
                    width : winWidth * 0.8,
                    zIndex : 90,
                    modal : true,
                    visible : false,
                    render : true
                };
                var panel = new Y.Panel(panelCfg);
                _panel = panel;
            }
            return _panel;
        }

        this.show = function() {
            var panel = this.getPanel();
            var boundingBox = panel.get('boundingBox');
            var width = boundingBox.getStyle('width');
            panel.show();
            boundingBox.setStyle('top', '30px');
            boundingBox.setStyle('left', '-' + width);
            boundingBox.transition({
                duration: 0.25,
                left: '0px'
            });
        };

        this.hide = function() {
            var panel = this.getPanel();
            var boundingBox = panel.get('boundingBox');
            var width = boundingBox.getStyle('width');
            boundingBox.transition({
                duration: 0.25,
                left: '-' + width
            }, function() {
                panel.hide();
            });
        };

        this.toggle = function() {
            var panel = this.getPanel();
            if (panel.get('visible')) {
                this.hide();
            } else {
                this.show();
            }
        }
    }

    function getInstance() {
        if (!_instance) {
            var cfg = {};
            _instance = new WebConsole(cfg);
        }
        var console = _instance;
        return console;
    }

    function toggle() {
        var console = getInstance();
        console.toggle();
    }

    function isExpanded() {
        var console = getInstance();
        var expanded = true && console.getPanel().get('visible');
        return expanded;
    }

    Y.WebConsole = {
        toggle : toggle,
        isExpanded : isExpanded
    }
}, '0.1.0', {
    requires: [
        'node',
        'transition'
    ]
});
