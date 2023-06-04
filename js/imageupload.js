// posted popup.js
function open_popup_posted(){
  setTimeout(function() {window.location.assign("../pages/feed.html")}, 2000);
  popup.classList.add("openpop");
}

function open_popup_sign(){
  setTimeout(function() {window.location.assign("../pages/feed.html")}, 2000);
  popup.classList.add("openpop");
}

function uploadImage(){
		  
    var fileInput = document.createElement('input');
    fileInput.type = 'file';


    fileInput.addEventListener('change', function (e) {
      

      console.log('Uploaded file:', file);
    });

    fileInput.click();

    
  }
