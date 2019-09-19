function rigby(personality, height, favCity, skills)
{
  var threeOfFive = 0;
  var isItRigby = false;
  if (personality === "1")
  {
    threeOfFive ++;
  }
  if (height === "1")
  {
    threeOfFive ++;
  }
  if (favCity === "1")
  {
    threeOfFive ++;
  }
  if (skills === "1")
  {
    threeOfFive ++;
  }
  if (threeOfFive >= 3)
  {
  isItRigby = true;

  }
return isItRigby;
}

alert('hi');

$(document).ready(function() {
  $("form#celebrity").submit(function(event){
      var name = $("input#name").val();
      var personality = $("select#personality").val();
      var height = $("select#height").val();
      var favCity = $("select#fav-city").val();
      var skills = $("select#skills").val();



         var isRigby = rigby(personality, height, favCity, skills);
        if(isRigby === true) {
          $("#rigby").show();
        }
      }
      // rigby=1,1,1,1
      // benson= 2,,3,2,2
      // skips= 3,2,3,3

      // var result;
      // if (personality === 1) (height === 1) (favcity)

      $('.name').text(name);
  });
});
