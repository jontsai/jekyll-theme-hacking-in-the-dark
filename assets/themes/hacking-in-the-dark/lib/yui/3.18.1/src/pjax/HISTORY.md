Pjax Change History
===================

3.18.1
------

* No changes.

3.18.0
------

* [#1874][]: Add `allowFallThrough` attribute to `navigate()` falls through
  to window.location with no matching route. (@ericsoco)

[#1874]: https://github.com/yui/yui3/pull/1874

3.17.2
------

* No changes.

3.17.1
------

* No changes.

3.17.0
------

* No changes.

3.16.0
------

* No changes.

3.15.0
------

* No changes.

3.14.1
------

* No changes.

3.14.0
------

* No changes.

3.13.0
------

* No changes.

3.12.0
------

* No changes.

3.11.0
------

* No changes.

3.10.3
------

* No changes.

3.10.2
------

* No changes.

3.10.1
------

* No changes.

3.10.0
------

* No changes.

3.9.1
-----

* No changes.

3.9.0
-----

* No changes.

3.8.1
-----

* No changes.

3.8.0
-----

* Fix issue where Pjax would throw an error because of calling methods on `null`
  nodes when an IO request was aborted (which happens to pending requests when
  a new request comes in.)


3.7.3
-----

* No changes.


3.7.2
-----

* No changes.


3.7.1
-----

* No changes.


3.7.0
-----

* Added `Y.Pjax.defaultRoute`, a static stack of middleware which forms the
  default Pjax route. This is useful when overriding Pjax's default `"*"` route
  by adding adding more specific route paths, or performing some operation after
  the default behavior.

* Added the `loadContent()` method which is route middleware which loads content
  from a server. This can be used with custom Pjax implementations which need to
  have more control over how content is updated in the DOM.

* Extracted `Y.PjaxContent` from `Y.Pjax`. Pulling out the content-handling
  functionality allows it to be used by other components, like `Y.App`.
  [Ticket #2532487]


3.6.0
-----

* Fixed issue where pjax would try to navigate from clicks on elements which
  were not anchors or the anchor's `href` was a URL from a different origin than
  the current page. [Ticket #2531943]


3.5.1
-----

* No changes.


3.5.0
-----

* Initial release.
