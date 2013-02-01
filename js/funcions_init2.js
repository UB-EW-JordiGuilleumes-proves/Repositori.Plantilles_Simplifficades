//---------------------------------------------------------------------------------------
//Funcion inici pgina
//---------------------------------------------------------------------------------------

 var total = $('.div').length;

$(document).ready(function() {
		$(".contenedor_desplegable").hide();
		desplegable();
	
		function desplegable(){
			 $(".contenedor_desplegable").show();
			 $('.capa_escondida').hide();
		   $('.capa_escondida').each(function(i){
 
											  $(this).removeClass('capa_escondida');
											  $(this).addClass('capa_escondida'+i);
											  
											  });
   
		   $('.div').each(function(i){
								   
								  
								   $(this).removeClass('div');
									$(this).addClass('div'+i);
									$('.div'+i).click(function(){
													
													
													
															   
															   for(u=0; u<=total; u++){
																        var numero = u -1;
																		$('.capa_escondida'+u).hide();	
																		$('.div'+u).removeClass('selected');
																		
															   }
											
														   
														   });
									
								   });
		   
		   function borrar_selected(){
			   for(r=0; r<=5; r++){
			   $('.div'+r).removeClass('selected');
			   
			    /*$('.div1').removeClass('selected');
				 $('.div2').removeClass('selected');	
				  $('.div3').removeClass('selected');*/
			   }
		   }
			   
		   
		   
			
			$('.capa_escondida0').show();
			$('.div0').addClass("selected");
			
			<!--enllacos-->
		
			
			$('.div0').click(function(event){
			    borrar_selected();
				//var divID= $(this).attr('href');
				
				event.preventDefault();
				$('.capa_escondida0').show();
				 $('.capa_escondida1').hide();
				 $('.capa_escondida2').hide();
				 $('.capa_escondida3').hide();
				
				 $(this).addClass("selected");
			});
				 
			 $('.div1').click(function(event){
			     borrar_selected();
				//var divID= $(this).attr('href');
				event.preventDefault();
				$('.capa_escondida0').hide();
				 $('.capa_escondida1').show();
				 $('.capa_escondida2').hide();
				 $('.capa_escondida3').hide();
				 
				 $(this).addClass("selected");
				 
			});
			 $('.div2').click(function(event){
			    borrar_selected();
			   // var divID= $(this).attr('href');
				event.preventDefault();
				
				 $('.capa_escondida0').hide();
				 $('.capa_escondida1').hide();  
				 $('.capa_escondida2').show();
				 $('.capa_escondida3').hide();
				  
				 $(this).addClass("selected");
			});
			 	 $('.div3').click(function(event){
			     borrar_selected();
			   // var divID= $(this).attr('href');
				event.preventDefault();
				
				 $('.capa_escondida0').hide();
				 $('.capa_escondida1').hide();  
				 $('.capa_escondida2').hide();
				 $('.capa_escondida3').show();
				  
				 $(this).addClass("selected");
			});
			
		}	
				
	});
	
	

 



 
