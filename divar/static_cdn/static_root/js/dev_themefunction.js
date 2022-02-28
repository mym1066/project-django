/*--------------------------------------
		CUSTOM FUNCTION WRITE HERE
--------------------------------------*/
"use strict";
jQuery(document).on('ready', function() {
	/* -------------------------------------
			SCROLLBAR
	-------------------------------------- */
	if(jQuery('.listar-themescrollbar').length > 0){
		var _listar_themescrollbar = jQuery('.listar-themescrollbar');
		_listar_themescrollbar.mCustomScrollbar({
			axis:"y",
		});
	}
	if(jQuery('.listar-horizontalthemescrollbar').length > 0){
		var _listar_horizontalthemescrollbar = jQuery('.listar-horizontalthemescrollbar');
		_listar_horizontalthemescrollbar.mCustomScrollbar({
			axis:"x",
			advanced:{autoExpandHorizontalScroll:true},
			theme:"rounded-dots",
			scrollInertia:400
		});
	}
	/*--------------------------------------
			THEME VERTICAL SCROLLBAR		
	--------------------------------------*/
	jQuery('#listar-verticalscrollbar').mCustomScrollbar({
		axis:"y",
	});
	/*--------------------------------------
			MOBILE MENU
	--------------------------------------*/
	function collapseMenu(){
		jQuery('.listar-navigation ul li.menu-item-has-children').prepend('<span class="listar-dropdowarrow"><i class="fa fa-angle-down"></i></span>');
		jQuery('.listar-navigation ul li.menu-item-has-children span').on('click', function() {
			jQuery(this).parent('li').toggleClass('listar-open');
			jQuery(this).next().next().slideToggle(300);
		});
	}
	collapseMenu();
	/* ---------------------------------------
			SIGN IN OPEN CLOSE
	--------------------------------------- */
	jQuery('a[href="#listar-loginsingup"]').on('click', function(event) {
		event.preventDefault();
		jQuery('#listar-loginsingup').addClass('open');
		jQuery('body').addClass('listar-hidescroll');
	});
	jQuery('.listar-btnclose').on('click', function(event) {
		jQuery('#listar-loginsingup').removeClass('open');
		jQuery('body').removeClass('listar-hidescroll');
	});
	/* -------------------------------------
			HOME sLIDER V ONE
	-------------------------------------- */
	if(jQuery('#listar-homeslider').length > 0){
		var _listar_homeslider = jQuery('#listar-homeslider');
		_listar_homeslider.owlCarousel({
			items: 1,
			nav:false,
			loop:true,
			dots: false,
			autoplay: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			dotsClass: 'listar-sliderdots',
			navClass: ['listar-prev', 'listar-next'],
			navContainerClass: 'listar-slidernav',
			navText: ['<span class="icon-chevron-left"></span>', '<span class="icon-chevron-right"></span>'],
		});
	}
	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	if(jQuery('#listar-testimonialslider').length > 0){
		var _listar_testimonialslider = jQuery('#listar-testimonialslider');
		_listar_testimonialslider.owlCarousel({
			items: 1,
			nav:true,
			loop:true,
			dots: true,
			margin: 15,
			autoplay: true,
			dotsClass: 'listar-sliderdots',
			navClass: ['listar-prev', 'listar-next'],
			navContainerClass: 'listar-slidernav',
			navText: ['<span class="icon-chevron-left"></span>', '<span class="icon-chevron-right"></span>'],
		});
	}
	/* -------------------------------------
			CATEGORIES POST SLIDER
	-------------------------------------- */
	var _listar_gridslider = jQuery('[id="listar-categoriespostslider"]');
	if(_listar_gridslider.hasClass('listar-gridslider')){
		_listar_gridslider.owlCarousel({
			items: 4,
			nav:true,
			loop:true,
			dots: true,
			margin: 40,
			autoplay: true,
			dotsClass: 'listar-sliderdots',
			navClass: ['listar-prev', 'listar-next'],
			navContainerClass: 'listar-slidernav',
			navText: ['<span class="icon-arrow-left2"></span>', '<span class="icon-arrow-right2"></span>'],
			responsive : {
				// breakpoint from 0 up
				0 : {items:1,},
				// breakpoint from 640 up
				640 : {items:2,},
				// breakpoint from 1024 up
				1024 : {items:3,},
				// breakpoint from 1310 up
				1310 : {items:4,},
			}
		});
	}
	/*--------------------------------------
			TOGGLE INNER PAGE SEARCH
	--------------------------------------*/
	if(jQuery('#listar-btnsearchtoggle').length > 0){
		jQuery('#listar-innersearch').slideUp();
		jQuery('#listar-btnsearchtoggle').on('click', function(){
			jQuery('#listar-innersearch').slideToggle();
		});
	}
	/*--------------------------------------
			ADVANCE FEATURES TOGGLE
	--------------------------------------*/
	if(jQuery('#listar-btnadvancefeatures').length > 0){
		jQuery('#listar-btnadvancefeatures').on('click', function(){
			jQuery('#listar-advancefitures').slideToggle();
		});
	}
	/*--------------------------------------
			Google Map
	--------------------------------------*/
	function initialize(){
		var _listar_locationmap = jQuery('.listar-locationmap');
		var _listar_postlocationmap = jQuery('#listar-postlocationmap');
		var gmapStyles = [
			{"featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
			{"featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }]},
			{"featureType": "transit", "elementType": "labels.text", "stylers": [{ "visibility": "off" }]},
			{"featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "on" }]},
			{"featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#7b7b7b" }]},
			{"featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#7b7b7b" }]},
			{"featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#7b7b7b" }]},
			{"featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }]},
			{"featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "#7b7b7b" }]},
			{"featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
			{"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }]},
			{"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#2b2b2b" }]},
			{"featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#2b2b2b" }]},
			{"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#2b2b2b" }]},
			{"featureType": "water", "elementType": "geometry", "stylers": [{ "visibility": "on" }]},
			{"featureType": "water", "elementType": "labels.text", "stylers": [{ "color": "#2b2b2b" }]},
			{"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#2b2b2b" }]},
			{"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"},{"color": "#2b2b2b"}]},
			{"featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#333" }]},
			{"featureType": "administrative", "elementType": "labels", "stylers": [{ "color": "#333" }]},
			{"featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [{ "color": "#333" }]},
			{"featureType": "transit.line", "stylers": [ { "visibility": "off" }]},
			{"featureType": "landscape.natural", "stylers": [ { "visibility": "off" }]},
			{"featureType": "landscape.natural", "stylers": [ { "visibility": "on" },{ "color": "#2b2b2b" }]},
			{"featureType": "administrative.province", "elementType": "geometry", "stylers": [{ "color": "#2b2b2b" }]},
			{"elementType": "geometry.fill", "stylers": [ { "color": "#2b2b2b" }]},
			{"featureType": "poi", "elementType": "geometry", "stylers": [{ "visibility": "off" }]},
			{"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }]},
			{"featureType": "landscape", "elementType": "labels.text", "stylers": [{ "visibility": "off" }]},
			{"featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
		];
		_listar_locationmap.gmap3({
			marker: {
				address: '1600 Elizabeth St, Melbourne, Victoria, Australia',
				options: {
					title: 'Robert Frost Elementary School',
					icon: "images/mapmarker.png",
					animation: google.maps.Animation.BOUNCE,
				}
			},
			map: {
				options: {
					zoom: 16,
					styles: gmapStyles,
					scaleControl: true,
					scrollwheel: false,
					mapTypeControl: false,
					disableDefaultUI: true,
					navigationControl: false,
					streetViewControl: false,
					disableDoubleClickZoom: true,
				}
			}
		});
		_listar_postlocationmap.gmap3({
			marker: {
				address: '1600 Elizabeth St, Melbourne, Victoria, Australia',
				options: {
					title: 'Robert Frost Elementary School',
					icon: "images/mapmarker.png",
					animation: google.maps.Animation.BOUNCE,
				}
			},
			map: {
				options: {
					zoom: 16,
					styles: gmapStyles,
					scaleControl: true,
					scrollwheel: false,
					mapTypeControl: false,
					disableDefaultUI: true,
					navigationControl: false,
					streetViewControl: false,
					disableDoubleClickZoom: true,
				}
			}
		});
	}
	if(jQuery('.listar-locationmap').length > 0){
		initialize();
	}
	if(jQuery('#listar-postlocationmap').length > 0){
		jQuery('a[href="#location"]').on('click', function (e) {
			initialize();
		});
	}
	/*--------------------------------------
			VIDEO POPUP BOX
	--------------------------------------*/
	if(jQuery('#lister-video').length > 0){
		jQuery('#lister-video').YouTubePopUp();
	}
	/*--------------------------------------
			PRICE RANGE SLIDER
	--------------------------------------*/
	if(jQuery('.listar-rangeslider').length > 0){
		jQuery('.listar-rangeslider').slider({
			min: 0,
			max: 120000,
			value: 65860,
			tooltip: 'always',
			formatter: function(value) {
				return '$'+value;
			}
		});
	}
	/*--------------------------------------
			DISTANCE RANGE SLIDER
	--------------------------------------*/
	if(jQuery('#listar-distancerangeslider').length > 0){
		jQuery("#listar-distancerangeslider").slider({
			min: 0,
			max: 100,
			value: 29,
			tooltip: 'always',
			formatter: function(value) {
				return value+'km';
			}
		});
	}
	/*--------------------------------------
			TTHEME TOOLTIP
	--------------------------------------*/
	if(jQuery('[data-toggle="tooltip"]').length > 0){
		jQuery('[data-toggle="tooltip"]').tooltip()
	}
	/*--------------------------------------
			MASONRY TESTIMONIAL
	--------------------------------------*/
	if(jQuery('#listar-testimonials').length > 0){
		var _listar_testimonials = jQuery('#listar-testimonials');
		_listar_testimonials.isotope({
			itemSelector: '.listar-testimonial',
		});
	}
	/*--------------------------------------
			COMMING SOON COUNTER
	 -------------------------------------*/
	if(jQuery('#listar-comingsooncounter').length > 0){
		// Set the date we're counting down to
		var countDownDate = new Date("Apr 31, 2018 24:00:00").getTime();
		// Update the count down every 1 second
		var x = setInterval(function() {
			// Get todays date and time
			var now = new Date().getTime();
			// Find the distance between now an the count down date
			var distance = countDownDate - now;
			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			// Display the result in an element with id="demo"
			document.getElementById("listar-comingsooncounter").innerHTML = "<ul><li><div class='listar-holder'><h3>" + days + "</h3><h4>Days</h4></div></li><li><div class='listar-holder'><h3>" + hours + "</h3><h4>Hours</h4></div></li><li><div class='listar-holder'><h3>" + minutes + "</h3><h4>Mins</h4></div></li><li><div class='listar-holder'><h3>" + seconds + "</h3><h4>Secs</h4></div></li></ul>";
			// If the count down is finished, write some text
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("listar-comingsooncounter").innerHTML = "EXPIRED";
			}
		}, 1000);
	}
	/*--------------------------------------
			CHOSEN DROPDOWN
	--------------------------------------*/
	jQuery( document ).ready(function() {
		var _listar_chosendropdown = jQuery('[id="listar-categorieschosen"], [id="listar-locationchosen"], [id="listar-subscriptionchosen"]');
		if(_listar_chosendropdown.hasClass('listar-chosendropdown')){
			_listar_chosendropdown.chosen();
		}
	});
	/*--------------------------------------
			SHARE ICONS TOGGLE
	--------------------------------------*/
	var _bt_btnshare = jQuery('.listar-btnshare');
	_bt_btnshare.on('click', function(event) {
		event.preventDefault();
		var _bt_shareicons = jQuery('.listar-shareicons');
		jQuery(this).parent('.listar-btnquickinfo').toggleClass('listar-showicon');
	});
	/*--------------------------------------
			MAP CLUSTRING INITIALIZE
	--------------------------------------*/
	if(jQuery('.listar-listingmap').length > 0){
		sp_init_map_script('listar-listingmap');
	}
	/*--------------------------------------
			POST GALLERY MASONRY
	--------------------------------------*/
	jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var _listar_postgallery = jQuery('#listar-postgallery');
		_listar_postgallery.isotope({
			itemSelector: '.listar-masnory',
		});
	});
	/* -------------------------------------
			RELATED LISTING SLIDER
	-------------------------------------- */
	if(jQuery('#listar-relatedlistingslider').length > 0){
		var _listar_relatedlistingslider = jQuery('#listar-relatedlistingslider');
		_listar_relatedlistingslider.owlCarousel({
			items: 3,
			nav:true,
			loop:true,
			dots: true,
			margin: 40,
			autoplay: true,
			dotsClass: 'listar-sliderdots',
			navClass: ['listar-prev', 'listar-next'],
			navContainerClass: 'listar-slidernav',
			navText: ['<span class="icon-arrow-left2"></span>', '<span class="icon-arrow-right2"></span>'],
			responsive : {
				// breakpoint from 0 up
				0 : {items:1,},
				// breakpoint from 640 up
				640 : {items:2,},
				// breakpoint from 1024 up
				1024 : {items:3,}
			}
		});
	}
	/* -------------------------------------
			SINGLE PAGE NAVIGATION
	-------------------------------------- */
	if(jQuery('#listar-themetabnav').length > 0){
		var lastId, topMenu = jQuery(".listar-themetabnav"), topMenuHeight = topMenu.outerHeight()+15,
			menuItems = topMenu.find("a"),
			scrollItems = menuItems.map(function(){
				var item = jQuery(jQuery(this).attr("href"));
				if (item.length) { return item; }
			});
		menuItems.click(function(e){
			var href = jQuery(this).attr("href"), offsetTop = href === "#" ? 0 : jQuery(href).offset().top-topMenuHeight+1;
			jQuery('html, body').stop().animate({
				scrollTop: offsetTop
			}, 300);
			e.preventDefault();
		});
		jQuery(window).scroll(function(){
			var fromTop = jQuery(this).scrollTop()+topMenuHeight;
			var cur = scrollItems.map(function(){
			if (jQuery(this).offset().top < fromTop)
				return this;
			});
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";
			if (lastId !== id) {
				lastId = id;
				menuItems.parent().removeClass('listar-active').end().filter("[href='#"+id+"']").parent().addClass('listar-active');
			}
		});
	}
	if(jQuery('#listar-themetabnav').length > 0){
		var topPosition = jQuery('#listar-themetabnav').offset().top - 100;
		jQuery(window).on( 'scroll', function(){
			console.log(topPosition);
			if (jQuery(window).scrollTop() >= topPosition) {
				jQuery('#listar-fixedtabnav').addClass('listar-shownav');
			} else {
				jQuery('#listar-fixedtabnav').removeClass('listar-shownav');
			}
		});
	}
	/* -------------------------------------
			SHOW TOOLTIP
	-------------------------------------- */
	if(jQuery('.listar-range').length > 0){
		jQuery('.listar-range > .listar-themetooltip').tooltip('show');
	}
	/* -------------------------------------
			STICK IN PARENT
	-------------------------------------- */
	if(jQuery('#listar-mapclustring').length > 0){
		var _listar_mapclustring = jQuery("#listar-mapclustring");
		_listar_mapclustring.stick_in_parent({
			offset_top: 80,
		});
	}
	/* -------------------------------------
			FIXED HEADER ON SCROLL
	-------------------------------------- */
	var _listar_header = jQuery('[id="listar-header"]');
	if(_listar_header.hasClass('listar-fixedheader')){
		jQuery(window).scroll(function(){
			if (jQuery(this).scrollTop() > 5) {
				_listar_header.addClass('listar-fixed');
			} else {
				_listar_header.removeClass('listar-fixed');
			}
		});
	}
	/*--------------------------------------
			PRETTY PHOTO GALLERY			
	--------------------------------------*/
	jQuery("a[data-rel]").each(function () {
		jQuery(this).attr("rel", jQuery(this).data("rel"));
	});
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		slideshow: 3000,
		autoplay_slideshow: false,
		social_tools: false
	});
	/*--------------------------------------
			STICKY SIDEBAR					
	--------------------------------------*/
	if(jQuery('#listar-stickysidebar').length > 0){
		jQuery('#listar-stickysidebar').stickySidebar({
			topSpacing: 0,
			bottomSpacing: 90,
			resizeSensor: true,
			stickyClass: 'listar-fixedsidebar',
			containerSelector: '#listar-detailcontent',
			innerWrapperSelector: '.sidebar__inner',
		});
	}
	jQuery(window).resize(function() {
		/*if(jQuery('#listar-stickysidebar').length > 0){*/
			if (screen.width < 768) {
				var stickySidebar = new StickySidebar('#listar-stickysidebar');
				stickySidebar.destroy();
			}
		/*}*/
	});
	/*--------------------------------------
			HEADER SHOW HIDE ON SCROLL		
	--------------------------------------*/
	jQuery(window).resize(function() {
		if(jQuery('.cd-auto-hide-header').length > 0){
			if (screen.width < 639) {
				jQuery('body').css({
					'padding-top': '139px',
				});
			}else{
				jQuery('body').css({
					'padding-top': '80px',
				});
			}
		}
	});
	/*--------------------------------------
			DASHBOARD MENU					
	--------------------------------------*/
	if(jQuery('#listar-btnmenutoggle').length > 0){
		jQuery("#listar-btnmenutoggle").on('click', function(event) {
			event.preventDefault();
			jQuery('#listar-wrapper').toggleClass('listar-openmenu');
			jQuery('body').toggleClass('listar-noscroll');
			jQuery('.listar-navdashboard ul.sub-menu').hide();
		});
	}
	/*--------------------------------------
			Dashboard Tabs Steps			
	--------------------------------------*/
	if(jQuery('#listar-addlistingsteps').length > 0){
		jQuery("#listar-addlistingsteps").steps({
			headerTag: ".listar-steptitle",
			bodyTag: "section",
			titleTemplate: '<span class="number">#index#</span>#title#',
			onStepChanged: function () {
				jQuery('.steps .current').nextAll().removeClass('done').addClass('disabled');
			}
		});
	}
	/*--------------------------------------
			COUNTER							
	--------------------------------------*/
	if(jQuery('.listar-statistics').length > 0){
		jQuery('.listar-statistics').appear(function () {
			jQuery('.listar-statistics li h3').countTo();
		});
	}
	/*--------------------------------------
			TINYMCE WYSIWYG EDITOR			
	--------------------------------------*/
	if(jQuery('#listar-tinymceeditor').length > 0){
		tinymce.init({
			selector: 'textarea#listar-tinymceeditor',
			height: 314,
			menubar: false,
			theme: 'modern',
			plugins: [ 'advlist autolink lists link image charmap print preview hr anchor pagebreak', 'searchreplace wordcount visualblocks visualchars code fullscreen', 'insertdatetime media nonbreaking save table contextmenu directionality', 'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'],
			toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
		});
	}
	/*--------------------------------------
			JQUERY SORTABLE					
	--------------------------------------*/
	if(jQuery('#listar-sortable').length > 0){
		var listar_sortable = document.getElementById("listar-sortable");
		var sort = Sortable.create(listar_sortable, {
			animation: 150,
			handle: '.listar-arangeslot',
			filter: '.listar-btndelete',
			onFilter: function (evt) {
				var el = sort.closest(evt.item);
				el && el.parentNode.removeChild(el);
			}
			/*onClone: function (evt) {
				var origEl = evt.item;
				var cloneEl = evt.clone;
			}*/
		});
	}
	/*--------------------------------------
			GOOGLE CHARTS					
	--------------------------------------*/
	if(jQuery('#listar-donutchart').length > 0){
		google.charts.load("current", {packages:["corechart"]});
		google.charts.setOnLoadCallback(drawChart);
		function drawChart() {
			var data = google.visualization.arrayToDataTable([
				['Task', 'Hours per Day'],
				['Transactions',	67],
				['New Visits',		10],
				['Bounce',			23],
			]);
			var options = {
				title: '',
				pieHole: 0.5,
				width: '100%',
				height: 356,
				showLables: 'true',
				pieSliceText: "none",
				pieSliceText: 'value',
				pieSliceBorderColor: "none",
				tooltip: { trigger: "none"},
				tooltip : {trigger: 'none'},
				pieSliceTextStyle: {
					fontSize: 20,
					color: '#fff',
				},
				legend: {
					position: 'right',
					alignment: 'center',
				},
				chartArea: {
					top: '10%',
					left: '5%',
					width:"90%",
					height:"90%",
				},
				tooltip: { trigger:'none' },
				animation: {duration:800,easing:'in'},
				colors: ['#ea3986','#f98925','#18a4e1'],
				fontName : 'Saira',
			};
			var chart = new google.visualization.PieChart(document.getElementById('listar-donutchart'));
			chart.draw(data, options);
		}
	}
	if(jQuery('#listar-competingchart').length > 0){
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);
		function drawChart() {
			var data = google.visualization.arrayToDataTable([
				['Days',		'Posts Visits'],
				['Monday', 		200],
				['Tuesday', 	1800],
				['Wednesday',	1300],
				['Thursday',	2900],
				['Friday',		3300],
				['Saturday',	3800],
				['Sunday',		4300],
			]);
			var options = {
				title: '',
				vAxis: { minValue: 200 },
				legend: { position: 'none' },
				chartArea:{
					top: '5%',
					left: '5%',
					width:"90%",
					height:"90%",
				},
				pointSize: 10,
				pointShape: 'circle',
				fontName : 'Saira',
			};
			var chart = new google.visualization.AreaChart(document.getElementById('listar-competingchart'));
			chart.draw(data, options);
		}
	}
	/*--------------------------------------
		ADD OR REMOVE CLASS HOME HEADER		
	--------------------------------------*/
	if(jQuery('.listar-home').length > 0){
		var _listar_header = jQuery('.listar-home .listar-header');
		jQuery(window).on('scroll', function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll >= 200) {
				_listar_header.addClass('listar_darkheader');
			} else {
				_listar_header.removeClass('listar_darkheader');
			}
		});
	}
	/*--------------------------------------
			AUTO COMPLETE JQUERY
	--------------------------------------*/
	if(jQuery('#listar-autosearch').length > 0){
		jQuery('#listar-autosearch').autoComplete({
			minChars: 1,
			source: function(term, suggest){
				term = term.toLowerCase();
				var choices = ['ActionScript', 'AppleScript', 'Asp', 'Assembly', 'BASIC', 'Batch', 'C', 'C++', 'CSS', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'HTML', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'PowerShell', 'Python', 'Ruby', 'Scala', 'Scheme', 'SQL', 'TeX', 'XML'];
				var suggestions = [];
				for (i=0;i<choices.length;i++)
					if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
				suggest(suggestions);
			}
		});
		if (~window.location.href.indexOf('http')) {
			(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://apis.google.com/js/plusone.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();
			(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=114593902037957";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
			jQuery('#github_social').html('\
				<iframe style="float:left;margin-right:15px" src="//ghbtns.com/github-btn.html?user=Pixabay&repo=jQuery-autoComplete&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>\
				<iframe style="float:left;margin-right:15px" src="//ghbtns.com/github-btn.html?user=Pixabay&repo=jQuery-autoComplete&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>\
			');
		}
	}
	/* -------------------------------------
			THREE GRID SLIDER
	-------------------------------------- */
	var _listar_threecolumnsslider = jQuery('[id="listar-threecolumnsslider"], [id="listar-testimonialslidervthree"], [id="listar-recentlistingsliderone"], [id="listar-recentlistingslidertwo"], [id="listar-recentlistingsliderthree"], [id="listar-recentlistingsliderfour"], [id="listar-recentlistingsliderfive"]');
	if(_listar_threecolumnsslider.hasClass('listar-threecolumnsslider')){
		_listar_threecolumnsslider.owlCarousel({
			items: 3,
			nav:true,
			loop:true,
			dots: true,
			margin: 40,
			autoplay: true,
			dotsClass: 'listar-sliderdots',
			navClass: ['listar-prev', 'listar-next'],
			navContainerClass: 'listar-slidernav',
			navText: ['<span class="icon-arrow-left2"></span>', '<span class="icon-arrow-right2"></span>'],
			responsive : {
				// breakpoint from 0 up
				0 : {items:1,},
				// breakpoint from 640 up
				640 : {items:2,},
				// breakpoint from 1024 up
				1024 : {items:3,},
			}
		});
	}
});
/*--------------------------------------
			PRELOADER
--------------------------------------*/
jQuery(window).load(function() {
	jQuery(".preloader-outer").fadeIn("slow");
	jQuery(".pins").fadeIn("slow");
	jQuery( document ).ready(function() {
		jQuery(".preloader-outer").fadeOut("slow");
		jQuery(".pins").fadeOut("slow");
	});
});
