try {
    const allmain = document.getElementsByClassName("card-body");
    for (var i = 0;  i  < allmain.length ; i++) {
        var str = allmain[i].children[0].children[0].innerHTML;
        allmain[i].children[2].children[0].children[0].download = str; 
    }
  }
  catch(err) {
    console.log("ta7ya masr xD");
  }