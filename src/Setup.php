<?php

namespace Bcgov\Theme\Block;

use Bcgov\Theme\Block\Actions\{
    ThemeSupports,
    AdminMenus,
    MenuEditor,
    AdminOptions,
    BcgovSettings,
    Dependencies,
    RegisterCustomPatternsPostType,
    EnqueueAndInject,
    ExportOptions,
    PatternsSetup,
    PageCustomClass,
    SetDefaultFavicon,
};

use Bcgov\Theme\Block\Filters\{
    ButtonEnhanced,
    ImageEnhanced,
    MediaTextEnhanced,
    SiteLogoEnhanced,
    GravityFormsStyles,
};


/**
 * Initialization and setup of theme utilising an auto-loader.
 *
 * @since 1.1.1
 *
 * @package Bcgov/Theme/Block
 */
class Setup {
    /**
     * Constructor.
     */
    public function __construct() {

        // Actions.
        $theme_supports                 = new ThemeSupports();
        $theme_admin_menus              = new AdminMenus();
        $theme_menu_editor              = new MenuEditor();
        $theme_admin_options            = new AdminOptions();
        $theme_bcgov_settings           = new BcgovSettings();
        $theme_dependencies             = new Dependencies();
        $theme_register_custom_patterns = new RegisterCustomPatternsPostType();
        $theme_enqueue_and_inject       = new EnqueueAndInject();
        $theme_exports                  = new ExportOptions();
        $theme_register_block_patterns  = new PatternsSetup();
        $theme_page_custom_class        = new PageCustomClass();
        $theme_set_default_favicon      = new SetDefaultFavicon();

        // Filters.
        $filter_button_enhanced      = new ButtonEnhanced();
        $filter_image_enhanced       = new ImageEnhanced();
        $filter_mediatext_enhanced   = new MediaTextEnhanced();
        $filter_sitelogo_enhanced    = new SiteLogoEnhanced();
        $filter_gravity_forms_styles = new GravityFormsStyles();

        add_action( 'acf/init', [ $theme_admin_options, 'bcgov_block_theme_acf_init_block_types' ] );
        add_action( 'admin_enqueue_scripts', [ $theme_enqueue_and_inject, 'bcgov_block_theme_enqueue_admin_scripts' ] );
        add_action( 'add_meta_boxes', [ $theme_page_custom_class, 'custom_page_meta_boxes' ], 10, 2 );
        add_action( 'admin_init', [ $theme_admin_options, 'bcgov_block_theme_custom_settings' ] );
        add_action( 'admin_notices', [ $theme_dependencies, 'bcgov_block_theme_dependencies' ] );
        add_action( 'admin_menu', [ $theme_admin_menus, 'bcgov_block_theme_menu' ] );
        add_action( 'admin_menu', [ $theme_bcgov_settings, 'bcgov_add_settings_menu' ] );
        add_action( 'admin_menu', [ $theme_menu_editor, 'hide_appearance_menu_for_editor' ] );
        add_action( 'after_setup_theme', [ $theme_supports, 'bcgov_block_theme' ] );
        add_action( 'export_filters', [ $theme_exports, 'bcgov_block_theme_exports' ] );
        add_action( 'init', [ $theme_register_custom_patterns, 'bcgov_block_theme_register_custom_pattern' ] );
        add_action( 'init', [ $theme_register_block_patterns, 'bcgov_blocks_theme_register_block_patterns' ], 9 );
        add_action( 'init', [ $theme_menu_editor, 'add_editor_menu_capabilities' ] );
        add_action( 'init', [ $theme_menu_editor, 'menu_manager_post_type' ], 9 );
        add_action( 'init', [ $theme_menu_editor, 'create_initial_menu_manager_post' ] );
        add_action( 'init', [ $theme_supports, 'bcgov_block_theme_register_block_styles' ] );
        add_action( 'wp_enqueue_scripts', [ $theme_enqueue_and_inject, 'bcgov_block_theme_enqueue_scripts' ] );
        add_action( 'wp_head', [ $theme_enqueue_and_inject, 'bcgov_block_theme_generate_google_ld_json' ] );
        add_action( 'wp_head', [ $theme_enqueue_and_inject, 'bcgov_block_theme_css_settings' ] );
        add_action( 'wp_head', [ $theme_set_default_favicon, 'add_favicon_to_head' ] );
        add_action( 'wp_trash_post', [ $theme_menu_editor, 'remove_unused_menu_manager_post_type' ] );
        add_action( 'save_post', [ $theme_page_custom_class, 'custom_save_page_meta' ] );

        add_filter( 'body_class', [ $theme_page_custom_class, 'add_custom_class_to_body' ] );

        add_filter( 'wp_kses_allowed_html', [ $theme_supports, 'allow_editors_to_use_iframes' ] );
        add_filter( 'get_custom_logo', [ $theme_supports, 'bcgov_block_theme_custom_logo' ] );
        add_filter( 'wp_headers', [ $theme_admin_options, 'bcgov_block_theme_wp_headers' ] );
        add_filter( 'gform_default_styles', [ $filter_gravity_forms_styles, 'add_gravity_forms_default_styles' ] );

        add_filter( 'render_block', [ $filter_button_enhanced, 'add_button_attributes' ], 10, 2 );
        add_filter( 'render_block', [ $filter_image_enhanced, 'add_image_attributes' ], 10, 2 );
        add_filter( 'render_block', [ $filter_mediatext_enhanced, 'add_media_text_attributes' ], 10, 2 );
        add_filter( 'render_block', [ $filter_sitelogo_enhanced, 'add_site_logo_attributes' ], 10, 2 );
        remove_action( 'wp_footer', 'the_block_template_skip_link' );
        remove_theme_support( 'core-block-patterns' );
    }
}
