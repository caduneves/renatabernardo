$(document).ready(function() {
	
	$('.thumbnail').click(function(data){
		var contador = 0;
		var tst = document.getElementById('img-repo').children;
		for(var i = 0; i < tst.length;i++){
			if(tst[i].id == data.currentTarget.id){
				contador += 1;
			}
		}

		if(contador > 1){
			$('#controle').empty().append('<a class="carousel-control left" href="#modal-carousel" id="teste" data-slide="prev"></a>' +
			'<a class="carousel-control right" href="#modal-carousel" id="teste2" data-slide="next"></a>');
		}else{
			$('#controle').empty()
		}
	});
        
   /* activate the carousel */
   $("#modal-carousel").carousel({interval:false});

   /* change modal title when slide changes */
   $("#modal-carousel").on("slid.bs.carousel",       function () {
        $(".modal-title")
        .html($(this)
        .find(".active img")
        .attr("title"));
   });

   /* when clicking a thumbnail */
   $(".row .thumbnail").click(function(){
    var content = $(".carousel-inner");
    var title = $(".modal-title");
  
    content.empty();  
    title.empty();
  
  	var id = this.id;  
     var repo = $("#img-repo .item");
     var repoCopy = repo.filter("#" + id).clone();
     var active = repoCopy.first();
  
    active.addClass("active");
    title.html(active.find("img").attr("title"));
  	content.append(repoCopy);

    // show the modal
  	$("#modal-gallery").modal("show");
  });

});