<?php if(isset($atts) && $atts['product_ids']): $products = explode(',', $atts['product_ids']); ?>
<div class="site47_pro_col12_sanphammoi">
    <div class="container container_fix">
        <div class="title-sanphamoi">
            <div class="item-title">
                <h2 class="title1_1"><?= $atts['section_title'] ?></h2>
            </div>
        </div>
        <div class="slide-samphammoi">
            <?php foreach((array)$products as $product): $_product = wc_get_product( $product );?>
                <div class="item-sanpham">
                    <div class="sale">
                        <img src="images/site47/30.png" />
                    </div>
                    <div class="image">
                        <img src="images/site47/img1.png" />
                    </div>
                    <div class="title">
                        <a class="title5" href="<?= get_the_permalink($product) ?>" title="<?= get_the_title($product) ?>"><?= get_the_title($product) ?></a>
                        <a class="title5" href="<?= get_the_permalink($product) ?>" title="<?= get_the_title($product) ?>"><?= get_the_title($product) ?></a>
                    </div>
                    <div class="giaban">
                        <?php if ( $_product->is_on_sale() ) : ?>
                            <p class="title5"><?php echo $_product->get_sale_price(); ?></p>
                        <?php endif; ?>
                        <h3 class="title3"><?php echo $_product->get_regular_price(); ?></h3>
                    </div>
                    <div class="danhgia">
                        <div class="star">
                            <img src="images/site47/Star.png" />
                            <img src="images/site47/Star.png" />
                            <img src="images/site47/Star.png" />
                            <img src="images/site47/Star.png" />
                            <img src="images/site47/Star1.png" />
                        </div>
                        <div class="view">
                            <p>Reviews <span>(4)</span></p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<?php endif;