$(document).on('pageinit','#splash',function(){ 
    setTimeout(function(){
	
        $.mobile.pageContainer.pagecontainer('change', '#screen', {
  transition: 'pop',
  reload    : true
});
    }, 3000);
});