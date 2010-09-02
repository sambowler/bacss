Bacss
=======

A base stylesheet to plug in to any site that is under construction. 

If you're using HTML5 in a normal manner, great! Go ahead and plug it in like you would any other stylesheet. If not, you may want to use the JS version. This will allow you to explicitly change any selector in the css to customise the stylesheet to your needs.

    <script type="text/javascript" src="bacss-0.1.min.js"></script>
    <script type="text/javascript">
        new Bacss({
           'current_selector', 'new_value', 
        });
    </script>