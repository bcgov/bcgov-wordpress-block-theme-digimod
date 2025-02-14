# Changelog

## 1.13.1

- Fix dependabot security alerts ([DESCW-2479]( https://citz-gdx.atlassian.net/browse/DESCW-2479))
- this replaces `bcgov/wordpress-scripts` with `bcgov/wordpress-utils` as a dev dependency.
- this also updates the NPM package `@wordpress/scripts` to `^30.8.1`
- all dependencies to @wordpress/scripts were updated as well to eliminate npm audit alerts.
- note: @wordpress/scripts is not production code, so any security alerts do not pertain to production code for this theme.


## 1.13.0
- Added EIBC-specific theme style (styles/alphav3-1.eibc.json) ([DESCW-2535]( https://citz-gdx.atlassian.net/browse/DESCW-2535))
- Fixed minor typography and spacing incompatibilities between EIBC site and design tokens in above styles ([DESCW-2528]( https://citz-gdx.atlassian.net/browse/DESCW-2528))

## 1.12.4
- ([DESCW-2566]( https://citz-gdx.atlassian.net/browse/DESCW-2566))
- fix images max width

## 1.12.3
- ([DESCW-2561]( https://citz-gdx.atlassian.net/browse/DESCW-2561))
- fix layout bug on mega menu.

## 1.12.2
- ([DESCW-2423](https://citz-gdx.atlassian.net/browse/DESCW-2423)) fix 'is not valid snake_case' error with latest (v2.1.3) wordpress-scripts.

## 1.12.1
- ([DESCW-2486](https://citz-gdx.atlassian.net/browse/DESCW-2486)) added accessible functionality for language switcher which allows for use of keyboard navigation.

## 1.12.0 July 22, 2024
- ([DESCW-999](https://citz-gdx.atlassian.net/browse/DESCW-999))
- bugfix: Editors can't add iframes due to lack of permission.

## 1.11.00 July 4, 2024
- ([DESCW-2480](https://citz-gdx.atlassian.net/browse/DESCW-2480)) adding excerpt for pages.

## 1.10.0 July 4, 2024
- ([DESCW-2452](https://citz-gdx.atlassian.net/browse/DESCW-2452))
  - updated alphav3-1.json
  - created new footer Alpha 3.1
  - created new header Alpha 3.1
  - updated style to account for bootstrap overrides for alpha 3.1


## 1.9.0 Jun 18, 2024
- ([DESCW-2461](https://citz-gdx.atlassian.net/browse/DESCW-2461)) - revert design tokens to v2 as theme.json are persistent once applied, have to be re-applied to re-initiate.
- ([DESCW-2451](https://citz-gdx.atlassian.net/browse/DESCW-2451)) - adding a new alpha 3.1 styles, to fix issues with current alpha styles, and not worry about backwards compatibility.
- ([DESCW-2141](https://citz-gdx.atlassian.net/browse/DESCW-2141)) - fix patterns
  - bcgov heading update


## 1.8.4 June 11, 2024
- ([DESCW-2456](https://citz-gdx.atlassian.net/browse/DESCW-2456)) - remove custom pattern groups and keywords from sitemap.

## 1.8.3 June 04, 2024

-   ([DESCW-2451](https://citz-gdx.atlassian.net/browse/DESCW-2451)) - adding alphagov heading variation, to both alphagov and default theme.json
-   ([DESCW-2344](https://citz-gdx.atlassian.net/browse/DESCW-2344))
    -   Update design tokens to use v3.0.0.
    -   Update header colors to use --bcds-typography-color-primary.
-   Update alpha footer template to match gov.bc.ca text ([DESCW-2393](https://citz-gdx.atlassian.net/browse/DESCW-2393))

## 1.8.1 May 22, 2024

-   @wordpress/scripts is the package that has the express.js dependency here. it's used for tests and other automations.
-   used `npm ls <packagename>` to trace deps for the upgrade of express.js (<= 4.19>)
-   fix dependabot alert for webpack-dev-middleware using `npm audit fix`. - https://github.com/bcgov/bcgov-wordpress-block-theme/security/dependabot/29
-   fix dependabot alert for express.js <= 4.19 - https://github.com/advisories/GHSA-rv95-896h-c2vc
-   fix follow-redirects' Proxy-Authorization header kept across hosts - https://github.com/advisories/GHSA-cxjh-pqwp-8mfp
-   fix (documentation) Vite's `server.fs.deny` did not deny requests for patterns with directories. - https://github.com/advisories/GHSA-8jhw-289h-jh2g
    ([DESCW-2338](https://citz-gdx.atlassian.net/browse/DESCW-2338))

## 1.8.0 May 21, 2024

-   set post type attributes to allow privileged users to switch embc pattern templates.
-   hide embc patterns such as 'volcano' from being viewed by regular users (set private)
    ([DESCW-2166](https://citz-gdx.atlassian.net/browse/DESCW-2166))

## 1.7.5 May 8, 2024

-   added script to insert post-content id in the main content element, such as the first H1 or the first <main> tag.
    ([DESCW-2169](https://citz-gdx.atlassian.net/browse/DESCW-2169))

## 1.7.4 May 2, 2024

-   removed default skip to content link ([DESCW-2168](https://citz-gdx.atlassian.net/browse/DESCW-2168))

## 1.7.3 Apr 18, 2024

-   Fixed performance issue caused by repeated duplicate calls of get_option() for the `areoi-customize-options-enable-cssgrid` option by the All Bootstrap Blocks plugin.

## 1.7.2 Mar 27, 2024

-   Added custom post type tutorial to documentation. ([DESCW-1991](https://citz-gdx.atlassian.net/browse/DESCW-1991))
-   Fix issue with PatternsSetup leaving a global $post when it was previously null. Caused issue with core media upload. ([DESCW-2154](https://citz-gdx.atlassian.net/browse/DESCW-2154))

## 1.7.1 Mar 7, 2024

-   Added custom post type tutorial to documentation. ([DESCW-2049](https://citz-gdx.atlassian.net/browse/DESCW-2049)))
-   Adjusted styling and logic of main nav and search bar to account for presence of wp admin bar. ([DESCW-2028](https://citz-gdx.atlassian.net/browse/DESCW-2028)))

## 1.7.0 Feb 27, 2024

-   Modified default post sizing to handle footer in min-height calculation to remove excess empty space on posts with minimal body content. ([DESCW-1879](https://citz-gdx.atlassian.net/browse/DESCW-1879))
-   Updated documentation with Tutorials section and a tutorial on using Alpha v3 styles. ([DESCW-1990](https://citz-gdx.atlassian.net/browse/DESCW-1990))
-   Added several alpha v3 design system patterns. ([DESCW-2029](https://citz-gdx.atlassian.net/browse/DESCW-2029))

## 1.6.0 Feb 5, 2024

-   Added default styling for posts. ([DESCW-1942](https://citz-gdx.atlassian.net/browse/DESCW-1942))

## 1.5.0 Feb 1, 2024

-   Added Alpha v3 header and footer including alpha.json theme styles using BC Government design system tokens. Includes various touch points such as: alpha.json styles using Alpha v3 design system tokens; theme.json addition of header/footer and search bar templates; new default logo asset for alpha style header; various and extensive styles to drive new templating options; search.js to drive toggle interaction; hooks to augment: default site logo for Alpha design, body class to enable Alpha specific styling, additional injected styles for mobile breakpoint menu styling. ([DESCW-1879](https://citz-gdx.atlassian.net/browse/DESCW-1879))
-   Added default favicon to theme and included instructions for updating the favicon in the documentation. ([DESCW-1929](https://citz-gdx.atlassian.net/browse/DESCW-1929))
-   Added instructions for using Alpha v3 header and footer to documentation ([DESCW-1973](https://citz-gdx.atlassian.net/browse/DESCW-1973))

## 1.4.1 Jan 26, 2024

-   Updated Vuepress to version 2.0.0-rc.0 in Documentation folder. ([DESCW-1925](https://citz-gdx.atlassian.net/browse/DESCW-1925))

## 1.4.0 Jan 23, 2024

-   Added default styling for Gravity Forms that aligns with BC Government design system ([DESCW-1915](https://citz-gdx.atlassian.net/browse/DESCW-1915))

## 1.3.1 Jan 17, 2024

-   Update ribbon navigation and header styling to prevent hamburger and mobile breakpoint display issues. Enabled a custom mobile menu breakpoint width to fix ribbon navigation wrapping prior to the hamburger displaying. Added documentation for the core features found on the "BCGov Block Theme Settings" admin page, including the new menu breakpoint option. ([DESCW-1917](https://citz-gdx.atlassian.net/browse/DESCW-1917))

## 1.3.0 Jan 11, 2024

-   Add setting for adding site specific documentation which will show on the 'Using the BCGov Block Theme' page if set. ([DESCW-1802](https://citz-gdx.atlassian.net/browse/DESCW-1802))

## 1.2.19 Jan 05, 2024

-   Update front end scripts to utilise unique arrow function naming and window.requestAnimationFrame execution – removing previous setTimeout 0 – to modify the DOM and align with the browser's rendering cycle. Brings Block Theme scripts inline with BuyBC and ClenBC Block Theme plugin methods. ([ENG-109](https://citz-gdx.atlassian.net/browse/ENG-109))
-   Includes a new addSafeEventListener utility function update and related tests used to fix external links icon issues and fixes outstanding body and navigation padding issues. ([CLEANBC-154](https://apps.nrs.gov.bc.ca/int/jira/browse/CLEANBC-154))
-   Add menu item for documentation visible to users with 'edit_posts' capability ([DESCW-1859](https://citz-gdx.atlassian.net/browse/DESCW-1859))

## 1.2.18 Dec 06, 2023

-   Fix documentation page redirect ([DESCW-1783](https://citz-gdx.atlassian.net/browse/DESCW-1783))

## 1.2.17 Nov 30, 2023

-   Fix dependencies for vuepress builds
-   added template and admin documentation ([DESCW-1654](https://citz-gdx.atlassian.net/browse/DESCW-1654))
-   Added documentation to vuepress for theme options ([DESCW-1652](https://citz-gdx.atlassian.net/browse/DESCW-1652))
-   axios upgrade ([DESCW-1733](https://citz-gdx.atlassian.net/browse/DESCW-1733))
-   Updated node dev-dependencies and dependencies to latest versions ([DESCW-1560](https://citz-gdx.atlassian.net/browse/DESCW-1560))

## 1.2.16 Oct 31, 2023

-   Upgraded @wordpress/scripts to fix vulnerability with @babel/traverse ([DESCW-1629](https://citz-gdx.atlassian.net/browse/DESCW-1629))

## 1.2.15 Oct 27, 2023

-   Upgraded WordPress coding standards in wordpress-scripts to 2.0 ([DESCW-1588](https://citz-gdx.atlassian.net/browse/DESCW-1588))
    -   Includes a few minor refactors to bring code up to the new standards.

## 1.2.14 Sept 29, 2023

-   Removed the required attribute from the button label input in the Custom Notice Banner Settings ([DESCW-1544](https://citz-gdx.atlassian.net/browse/DESCW-1544))

## 1.2.13 Sept 22, 2023

-   Collapse block updated to add BC Gov styling option. Also added ability to toggle the fiirst item open as an option. Deprecated version added to provide better experience for existing content. Includes Menu Manager isset check. ([DESCW-1489](https://citz-gdx.atlassian.net/browse/DESCW-1489))

## 1.2.12 Sept 14, 2023

-   Bug fix for Menu Manager feature Editor role notice. (Ticket unavailable)

## 1.2.11 Sept 13, 2023

-   Updated admin menu check for Menu Manager feature. (Ticket unavailable)
-   Added a Navigation Menu Management feature so that Editors without access to the Full Site Editor are able to easily manage existing or new menus. Maintains a single post for this feature by cleaning up and removing draft or trashed posts. (Ticket unavailable)
-   Updated external link processing to use post-content class rather than ID to allow footer link handling. Removed overrides for fullwidth margins to work with updated WordPress core. ([DESCW-1478](https://citz-gdx.atlassian.net/browse/DESCW-1478))

## 1.2.10 Aug 18, 2023

-   First stage removal of CleanBC dependencies from Block Theme related to Clean BC site header and navigation changes. ([DESCW-1390](https://citz-gdx.atlassian.net/browse/DESCW-1390))
-   CleanBC content moved from the BCGov Block Theme to the BCGov Frontend Supplemental: CleanBC plugin ([bcgov-plugin-cleanbc](https://apps.itsm.gov.bc.ca/bitbucket/projects/WPP/repos/bcgov-plugin-cleanbc/browse))
-   Added a safe event listener utility function (and related tests) to avoid collision with Vue lifecycle. ([DESCW-1390](https://citz-gdx.atlassian.net/browse/DESCW-1390))
-   Window event functions updated to reference safe event listener and moved out of ready state. ([DESCW-1390](https://citz-gdx.atlassian.net/browse/DESCW-1390))
-   Ribbon navigation padding update and CSP update to allow for WP6.3 blob. ([DESCW-1390](https://citz-gdx.atlassian.net/browse/DESCW-1390))
-   Minor positioning styles for ribbon navigation right-side submenu wrap when contact is made with window edge ([DESCW-1390](https://citz-gdx.atlassian.net/browse/DESCW-1390))
-   Ribbon navigation right-side submenu wrap general positioning fix. Modified load priority of external link icon check to accommodate query loop. ([DESCW-1390](https://citz-gdx.atlassian.net/browse/DESCW-1390))

## 1.2.9 Aug 5, 2023

-   Added Google Site Name structured content injection and custom site name settings ([DESCW-1412](https://citz-gdx.atlassian.net/browse/DESCW-1412))

## 1.2.8 July 28, 2023

-   Upgraded BC Sans font to 2.0 ([DESCW-1234](https://citz-gdx.atlassian.net/browse/DESCW-1234))

## 1.2.7 July 21, 2023

-   Updated dependency vulnerabilities flagged by Dependabot: tough-cookie to 4.1.3 and word-wrap to 1.2.6 ([DESCW-1314](https://citz-gdx.atlassian.net/browse/DESCW-1314))

## 1.2.6 July 20, 2023

-   Fixed issue related to element references in the CleanBC actions toggle. Related to development of a CleanBC frontend plugin. ([DESCW-1372](https://citz-gdx.atlassian.net/browse/DESCW-1372))

## 1.2.5 July 5, 2023

-   External link icons addition and admin setting option ([DESCW-1298](https://citz-gdx.atlassian.net/browse/DESCW-1298))

## 1.2.4 June 28, 2023

-   Fixed horizontal scrolling due to uncorrected 100vw width. Added horizontal overflow supression for alignful conditions that cause side scrolling on some small desktop resolutions. ([DESCW-1226](https://citz-gdx.atlassian.net/browse/DESCW-1226))
-   Fixed right aligned ribbon navigation sub menu placement offset. Added a check for language switcher synthesised menu in ribbon state. ([DESCW-1225](https://citz-gdx.atlassian.net/browse/DESCW-1225))
-   Added default font size styling to paragraph, list-item and other text-related blocks through theme.json CSS.([DESCW-1231](https://citz-gdx.atlassian.net/browse/DESCW-1231))

## 1.2.3 June 7, 2023

-   Fixed bug when multiple Collapse Containers exist on the same page ([DESCW-1131](https://citz-gdx.atlassian.net/browse/DESCW-1131))

## 1.2.2 May 23, 2023

-   added testing for SiteLogoEnhanced filter ([DESCW-1063](https://citz-gdx.atlassian.net/browse/DESCW-1063))
-   Fixed issue with SiteLogoEnhanced added data-print attribute in closing div tags.
-   added testing for Pattern Settings action ([DESCW-1059](https://citz-gdx.atlassian.net/browse/DESCW-1059))

## 1.2.1 April 27, 2023

-   added testing for ButtonEnhanced filter ([DESCW-1062](https://citz-gdx.atlassian.net/browse/DESCW-1062))
-   added testing for MediaTextEnhanced filter ([DESCW-1061](https://citz-gdx.atlassian.net/browse/DESCW-1061))

## 1.2.0 April 17, 2023

-   prefix child pattern groups with parent names in patterns selector ([DESCW-1004](https://citz-gdx.atlassian.net/browse/DESCW-1004))
-   removed 'npm run production' build from composer production script ( per PO instructions)

## 1.1.6 March 29, 2023

-   Fixed tab indentation lint errors in JS code ([DESCW-978](https://citz-gdx.atlassian.net/browse/DESCW-978))
-   Updated JavaScript linting rules and GitHub workflows ([DESCW-978](https://citz-gdx.atlassian.net/browse/DESCW-978))

## 1.1.5 March 28, 2023

-   Added GitHub workflow files ([DESCW-978](https://citz-gdx.atlassian.net/browse/DESCW-978))
-   Fixed header and post-content/main layering through isolation and z-index. Also fixed small screen issue for sticky nav scrolling in admin in order to access save button in theme settings. ([DESCW-974]https://citz-gdx.atlassian.net/browse/DESCW-974))
-   Added @bcgov/webpack-wordpress to package.json dev dependencies for future use of its JS linter rules. ([DESCW-977](https://citz-gdx.atlassian.net/browse/DESCW-977))
-   Fluid typography updates to remove style overrides. Added Small and Large style options along side default sizing. Heading are sized based on a Minor Third (1.200) scale. ([DESCW-1001]https://citz-gdx.atlassian.net/browse/DESCW-1001))

## 1.1.4 March 20, 2023

-   Null check bug fix for menu navigation scripts. ([DESCW-1000]https://citz-gdx.atlassian.net/browse/DESCW-1000))

## 1.1.3 March 9, 2023

-   Updated missing plugin (dependencies) to warning status. Better descriptions for notices. Permaban dismissable notices – not finessed, futured updates could allow for showing again after an intevral or on demand (TBD). ([DESCW-952]https://citz-gdx.atlassian.net/browse/DESCW-952))
-   Update Block Theme documentation (including graphics where appropriate) to include: Using custom block features such as Accessibility labels, print image options, etc. Fluid typography and responsive margins and padding. Creating custom patterns. Using the custom notification banner. Multilanguage supported placement and settings for adding Polylang language switcher (to the menu or header), and translation of FSE template blocks and decoupling Template Parts. Adding a Custom Security Policy exception. Also added eslint rules to ignore various warnings during build. ([DESCW-975]https://citz-gdx.atlassian.net/browse/DESCW-975))

## 1.1.2: February 28, 2023

-   Removed block category allow list, fixing bug preventing custom categories in editor ([DESCW-924]https://citz-gdx.atlassian.net/browse/DESCW-924))
-   Updated package.json:
    -   Node version required to be lts/hydrogen (version 18 - 19)
    -   Updated @wordpress/scripts version to latest (25.4.0)
    -   Note: `npm i` should be run to get the above updates
-   Added the ability to export Block Theme templates, teplate parts and global styles via the WordPress exporter tool. ([DESCW-912]https://citz-gdx.atlassian.net/browse/DESCW-912))
-   Added print bug fix where updating styles for print were bleeding back into the DOM overriding WordPress image settings. Added the ability to set a page specific body class. ([DESCW-949]https://citz-gdx.atlassian.net/browse/DESCW-949))
-   Added Safari takeove menu layer order fix for Safari. Fixed naming collision inside Admin Notification banner with WordPress generic .notice class. Moved to use vs. require for Loader class in Setup.php. ([DESCW-949]https://citz-gdx.atlassian.net/browse/DESCW-949))
-   Enabled absolute positioning as a filter to core/image. Removed Gravity Forms block exclusion. ([DESCW-949]https://citz-gdx.atlassian.net/browse/DESCW-949))
-   Reworked scripts in both Admin and Public directories to use { qs, qsa } from public/utils. Cleaned up geenral registerBlockStyle implementation and lodash imports. Moved Loader into functions.php ahead of Setup initiaition. Setup class cleaned up to remove full namespace from class initiations. Reorganised styles. Added fluid typography to WordPress font sizing. Fixed custom notification banner setting registration bug from previous commmit and refactored some naming to remove pluralisation throughout. ([DESCW-949]https://citz-gdx.atlassian.net/browse/DESCW-949))
-   Developed a feature flag framework under a "BCGov Block Theme Settings" page to enable faster addition of settings that do not require advanced layout. Applied this to Custom Patterns and the current site's Custom Notice Banner. Feature can be accessed by Admininstor users. ([DESCW-935]https://citz-gdx.atlassian.net/browse/DESCW-935))

## 1.1.1: February 12, 2023

-   Restructured `src` and `inc/core` directories – to put more focus on the src directory. Moved away from functional structure to a class/loader system. Added an autoloader to the Setup and reworked the hooks system to utilise this approach through `src/Actions` and `src/Filters` class directories. Admin pages for options, notifications banner and documentation pages moved into `src/Templates`. ([DESCW-911]https://citz-gdx.atlassian.net/browse/DESCW-911))

## 1.1.0: February 8, 2023

-   Adds a custom post type for "Custom Patterns" and register any categorised Custom Pattern post type as patterns within the pattern picker. ([DESCW-911]https://citz-gdx.atlassian.net/browse/DESCW-911))
-   Adds the ability to include aliases or keywords that help users discover a pattern while using the pattern search. Includes admin UI updates + twitter block inclusion. ([DESCW-911]https://citz-gdx.atlassian.net/browse/DESCW-911))
-   Site wide notification banner admin options and injection. Colours added to support banner states. Added network enabled banner integration. ([DESCW-831]https://citz-gdx.atlassian.net/browse/DESCW-831))
-   JS unit test coverage for functional data manipulations and logical operations added. ([DESCW-901]https://citz-gdx.atlassian.net/browse/DESCW-911))

## 1.0.7: January 27, 2023

-   Polylang integration into ribbon style menu. Includes utility function additions for querySelect [qs()], querySelectAll [qsa()] and createElement, with associated public facing side refactoring. Includes placeholder masking the language switcher in the Full Site Editor ribbon navigation. ([DESCW-841]https://citz-gdx.atlassian.net/browse/DESCW-841))
-   Modified langauge switcher to pull in main navigation styles. Removes arrow from langauge switcher when navigation option "show arrow" is not selected. ([DESCW-841]https://citz-gdx.atlassian.net/browse/DESCW-841))
-   Bug fix for polylang menu integration when no other sub menu items are available to lend classes to synthesised language menu. ([DESCW-841]https://citz-gdx.atlassian.net/browse/DESCW-841))

## 1.0.6: January 23, 2023

-   Editing padding, margins and gap now use the WordPress 6.1 spacingScale with responsive sizes. Spacing for scroll padding has been added to dynamically adjust based on header size. ([DESCW-840]https://citz-gdx.atlassian.net/browse/DESCW-840))
-   Added admin editor fix for preview tool (desktop/tablet/mobile) sizing variations ([DESCW-840]https://citz-gdx.atlassian.net/browse/DESCW-840))
-   Added customisable content security policy and in-page navigation to the options page. ([DESCW-840]https://citz-gdx.atlassian.net/browse/DESCW-830))

## 1.0.5: January 16, 2023

-   Print mode: additional core block styling, classes to suppress printing, and print specific styling (eg: tables) ([DESCW-828]https://citz-gdx.atlassian.net/browse/DESCW-828))
-   Enhanced image printing options for image and media-text blocks. Allows specifying the size of the printed image width in print mode. Includes update to site instructions. ([DESCW-828]https://citz-gdx.atlassian.net/browse/DESCW-828))

## 1.0.4: January 9, 2023

–  Print mode: header + image printing. Adds core/site-logo print logo against black backing. Adds core/media-text and core/image block setting for print
–  Print mode: Additional print mode styling including script to enable printing of parent containers for images ([DESCW-723]https://citz-gdx.atlassian.net/browse/DESCW-723))
– Header footer templates + parts. Updated all templates and related template parts needed to create a global header and footer ([DESCW-721]https://citz-gdx.atlassian.net/browse/DESCW-721))
– Adjuststed global header container template part. ([DESCW-721]https://citz-gdx.atlassian.net/browse/DESCW-721))

-   Patterns update to add and integrate Step through sequence pattern used in Go Electric BC for general Block Theme use.
-   Collapse block (accordion) styling picked up for non-pattern usage. Added two patterns using the collapse blocks: table and media-text variations ([DESCW-750]https://citz-gdx.atlassian.net/browse/DESCW-750))
-   Reviewed and modified default blocks such as heading, paragraph, list, blockquote, table, image, gallery, and more to ensure the styling works as expected for responsive and accessible design. Addresses issues within the WordPress admin as well as visitor facing. Also addresses consistency of display for the header colour and navigation. ([DESCW-749]https://citz-gdx.atlassian.net/browse/DESCW-749))
-   Header + navigation enhancements. Added colour options to takeover underlines. Added custom body class feature and enabled access to Additional CSS customiser tool from settings page. Added admin utility filtering to inject custom body class into customiser tool. Enhanced image block for variable ratio styling. ([DESCW-737]https://citz-gdx.atlassian.net/browse/DESCW-737))
-   Navigation improvements – fix overzealous custom CSS selector encoding. Refactored styles for navigation options. Updated polylang navigation selector for more consistent display. Added navigation block styles to allow for centring vs column alignment (flex vs grid layouts) when using the overlay (full screen takeover) menu. ([DESCW-751]https://citz-gdx.atlassian.net/browse/DESCW-751))

## 1.0.3: November 23, 2022

– Updates related to implementing styles and patterns to better generalise site specific patterns and blocks. Admin documentation page update. ([DESCW-599]https://citz-gdx.atlassian.net/browse/DESCW-599))

-   Minor update to site options to allow access to cross-site styles ([DESCW-599]https://citz-gdx.atlassian.net/browse/DESCW-599))
-   Added theme option export file to repo ([DESCW-599]https://citz-gdx.atlassian.net/browse/DESCW-599))
-   Added CleanBC Home landing banner null check ([DESCW-599]https://citz-gdx.atlassian.net/browse/DESCW-599))
-   Removed logo if not set to that site in options ([DESCW-599]https://citz-gdx.atlassian.net/browse/DESCW-599))
-   First pass at print mode ([DESCW-669]https://citz-gdx.atlassian.net/browse/DESCW-669))
-   Built custom theme options page and refactored setup with default values to make use of new options (uses WordPress Settings API) – minor display fixes for menu and card styles ([DESCW-722]https://citz-gdx.atlassian.net/browse/DESCW-722))
-   Polylang styling for select element only. Includes documentation update with Language Switcher block information. Other minor styling/interaction enhancements for collapse containers. Minor updates based on last PR feedback. ([DESCW-736]https://citz-gdx.atlassian.net/browse/DESCW-736))

## 1.0.2: September 19, 2022

– Post-launch design updates. Various landing banner changes + rounding elements + patterns [DESCW-598]https://citz-gdx.atlassian.net/browse/DESCW-598)

## 1.0.1: September 19, 2022

– Navigation update: sorting out tagging for production [DESCW-601]https://citz-gdx.atlassian.net/browse/DESCW-601)

## 1.0.0: September 19, 2022

– Initial Theme Structure ([DESCW-186](https://citz-gdx.atlassian.net/browse/DESCW-186))

-   node scripts ([DESCW-237](https://citz-gdx.atlassian.net/browse/DESCW-237))
-   Bcgov design system header look ([DESCW-261](https://citz-gdx.atlassian.net/browse/DESCW-261))
-   Breadcrumbs for MVP ([DESCW-468](https://citz-gdx.atlassian.net/browse/DESCW-468))
    – Determine SCSS/style structure for theme elements ([DESCW-465](https://citz-gdx.atlassian.net/browse/DESCW-465))
-   Essential template files ([DESCW-467](https://citz-gdx.atlassian.net/browse/DESCW-467))
-   Initial set up of Block Pattern integration ([DESCW-463]https://citz-gdx.atlassian.net/browse/DESCW-463)
-   Theme-based custom block refinement – core/buttons variations and filter structure – Modified functions.php to work with added Setup and action/filter Loader – Cleaned up Package/Namespacing – added Basic Cards/Card Containers ([DESCW-497]https://citz-gdx.atlassian.net/browse/DESCW-497)
    – Added first round of MVP patterns + removed Loader ([DESCW-492]https://citz-gdx.atlassian.net/browse/DESCW-492)
    – Includes MVP patterns for Alternating Cards, Card with Image Overlay, Card with Under Image Portrait 2-Up, Cards Portrait 3-up, Detail Card with Icons, Hero Banner
    Long Card, Quote, Small Quote with Image, etc. ([DESCW-494]https://citz-gdx.atlassian.net/browse/DESCW-494)
    – Documentation with instructions on Patterns and templates/parts ([DESCW-493]https://citz-gdx.atlassian.net/browse/DESCW-493)
    – Navigation (takeover and ribbon styles – js & css) for general block theme use (some CleanBC crossover). Additional template & patterns (html) updates. ([DESCW-511]https://citz-gdx.atlassian.net/browse/DESCW-511)
    – Added CleanBC colour options to site style selector + updated default theme and dark mode (beta) options. Added Query Loop pattern for dynamic post grid view. Additional template & patterns (html) updates for responsiveness. ([DESCW-513]https://citz-gdx.atlassian.net/browse/DESCW-513)
    – Initial CleanBC "No image" banner with in-page links ([DESCW-514]https://citz-gdx.atlassian.net/browse/DESCW-514)
-   Two new banners (home + landing) and related scripts/styles. Added static SCSS readable RGB root values for colour palette integration (needs to be generated dynamically). Further break out of CleanBC site scripts/styles/patterns/etc. ([DESCW-514]https://citz-gdx.atlassian.net/browse/DESCW-514)
-   New Info banner + scripts and style fixes [DESCW-514]https://citz-gdx.atlassian.net/browse/DESCW-514)
-   Core Templates update [DESCW-512]https://citz-gdx.atlassian.net/browse/DESCW-512)
-   Enabled CleanBC Custom Post Type and default template. Enabled Site constants to enable/disable embedded site features eg: CleanBC. Replaced array() with [] throughout. Added JS-based site variables and checks. Updated Readme with developer notes. [DESCW-512]https://citz-gdx.atlassian.net/browse/DESCW-512)
-   Various CleanBC patterns + scripts and styles [DESCW-514]https://citz-gdx.atlassian.net/browse/DESCW-514)
-   CleanBC added icon buttons, updated CPT, Added patterns and related imagery/icons, Added Allow list for blocks in editor [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
-   Added Projects CPT, two querys: toggle for Actions and accordion for Projects, added BCGov Accordion to theme, refactored away from jQuery/Bootstrap, now functions with ES6, various styles and patterns updated/added. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
-   A series of CleanBC patterns. Namespace and other fixes to previous PR. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
-   Added options page with ACF plugin dependency with initial setting to enable body class. Options dynamically populated from Setup.php and removes hard coding of globally scoped site.siteName variable. Default to 'bcgov' when not plugin not available/activated. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
-   Removed Dark.json colour styles. CleanBC theme updates + file restructring to make future development less messy. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
-   CleanBC fixed header navigation updates including back to top. Set up resize/scroll/load listeners + orientation helper classes. CleanBC sector pattern scripts/styles, including global site.templateDir for active WordPress template URL access in JS. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
    – Many patterns + BCgov base theme reuseability fixes (mostly around navigation) + DOM element selector checking for admin. Fixed bug in ribbon style navigation for offscreen flyout sebmenus. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
    – Added initial pass at Projects Query block to enable late changes to information delivery. Additional work needed to tie output into Actions switching mechanism. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
-   Accordion/Actions toggle feature revamped to use new Project Query Block. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
-   Accordion/Project Query Block render output and count initialisation fix. Front end button icon style fix. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
-   Menu and footer navigation, in-page layout styles and breadcrumb placement fixes. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
-   Troubleshooting Template Parts for CleanBC + Admin styles fix/updates. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
    – DESCW-534 Block template parts Area fix + more. Button styles, Project Query Block, Pattern Loremisation [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
    – Updated accordion toggle by querystring. Added hierarchy to CleanBC pattern files for better file management. Updated Appearance > BCGov Block Theme Admin instructions page. Responsive styling + CPT plugin detection. Plus additional updates for various patterns, breadcrumb DOM reording, and body class size helpers. [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
    – Modified Accordion toggle feature to suppress empty project categories [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
    – Added core/button aria-label a11y text [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
    – Added ARIA labels into queried content for the Accordion feature [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
    – Accordion PHP fix, new pattern + styles [DESCW-534]https://citz-gdx.atlassian.net/browse/DESCW-534)
-   Project query ordering updated with additional minor style updates and fixes [DESCW-598]https://citz-gdx.atlassian.net/browse/DESCW-598)
    – Testing updates blocks, patterns, and accessibility. Includes Skip-nav template part, media-text block filters & more [DESCW-601]https://citz-gdx.atlassian.net/browse/DESCW-601)
