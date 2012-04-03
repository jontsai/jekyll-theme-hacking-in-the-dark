# Hacking In The Dark

A light-on-dark hacker enthusiast theme for Jekyll + Jekyll-BootStrap. Uses YUI CSS and JavaScript

# Author

Jonathan Tsai <akajontsai-devel@yahoo.com>, http://www.jonathantsai.com

# Setup

You'll want to edit `_config.yml` to setup the identities for your various social profiles. Doing so will allow social media icons to display at the bottom of the page.

For now, the ones that are supported are:

* About.me (about page)
* GitHub (fork me banner on top-right)
* Twitter, LinkedIn, Facebook, Flickr (icon on bottom)
* Feedburner (RSS icon)
* Olark (website chat widget)

Add the social profile identities right under `author: name` and `author: email` like so:

    author :
      name : YOUR_NAME
      email : YOUR_EMAIL_ADDRESS
      aboutme : USERNAME
      github : USERNAME
      twitter : USERNAME
      linkedin : USERNAME
      facebook : USERNAME
      feedburner : USERNAME
      flickr : USERNAME
      olark : OLARK_CODE

You can also add `navlinks` and `footerlinks` to customize the navigation links and footer links. For example:

    navlinks :
      -
        url : '/index.html'
        title : Home
      -
        url : '/about.html'
        title : About
      -
        url : '/code.html'
        title : Code
    
    footerlinks:
      -
        url : '/pages.html'
        title : Pages
      -
        url : '/categories.html'
        title : Categories
      -
        url : '/tags.html'
        title : Tags
      -
        url : '/archive.html'
        title : Archive
