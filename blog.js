  $(document).ready(function(e) {
     var limit = 5;
	 $(".loadMore li").slice(0, limit).show();
	 $(document).on('click','#load_more',function(e){
         limit += 5;
		 e.preventDefault();
	     $(".loadMore li").slice(0, limit).show();
	 });
	 //var lenght_name =  $(".loadMore li").length;
  });
