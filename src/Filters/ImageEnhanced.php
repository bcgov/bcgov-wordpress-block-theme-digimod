<?php
/**
 * Handles theme filters for images.
 *
 * @since 1.1.1
 *
 * @package Bcgov/Theme/Block
 */

namespace Bcgov\Theme\Block\Filters;

/**
 * This class enhances the Image block by adding title and print mode attributes.
 * It provides the add_image_attributes method which accepts the block's content and attributes
 * as input parameters, and returns a modified block content with added attributes.
 * If the block is not an Image block, the original block content is returned.
 *
 * @since 1.1.1
 */
class ImageEnhanced {
	/**
	 * Improve image block by adding additional attributes: title and print mode.
	 *
	 * @param  string $block_content Block content to be rendered.
	 * @param  array  $block         Block attributes.
	 * @return string
	 */
	public function add_image_attributes( $block_content = '', $block = [] ) {

		if ( isset( $block['blockName'] ) && 'core/image' === $block['blockName'] ) {
			$defaults = [
				'title'      => 'none',
				'printMode'  => false,
				'printWidth' => 25,
			];

			$args = wp_parse_args( $block['attrs'], $defaults );

			if ( 'none' !== $args['title'] ) {
				$title = 'title="' . esc_attr( $args['title'] ) . '"';
			} else {
				$title = '';
			}
			if ( false !== $args['printMode'] ) {
				$print_mode = 'data-print="true"';
			} else {
				$print_mode = '';
			}

			if ( false !== $args['printWidth'] ) {
				$print_width = 'data-print-width="' . $args['printWidth'] . '"';
			} else {
				$print_width = '';
			}

			$html = str_replace(
				[
					'<img ',
				],
				[
					'<img ' . $title . ' ' . $print_mode . ' ' . $print_width . ' ',
				],
				$block_content
			);

			return $html;
		}

		return $block_content;
	}
}
