# BaCSS

BaCSS (pronounced &ldquo;base&rdquo;) is a stylesheet that is just that, a base set of styling for anything you&rsquo;re building. It will add basic styling to anything and everything. &ldquo;Why?&rdquo; You may ask. Because nobody wants to show clients default browser styling.

## How To Use It

Simply include the JS. It'll grab the latest CSS for you and include [ie7-js](http://code.google.com/p/ie7-js/) which is required for advanced selector support in IE. **If you don't need IE for your project, feel free to use the pure CSS.**

    <script src="http://github.com/sambowler/bacss/raw/master/latest.js"></script>

    <link rel="stylesheet" href="http://github.com/sambowler/bacss/raw/master/latest.css" media="screen">

[latest.css](http://github.com/sambowler/bacss/raw/master/latest.css) is all nicely laid out and legible to make it easy to customise to your needs. 

**If you're using HTML5 elements, you will still need to include the [HTML5 Shiv](http://code.google.com/p/html5shiv/) or [Modernizr](http://modernizr.com) yourself.**

## To-do

- Different layouts (2 column, 3 columns etc.)
- Responsive