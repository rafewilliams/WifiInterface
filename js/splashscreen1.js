$(document).on('pageinit','#splash',function(){ 
    setTimeout(function(){
	
        $.mobile.pageContainer.pagecontainer('change', '#page1', {
  transition: 'pop',
  reload    : true
});
    }, 3000);
});