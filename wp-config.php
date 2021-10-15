<?php
/**
 * Cấu hình cơ bản cho WordPress
 *
 * Trong quá trình cài đặt, file "wp-config.php" sẽ được tạo dựa trên nội dung 
 * mẫu của file này. Bạn không bắt buộc phải sử dụng giao diện web để cài đặt, 
 * chỉ cần lưu file này lại với tên "wp-config.php" và điền các thông tin cần thiết.
 *
 * File này chứa các thiết lập sau:
 *
 * * Thiết lập MySQL
 * * Các khóa bí mật
 * * Tiền tố cho các bảng database
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Thiết lập MySQL - Bạn có thể lấy các thông tin này từ host/server ** //
/** Tên database MySQL */
define( 'DB_NAME', 'data_HaNoiLab' );

/** Username của database */
define( 'DB_USER', 'root' );

/** Mật khẩu của database */
define( 'DB_PASSWORD', '' );

/** Hostname của database */
define( 'DB_HOST', 'localhost' );

/** Database charset sử dụng để tạo bảng database. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Kiểu database collate. Đừng thay đổi nếu không hiểu rõ. */
define('DB_COLLATE', '');

/**#@+
 * Khóa xác thực và salt.
 *
 * Thay đổi các giá trị dưới đây thành các khóa không trùng nhau!
 * Bạn có thể tạo ra các khóa này bằng công cụ
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Bạn có thể thay đổi chúng bất cứ lúc nào để vô hiệu hóa tất cả
 * các cookie hiện có. Điều này sẽ buộc tất cả người dùng phải đăng nhập lại.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '7Uz 7}~:Z~Bvh?T(PWYudJJzYr34C:VA}m{1S-P: |lf1%nV@W xdZ-+]a<4_W9&' );
define( 'SECURE_AUTH_KEY',  '9Mp*F<F>&g7/zYG/jVd- ,JbuxW9mBQelyAdowl)({.D;C%.&0 TItdB=#$?&ui}' );
define( 'LOGGED_IN_KEY',    's4&lgpBnRB2j7|qw#lR oF<4]@Sx``cx=,8o`f`zA*JOK{74=I4l:1.X<T1VbYB`' );
define( 'NONCE_KEY',        '}/*YcI~)0-X osD@Zk`[UW7MpwP<FG7EmToFd-KKQ@lnxx&?@37-}?f6h{_GjeUr' );
define( 'AUTH_SALT',        '#@&VD}xv7:6{}T!1b,H&7lv,rU+0*.(xt*m/Qpks>2%t.v@:u4lCftu8&n8M-?`s' );
define( 'SECURE_AUTH_SALT', 'P7K%<wRk&>jZ_ 2iQvp6B|4@<B}fa^OxXg:1:|+{f> Et0I}</H9JoI_B#v!b3NK' );
define( 'LOGGED_IN_SALT',   'S<4!R3A_ORD/yysmhn=O+e6?%>k)=%]WC5la^fE EWX-v2m 6L@B&Y.M{rbYB@8j' );
define( 'NONCE_SALT',       '/,;Ba[Qn5|e/-w0]3x05p!`:ps/{rCFYCe#a{)RBtMc*#,y#i5FrZy o8#7!Q^oF' );

/**#@-*/

/**
 * Tiền tố cho bảng database.
 *
 * Đặt tiền tố cho bảng giúp bạn có thể cài nhiều site WordPress vào cùng một database.
 * Chỉ sử dụng số, ký tự và dấu gạch dưới!
 */
$table_prefix = 'wp_';

/**
 * Dành cho developer: Chế độ debug.
 *
 * Thay đổi hằng số này thành true sẽ làm hiện lên các thông báo trong quá trình phát triển.
 * Chúng tôi khuyến cáo các developer sử dụng WP_DEBUG trong quá trình phát triển plugin và theme.
 *
 * Để có thông tin về các hằng số khác có thể sử dụng khi debug, hãy xem tại Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Đó là tất cả thiết lập, ngưng sửa từ phần này trở xuống. Chúc bạn viết blog vui vẻ. */

/** Đường dẫn tuyệt đối đến thư mục cài đặt WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Thiết lập biến và include file. */
require_once(ABSPATH . 'wp-settings.php');
