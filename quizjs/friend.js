function FriendCheck(){

  var question1 = document.friendsquiz.q1.value;

  var questions = [document.friendsquiz.q1.value,document.friendsquiz.q2.value,document.friendsquiz.q3.value,
                  document.friendsquiz.q4.value,document.friendsquiz.q5.value,document.friendsquiz.q6.value,
                  document.friendsquiz.q7.value,document.friendsquiz.q8.value,document.friendsquiz.q9.value,
                  document.friendsquiz.q10.value,document.friendsquiz.q11.value,document.friendsquiz.q12.value,
                  document.friendsquiz.q13.value,document.friendsquiz.q14.value,document.friendsquiz.q15.value,
                  document.friendsquiz.q16.value,document.friendsquiz.q17.value,document.friendsquiz.q18.value,
                  document.friendsquiz.q19.value,document.friendsquiz.q20.value];

    var qno = 1;              
    var pb = 101;
    var count = 0;

    for(var i = 0; i<20; i++){

      if(questions[i] == "1"){
        var element = document.getElementById(qno);
        element.style.visibility = "visible";
        element.className = "rightAnswer";
        document.getElementById(pb).innerHTML = "Right"
        qno++;
        pb++;
        count++;
      }else{
        var element = document.getElementById(qno);
        element.style.visibility = "visible";
        element.className = "wrongAnswer";
        document.getElementById(pb).innerHTML = "Wrong"
        qno++;
        pb++;
      }
    }


    document.getElementById("score").innerHTML = "Your Score Is : " + count;
    

    document.getElementById("buttonli").style.visibility = "hidden"


}

