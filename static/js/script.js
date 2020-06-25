function setToast(message,type){
    var node = document.createElement("div");
    var t = 'toast-' + type;
    node.setAttribute('class','toast ' + t);
    var t = document.createTextNode(message);
    node.appendChild(t);
    const container = document.getElementsByClassName("toast-container")[0];
    container.appendChild(node);
    setTimeout(() => {
        container.removeChild(node);
    },4000);
}



$( document ).ready(function() {

    var modal = document.getElementById("myModal");
    // Get the button that opens the <modal></modal>
    var btn = document.getElementById("btn-open-modal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
})