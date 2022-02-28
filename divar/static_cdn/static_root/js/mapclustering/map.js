"use strict";
function sp_init_map_script(_map_id){
	var directory_path = '';
	var _data_list		 = data;
	var dir_latitude	 = '51.5001524';
	var dir_longitude	 = '-0.1262362';
	var dir_map_type	 = 'ROADMAP';
	var dir_close_marker		= directory_path+'images/icons/close.png';
	var dir_cluster_marker		= directory_path+'images/icons/cluster.png';
	var dir_map_marker			= directory_path+'images/icons/marker.png';
	var dir_cluster_color		= '#fff';
	var dir_zoom				= '12';
	var dir_map_scroll			= 'false';
	var gmap_norecod			= '';
	var loader_html	= '<div class="provider-loader-wrap"><div class="provider-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>';

	if( _data_list.status == 'found' ){
		var response_data	= _data_list.listing;
		var location_center = new google.maps.LatLng(response_data[0].latitude,response_data[0].longitude);
	} else{
		var location_center = new google.maps.LatLng(dir_latitude,dir_longitude);
	}

	if(dir_map_type == 'ROADMAP'){
		var map_id = google.maps.MapTypeId.ROADMAP;
	} else if(dir_map_type == 'SATELLITE'){
		var map_id = google.maps.MapTypeId.SATELLITE;
	} else if(dir_map_type == 'HYBRID'){
		var map_id = google.maps.MapTypeId.HYBRID;
	} else if(dir_map_type == 'TERRAIN'){
		var map_id = google.maps.MapTypeId.TERRAIN;
	} else {
		var map_id = google.maps.MapTypeId.ROADMAP;
	}

	var scrollwheel	= true;
	var lock			 = 'unlock';

	if( dir_map_scroll == 'false' ){
		scrollwheel	= false;
		lock			 = 'lock';
	}

	var mapOptions = {
		zoom: parseInt(dir_zoom),
		maxZoom: 20,
		mapTypeId: map_id,
		scaleControl: true,
		scrollwheel: scrollwheel,
		disableDefaultUI: true
	}

	var map = new google.maps.Map(document.getElementById(_map_id), mapOptions);
	var bounds = new google.maps.LatLngBounds();

	//Zoom In
	if(document.getElementById('doc-mapplus') ){ 
		google.maps.event.addDomListener(document.getElementById('doc-mapplus'), 'click', function () {
			var current= parseInt( map.getZoom(),10 );
			current++;
			if(current>20){
				current=20;
			}
			map.setZoom(current);
		});
	}

	//Zoom Out
	if(document.getElementById('doc-mapminus') ){ 
		google.maps.event.addDomListener(document.getElementById('doc-mapminus'), 'click', function () {
			var current= parseInt( map.getZoom(),10);
			current--;
			if(current<0){
				current=0;
			}
			map.setZoom(current);
		});
	}

	//Lock Map
	if( document.getElementById('doc-lock') ){ 
		google.maps.event.addDomListener(document.getElementById('doc-lock'), 'click', function () {
			if(lock == 'lock'){
				map.setOptions({ 
						scrollwheel: true,
						draggable: true 
					}
				);
				jQuery("#doc-lock").html('<i class="fa fa-unlock-alt" aria-hidden="true"></i>');
				lock = 'unlock';
			}else if(lock == 'unlock'){
				map.setOptions({ 
						scrollwheel: false,
						draggable: false 
					}
				);
				jQuery("#doc-lock").html('<i class="fa fa-lock" aria-hidden="true"></i>');
				lock = 'lock';
			}
		});
	}

	//Map resize
	jQuery(document).on("click",'.listar-btnmapview', function(e){
		jQuery('.listar-mapinnerbanner').toggleClass('listar-open');
		if( jQuery('.listar-mapinnerbanner').hasClass('listar-open') ) {
			jQuery('.listar-mapinnerbanner').append(loader_html);
		}
		setTimeout(function(){
			jQuery('.listar-mapinnerbanner').find('.provider-loader-wrap').remove();
			google.maps.event.trigger(map,"resize");
			map.setCenter(location_center);
		},1000);
	});
			
	if( _data_list.status == 'found' ){
		jQuery('#gmap-noresult').html('').hide(); //Hide No Result Div
		var markers = new Array();
		var info_windows = new Array();

		for (var i=0; i < response_data.length; i++) {
			markers[i] = new google.maps.Marker({
				position: new google.maps.LatLng(response_data[i].latitude,response_data[i].longitude),
				map: map,
				icon: response_data[i].marker,
				title: response_data[i].title,
				animation: google.maps.Animation.DROP,
				visible: true
			});
			bounds.extend(markers[i].getPosition());
			var boxText = document.createElement("div");
			boxText.className = 'listar-infoboxcontent';
			
			var infobox_html = "";
			infobox_html += '<div class="listar-infoholder">';
			infobox_html += '<figure class="listar-featuredimg"><img src="'+response_data[i].image+'" alt="'+response_data[i].title+'"></figure>';
			infobox_html += '<div class="listar-companycontent">';
				if(response_data[i].featured == 'yes'){
					infobox_html += '<span class="listar-featured"><i class="fa fa-bolt"></i></span>';
				}
				/*if(response_data[i].featured == 'yes'){
					infobox_html += '<span class="listar-featured"><i class="fa fa-bolt"></i></span>';
				}*/
				//infobox_html += '<div class="listar-subjects">'+response_data[i].subjects+'</div>';
				infobox_html += '<h3><a href="'+response_data[i].url+'">'+response_data[i].title+'</a><i class="icon-checkmark listar-postverified listar-themetooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Verified"></i></h3>';
				infobox_html += '<div class="listar-review"><span class="listar-stars"><span></span></span><em>(3 Review)</em></div>';
				infobox_html += '<div class="listar-themepostfoot"><a class="listar-location" href="javascript:void(0);"><i class="icon-icons74"></i><em>New York</em></a><div class="listar-postbtns"><a class="listar-btnquickinfo listar-liked" href="javascript:void(0);"><i class="icon-heart2"></i></a></div></div>';
			infobox_html += '</div>';
			boxText.innerHTML = infobox_html;
			
			var myOptions = {
				content: boxText,
				disableAutoPan: true,
				maxWidth: 0,
				alignBottom: true,
				pixelOffset: new google.maps.Size( -150, -90 ),
				zIndex: null,
				closeBoxMargin: "0 0 -16px -16px",
				closeBoxURL: dir_close_marker,
				infoBoxClearance: new google.maps.Size( 1, 1 ),
				isHidden: false,
				pane: "floatPane",
				enableEventPropagation: false
			};
			var ib = new InfoBox( myOptions );
			attachInfoBoxToMarker( map, markers[i], ib );
		}
		map.fitBounds(bounds);
		/* Marker Clusters */
		var markerClustererOptions = {
			ignoreHidden: true,
			//maxZoom: 14,
			styles: [{
				textColor: dir_cluster_color,
				url: dir_cluster_marker,
				width: 23,
				height: 30,
			}]
		};
		var markerClusterer = new MarkerClusterer( map, markers, markerClustererOptions );
	} else{
		map.fitBounds(bounds);
		jQuery('#gmap-noresult').html(gmap_norecod).show();
	}
}
//Assign Info window to marker
function attachInfoBoxToMarker( map, marker, infoBox ){
	google.maps.event.addListener( marker, 'click', function(){
		var scale = Math.pow( 2, map.getZoom() );
		var offsety = ( (100/scale) || 0 );
		var projection = map.getProjection();
		var markerPosition = marker.getPosition();
		var markerScreenPosition = projection.fromLatLngToPoint( markerPosition );
		var pointHalfScreenAbove = new google.maps.Point( markerScreenPosition.x, markerScreenPosition.y - offsety );
		var aboveMarkerLatLng = projection.fromPointToLatLng( pointHalfScreenAbove );
		map.setCenter( aboveMarkerLatLng );
		
		jQuery(".listar-infoBox").hide();
		infoBox.open( map, marker );
		
	});
}