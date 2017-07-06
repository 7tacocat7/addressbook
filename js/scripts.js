$(document).ready(function(){
  $("#myForm").submit(function(event){
    var thisName = $("input#name").val();
    var thisAddress = $("input#address").val();
    var thisEmail = $("input#email").val();
    var thisNumber = $("input#number").val();
    $("div#addressRow").prepend('<div class="panel panel-default"><div class="panel-heading">' + thisName + '</div><div class="panel-body"><ul><li>Address: ' + thisAddress +'</li><li>Email: ' + thisEmail + '</li><li>Phone Number: ' + thisNumber + '</li></ul></div></div>');

    event.preventDefault();
  });
});

// This is the code, formatted nicely
//
// $("div#addressRow").prepend('
//   <div class="panel panel-default">
//     <div class="panel-heading">'
//       + thisName + '
//     </div>
//     <div class="panel-body">
//      <ul>
//       <li>Address: ' + thisAddress +'</li>
//       <li>Email: ' + thisEmail + '</li>
//       <li>Phone Number: ' + thisNumber + '</li>
//      </ul>
//     </div>
//   </div>');
//
