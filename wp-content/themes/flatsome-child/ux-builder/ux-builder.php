<?php

if (file_exists(dirname(__FILE__) . '/ux-shortcodes.php')) {
    require_once dirname(__FILE__) . '/ux-shortcodes.php';
}

function HaNoiLab_ux_builder()
{
    $products = get_posts(array(
        'post_type' => 'product',
        'numberposts' => -1,
        'orderby' => 'date',
        'order' => 'DESC',
        'status' => 'publish'
    ));
    $products_arr = array();
    foreach( $products as $p) {
        $products_arr[$p->ID] = $p->post_title;
    }


    add_ux_builder_shortcode('hnl_san_pham_moi_shortcode', array(
        'name' => __('HNL Sản phẩm mới'),
        'category' => __('Content'),
        'info' => '{{ text }}',
        'wrap' => false,
        'priority'  => -1,
        'presets' => array(
            array(
                'name' => __( 'Blank' ),
                'content' => '[hnl_san_pham_moi_shortcode][/hnl_san_pham_moi_shortcode]',
            ),
        ),
        'options' => array(
            'product_ids' => array(
                'type' => 'select',
                'heading' => __('Danh sách sản phẩm'),
                'config' => array(
                    'multiple' => true,
                    'placeholder' => 'Chọn sản phẩm',
                ),
                'options' => $products_arr,
            ),
            'section_title' => array(
                'type' => 'textfield',
                'heading' => __('Tiêu đề'),
                'default' => 'Nhập tiêu đề',
            ),
        ),
    ));
}

add_action('ux_builder_setup', 'HaNoiLab_ux_builder');
?>