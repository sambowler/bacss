BaCSS
=========

BaCSS is a stylesheet that is just that, a base set of styling for anything you're building. It will add basic styling, spacing and layout to every possible element you could imagine.

How To Use It
-----------------

If you're using traditional ID's for your layout such as <code>#header</code>, <code>#main</code>, <code>#sidebar</code>, <code>#footer</code> or you're using HTML5's new semantic elements, this is probably the solution for you. SImply include the stylesheet as you would any other.

    <link rel="stylesheet" href="bacss-0.1.css" media="screen" type="text/css">

No need for <code>type="text/css"</code> in HTML5, of course.

If you're using crazy ID's...
-------------

There's the JavaScript solution:

    <script type="text/javascript" src="bacss-0.1.js"></script>
    <script type="text/javascript">
        new Bacss({
            '#header', '#new-header-id',
            '#footer', '#new-footer-id',
        });
    </script>
    
Simply pass the object a set of options that you would like to be replaced in the CSS. You could, of course, just adjust the CSS to your needs but this may be easier for some users.