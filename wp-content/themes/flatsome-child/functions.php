<?php
// Add custom Theme Functions here
if ( ! defined( 'THEME_URL_URI' ) ) {
	define('THEME_URL_URI', get_stylesheet_directory_uri());
}

require_once dirname(__FILE__) . '/ux-builder/ux-builder.php';

function load_theme_assets() {

    
    wp_enqueue_style( 'HaNoi_font', THEME_URL_URI . '/assets/css/site47/font.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'HaNoi_main', THEME_URL_URI . '/assets/css/site47/main.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'HaNoi_bs', THEME_URL_URI . '/assets/css/site47/bootstrap/bootstrap.min.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'HaNoi_slick_theme', THEME_URL_URI . '/assets/css/slick-theme.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'HaNoi_slick', THEME_URL_URI . '/assets/css/slick.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'HaNoi_aos', THEME_URL_URI . '/assets/css/aos.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'HaNoi_animate', THEME_URL_URI . '/assets/css/animate.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'HaNoi_fancybox', THEME_URL_URI . '/assets/js/fancybox/jquery.fancybox.min.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'HaNoi_style', THEME_URL_URI . '/assets/css/site47/styles.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'HaNoi_reset', THEME_URL_URI . '/assets/css/site47/reset.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'HaNoi_aws', THEME_URL_URI . '/assets/css/font/fontawesome.min.css', array(), '1.0', 'all' );
   
    wp_enqueue_style( 'HaNoi_home', THEME_URL_URI . '/assets/css/site47/home.css', array(), '1.0', 'all' );
    
    wp_enqueue_script( 'HaNoi_jquery', THEME_URL_URI . '/assets/js/jquery.min.js', array (), 1.0, true);
    wp_enqueue_script( 'HaNoi_js', THEME_URL_URI . '/assets/js/site47/app.js', array (), 1.0, true);
 
}

add_action( 'wp_enqueue_scripts', 'load_theme_assets' );
