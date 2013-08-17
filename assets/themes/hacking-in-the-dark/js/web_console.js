//YUI.namespace('WebConsole');

YUI.add('web-console', function (Y) {
    // CSS selectors
    var CSS_CLASS_CONSOLE = 'console'

    var CSS_ID_WEBCONSOLE_PANEL = 'webconsole_panel';

    // "Local" globals
    var HTML_NEWLINE = '\n';
    var PROMPT = HTML_NEWLINE + '>>> ';

    // member variables
    var _instance = null;

    // member functions
    function WebConsole(config) {
        var _panel;

        this.test = function() {
            Y.log('WebConsole.test()');
        };

        this.handlers = {
            keyPressed : function(e) {
                Y.log("keypressed in textarea");
                e.preventDefault();
                var keyCode = e.keyCode;
                _instance.cprompt();
                _instance.cend();
            }
        }

        this.getConsole = function() {
            var console = _panel.get('boundingBox').one('.' + CSS_CLASS_CONSOLE);
            return console;
        }

        this.getPanel = function() {
            if (typeof _panel === 'undefined') {
                var panelContent = Y.Node.create(Y.one('#' + CSS_ID_WEBCONSOLE_PANEL).getHTML());
                var documentBody = Y.one(document.body);
                var winWidth = documentBody.get('winWidth');
                var winHeight = documentBody.get('winHeight');

                var panelCfg = {
                    srcNode : panelContent,
                    width : winWidth * 0.8,
                    height : winHeight * 0.8,
                    zIndex : 90,
                    modal : true,
                    visible : false,
                    render : true,
                    hideOn : []
                };

                var panel = new Y.Panel(panelCfg);
                _panel = panel;
                // set up event delegation for key events in panel
                var boundingBox = panel.get('boundingBox');
                boundingBox.delegate('clickoutside', function(e) { _instance.hide(); }, '*');
                boundingBox.delegate('key', function(e) { _instance.hide(); }, 'down:esc', '*');
                this.initConsole();
            }
            return _panel;
        }

        /**
         * initConsole
         *
         * initializes the WebConsole text, etc
         */
        this.initConsole = function() {
            var console = this.getConsole();
            this.cout('WebConsole 0.1.0 by Jonathan Tsai <akajontsai-devel@yahoo.com> (C) 2013', false);
            this.cout('Type "help", "copyright", "credits" or "license" for more information.');
            this.cprompt();
            this.cprompt('This is just a dummy console for now');
            this.cprompt();
            this.cend();
            console.delegate('key', this.handlers.keyPressed, 'down:enter', '*');
        }

        /**
         * cout
         *
         * Prints the given string to console
         */
        this.cout = function(s, addNewline) {
            addNewline = addNewline === undefined ? true : addNewline;
            var console = this.getConsole();
            var value = console.get('value');
            if (addNewline) {
                value += HTML_NEWLINE;

            }
            value += s;
            console.set('value', value);
        }

        /**
         * cprompt
         *
         * Prints the given string to console, prepended with PROMPT
         */
        this.cprompt = function(s) {
            s = s === undefined? '' : s;
            this.cout(PROMPT + s, false);
        }

        /**
         * cend
         *
         * Focuses on the console and puts cursor at end of text
         */
        this.cend = function() {
            var console = this.getConsole();
            console.focus();
            var value = console.get('value');
            console.set('value', '');
            console.set('value', value);
        }

        /**
         * show
         *
         * shows the WebConsole panel
         */
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
            this.cend();
        };

        /**
         * hide
         *
         * hides the WebConsole panel
         */
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

        /**
         * toggle
         *
         * toggles the WebConsole panel shown/hidden state
         */
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
        'event',
        'event-key',
        'transition'
    ]
});
