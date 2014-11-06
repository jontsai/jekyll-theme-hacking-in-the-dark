YUI().use(
    'node',
    'event',
function (Y) {
    /* -------------------------------------------------- */
    /* YUI "Local" Globals */

    // CSS selectors
    var CSS_ID_BUTTON_STRIPE_DONATE = 'button_stripe_donate';

    // Nodes
    var main = Y.one('#main');

    // App variables

    /* End YUI "Local" Globals */
    /* -------------------------------------------------- */

    // Custom App Functions

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
        //main.delegate('tap', handleStripeDonateButtonPressed, '#' + CSS_ID_BUTTON_STRIPE_DONATE);
    }

    function init() {
    }
    initEventHandlers();
    init();
});
