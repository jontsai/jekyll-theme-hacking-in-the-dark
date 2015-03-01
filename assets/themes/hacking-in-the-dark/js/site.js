YUI().use(
    'node',
    'event',
    'gallery-debounce',
function (Y) {
    /* -------------------------------------------------- */
    /* YUI "Local" Globals */

    // CSS selectors
    var CSS_ID_BUTTON_STRIPE_DONATE = 'button_stripe_donate';

    var CSS_CLASS_BELOW_FOLD = 'below-fold';

    // Nodes
    var main = Y.one('#main');
    var documentBody = Y.one(document.body);

    // App variables

    /* End YUI "Local" Globals */
    /* -------------------------------------------------- */

    // Custom App Functions

    function handleWindowResized(e) {
        reflowContent();
    }

    function handleWindowScrolled(e) {
        reflowContent();
    }

    function reflowContent() {
        var scrollY = documentBody.get('docScrollY');
        var mainY = main.getY();
        var leftBox = Y.one('#left_box');
        var rightBox = Y.one('#right_box');
        if (scrollY > mainY) {
            // get the current X, which will become the new margin
            // left and right side are mirrored
            var sideboxMarginLeft = leftBox.getX();
            leftBox.addClass(CSS_CLASS_BELOW_FOLD);
            leftBox.setStyle('marginLeft', sideboxMarginLeft);

            rightBox.addClass(CSS_CLASS_BELOW_FOLD);
            rightBox.setStyle('marginLeft', sideboxMarginLeft);
        } else {
            leftBox.removeClass(CSS_CLASS_BELOW_FOLD);
            leftBox.setStyle('marginLeft', 'auto');

            rightBox.removeClass(CSS_CLASS_BELOW_FOLD);
            rightBox.setStyle('marginLeft', 'auto');
        }
    }

    function handleStripeDonateButtonPressed(e) {
        var button = this;
        e.preventDefault();
        var handler = StripeCheckout.configure({
            key: STRIPE_KEY,
            image: GRAVATAR_IMG,
            token: function(token, args) {
                // Use the token to create the charge with a server-side script.
                // You can access the token ID with `token.id`
                Y.log('token: ' + token.id);
            }
        });
        handler.open({
            name: 'jontsai.com',
            description: 'Donation',
            amount: 2000
        });
    }

    // App Initializers
    function initEventHandlers() {
        Y.on('resize', Y.debounce(10, handleWindowResized));
        Y.on('scroll', Y.debounce(10, handleWindowScrolled));
        //main.delegate('tap', handleStripeDonateButtonPressed, '#' + CSS_ID_BUTTON_STRIPE_DONATE);
    }

    function init() {
    }
    initEventHandlers();
    init();
});
