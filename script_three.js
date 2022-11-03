// const targetDiv = document.getElementById("vt_panel");

// function showPanel () {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "block";
//   }
// };

myVideo = document.getElementById("back_video_player");
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
        }
    else  {
        myVideo.pause();
        }
} 

$(document).ready(function(){
  $("#showpanel_1").click(function(){
    $("#panel_1").show("slow");
  });

  $("#close_panel_1").click(function(){
    $("#panel_1").hide("slow");
  });

  $("#showpanel_2").click(function(){
    $("#panel_2").show("slow");
    playPause();
  });

  $("#close_panel_2").click(function(){
    $("#panel_2").hide("slow");
    playPause();
  });

  $("#showpanel_3").click(function(){
    $("#panel_3").show("slow");
  });

  $("#close_panel_3").click(function(){
    $("#panel_3").hide("slow");
  });

  $("#building_button").click(function(){
    $("#building_button").hide();
    $("#model1").attr('src', 'pages/building.html');
    $("#bhk_1").prop('disabled', false);
    $("#bhk_2").prop('disabled', false);
  });

  $("#bhk_1").click(function(){
    $("#building_button").show();
    $("#model1").attr('src', 'pages/1bhk.html');
    $("#bhk_1").prop('disabled', true);
    $("#bhk_2").prop('disabled', false);
  });

  $("#bhk_2").click(function(){
    $("#building_button").show();
    $("#model1").attr('src', 'pages/2bhk.html');
    $("#bhk_2").prop('disabled', true);
    $("#bhk_1").prop('disabled', false);
  });
});
