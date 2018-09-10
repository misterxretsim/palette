$('document').ready(function(){

	

	var element, color, border, width, height, intensity;
	var flag = 0;

	var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
      slide: function( event, ui ) {
        handle.text( ui.value );
        intensity = (handle.text())/100;
        $('#colorPick').css('opacity', intensity)
      }
    });
    $( "#slider" ).slider( "value", 100 );

	
	var colorSafe = '';
	var nameSafe = '';


	function blockChange(x){


		element = $('#colorPick');
		color = element.css('background-color');
		border = element.css('border');
		width = element.css('height');
		height = element.css('width');



		if(color != ''){
			$(x).css('background-color', color);
			if(flag == 1){
				$(x).css('opacity', '1');
				$(x).css('border', border);
				$(x).css('width', width);
				$(x).css('height', height);
			}else{
				$(x).css('opacity', intensity);
				$(x).css('border', '0px');
				$(x).css('width', '50px');
				$(x).css('height', '50px');
			}
		}
	}


	$('#colorPick').on('click', function(){

		if(flag == 0){
			var r = Math.floor(Math.random() * 255) + 1;
			var g = Math.floor(Math.random() * 255) + 1;
			var b = Math.floor(Math.random() * 255) + 1;
			var randomColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
			$('#colorPick').css('background-color', randomColor)
		}	
	});



	$('#color_r0g0b0').on('click', function(){

		if(flag == 0){
			colorSafe = 'rgb(0, 0, 0)';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_r255g0b0').on('click', function(){

		if(flag == 0){
			colorSafe = 'rgb(255, 0, 0)';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_r0g255b0').on('click', function(){

		if(flag == 0){
			colorSafe = 'rgb(0, 255, 0)';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_r0g0b255').on('click', function(){

		if(flag == 0){
			colorSafe = 'rgb(0, 0, 255)';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_r255g255b0').on('click', function(){

		if(flag == 0){
			colorSafe = 'rgb(255, 255, 0)';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_r0g255b255').on('click', function(){

		if(flag == 0){
			colorSafe = 'rgb(0, 255, 255)';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_r255g0b255').on('click', function(){

		if(flag == 0){
			colorSafe = 'rgb(255, 0, 255)';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_r255g255b255').on('click', function(){

		if(flag == 0){
			colorSafe = 'rgb(255, 255, 255)';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_rgbpink').on('click', function(){

		if(flag == 0){
			colorSafe = 'pink';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_rgbgrey').on('click', function(){

		if(flag == 0){
			colorSafe = 'grey';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_rgbbrown').on('click', function(){

		if(flag == 0){
			colorSafe = 'brown';
			$('#colorPick').css('background-color', colorSafe)
		}
	});

	$('#color_rgborange').on('click', function(){

		if(flag == 0){
			colorSafe = 'orange';
			$('#colorPick').css('background-color', colorSafe)
		}
	});



	$('#piece1').on('click', function(){

		nameSafe = '#piece1';
		blockChange(nameSafe);
	});
	$('#piece2').on('click', function(){

		nameSafe = '#piece2';
		blockChange(nameSafe);
	});
	$('#piece3').on('click', function(){

		nameSafe = '#piece3';
		blockChange(nameSafe);
	});
	$('#piece4').on('click', function(){

		nameSafe = '#piece4';
		blockChange(nameSafe);
	});
	$('#piece5').on('click', function(){

		nameSafe = '#piece5';
		blockChange(nameSafe);
	});
	$('#piece6').on('click', function(){

		nameSafe = '#piece6';
		blockChange(nameSafe);
	});
	$('#piece7').on('click', function(){

		nameSafe = '#piece7';
		blockChange(nameSafe);
	});
	$('#piece8').on('click', function(){

		nameSafe = '#piece8';
		blockChange(nameSafe);
	});
	$('#piece9').on('click', function(){

		nameSafe = '#piece9';
		blockChange(nameSafe);
	});
	$('#piece10').on('click', function(){

		nameSafe = '#piece10';
		blockChange(nameSafe);
	});
	$('#piece11').on('click', function(){

		nameSafe = '#piece11';
		blockChange(nameSafe);
	});
	$('#piece12').on('click', function(){

		nameSafe = '#piece12';
		blockChange(nameSafe);
	});
	$('#piece13').on('click', function(){

		nameSafe = '#piece13';
		blockChange(nameSafe);
	});
	$('#piece14').on('click', function(){

		nameSafe = '#piece14';
		blockChange(nameSafe);
	});
	$('#piece15').on('click', function(){

		nameSafe = '#piece15';
		blockChange(nameSafe);
	});
	$('#piece16').on('click', function(){

		nameSafe = '#piece16';
		blockChange(nameSafe);
	});
	$('#piece17').on('click', function(){

		nameSafe = '#piece17';
		blockChange(nameSafe);
	});
	$('#piece18').on('click', function(){

		nameSafe = '#piece18';
		blockChange(nameSafe);
	});
	$('#piece19').on('click', function(){

		nameSafe = '#piece19';
		blockChange(nameSafe);
	});
	$('#piece20').on('click', function(){

		nameSafe = '#piece20';
		blockChange(nameSafe);
	});
	$('#piece21').on('click', function(){

		nameSafe = '#piece21';
		blockChange(nameSafe);
	});
	$('#piece22').on('click', function(){

		nameSafe = '#piece22';
		blockChange(nameSafe);
	});
	$('#piece23').on('click', function(){

		nameSafe = '#piece23';
		blockChange(nameSafe);
	});
	$('#piece24').on('click', function(){

		nameSafe = '#piece24';
		blockChange(nameSafe);
	});
	$('#piece25').on('click', function(){

		nameSafe = '#piece25';
		blockChange(nameSafe);
	});
	$('#piece26').on('click', function(){

		nameSafe = '#piece26';
		blockChange(nameSafe);
	});
	$('#piece27').on('click', function(){

		nameSafe = '#piece27';
		blockChange(nameSafe);
	});
	$('#piece28').on('click', function(){

		nameSafe = '#piece28';
		blockChange(nameSafe);
	});
	$('#piece29').on('click', function(){

		nameSafe = '#piece29';
		blockChange(nameSafe);
	});
	$('#piece30').on('click', function(){

		nameSafe = '#piece30';
		blockChange(nameSafe);
	});
	$('#piece31').on('click', function(){

		nameSafe = '#piece31';
		blockChange(nameSafe);
	});
	$('#piece32').on('click', function(){

		nameSafe = '#piece32';
		blockChange(nameSafe);
	});
	$('#piece33').on('click', function(){

		nameSafe = '#piece33';
		blockChange(nameSafe);
	});
	$('#piece34').on('click', function(){

		nameSafe = '#piece34';
		blockChange(nameSafe);
	});
	$('#piece35').on('click', function(){

		nameSafe = '#piece35';
		blockChange(nameSafe);
	});
	$('#piece36').on('click', function(){

		nameSafe = '#piece36';
		blockChange(nameSafe);
	});
	$('#piece37').on('click', function(){

		nameSafe = '#piece37';
		blockChange(nameSafe);
	});
	$('#piece38').on('click', function(){

		nameSafe = '#piece38';
		blockChange(nameSafe);
	});
	$('#piece39').on('click', function(){

		nameSafe = '#piece39';
		blockChange(nameSafe);
	});
	$('#piece40').on('click', function(){

		nameSafe = '#piece40';
		blockChange(nameSafe);
	});
	$('#piece41').on('click', function(){

		nameSafe = '#piece41';
		blockChange(nameSafe);
	});
	$('#piece42').on('click', function(){

		nameSafe = '#piece42';
		blockChange(nameSafe);
	});
	$('#piece43').on('click', function(){

		nameSafe = '#piece43';
		blockChange(nameSafe);
	});
	$('#piece44').on('click', function(){

		nameSafe = '#piece44';
		blockChange(nameSafe);
	});
	$('#piece45').on('click', function(){

		nameSafe = '#piece45';
		blockChange(nameSafe);
	});
	$('#piece46').on('click', function(){

		nameSafe = '#piece46';
		blockChange(nameSafe);
	});
	$('#piece47').on('click', function(){

		nameSafe = '#piece47';
		blockChange(nameSafe);
	});
	$('#piece48').on('click', function(){

		nameSafe = '#piece48';
		blockChange(nameSafe);
	});
	$('#piece49').on('click', function(){

		nameSafe = '#piece49';
		blockChange(nameSafe);
	});
	$('#piece50').on('click', function(){

		nameSafe = '#piece50';
		blockChange(nameSafe);
	});
	$('#piece51').on('click', function(){

		nameSafe = '#piece51';
		blockChange(nameSafe);
	});
	$('#piece52').on('click', function(){

		nameSafe = '#piece52';
		blockChange(nameSafe);
	});
	$('#piece53').on('click', function(){

		nameSafe = '#piece53';
		blockChange(nameSafe);
	});
	$('#piece54').on('click', function(){

		nameSafe = '#piece54';
		blockChange(nameSafe);
	});
	$('#piece55').on('click', function(){

		nameSafe = '#piece55';
		blockChange(nameSafe);
	});
	$('#piece56').on('click', function(){

		nameSafe = '#piece56';
		blockChange(nameSafe);
	});
	$('#piece57').on('click', function(){

		nameSafe = '#piece57';
		blockChange(nameSafe);
	});
	$('#piece58').on('click', function(){

		nameSafe = '#piece58';
		blockChange(nameSafe);
	});
	$('#piece59').on('click', function(){

		nameSafe = '#piece59';
		blockChange(nameSafe);
	});
	$('#piece60').on('click', function(){

		nameSafe = '#piece60';
		blockChange(nameSafe);
	});
	$('#piece61').on('click', function(){

		nameSafe = '#piece61';
		blockChange(nameSafe);
	});
	$('#piece62').on('click', function(){

		nameSafe = '#piece62';
		blockChange(nameSafe);
	});
	$('#piece63').on('click', function(){

		nameSafe = '#piece63';
		blockChange(nameSafe);
	});
	$('#piece64').on('click', function(){

		nameSafe = '#piece64';
		blockChange(nameSafe);
	});
	$('#piece65').on('click', function(){

		nameSafe = '#piece65';
		blockChange(nameSafe);
	});
	$('#piece66').on('click', function(){

		nameSafe = '#piece66';
		blockChange(nameSafe);
	});
	$('#piece67').on('click', function(){

		nameSafe = '#piece67';
		blockChange(nameSafe);
	});
	$('#piece68').on('click', function(){

		nameSafe = '#piece68';
		blockChange(nameSafe);
	});
	$('#piece69').on('click', function(){

		nameSafe = '#piece69';
		blockChange(nameSafe);
	});
	$('#piece70').on('click', function(){

		nameSafe = '#piece70';
		blockChange(nameSafe);
	});
	$('#piece71').on('click', function(){

		nameSafe = '#piece71';
		blockChange(nameSafe);
	});
	$('#piece72').on('click', function(){

		nameSafe = '#piece72';
		blockChange(nameSafe);
	});
	$('#piece73').on('click', function(){

		nameSafe = '#piece73';
		blockChange(nameSafe);
	});
	$('#piece74').on('click', function(){

		nameSafe = '#piece74';
		blockChange(nameSafe);
	});
	$('#piece75').on('click', function(){

		nameSafe = '#piece75';
		blockChange(nameSafe);
	});
	$('#piece76').on('click', function(){

		nameSafe = '#piece76';
		blockChange(nameSafe);
	});
	$('#piece77').on('click', function(){

		nameSafe = '#piece77';
		blockChange(nameSafe);
	});
	$('#piece78').on('click', function(){

		nameSafe = '#piece78';
		blockChange(nameSafe);
	});
	$('#piece79').on('click', function(){

		nameSafe = '#piece79';
		blockChange(nameSafe);
	});
	$('#piece80').on('click', function(){

		nameSafe = '#piece80';
		blockChange(nameSafe);
	});
	$('#piece81').on('click', function(){

		nameSafe = '#piece81';
		blockChange(nameSafe);
	});

	$('#broom').on('click',function(){

		$('.pieces').css('background-color', 'white');
		$('.pieces').css('border', '1px solid rgb(108, 109, 105)');
		$('.pieces').css('width', '48px');
		$('.pieces').css('height', '48px');
		$('.pieces').css('opacity', '1');
	});

	$('#eraser').on('click',function(){
		if(flag == 0){
			$('#colorPick').css('background-color', 'white');
			$('#colorPick').css('border', '1px solid rgb(108, 109, 105)');
			$('#colorPick').css('width', '48px');
			$('#colorPick').css('height', '48px');
			$('#eraser').css('color', 'rgb(150, 255, 170)');
			flag = 1;
		}else{
			flag = 0;
			$('#eraser').css('color', 'white');
		}
	});




  $( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
    	if(flag == 0){
	    	var red = $( "#red" ).slider( "value" ),
	        green = $( "#green" ).slider( "value" ),
	        blue = $( "#blue" ).slider( "value" ),
	        hex = hexFromRGB( red, green, blue );
	    	$( "#colorPick" ).css( "background-color", "#" + hex );
    	}
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 255 );
    $( "#blue" ).slider( "value", 255 );
  } );


	


function addNewColor(){

	for (var i = 1; i < 7; i++) {
		element = $('#color_' + i);
		color = element.css('background-color');
		if(color != valueRed){

			
		}
		
	}
}



	$('#addNew').on('click',function(){

		addNewColor();
	});


});