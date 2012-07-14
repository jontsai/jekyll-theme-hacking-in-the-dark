# Hacking In The Dark

A light-on-dark hacker enthusiast theme for Jekyll + Jekyll-BootStrap. Uses YUI CSS and JavaScript

# Author

Jonathan Tsai <akajontsai-devel@yahoo.com>

This is the theme that I use to power my personal website (http://www.jonathantsai.com).

By sharing this theme, I hope to benefit others whenever I add features that extend the functionality of Jekyll-Bootstrap. I believe in code modularity and robustness.

# Setup

I've added lots of interesting customizations that **only** require making changes to the `_config.yml` file, and the theme templates take care of the rest.

Here's what's supported now, with more on the way:

* Customized Navigation Links - choose which pages show up in your navigation menu
* Customized Footer Links
* Automatically add social media icons in the footer linking to your various profiles 
* Custom credits - easily thank other developers or useful websites by linking to them

## Custom Navigation and Footer Links

You can add `navlinks` and `footerlinks` to customize the navigation links and footer links. For example:

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

You can also customize credits (shoutouts, thank-yous) by adding a `credits` node.

I gave a shoutout to Jekyll and Jekyll-Bootstrap, and my hosting and DNS providers:

    credits :
      -
        pre_text : 'Powered by'
        url : 'https://github.com/mojombo/jekyll'
        link_text : Jekyll
      -
        pre_text : 'with help from'
        url : 'http://jekyllbootstrap.com'
        link_text : 'Jekyll Bootstrap'
        link_title : 'The Definitive Jekyll Blogging Framework'
        post_text : '.'
      -
        pre_text : ''
        url : http://www.linode.com/?r=65762fd9ef89c62a08eddbb4c641c9b9a5415ba9
        link_text : 'Linode'
        post_text : '.'
      -
        pre_text : ''
        url : 'http://freedns.afraid.org/'
        link_text : FreeDNS
        post_text : '.'

## Social Media Links

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

# Make your own Themes

Follow the instructions here!
http://jekyllbootstrap.com/api/theme-api.html

After the theme is set up, one easy command to package it for publishing!

    $ rake theme:package name="THEME-NAME"
