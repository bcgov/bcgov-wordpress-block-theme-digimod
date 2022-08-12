<?php

namespace Bcgov\Theme\Block;

/**
 * BCGov Blocks Theme: Block Patterns.
 *
 * @since 1.0.0
 *
 * @package Bcgov/Theme/Block
 */

/**
 * BCGov Blocks Theme: Registers block patterns and categories.
 *
 * @since 1.0.0
 *
 * @package Bcgov/Theme/Block
 */
function bcgov_blocks_theme_register_block_patterns() {

	/**
	 *  BCGov Blocks Theme general use patterns.
	 *
	 * Initialises pattern categories specific to the theme.
	 *
	 * @since 1.0.0
	 *
	 * @package Bcgov/Theme/Block
	 */

	$block_pattern_categories = [
		'bcgov-blocks-theme-general'       => [ 'label' => __( 'BCGov: General', 'bcgov_blocks_theme' ) ],
		'bcgov-blocks-theme-header-footer' => [ 'label' => __( 'BCGov: Header/Footer', 'bcgov_blocks_theme' ) ],
		'bcgov-blocks-theme-page-layouts'  => [ 'label' => __( 'BCGov: Page Layouts', 'bcgov_blocks_theme' ) ],
		'bcgov-blocks-theme-query'         => [ 'label' => __( 'BCGov: Post Query', 'bcgov_blocks_theme' ) ],
		// ClenBC site specific patterns.
		'cleanbc-patterns-general'         => [ 'label' => __( 'CleanBC: General', 'bcgov_blocks_theme' ) ],
		'cleanbc-patterns-header-footer'   => [ 'label' => __( 'CleanBC: Header/Footer', 'bcgov_blocks_theme' ) ],
		'cleanbc-patterns-page-layouts'    => [ 'label' => __( 'CleanBC: Page Layouts', 'bcgov_blocks_theme' ) ],
		'cleanbc-patterns-query'           => [ 'label' => __( 'CleanBC: Post Query', 'bcgov_blocks_theme' ) ],
	];

	/**
	 * BCGov Blocks Theme: Filters the theme block pattern categories.
	 *
	 * Site specific patterns: use the project identifier as part of the naming.
	 * This is reflected in the /inc/core/patterns/[project]/[pattern-name] directory.
	 * Eg: for CleanBC patterns – 'cleanbc/header'.
	 *
	 * @since 1.0.0
	 *
	 * @package Bcgov/Theme/Block
	 *
	 * @param array[] $block_pattern_categories {
	 * An associative array of block pattern categories, keyed by category name.
	 *
	 *    @type array[] $properties {
	 *        Array of block category properties.
	 *
	 *        @type string $label A human-readable label for the pattern category.
	 *    }
	 * }
	 */
	$block_pattern_categories = apply_filters( 'bcgov_blocks_theme_block_pattern_categories', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {
		register_block_pattern_category( $name, $properties );
	}

	$block_patterns = [

		/*
		* BCGov default patterns.
		*/
		// Header patterns.
		'header-default',

		// Footer patterns.
		'footer-default',

		// General patterns: not site specific.
		'bcgov-alternating-cards',
		'bcgov-card-image-overlay',
		'bcgov-card-image-under-2-up',
		'bcgov-card-with-two-images',
		'bcgov-cards-portrait-3-up',
		'bcgov-detail-card-with-icons',
		'bcgov-general-banner',
		'bcgov-hero-banner',
		'bcgov-long-card',
		'bcgov-quote',
		'bcgov-small-quote-image',
		'general-breadcrumb-nav',
		'general-hero',
		'query-grid',

		// Full page patterns.
		'bcgov-page-layout-example',

		/*
		* CleanBC site specific patterns.
		*/
		// CleanBC header/footer patterns.
		'cleanbc/cleanbc-home-cover-banner',
		'cleanbc/cleanbc-landing-cover-banner',
		'cleanbc/cleanbc-scroll-link-banner',

		// CleanBC full page patterns.
		'cleanbc/goelectric-landing-page',
	];

	/**
	 * BCGov Blocks Theme: Filters the theme block patterns.
	 *
	 * @since 1.0.0
	 *
	 * @package Bcgov/Theme/Block
	 *
	 * @param $block_patterns array List of block patterns by name.
	 */
	$block_patterns = apply_filters( 'bcgov_blocks_theme_block_patterns', $block_patterns );

	foreach ( $block_patterns as $block_pattern ) {
		register_block_pattern(
			'bcgov-wordpress-block-theme/' . $block_pattern,
			require plugin_dir_path( __FILE__ ) . 'patterns/' . $block_pattern . '.php'
		);
	}
}

add_action( 'init', __NAMESPACE__ . '\bcgov_blocks_theme_register_block_patterns', 9 );
