// draw topics from assignments var

$(document).ready(function() {

  var assignmentCount = -1;

  var assignments = [
    {
      article: '<p> Welcome, agent. </p> <p> Today is your first day as an FBI Information Dissemination Specialist. </p> <p> Your work is straightforward: </p> <p> At the top of the screen will appear a list of topics that your government would like censored. </p> <p> Simply click on a word in the document that you think matches these topics and it will be redacted. </p> <p> When you are satisfied with your work, hit the "Submit" for the next assignment. </p> <p> Your country thanks you. </p>',
      assignmentTopics: {
        topic1: '',
        topic2: '',
        topic3: ''
      }
    },
    {
      article: 'Classified By: Ambassador James B. Smith for reasons 1.4 (B) and (D)  <br> <br> SUMMARY: <br> 1. (C) During a meeting on December 15, Dr. Barnett Rubin, Special Advisor to the Special Representative for Afghanistan and Pakistan, briefed Major General Dr. Saad al-Jabri, Special Advisor to the Assistant Minister of the Interior for Security Affairs, on the current U.S. thinking about  Afghanistan and Pakistan.  Al-Jabri was open to the idea of Taliban reintegration programs in Afghanistan, but cautioned that they would only succeed in a secure and stable environment.  In addition, he suggested the possibility of utilizing the Hajj and Umra as a way to facilitate the reintegration and reconciliation process.  He praised the President\'s recent speech on Afghanistan and Pakistan, and acknowledged the difficulty of stopping Taliban financing in the Gulf. <br> <br> End Summary. ',
      assignmentTopics: {
        topic1: 'Terrorism',
        topic2: 'Military Intel',
        topic3: 'Security Threats'
      }
    },
  {
    article: 'Feb. 23, 1952; over North Korea. 11:15 p.m. Witness: Captain/B-29 navigator. One bluish cylinder, three times long as wide, with a tail and rapid pulsations, came in high and fast, made several turns and levelled out under B-29 which was evading mild antiaircraft fire.  45 second sighting. <br> <br> March 20, 1952; Centreville, Maryland.  10:42 p.m. Witnesses: WWl/WW2 veteran A.D. Hutchinson and son.  One dull orange-yellow saucer-shaped light flew straight and level very fast for 30 seconds. <br> <br> March 23, 1952; Yakima, Washington. 6:56 and 7 p.m. Witnesses:  pilot and radar operator of F-94 jet interceptor. On either occasion, a red fireball increased in brightness and then faded over 45 second span.  Stationary both times.',
    assignmentTopics: {
      topic1: 'Times and Dates',
      topic2: 'Locations',
      topic3: 'Military Intelligence'
    }
  },
  {
    article: 'U.S AMBASSADOR TO NIGERIA <br> PLOT 1075 DIPLOMATIC  DRIVE <br> CENTRAL DISTRICT AREA, ABUJA <br> <br> Dear: Sir/ Madam, <br> This is Ambassador James F. Entwistle,  U.S. Ambassador to Nigeria. I shall be coming to your country for an Official meeting on Friday and I will be bringing your funds through An ATM MASTER CARD  of ( $900,000.00 ) along with me but this time i will not go through customs because as an Ambassador to Nigeria, I am a US Government agent and i have the veto power to go through customs. <br> As Soon as I am through with the meeting i shall then proceed to your Address. (send your cell phone number and the address where you want Me to bring the package). You have really paid so much in this delivery that makes me wonder. You are a  lucky person because I shall be bringing it myself and there is nothing anyone can do about it. Check here: Http://nigeria.usembassy.gov/biography.htm <br> There is absolutely going to be great doubt and distrust in your heart in respect to this email coupled with the fact that so many miscreants And imposters(scammers) have taken possession of the internet to Facilitate their nefarious deeds, thereby making it extremely difficult for genuine and legitimate business class persons to get Attention and recognition I am a USA Government agent and I have the veto power to go through customs, just like i helped R. BLACKWALL IN ERLANGER, and others received their funds through FedEx delivery service last year. <br> <br> Your package must be registered as an ambassadorial package for me to defeat all odds and the cost of registering it is $175. the fee must ben paid in the next 50 hours via western union or moneygram transfer. <br> <br> You should send the fee directly to the cargo registration office with the information below <br> Receiver\'s Name: Raji Ibrahim <br> Address: Lagos Nigeria <br> Text Question: In God? <br> Text Answer: We Trust <br> Amount $175 <br> Sender name and Address:.......... <br> <br> As soon as you send the fee make sure you send me the payment information. My flight is on Friday and i expect you to comply before then so that the delivery can be completed, if you do not comply, Then it will not be my fault if you do not receive your package. <br> <br> SIGN <br> <br> Ambassador James F. Entwistle <br> <br> U.S. Ambassador to Nigeria',
    assignmentTopics: {
      topic1: 'Foreign Agent',
      topic2: 'Espionage',
      topic3: 'Extortion'
    }
  },
  {
    article: 'Ingredients <br> <br>  cups all-purpose flour <br> 1 teaspoon baking powder <br> 1 teaspoon salt <br> 1 cup butter <br> 1 cup shortening <br> 3 cups white sugar <br> 6 large eggs <br> 3/4 cup milk <br> 1 teaspoon lemon extract <br> 1 teaspoon vanilla extract <br> <br> Directions <br> <br> Preheat oven to 325 degrees F (165 degrees C). Grease and flour a 9-inch fluted tube pan (such as a Bundt(R)). <br> <br> Mix flour, baking powder, and salt together in a bowl; sift the flour mixture twice into a separate bowl. Cream butter, shortening, and sugar in another large bowl until smooth; stir eggs and milk into creamed mixture until thoroughly combined. <br> <br> Gradually mix flour into moist ingredients to make a smooth batter; stir lemon and vanilla extracts into batter. Continue mixing until no sugar granules are visible. Pour batter into prepared tube pan. <br> <br> Bake in the preheated oven until top is springy and cake is set in the center, about 90 minutes. Let cake cool in the pan until sides separate from pan; turn out onto a rack to finish cooling.',
    assignmentTopics: {
      topic1: 'Measurements',
      topic2: 'Explosives',
      topic3: 'Foreign Products'
    }
  },
  {
    article: 'Scar: Now you wait here. Your father has a marvelous surprise for you. <br> Simba: Oooh. What is it? <br> Scar: If I told you, it wouldn\'t be a surprise, now would it? <br> Simba: If you tell me, I\'ll still act surprised. <br> Scar: Ho ho ho. You are such a naughty boy. <br> Simba: Come on, Uncle Scar. <br> Scar: No-no-no-no-no-no-no. This is just for you and your daddy. You know, a sort of... father-son... thing. <br> {Through Simba\'s expression, we see that he resents Scar\'s dismissive attitude, but soon shrugs it off.} <br> Scar: Well! I\'d better go get him. <br> Simba: I\'ll go with you. <br> Scar: {Loud, snapping tone} No! {regaining composure} Heh heh heh. No. Just stay on this rock. You wouldn\'t want to end up in another mess like you did with the hyenas... <br> Simba: {Shocked} You know about that? <br> Scar: Simba, everybody knows about that. <br> Simba: {Meek and embarrassed} Really? <br> Scar: Oh, yes. Lucky Daddy was there to save you, eh? {clearly enjoying himself; he puts a paw on Simba\'s shoulder} Oh... and just between us, you might want to work on that little roar of yours. Hmm? <br> {Scar starts to pull away} <br> Simba: Oh... Okay... <br>{Scar pats Simba roughly on the head, then moves off.} <br> Simba: Hey, Uncle Scar, will I like the surprise? <br> Scar: {Turning back over his shoulder} Simba, it\'s to DIE for.',
    assignmentTopics: {
      topic1: 'Foreign Dignitaries ',
      topic2: 'Betrayal',
      topic3: 'Attempted Regicide'
    }
  },
  {
    article: 'Thank you, agent. <br> <br> That\'s all of the assignments we have for you today. <br> <br> Please hit the "Submit" button to restart the workspace for the next agent. <br> <br> And remember, the information you viewed in these files remains classified.',
    assignmentTopics: {
      topic1: '',
      topic2: '',
      topic3: ''
    }
  },
];


    //----------------
    function formatContent() {
      assignmentCount++;
      if (assignmentCount >= 7) {
        assignmentCount = 0;
      }
      var whichAssignment = assignments[assignmentCount];
      var textArray = (assignments[assignmentCount].article).split(" ");

      function insertTopics() {
        $('.t1').html(whichAssignment.assignmentTopics.topic1);
        $('.t2').html(whichAssignment.assignmentTopics.topic2);
        $('.t3').html(whichAssignment.assignmentTopics.topic3);
      };

      insertTopics();

      for (i = 0; i < textArray.length; i++) {
        if (textArray[i].charAt(0) !== '<' ) {
          $('.content').append('<span class="item' + i + '">' + textArray[i] + '</span> ');
        } else {
          $('.content').append(textArray[i]);
        }
      }

    $('span').click(function() {
      var theClass = this.className;
      $('.' + theClass).addClass('redacted');
    });

  }

  $('.submitButton').click(function() {
    $('.content').empty();
    console.log('the assignment count is:' + assignmentCount);
    formatContent();
  });

  formatContent();

}); //end ready
