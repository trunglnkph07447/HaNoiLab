<?php
function hnl_san_pham_moi_shortcode($atts, $content = null)
{
    ob_start();
    extract(shortcode_atts(array(
        '_id' => 'title-' . rand(),
    ), $atts));
    include dirname(__FILE__) . '/ux-layout/hnl-san-pham-moi-layout.php';
    return ob_get_clean();
}

add_shortcode('hnl_san_pham_moi_shortcode', 'hnl_san_pham_moi_shortcode');

?>