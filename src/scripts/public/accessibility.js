import { qs, qsa, addSafeEventListener } from './utils';

/**
 * Accessibility DOM manipulation.
 * [@return](https://github.com/return) {void}
 */
const bcgovBlockThemeAccessibility = () => {
    /*
     * SafarIE iOS requires window.requestAnimationFrame update.
     */
    window.requestAnimationFrame( () => {
        const bodyInsertion = qs( 'body' ).firstChild;
        const skipNav = qs( '.skip-nav-menu' );

        if ( null !== skipNav ) {
            bodyInsertion.parentNode.insertBefore( skipNav, bodyInsertion );
            const skipNavItems = qsa( '.skip-nav', skipNav );
            skipNavItems.forEach( ( item ) => {
                qs( 'a', item ).setAttribute( 'tabindex', 0 );
            } );
        }

        // Check if the post-content id exists within the document.
        const postContentExists = qs( '#post-content' );

        // If it doesn't exist, add the id 'post-content' to the mainContent element
        if ( ! postContentExists ) {
            // find the most likely place for the content block to begin, starting with the wordpress default of <main>, and falling back.
            let mainContent = null;
            const bcgovBodyContentMain = qs( 'main' );
            const firstH1 = qs( 'h1' );

            // Set main content to the first of either main, section, or the element with a .bcgov-body-content class, or the first H1 element.
            if ( bcgovBodyContentMain ) {
                mainContent = bcgovBodyContentMain;
            } else if ( firstH1 ) {
                mainContent = firstH1;
            }

            // if the content block was found, set its ID to 'post-content' as a target for the 'skip to main content' link.
            if ( mainContent ) {
                mainContent.id = 'post-content';
            }
        }

        const mainMenuHamburger = qs( 'header nav > button' );
        const mainMenu = qs( 'header nav button + .hidden-by-default' );

        if ( null !== mainMenuHamburger ) {
            mainMenuHamburger.setAttribute( 'id', 'main-menu' );

            if ( null !== mainMenu ) {
                const mainMenuLinks = qsa( 'a', mainMenu );
                const mainMenuButtons = qsa( 'button', mainMenu );
                if ( mainMenu.getAttribute( 'aria-hidden' ) !== 'true' ) {
                    mainMenuLinks.forEach( ( link ) => {
                        link.setAttribute( 'tabindex', '-1' );
                    } );
                    mainMenuButtons.forEach( ( button ) => {
                        button.setAttribute( 'tabindex', '-1' );
                    } );
                }

                const config = { attributes: true };

                const callback = ( mutationList ) => {
                    for ( const mutation of mutationList ) {
                        if ( mutation.type === 'attributes' ) {
                            if (
                                mainMenu.getAttribute( 'aria-hidden' ) ===
                                'false'
                            ) {
                                mainMenuLinks.forEach( ( link ) => {
                                    link.setAttribute( 'tabindex', '0' );
                                } );
                                mainMenuButtons.forEach( ( button ) => {
                                    if (
                                        button.getAttribute( 'aria-label' ) ===
                                        'Close menu'
                                    ) {
                                        button.setAttribute( 'tabindex', '0' );
                                    }
                                } );
                            }
                            if (
                                mainMenu.getAttribute( 'aria-hidden' ) ===
                                'true'
                            ) {
                                mainMenuLinks.forEach( ( link ) => {
                                    link.setAttribute( 'tabindex', '-1' );
                                } );
                                mainMenuButtons.forEach( ( button ) => {
                                    button.setAttribute( 'tabindex', '-1' );
                                } );
                            }
                        }
                    }
                };

                const observer = new window.MutationObserver( callback );

                observer.observe( mainMenu, config );
            }
        }
    } );
};

if ( 'complete' === document.readyState ) {
    bcgovBlockThemeAccessibility();
} else {
    addSafeEventListener(
        document,
        'DOMContentLoaded',
        bcgovBlockThemeAccessibility()
    );
}
