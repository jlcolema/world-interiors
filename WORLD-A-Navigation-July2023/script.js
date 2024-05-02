// Table of Contents
// 01. Announcement Bar
// 02. Navigation
// 02.01. Working example of looping through the top-level menu items
// 03. Mobile Navigation

try {
  var onDocumentLoad = function () {

    console.log(555);

		// Add a unique class to the body for scoping the CSS
		document.body.classList.add('ob-nav-update');

		/*** 01. Announcement Bar ***/

		// Find the element with a class of `announcement-bar-text`
		const announcementBarText = document.querySelector('.announcement-bar-text');

		// If `announcementBarText` exists, then do the following
		if (announcementBarText) {
			// Wrap the text within `announcementBarText` in a span
			announcementBarText.innerHTML = `
				<span class="announcement-bar-text__message">
					${announcementBarText.textContent}
				</span>
			`;

			// Add the phone number before the closing of `announcementBarText`
			announcementBarText.insertAdjacentHTML(
				'beforeend',
				'<div class="announcement-bar-text__phone"><span class="announcement-bar-text__phone-icon"><svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Shape</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="M_Variation" transform="translate(-26.000000, -16.000000)" fill="#304152" fill-rule="nonzero"><g id="Group" transform="translate(26.000000, 16.000000)"><path d="M7.51564078,2.29474495e-05 C11.6649935,0.010187348 15.0131834,3.37399466 14.999961,7.52024601 C14.98666,11.6703979 11.6213079,15.0162628 7.47429547,14.9999405 C3.32494272,14.9842786 -0.0185665624,11.6165707 7.75951929e-05,7.47031937 C0.0188782453,3.32718843 3.37642933,-0.0100953491 7.51564078,2.29474495e-05 Z M11.2335981,9.38469394 C11.2312578,9.12101888 11.1189234,8.98684104 10.9277989,8.90415004 C10.4386761,8.69274193 9.95189358,8.47587309 9.46277078,8.26524508 C9.17179342,8.14042848 8.99783108,8.1864546 8.79734534,8.43218728 C8.63274421,8.63345404 8.46502267,8.83160039 8.30744244,9.03832788 C8.23177273,9.13740106 8.16312391,9.14130158 8.06015069,9.0835739 C7.1458733,8.57416616 6.43364186,7.86505186 5.92189615,6.95155039 C5.86104834,6.84233587 5.85870804,6.76978622 5.96636186,6.68865543 C6.17854911,6.52795406 6.38449555,6.35789145 6.58732159,6.18548852 C6.74256152,6.05365099 6.87283825,5.8898292 6.78546703,5.67842109 C6.55299718,5.11440609 6.30648553,4.55507171 6.05373308,3.99963785 C5.97104246,3.81787368 5.80800153,3.72972196 5.60205509,3.77730829 C5.10825169,3.89042333 4.61444829,4.00431848 4.12298519,4.12835497 C3.88817504,4.18764285 3.76413911,4.3857892 3.78286152,4.62996167 C3.78832222,4.70095111 3.79690332,4.77194055 3.80002372,4.8437101 C3.86399193,6.27598055 4.31645002,7.56471193 5.21902591,8.68806131 C5.98820467,9.64524859 6.93290596,10.3621639 8.0913547,10.7920011 C8.84337125,11.0712782 9.62191121,11.1914142 10.4176134,11.2218382 C10.6508633,11.2304194 10.8185849,11.0954614 10.8802128,10.8536293 C10.967584,10.513504 11.0448139,10.1718186 11.1267244,9.83091328 C11.1657294,9.66709149 11.2055145,9.50326971 11.2335981,9.38547405 L11.2335981,9.38469394 Z" id="Shape"></path></g></g></g></svg></span> <span class="announcement-bar-text__phone-text">512-821-1302</span></div>'
			);
		}

		/*** 02. Navigation ***/

		/* Find elements to be worked with */

		// .site-navigation-wrapper
		const siteNavigationWrapper = document.querySelector('.site-navigation-wrapper');
		// .site-navigation
		const siteNavigation = siteNavigationWrapper.querySelector('.site-navigation');
		// The main container for top-level menu items, `.navmenu-depth-1`
		const navMenu = siteNavigation.querySelector('.navmenu-depth-1');

		/* Find each top-level menu item */

		// Dining Room
		const navDiningRoom = navMenu.firstElementChild;
		// Living Room
		const navLivingRoom = navMenu.children[1];
		// Bedroom
		const navBedroom = navMenu.children[2];
		// Office
		const navOffice = navMenu.children[3];
		// Accents
		const navAccents = navMenu.children[4];
		// Custom Slab Tables
		const navCustomSlabTables = navMenu.children[5];
		// Get Inspired
		const navGetInspired = navMenu.children[6];
		// Trade Accounts
		const navTradeAccounts = navMenu.children[7];

		/* Create the two additional top-level menu items that will appear at the end */

		// Explore
		const navExplore = navDiningRoom.cloneNode(true);
		// Helpful Info
		const navHelpfulInfo = navDiningRoom.cloneNode(true);

		// Prevent the default action on top-level links except for the Trade Accounts link
		[navDiningRoom, navLivingRoom, navBedroom, navOffice, navAccents, navCustomSlabTables, navGetInspired, navExplore, navHelpfulInfo].forEach((navItem) => {
			navItem.querySelector('.navmenu-link-depth-1').addEventListener('click', (e) => {
				e.preventDefault();
			});
		});

		// Within `navExplore`, replace the class `navmenu-id-dining-room` with `navmenu-id-explore`
		navExplore.classList.replace('navmenu-id-dining-room', 'navmenu-id-explore');
		// Within `navExplore` replace the text with `Explore`
		navExplore.querySelector('.navmenu-link-depth-1').textContent = ' Explore ';
		// Add the dropdown icon after the text
		navExplore.querySelector('.navmenu-link-depth-1').insertAdjacentHTML(
			'beforeend',
			'<span class="navmenu-icon navmenu-icon-depth-1" data-navmenu-trigger=""><svg aria-hidden="true" focusable="false" role="presentation" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-chevron-down"><path class="icon-chevron-down-left" d="M4 4.5L7 1.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="square"></path><path class="icon-chevron-down-right" d="M4 4.5L1 1.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="square"></path></svg></span>'
		);

		// Within `navHelpfulInfo`, replace the class `navmenu-id-dining-room` with `navmenu-id-helpful-information`
		navHelpfulInfo.classList.replace('navmenu-id-dining-room', 'navmenu-id-helpful-information');
		// Within `navHelpfulInfo` replace the text with `Helpful Info`
		navHelpfulInfo.querySelector('.navmenu-link-depth-1').textContent = ' Helpful Info ';
		// Add the dropdown icon after the text
		navHelpfulInfo.querySelector('.navmenu-link-depth-1').insertAdjacentHTML(
			'beforeend',
			'<span class="navmenu-icon navmenu-icon-depth-1" data-navmenu-trigger=""><svg aria-hidden="true" focusable="false" role="presentation" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-chevron-down"><path class="icon-chevron-down-left" d="M4 4.5L7 1.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="square"></path><path class="icon-chevron-down-right" d="M4 4.5L1 1.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="square"></path></svg></span>'
		);

		// Add `navExplore` after the last sibling
		navMenu.appendChild(navExplore);

		// Add `navHelpfulInfo` after the last sibling
		navMenu.appendChild(navHelpfulInfo);

		// On hover of `navExplore`, change the link attribute of `aria-expanded="false"` to `aria-expanded="true"`
		navExplore.addEventListener('mouseover', () => {
			navExplore.querySelector('.navmenu-link-depth-1').setAttribute('aria-expanded', 'true');
			// Add a data attribute of `data-animation-state="open"` to `.navmenu-submenu`
			navExplore.querySelector('.navmenu-submenu').setAttribute('data-animation-state', 'open');
			navExplore.querySelector('.navmenu-submenu').setAttribute('data-animation', 'closed=>open');
			// Change the attribute for `site-main-dimmer` from `data-animation-state="closed"` to `data-animation-state="open"`
			document.querySelector('.site-main-dimmer').setAttribute('data-animation-state', 'open');
			document.querySelector('.site-main-dimmer').setAttribute('data-animation', 'closed=>open');
		});

		// On mouseout of `navExplore`, change the link attribute of `aria-expanded="true"` to `aria-expanded="false"`
		navExplore.addEventListener('mouseout', () => {
			navExplore.querySelector('.navmenu-link-depth-1').setAttribute('aria-expanded', 'false');
			// Change the `data-animation-state` to `close`
			navExplore.querySelector('.navmenu-submenu').setAttribute('data-animation-state', 'closed');
			// Remove the `data-animation` attribute
			navExplore.querySelector('.navmenu-submenu').removeAttribute('data-animation');
			document.querySelector('.site-main-dimmer').setAttribute('data-animation-state', 'closed');
		});

		// On hover of `navHelpfulInfo`, change the link attribute of `aria-expanded="false"` to `aria-expanded="true"`
		navHelpfulInfo.addEventListener('mouseover', () => {
			navHelpfulInfo.querySelector('.navmenu-link-depth-1').setAttribute('aria-expanded', 'true');
			// Add a data attribute of `data-animation-state="open"` to `.navmenu-submenu`
			navHelpfulInfo.querySelector('.navmenu-submenu').setAttribute('data-animation-state', 'open');
			navHelpfulInfo.querySelector('.navmenu-submenu').setAttribute('data-animation', 'closed=>open');
			// Change the attribute for `site-main-dimmer` from `data-animation-state="closed"` to `data-animation-state="open"`
			document.querySelector('.site-main-dimmer').setAttribute('data-animation-state', 'open');
			document.querySelector('.site-main-dimmer').setAttribute('data-animation', 'closed=>open');
		});

		// On mouseout of `navHelpfulInfo`, change the link attribute of `aria-expanded="true"` to `aria-expanded="false"`
		navHelpfulInfo.addEventListener('mouseout', () => {
			navHelpfulInfo.querySelector('.navmenu-link-depth-1').setAttribute('aria-expanded', 'false');
			// Change the `data-animation-state` to `close`
			navHelpfulInfo.querySelector('.navmenu-submenu').setAttribute('data-animation-state', 'closed');
			// Remove the `data-animation` attribute
			navHelpfulInfo.querySelector('.navmenu-submenu').removeAttribute('data-animation');
			document.querySelector('.site-main-dimmer').setAttribute('data-animation-state', 'closed');
		});

		/* Testing to add a wrapper around the submenu within Dining Room */

		// Within `navDiningRoom`, find the element with a class of `navmenu-submenu`
		const navDiningRoomSubMenu = navDiningRoom.querySelector('.navmenu-submenu');

		// Create a new element called `navDiningRoomSubMenuWrapper` and add a class of `navmenu-submenu-wrapper`
		const navDiningRoomSubMenuWrapper = document.createElement('div');
		navDiningRoomSubMenuWrapper.classList.add('navmenu-submenu-wrapper');

		// Add `navDiningRoomSubMenuWrapper` before `navDiningRoomSubMenu`
		navDiningRoomSubMenu.before(navDiningRoomSubMenuWrapper);

		// Move `navDiningRoomSubMenu` into `navDiningRoomSubMenuWrapper`
		navDiningRoomSubMenuWrapper.appendChild(navDiningRoomSubMenu);

		// within `navDiningRoomSubMenuWrapper`, create a new div called `navDiningRoomPromo`
		const navDiningRoomPromo = document.createElement('div');
		navDiningRoomPromo.classList.add('navmenu-promo', 'namenu-promo--dining-room');

		// Within `navDiningRoomSubMenuWrapper`, insert `navDiningRoomPromo` before the closing of it
		navDiningRoomSubMenuWrapper.insertAdjacentElement('beforeend', navDiningRoomPromo);

		// Within `navDiningRoomPromo`, add the the promo
		navDiningRoomPromo.innerHTML = `
			<a href="/collections/dining-room" class="navmenu-promo__link">
				<img src="https://storage.googleapis.com/images.trinity.one/WorldInteriors/WORLD-A-Navigation-July2023/1_DiningRoom.jpg" width="210" height="280" alt="Dining Room Promo Image" class="navmenu-promo__image" />
			</div>
		`;

		// Within `navDiningRoomSubMenu`, create a list item for `Shop All`
		navDiningRoomSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-dining-room-shop-all"><a href="/collections/dining-room" class="navmenu-link navmenu-link-depth-2">Shop All Dining Room</a></div>'
		);

		/* Testing to add a wrapper around the submenu within Living Room */

		// Within `navLivingRoom`, find the element with a class of `navmenu-submenu`
		const navLivingRoomSubMenu = navLivingRoom.querySelector('.navmenu-submenu');

		// Create a new element called `navLivingRoomSubMenuWrapper` and add a class of `navmenu-submenu-wrapper`
		const navLivingRoomSubMenuWrapper = document.createElement('div');
		navLivingRoomSubMenuWrapper.classList.add('navmenu-submenu-wrapper');

		// Add `navLivingRoomSubMenuWrapper` before `navLivingRoomSubMenu`
		navLivingRoomSubMenu.before(navLivingRoomSubMenuWrapper);

		// Move `navLivingRoomSubMenu` into `navLivingRoomSubMenuWrapper`
		navLivingRoomSubMenuWrapper.appendChild(navLivingRoomSubMenu);

		// within `navLivingRoomSubMenuWrapper`, create a new div called `navLivingRoomPromo`
		const navLivingRoomPromo = document.createElement('div');
		navLivingRoomPromo.classList.add('navmenu-promo', 'namenu-promo--living-room');

		// Within `navLivingRoomSubMenuWrapper`, insert `navLivingRoomPromo` before the closing of it
		navLivingRoomSubMenuWrapper.insertAdjacentElement('beforeend', navLivingRoomPromo);

		// Within `navLivingRoomPromo`, add the the promo
		navLivingRoomPromo.innerHTML = `
			<a href="/collections/living-room" class="navmenu-promo__link">
				<img src="https://storage.googleapis.com/images.trinity.one/WorldInteriors/WORLD-A-Navigation-July2023/2_LivingRoom.jpg" width="210" height="280" alt="Living Room Promo Image" class="navmenu-promo__image" />
			</div>
		`;

		// Within `navLivingRoomSubMenu`, create a list item for `Shop All`
		navLivingRoomSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-living-room-shop-all"><a href="/collections/living-room" class="navmenu-link navmenu-link-depth-2">Shop All Living Room</a></div>'
		);

		/* Testing to add a wrapper around the submenu within Bedroom */

		// Within `navBedroom`, find the element with a class of `navmenu-submenu`
		const navBedroomSubMenu = navBedroom.querySelector('.navmenu-submenu');

		// Create a new element called `navBedroomSubMenuWrapper` and add a class of `navmenu-submenu-wrapper`
		const navBedroomSubMenuWrapper = document.createElement('div');
		navBedroomSubMenuWrapper.classList.add('navmenu-submenu-wrapper');

		// Add `navBedroomSubMenuWrapper` before `navBedroomSubMenu`
		navBedroomSubMenu.before(navBedroomSubMenuWrapper);

		// Move `navBedroomSubMenu` into `navBedroomSubMenuWrapper`
		navBedroomSubMenuWrapper.appendChild(navBedroomSubMenu);

		// within `navBedroomSubMenuWrapper`, create a new div called `navBedroomPromo`
		const navBedroomPromo = document.createElement('div');
		navBedroomPromo.classList.add('navmenu-promo', 'namenu-promo--bedroom');

		// Within `navBedroomSubMenuWrapper`, insert `navBedroomPromo` before the closing of it
		navBedroomSubMenuWrapper.insertAdjacentElement('beforeend', navBedroomPromo);

		// Within `navBedroomPromo`, add the the promo
		navBedroomPromo.innerHTML = `
			<a href="/collections/bedroom" class="navmenu-promo__link">
				<img src="https://storage.googleapis.com/images.trinity.one/WorldInteriors/WORLD-A-Navigation-July2023/3_Bedroom.jpg" width="210" height="280" alt="Bedroom Promo Image" class="navmenu-promo__image" />
			</div>
		`;

		// Within `navBedroomSubMenu`, create a list item for `Shop All`
		navBedroomSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-bedroom-shop-all"><a href="/collections/bedroom" class="navmenu-link navmenu-link-depth-2">Shop All Living Room</a></div>'
		);

		/* Testing to add a wrapper around the submenu within Office */

		// Within `navOffice`, find the element with a class of `navmenu-submenu`
		const navOfficeSubMenu = navOffice.querySelector('.navmenu-submenu');

		// Create a new element called `navOfficeSubMenuWrapper` and add a class of `navmenu-submenu-wrapper`
		const navOfficeSubMenuWrapper = document.createElement('div');
		navOfficeSubMenuWrapper.classList.add('navmenu-submenu-wrapper');

		// Add `navOfficeSubMenuWrapper` before `navOfficeSubMenu`
		navOfficeSubMenu.before(navOfficeSubMenuWrapper);

		// Move `navOfficeSubMenu` into `navOfficeSubMenuWrapper`
		navOfficeSubMenuWrapper.appendChild(navOfficeSubMenu);

		// within `navOfficeSubMenuWrapper`, create a new div called `navOfficePromo`
		const navOfficePromo = document.createElement('div');
		navOfficePromo.classList.add('navmenu-promo', 'namenu-promo--office');

		// Within `navOfficeSubMenuWrapper`, insert `navOfficePromo` before the closing of it
		navOfficeSubMenuWrapper.insertAdjacentElement('beforeend', navOfficePromo);

		// Within `navOfficePromo`, add the the promo
		navOfficePromo.innerHTML = `
			<a href="/collections/office" class="navmenu-promo__link">
				<img src="https://storage.googleapis.com/images.trinity.one/WorldInteriors/WORLD-A-Navigation-July2023/4_Office.jpg" width="210" height="280" alt="Office Promo Image" class="navmenu-promo__image" />
			</div>
		`;

		// Within `navOfficeSubMenu`, create a list item for `Shop All`
		navOfficeSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-office-shop-all"><a href="/collections/office" class="navmenu-link navmenu-link-depth-2">Shop All Office</a></div>'
		);

		/* Testing to add a wrapper around the submenu within Accents */

		// Within `navAccents`, find the element with a class of `navmenu-submenu`
		const navAccentsSubMenu = navAccents.querySelector('.navmenu-submenu');

		// Create a new element called `navAccentsSubMenuWrapper` and add a class of `navmenu-submenu-wrapper`
		const navAccentsSubMenuWrapper = document.createElement('div');
		navAccentsSubMenuWrapper.classList.add('navmenu-submenu-wrapper');

		// Add `navAccentsSubMenuWrapper` before `navAccentsSubMenu`
		navAccentsSubMenu.before(navAccentsSubMenuWrapper);

		// Move `navAccentsSubMenu` into `navAccentsSubMenuWrapper`
		navAccentsSubMenuWrapper.appendChild(navAccentsSubMenu);

		// within `navAccentsSubMenuWrapper`, create a new div called `navAccentsPromo`
		const navAccentsPromo = document.createElement('div');
		navAccentsPromo.classList.add('navmenu-promo', 'namenu-promo--accents');

		// Within `navAccentsSubMenuWrapper`, insert `navAccentsPromo` before the closing of it
		navAccentsSubMenuWrapper.insertAdjacentElement('beforeend', navAccentsPromo);

		// Within `navAccentsPromo`, add the the promo
		navAccentsPromo.innerHTML = `
			<a href="/collections/accents" class="navmenu-promo__link">
				<img src="https://storage.googleapis.com/images.trinity.one/WorldInteriors/WORLD-A-Navigation-July2023/5_Accents.jpg" width="210" height="280" alt="Accents Promo Image" class="navmenu-promo__image" />
			</div>
		`;

		// Within `navAccentsSubMenu`, create a list item for `Shop All`
		navAccentsSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-accents-shop-all"><a href="/collections/accents" class="navmenu-link navmenu-link-depth-2">Shop All Accents</a></div>'
		);

		/* Testing to add a wrapper around the submenu within Custom Slab Tables */

		// Within `navCustomSlabTables`, find the element with a class of `navmenu-submenu`
		const navCustomSlabTablesSubMenu = navCustomSlabTables.querySelector('.navmenu-submenu');

		// Create a new element called `navCustomSlabTablesSubMenuWrapper` and add a class of `navmenu-submenu-wrapper`
		const navCustomSlabTablesSubMenuWrapper = document.createElement('div');
		navCustomSlabTablesSubMenuWrapper.classList.add('navmenu-submenu-wrapper');

		// Add `navCustomSlabTablesSubMenuWrapper` before `navCustomSlabTablesSubMenu`
		navCustomSlabTablesSubMenu.before(navCustomSlabTablesSubMenuWrapper);

		// Move `navCustomSlabTablesSubMenu` into `navCustomSlabTablesSubMenuWrapper`
		navCustomSlabTablesSubMenuWrapper.appendChild(navCustomSlabTablesSubMenu);

		// within `navCustomSlabTablesSubMenuWrapper`, create a new div called `navCustomSlabTablesPromo`
		const navCustomSlabTablesPromo = document.createElement('div');
		navCustomSlabTablesPromo.classList.add('navmenu-promo', 'namenu-promo--custom-slab-tables');

		// Within `navCustomSlabTablesSubMenuWrapper`, insert `navCustomSlabTablesPromo` before the closing of it
		navCustomSlabTablesSubMenuWrapper.insertAdjacentElement('beforeend', navCustomSlabTablesPromo);

		// Within `navCustomSlabTablesPromo`, add the the promo
		navCustomSlabTablesPromo.innerHTML = `
			<a href="/pages/live-edge-slab-shop" class="navmenu-promo__link">
				<img src="https://storage.googleapis.com/images.trinity.one/WorldInteriors/WORLD-A-Navigation-July2023/6_CustomSlabs.jpg" width="210" height="280" alt="Custom Slab Tables Promo Image" class="navmenu-promo__image" />
			</div>
		`;

		// Within `navCustomSlabTablesSubMenu`, create a list item for `Shop All`
		navCustomSlabTablesSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-custom-slab-tables-shop-all"><a href="/pages/live-edge-slab-shop" class="navmenu-link navmenu-link-depth-2">Shop All Custom Slab Tables</a></div>'
		);

		/* Testing to add a wrapper around the submenu within Get Inspired */

		// Within `navGetInspired`, find the element with a class of `navmenu-submenu`
		const navGetInspiredSubMenu = navGetInspired.querySelector('.navmenu-submenu');

		// Create a new element called `navGetInspiredSubMenuWrapper` and add a class of `navmenu-submenu-wrapper`
		const navGetInspiredSubMenuWrapper = document.createElement('div');
		navGetInspiredSubMenuWrapper.classList.add('navmenu-submenu-wrapper');

		// Add `navGetInspiredSubMenuWrapper` before `navGetInspiredSubMenu`
		navGetInspiredSubMenu.before(navGetInspiredSubMenuWrapper);

		// Move `navGetInspiredSubMenu` into `navGetInspiredSubMenuWrapper`
		navGetInspiredSubMenuWrapper.appendChild(navGetInspiredSubMenu);

		// within `navGetInspiredSubMenuWrapper`, create a new div called `navGetInspiredPromo`
		const navGetInspiredPromo = document.createElement('div');
		navGetInspiredPromo.classList.add('navmenu-promo', 'namenu-promo--get-inspired');

		// Within `navGetInspiredSubMenuWrapper`, insert `navGetInspiredPromo` before the closing of it
		navGetInspiredSubMenuWrapper.insertAdjacentElement('beforeend', navGetInspiredPromo);

		// Within `navGetInspiredPromo`, add the the promo
		navGetInspiredPromo.innerHTML = `
			<a href="/pages/more-about-world-interiors" class="navmenu-promo__link">
				<img src="https://storage.googleapis.com/images.trinity.one/WorldInteriors/WORLD-A-Navigation-July2023/7_TradeAccounts.jpg" width="210" height="280" alt="Get Inspired Promo Image" class="navmenu-promo__image" />
			</div>
		`;

		// Within `navGetInspiredSubMenu`, replace content with the following HTML
		navGetInspiredSubMenu.innerHTML = `
			<li class="navmenu-item navmenu-id-title">
				<a href="/blogs/before-you-buy-materials-construction-and-build-processes" class="navmenu-link navmenu-link-depth-2">Before You Buy</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/blogs/interior-design-furniture-style-guides" class="navmenu-link navmenu-link-depth-2">Interior Design &amp; Styling Guides</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/blogs/interior-design-ideas-inspiration" class="navmenu-link navmenu-link-depth-2">Lookbooks</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/pages/about-us" class="navmenu-link navmenu-link-depth-2">About Us</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/blogs/austin-furniture-roots" class="navmenu-link navmenu-link-depth-2">Austin Furniture Roots</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/pages/our-austin-tx-designer-furniture-store" class="navmenu-link navmenu-link-depth-2">Austin Showroom</a>
			</li>
		`;

		/* Testing to add a wrapper around the submenu within Explore */

		// Within `navExplore`, find the element with a class of `navmenu-submenu`
		const navExploreSubMenu = navExplore.querySelector('.navmenu-submenu');

		// Create a new element called `navExploreSubMenuWrapper` and add a class of `navmenu-submenu-wrapper`
		const navExploreSubMenuWrapper = document.createElement('div');
		navExploreSubMenuWrapper.classList.add('navmenu-submenu-wrapper');

		// Add `navExploreSubMenuWrapper` before `navExploreSubMenu`
		navExploreSubMenu.before(navExploreSubMenuWrapper);

		// Move `navExploreSubMenu` into `navExploreSubMenuWrapper`
		navExploreSubMenuWrapper.appendChild(navExploreSubMenu);

		// within `navExploreSubMenuWrapper`, create a new div called `navExplorePromo`
		const navExplorePromo = document.createElement('div');
		navExplorePromo.classList.add('navmenu-promo', 'namenu-promo--explore');

		// Within `navExploreSubMenuWrapper`, insert `navExplorePromo` before the closing of it
		navExploreSubMenuWrapper.insertAdjacentElement('beforeend', navExplorePromo);

		// Within `navExplorePromo`, add the the promo
		navExplorePromo.innerHTML = `
			<a href="/collections" class="navmenu-promo__link">
				<img src="https://storage.googleapis.com/images.trinity.one/WorldInteriors/WORLD-A-Navigation-July2023/8_Explore.jpg" width="210" height="280" alt="Explore Promo Image" class="navmenu-promo__image" />
			</div>
		`;

		// Within `navExploreSubMenu`, replace content with the following HTML
		navExploreSubMenu.innerHTML = `
			<li class="navmenu-item navmenu-id-title">
				<a href="/collections" class="navmenu-link navmenu-link-depth-2">Collections</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/pages/live-edge-slab-shop" class="navmenu-link navmenu-link-depth-2">Custom Slabs</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/pages/more-about-world-interiors" class="navmenu-link navmenu-link-depth-2">Inspiration</a>
			</li>
		`;

		/* Testing to add a wrapper around the submenu within Helpful Info */

		// Within `navHelpfulInfo`, find the element with a class of `navmenu-submenu`
		const navHelpfulInfoSubMenu = navHelpfulInfo.querySelector('.navmenu-submenu');

		// Create a new element called `navHelpfulInfoSubMenuWrapper` and add a class of `navmenu-submenu-wrapper`
		const navHelpfulInfoSubMenuWrapper = document.createElement('div');
		navHelpfulInfoSubMenuWrapper.classList.add('navmenu-submenu-wrapper');

		// Add `navHelpfulInfoSubMenuWrapper` before `navHelpfulInfoSubMenu`
		navHelpfulInfoSubMenu.before(navHelpfulInfoSubMenuWrapper);

		// Move `navHelpfulInfoSubMenu` into `navHelpfulInfoSubMenuWrapper`
		navHelpfulInfoSubMenuWrapper.appendChild(navHelpfulInfoSubMenu);

		// within `navHelpfulInfoSubMenuWrapper`, create a new div called `navHelpfulInfoPromo`
		const navHelpfulInfoPromo = document.createElement('div');
		navHelpfulInfoPromo.classList.add('navmenu-promo', 'namenu-promo--helpful-information');

		// Within `navHelpfulInfoSubMenuWrapper`, insert `navHelpfulInfoPromo` before the closing of it
		navHelpfulInfoSubMenuWrapper.insertAdjacentElement('beforeend', navHelpfulInfoPromo);

		// Within `navHelpfulInfoPromo`, add the the promo
		navHelpfulInfoPromo.innerHTML = `
			<a href="https://mangofoundation.squarespace.com/about#onetreeplanted-partners" class="navmenu-promo__link">
				<img src="https://storage.googleapis.com/images.trinity.one/WorldInteriors/WORLD-A-Navigation-July2023/9_HelpfulInfo.jpg" width="210" height="280" alt="HelpfulInformation Promo Image" class="navmenu-promo__image" />
			</div>
		`;

		// Within `navHelpfulInfoSubMenu`, replace content with the following HTML
		navHelpfulInfoSubMenu.innerHTML = `
			<li class="navmenu-item navmenu-id-title">
				<a href="/pages/shipping-returns-policy" class="navmenu-link navmenu-link-depth-2">Shipping &amp; Returns</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="https://drive.google.com/file/d/16CaJa6fTJ2L4V1DTgODXIMykfaFS0kl0/view?usp=sharing" class="navmenu-link navmenu-link-depth-2">Product Care</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/blogs/austin-furniture-roots/covid-19-post" class="navmenu-link navmenu-link-depth-2">Covid-19 Information</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/policies/privacy-policy" class="navmenu-link navmenu-link-depth-2">Privacy Policy</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/policies/terms-of-service" class="navmenu-link navmenu-link-depth-2">Terms of Service</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="https://mangofoundation.squarespace.com/about#onetreeplanted-partners" class="navmenu-link navmenu-link-depth-2">Sustainability Program</a>
			</li>
		`;

		// 02.01. Working version that goes through each instance and adds the wrapper around the submenu...

		// Within `navMenu`, find all `.navmenu-link-parent` and add `.hello-world-wrapper` after
		// const navMenuParentLinks = navMenu.querySelectorAll('.navmenu-link-parent');
		// navMenuParentLinks.forEach((navMenuLink) => {
		// 	navMenuLink.insertAdjacentHTML('afterend', '<div class="hello-world-wrapper"></div>');
		// });

		// Within `navMenu`, find all `.navmenu-submenu-wrapper` and move each into the sibling before
		// const navMenuSubMenuWrappers = navMenu.querySelectorAll('.navmenu-submenu-wrapper');
		// navMenuSubMenuWrappers.forEach((navMenuSubMenuWrapper) => {
		// 	navMenuSubMenuWrapper.previousElementSibling.appendChild(navMenuSubMenuWrapper);
		// });

		/*** 03. Mobile Navigation ***/

		// Find the element with a class of `site-header-menu-toggle`
		const siteHeaderMenuToggle = document.querySelector('.site-header-menu-toggle');

		// Find the element with a class of `site-mobile-nav`
		const siteMobileNav = document.querySelector('.site-mobile-nav');
		const mobileNavPanel = document.querySelector('.mobile-nav-panel');
		const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
		const mobileNavClose = document.querySelector('.mobile-nav-close');

		// If `siteHeaderMenuToggle` exists...
		if (siteHeaderMenuToggle) {
			// On click of `siteHeaderMenuToggle`, change the attribute of `tabindex` to `-1` for `siteMobileNav`
			siteHeaderMenuToggle.addEventListener('click', () => {
				siteMobileNav.setAttribute('tabindex', '-1');
				siteMobileNav.setAttribute('data-open', 'true');
				siteMobileNav.setAttribute('data-tab-index', '0');
				mobileNavPanel.classList.add('allow-scroll-while-locked');
				mobileNavPanel.setAttribute('data-animation-state', 'open');
				mobileNavOverlay.setAttribute('data-animation-state', 'open');
				// On the html element, add a class of `scroll-locked`
				document.documentElement.classList.add('scroll-locked');
			});
		}

		// If `mobileNavClose` exists...
		if (mobileNavClose) {
			// On click of `mobileNavClose`, change the attributes to hide mobile nav
			mobileNavClose.addEventListener('click', (event) => {
				siteMobileNav.setAttribute('tabindex', '0');
				siteMobileNav.setAttribute('data-open', 'false');
				siteMobileNav.setAttribute('data-tab-index', '-1');
				mobileNavPanel.classList.remove('allow-scroll-while-locked');
				mobileNavPanel.setAttribute('data-animation-state', 'closed');
				mobileNavOverlay.setAttribute('data-animation-state', 'closed');
				// On the html element, remove the class of `scroll-locked`
				document.documentElement.classList.remove('scroll-locked');
				// prevent default behavior
				event.preventDefault();
			});
		}

		// Within `siteMobileNav`, find the element with a class of `site-header-actions`
		const siteHeaderActions = siteMobileNav.querySelector('.site-header-actions');

		// Within `siteHeaderActions`, replace the account link with the phone number
		siteHeaderActions.innerHTML = `
			<li class="site-header-actions__phone">
				<span class="site-header-actions__phone-icon">
					<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<title>Shape</title>
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="M_Variation" transform="translate(-26.000000, -16.000000)" fill="#304152" fill-rule="nonzero">
											<g id="Group" transform="translate(26.000000, 16.000000)">
													<path d="M7.51564078,2.29474495e-05 C11.6649935,0.010187348 15.0131834,3.37399466 14.999961,7.52024601 C14.98666,11.6703979 11.6213079,15.0162628 7.47429547,14.9999405 C3.32494272,14.9842786 -0.0185665624,11.6165707 7.75951929e-05,7.47031937 C0.0188782453,3.32718843 3.37642933,-0.0100953491 7.51564078,2.29474495e-05 Z M11.2335981,9.38469394 C11.2312578,9.12101888 11.1189234,8.98684104 10.9277989,8.90415004 C10.4386761,8.69274193 9.95189358,8.47587309 9.46277078,8.26524508 C9.17179342,8.14042848 8.99783108,8.1864546 8.79734534,8.43218728 C8.63274421,8.63345404 8.46502267,8.83160039 8.30744244,9.03832788 C8.23177273,9.13740106 8.16312391,9.14130158 8.06015069,9.0835739 C7.1458733,8.57416616 6.43364186,7.86505186 5.92189615,6.95155039 C5.86104834,6.84233587 5.85870804,6.76978622 5.96636186,6.68865543 C6.17854911,6.52795406 6.38449555,6.35789145 6.58732159,6.18548852 C6.74256152,6.05365099 6.87283825,5.8898292 6.78546703,5.67842109 C6.55299718,5.11440609 6.30648553,4.55507171 6.05373308,3.99963785 C5.97104246,3.81787368 5.80800153,3.72972196 5.60205509,3.77730829 C5.10825169,3.89042333 4.61444829,4.00431848 4.12298519,4.12835497 C3.88817504,4.18764285 3.76413911,4.3857892 3.78286152,4.62996167 C3.78832222,4.70095111 3.79690332,4.77194055 3.80002372,4.8437101 C3.86399193,6.27598055 4.31645002,7.56471193 5.21902591,8.68806131 C5.98820467,9.64524859 6.93290596,10.3621639 8.0913547,10.7920011 C8.84337125,11.0712782 9.62191121,11.1914142 10.4176134,11.2218382 C10.6508633,11.2304194 10.8185849,11.0954614 10.8802128,10.8536293 C10.967584,10.513504 11.0448139,10.1718186 11.1267244,9.83091328 C11.1657294,9.66709149 11.2055145,9.50326971 11.2335981,9.38547405 L11.2335981,9.38469394 Z" id="Shape"></path>
											</g>
									</g>
							</g>
					</svg>
				</span>
				<span class="site-header-actions__phone-text">512-821-1302</span>
			</li>
		`;

		// Within `siteMobileNav`, find the element with a class of `navmenu-depth-1`
		const mobileNavMenu = siteMobileNav.querySelector('.navmenu-depth-1');

		/* Find each top-level menu item */

		// Within `mobileNavMenu`, find Dining Room
		const mobileNavDiningRoom = mobileNavMenu.firstElementChild;
		// Within `mobileNavMenu`, find Living Room
		const mobileNavLivingRoom = mobileNavMenu.children[1];
		// Within `mobileNavMenu`, find Bedroom
		const mobileNavBedroom = mobileNavMenu.children[2];
		// Within `mobileNavMenu`, find Office
		const mobileNavOffice = mobileNavMenu.children[3];
		// Within `mobileNavMenu`, find Accents
		const mobileNavAccents = mobileNavMenu.children[4];
		// Within `mobileNavMenu`, find Custom Slab Tables
		const mobileNavCustomSlabTables = mobileNavMenu.children[5];
		// Within `mobileNavMenu`, find Get Inspired
		const mobileNavGetInspired = mobileNavMenu.children[6];
		// Within `mobileNavMenu`, find Trade Accounts
		const mobileNavTradeAccounts = mobileNavMenu.children[7];

		// Make a copy of `mobileNavDiningRoom` called `mobileNavExplore`
		const mobileNavExplore = mobileNavDiningRoom.cloneNode(true);

		// Make a copy of `mobileNavDiningRoom` called `mobileNavHelpfulInfo`
		const mobileNavHelpfulInfo = mobileNavDiningRoom.cloneNode(true);

		// Prevent the default action on top-level links except for the Trade Accounts link
		[mobileNavDiningRoom, mobileNavLivingRoom, mobileNavBedroom, mobileNavOffice, mobileNavAccents, mobileNavCustomSlabTables, mobileNavGetInspired, mobileNavExplore, mobileNavHelpfulInfo].forEach((navItem) => {
			navItem.querySelector('.navmenu-link-parent').addEventListener('click', (e) => {
				e.preventDefault();
			});
		});

		// Within `mobileNavExplore`, replace the class `navmenu-id-dining-room` with `navmenu-id-explore`
		mobileNavExplore.classList.replace('navmenu-id-dining-room', 'navmenu-id-explore');
		// Within `mobileNavExplore` replace the text with `Explore`
		mobileNavExplore.querySelector('.navmenu-link-parent').textContent = ' Explore ';

		// Within `mobileNavHelpfulInfo`, replace the class `navmenu-id-dining-room` with `navmenu-id-helpful-information`
		mobileNavHelpfulInfo.classList.replace('navmenu-id-dining-room', 'navmenu-id-helpful-information');
		// Within `mobileNavHelpfulInfo` replace the text with `Helpful Info`
		mobileNavHelpfulInfo.querySelector('.navmenu-link-parent').textContent = ' Helpful Info ';

		// Add `mobileNavExplore` after the last sibling
		mobileNavMenu.appendChild(mobileNavExplore);

		// Add `mobileNavHelpfulInfo` after the last sibling
		mobileNavMenu.appendChild(mobileNavHelpfulInfo);

		/* For the Dining Room */

		// Within `mobileNavDiningRoom`, find the element with a class of `navmenu-submenu`
		const mobileNavDiningRoomSubMenu = mobileNavDiningRoom.querySelector('.navmenu-submenu');

		// Within `mobileNavDiningRoomSubMenu`, create a list item for `Shop All`
		mobileNavDiningRoomSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-dining-room-shop-all"><a href="/collections/dining-room" class="navmenu-link navmenu-link-depth-2">Shop All Dining Room</a></div>'
		);

		/* For the Living Room */

		// Within `mobileNavLivingRoom`, find the element with a class of `navmenu-submenu`
		const mobileNavLivingRoomSubMenu = mobileNavLivingRoom.querySelector('.navmenu-submenu');

		// Within `mobileNavLivingRoomSubMenu`, create a list item for `Shop All`
		mobileNavLivingRoomSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-living-room-shop-all"><a href="/collections/living-room" class="navmenu-link navmenu-link-depth-2">Shop All Living Room</a></div>'
		);

		/* For the Bedroom */

		// Within `mobileNavBedroom`, find the element with a class of `navmenu-submenu`
		const mobileNavBedroomSubMenu = mobileNavBedroom.querySelector('.navmenu-submenu');

		// Within `mobileNavBedroomSubMenu`, create a list item for `Shop All`
		mobileNavBedroomSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-bedroom-shop-all"><a href="/collections/bedroom" class="navmenu-link navmenu-link-depth-2">Shop All Living Room</a></div>'
		);

		/* For the Office */

		// Within `mobileNavOffice`, find the element with a class of `navmenu-submenu`
		const mobileNavOfficeSubMenu = mobileNavOffice.querySelector('.navmenu-submenu');

		// Within `mobileNavOfficeSubMenu`, create a list item for `Shop All`
		mobileNavOfficeSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-office-shop-all"><a href="/collections/office" class="navmenu-link navmenu-link-depth-2">Shop All Office</a></div>'
		);

		/* For the Accents */

		// Within `mobileNavAccents`, find the element with a class of `navmenu-submenu`
		const mobileNavAccentsSubMenu = mobileNavAccents.querySelector('.navmenu-submenu');

		// Within `mobileNavAccentsSubMenu`, create a list item for `Shop All`
		mobileNavAccentsSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-accents-shop-all"><a href="/collections/accents" class="navmenu-link navmenu-link-depth-2">Shop All Accents</a></div>'
		);

		/* For the Custom Slab Tables */

		// Within `mobileNavCustomSlabTables`, find the element with a class of `navmenu-submenu`
		const mobileNavCustomSlabTablesSubMenu = mobileNavCustomSlabTables.querySelector('.navmenu-submenu');

		// Within `mobileNavCustomSlabTablesSubMenu`, create a list item for `Shop All`
		mobileNavCustomSlabTablesSubMenu.insertAdjacentHTML(
			'afterbegin',
			'<li class="navmenu-item navmenu-item--shop-all navmenu-id-custom-slab-tables-shop-all"><a href="/pages/live-edge-slab-shop" class="navmenu-link navmenu-link-depth-2">Shop All Custom Slab Tables</a></div>'
		);

		/* For the Get Inspired */

		// Within `mobileNavGetInspired`, find the element with a class of `navmenu-submenu`
		const mobileNavGetInspiredSubMenu = mobileNavGetInspired.querySelector('.navmenu-submenu');

		// Within `mobileNavGetInspiredSubMenu`, replace content with the following HTML
		mobileNavGetInspiredSubMenu.innerHTML = `
			<li class="navmenu-item navmenu-id-title">
				<a href="/blogs/before-you-buy-materials-construction-and-build-processes" class="navmenu-link navmenu-link-depth-2">Before You Buy</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/blogs/interior-design-furniture-style-guides" class="navmenu-link navmenu-link-depth-2">Interior Design &amp; Styling Guides</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/blogs/interior-design-ideas-inspiration" class="navmenu-link navmenu-link-depth-2">Lookbooks</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/pages/about-us" class="navmenu-link navmenu-link-depth-2">About Us</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/blogs/austin-furniture-roots" class="navmenu-link navmenu-link-depth-2">Austin Furniture Roots</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/pages/our-austin-tx-designer-furniture-store" class="navmenu-link navmenu-link-depth-2">Austin Showroom</a>
			</li>
		`;

		/* For the Explore */

		// Within `mobileNavExplore`, find the element with a class of `navmenu-submenu`
		const mobileNavExploreSubMenu = mobileNavExplore.querySelector('.navmenu-submenu');

		// Within `mobileNavExploreSubMenu`, replace content with the following HTML
		mobileNavExploreSubMenu.innerHTML = `
			<li class="navmenu-item navmenu-id-title">
				<a href="/collections" class="navmenu-link navmenu-link-depth-2">Collections</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/pages/live-edge-slab-shop" class="navmenu-link navmenu-link-depth-2">Custom Slabs</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/pages/more-about-world-interiors" class="navmenu-link navmenu-link-depth-2">Inspiration</a>
			</li>
		`;

		/* For the Helpful Info */

		// Within `mobileNavHelpfulInfo`, find the element with a class of `navmenu-submenu`
		const mobileNavHelpfulInfoSubMenu = mobileNavHelpfulInfo.querySelector('.navmenu-submenu');

		// Within `mobileNavHelpfulInfoSubMenu`, replace content with the following HTML
		mobileNavHelpfulInfoSubMenu.innerHTML = `
			<li class="navmenu-item navmenu-id-title">
				<a href="/pages/shipping-returns-policy" class="navmenu-link navmenu-link-depth-2">Shipping &amp; Returns</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="https://drive.google.com/file/d/16CaJa6fTJ2L4V1DTgODXIMykfaFS0kl0/view?usp=sharing" class="navmenu-link navmenu-link-depth-2">Product Care</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/blogs/austin-furniture-roots/covid-19-post" class="navmenu-link navmenu-link-depth-2">Covid-19 Information</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/policies/privacy-policy" class="navmenu-link navmenu-link-depth-2">Privacy Policy</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="/policies/terms-of-service" class="navmenu-link navmenu-link-depth-2">Terms of Service</a>
			</li>
			<li class="navmenu-item navmenu-id-title">
				<a href="https://mangofoundation.squarespace.com/about#onetreeplanted-partners" class="navmenu-link navmenu-link-depth-2">Sustainability Program</a>
			</li>
		`;

		// Within `mobileNavMenu`, find all instances of `navmenu-icon` and add the plus icon before the first child
		mobileNavMenu.querySelectorAll('.navmenu-icon').forEach((navIcon) => {
			navIcon.insertAdjacentHTML(
				'afterbegin',
				'<svg width="9.75px" height="9.75px" viewBox="0 0 9.75 9.75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="navmenu-icon-plus"><title>Path</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="M_Variation" transform="translate(-291.000000, -535.500000)" fill="#64686C" fill-rule="nonzero"><g id="Group-4" transform="translate(0.000000, 534.500000)"><g id="Group-3" transform="translate(25.000000, 0.000000)"><g id="+" transform="translate(266.000000, 1.000000)"><polygon id="Path" points="5.954 0 3.77 0 3.77 3.9 0 3.9 0 5.876 3.77 5.876 3.77 9.75 5.954 9.75 5.954 5.876 9.75 5.876 9.75 3.9 5.954 3.9"></polygon></g></g></g></g></g></svg>'
			);
		});

	};
  // ensures code runs when content is loaded
  if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    onDocumentLoad();
  } else {
    document.addEventListener("DOMContentLoaded", onDocumentLoad);
  }
} catch (err) {
  console.log(err);
}
