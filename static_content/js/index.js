var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnWhats").style.display = "flex";
        document.getElementById("btnWhats").classList.remove("btn--green");
        document.getElementById("btnWhats").classList.add("btn--green__fixed");
        document.getElementById("btnWhats").style.top = document.documentElement.scrollTop + 16 + "px";
        console.log(document.documentElement.scrollTop);
    } else {
        document.getElementById("btnWhats").style.display = "flex";
        document.getElementById("btnWhats").classList.remove("btn--green__fixed");
        document.getElementById("btnWhats").classList.add("btn--green");
        document.getElementById("btnWhats").style.top = null;
    }
    
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var mail = document.getElementById("money");

mail.addEventListener("click", function(){
    window.open("mailto:guimaraesabner@gmail.com", "_blank");
});
