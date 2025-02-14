import { createElement, qs, qsa, addSafeEventListener } from './utils';

/**
 * Ribbon navigation manipulation.
 * [@return](https://github.com/return) {void}
 */
const bcgovBlockThemeRibbonNavigation = () => {
    /*
     * SafarIE iOS requires window.requestAnimationFrame update.
     */
    window.requestAnimationFrame( () => {
        if ( qsa( '.is-style-ribbon-menu' ).length ) {
            qs( 'body' ).classList.add( 'has-ribbon-menu' );

            /*
             * Check for menu items being out of viewport and class is needed.
             */
            function doBoundsCheck( targetEl ) {
                setTimeout( function () {
                    const container = targetEl;
                    const childContainer = qs( 'ul', container );
                    const subChildContainer = qs(
                        '.wp-block-navigation__submenu-container .wp-block-navigation__submenu-container',
                        container
                    );
                    const languageChildContainer = qs(
                        '.language_switcher_options',
                        container
                    );

                    let bounding = null;

                    if ( null !== childContainer ) {
                        bounding = childContainer.getBoundingClientRect();
                    }

                    const windowWidth =
                        window.innerWidth ||
                        document.documentElement.clientWidth;

                    if ( null !== bounding ) {
                        if ( null !== subChildContainer ) {
                            subChildContainer.style.top = '0.85rem';
                        }

                        if ( bounding.right > windowWidth ) {
                            childContainer.classList.add( 'is-offscreen' );
                            childContainer.style.left = `calc(4px - ${ childContainer.parentNode.parentNode.offsetWidth }px)`;
                            childContainer.style.right = 'auto';
                            childContainer.style.top = '100%';

                            if ( null !== languageChildContainer ) {
                                languageChildContainer.style.top = '100%';
                            }
                            childContainer.style.position = 'absolute';
                        }
                    }
                }, 0 );
            }

            /*
             * Sets up an integrated menu item for the language switcher
             * when NOT using the "Displays as dropdown" (select-based) option
             */
            let subMenuLanguageGroupLiClasses = '';
            let subMenuLanguageOptionLiClasses = '';

            if (
                qs( '.wp-block-polylang-language-switcher' ) &&
                ! qs( '.wp-block-polylang-language-switcher select' )
            ) {
                const ulmainnav = qs( '.wp-block-navigation__container' );

                if ( ulmainnav ) {
                    ulmainnav.classList.add( 'primary-menu-container' );
                    ulmainnav.classList.add( 'ul-main-nav' );
                }

                const submenuLis = qsa( 'li', ulmainnav );
                const subSubmenuLis = qsa(
                    '.wp-block-navigation__submenu-container li',
                    ulmainnav
                );

                submenuLis.forEach( ( li ) => {
                    if (
                        li.classList.contains(
                            'wp-block-navigation-submenu'
                        ) &&
                        '' === subMenuLanguageGroupLiClasses
                    ) {
                        subMenuLanguageGroupLiClasses = li.classList
                            .toString()
                            .replace( /,/g, ' ' )
                            .replace( 'current-menu-item', '' );
                    }
                } );

                subSubmenuLis.forEach( ( li ) => {
                    if (
                        li.classList.contains( 'wp-block-navigation-item' ) &&
                        '' === subMenuLanguageOptionLiClasses
                    ) {
                        subMenuLanguageOptionLiClasses = li.classList
                            .toString()
                            .replace( /,/g, ' ' )
                            .replace( 'current-menu-item', '' );
                    }
                } );

                // Attempt to assign colours when there aren't any other sub-menus to draw from
                if ( '' === subMenuLanguageGroupLiClasses ) {
                    subMenuLanguageGroupLiClasses = `${ subMenuLanguageOptionLiClasses } has-text-color has-background-color has-background has-secondary-brand-background-color wp-block-navigation-item has-child open-on-hover-click wp-block-navigation-submenu`;
                }

                let currentUl = ulmainnav;

                const ulLangSwitch = qs(
                    '.wp-block-polylang-language-switcher'
                );
                const lis1 = qsa( '.lang-item', ulLangSwitch );

                if ( lis1 ) {
                    lis1.forEach( ( li ) => {
                        const a = qs( 'a', li );
                        const href = a.getAttribute( 'href' );
                        const text = a.textContent;
                        let li2 = null;

                        if ( li.classList.contains( 'current-lang' ) ) {
                            li2 = createElement( 'li', {
                                class: `language-group ${ subMenuLanguageGroupLiClasses }`,
                            } );
                        } else {
                            li2 = createElement( 'li', {
                                class: `language-option ${ subMenuLanguageOptionLiClasses }`,
                            } );
                        }

                        if ( li.classList.contains( 'current-lang' ) ) {
                            const button = createElement( 'button', {
                                class: 'wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle language_switcher',
                                'aria-label': text + ' submenu',
                                'aria-expanded': 'false',
                            } );

                            const svg = document.createElementNS(
                                'http://www.w3.org/2000/svg',
                                'svg'
                            );
                            svg.setAttribute(
                                'xmlns',
                                'http://www.w3.org/2000/svg'
                            );
                            svg.setAttribute( 'width', '12' );
                            svg.setAttribute( 'height', '12' );
                            svg.setAttribute( 'viewBox', '0 0 12 12' );
                            svg.setAttribute( 'fill', 'none' );
                            svg.setAttribute( 'aria-hidden', 'true' );
                            svg.setAttribute( 'focusable', 'false' );
                            const path = document.createElementNS(
                                'http://www.w3.org/2000/svg',
                                'path'
                            );
                            path.setAttribute(
                                'd',
                                'M1.50002 4L6.00002 8L10.5 4'
                            );
                            path.setAttribute( 'stroke-width', '1.5' );
                            svg.appendChild( path );

                            button.appendChild( svg );
                            li2.appendChild( button );

                            const ul3 = createElement( 'ul', {
                                class: 'wp-block-navigation__submenu-container',
                            } );
                            currentUl.appendChild( ul3 );
                            currentUl = ul3;
                        }

                        const a2 = createElement( 'a', {
                            class: 'wp-block-navigation-item__content',
                            href,
                            'aria-current': 'page',
                        } );

                        const span = createElement( 'span', {
                            class: 'wp-block-navigation-item__label',
                            text,
                        } );

                        currentUl.appendChild( li2 );
                        a2.appendChild( span );
                        li2.appendChild( a2 );

                        const button = qs(
                            '.wp-block-navigation-submenu__toggle.language_switcher'
                        );

                        // move the link before the button
                        if (
                            button &&
                            li2.classList.contains(
                                'wp-block-navigation-submenu'
                            )
                        ) {
                            li2.insertBefore( button, a2.nextSibling );
                            const ul3 = createElement( 'ul', {
                                class: 'wp-block-navigation__submenu-container language_switcher_options ul3',
                            } );
                            li2.appendChild( ul3 );
                        }

                        const ul3 = qs(
                            '.wp-block-navigation__submenu-container.language_switcher_options'
                        );

                        if ( ! li.classList.contains( 'has-child' ) && ul3 ) {
                            currentUl = ul3;
                        }
                    } );
                }

                // remove the language switcher down arrow from the DOM when using the "Show arrow" navigation option
                if ( ! qs( '.language-group.open-on-hover-click' ) ) {
                    qs( '.language-group button' ).remove();
                }

                // remove the default language switcher from the DOM when using the "Displays as dropdown" option
                if ( ! qs( '.wp-block-polylang-language-switcher select' ) ) {
                    qs( '.wp-block-polylang-language-switcher' ).remove();
                }
            }

            const ulPrimary = qs( '.primary-menu-container' );

            const ulLanguageOptions = qs( '.language_switcher_options' );

            if ( ulPrimary && ulLanguageOptions ) {
                const languageButton = document.querySelector(
                    '.language-group > button.language_switcher'
                );
                const siblingLink = languageButton.previousElementSibling;
                const lis2 = qsa( '.language-option', ulPrimary );

                if ( lis2 ) {
                    lis2.forEach( ( li ) => {
                        subMenuLanguageGroupLiClasses
                            .split( ' ' )
                            .forEach( ( className ) => {
                                if ( '' !== className ) {
                                    li.classList.add( className );
                                }
                            } );
                        ulLanguageOptions.appendChild( li );
                    } );
                }
                // Add an open event listener to the language switcher button.
                languageButton.addEventListener( 'click', function () {
                    ulLanguageOptions.classList.toggle( 'is-open' );
                    const isOpen =
                        ulLanguageOptions.classList.contains( 'is-open' );
                    languageButton.setAttribute( 'aria-expanded', isOpen );
                } );

                // Add a focusin event listener to the document to trigger a closing click.
                document.addEventListener( 'focusin', function () {
                    const isLanguageOptionsOpen =
                        ulLanguageOptions.classList.contains( 'is-open' );
                    // eslint-disable-next-line
                    const focusedElement = document.activeElement;

                    // Check if the focus is neither on languageOptions, nor languageButton, nor the sibling 'a' element
                    if ( ! isLanguageOptionsOpen ) {
                        return;
                    }
                    if (
                        focusedElement === ulLanguageOptions ||
                        ulLanguageOptions.contains( focusedElement )
                    ) {
                        return;
                    }
                    if ( focusedElement === languageButton ) {
                        return;
                    }
                    if (
                        null !== siblingLink &&
                        focusedElement === siblingLink
                    ) {
                        return;
                    }

                    languageButton.click();
                } );

                // Add a keydown event listener to the document to handle the Escape key
                document.addEventListener( 'keydown', function ( event ) {
                    if ( event.key === 'Escape' ) {
                        const isLanguageOptionsOpen =
                            ulLanguageOptions.classList.contains( 'is-open' );

                        if ( ! isLanguageOptionsOpen ) {
                            return;
                        }

                        languageButton.click();
                        languageButton.focus();
                    }
                } );
            }

            if ( qsa( 'li.wp-block-navigation-item' ).length ) {
                const elem = qsa( 'li.wp-block-navigation-item' );

                elem.forEach( ( i ) => {
                    i.addEventListener(
                        'pointerover',
                        ( e ) => {
                            let target = e.target;
                            if ( target.tagName !== 'LI' ) {
                                target = target.closest( 'li' );
                            }
                            doBoundsCheck( target );
                        },
                        { capture: false }
                    );
                } );
            }
        }
    } );
};

if ( 'complete' === document.readyState ) {
    bcgovBlockThemeRibbonNavigation();
} else {
    addSafeEventListener(
        document,
        'DOMContentLoaded',
        bcgovBlockThemeRibbonNavigation()
    );
}
