<?php
// Add your custom functions here

// Queue parent style followed by child/customized style
add_action( 'wp_enqueue_scripts', 'pixelhead_enqueue_child_styles', 99);

function pixelhead_enqueue_child_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_dequeue_style('wp-bootstrap-starter-style');
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('parent-style')
    );
}