// draw topics from assignments var

$(document).ready(function() {

  var assignmentCount = 0;

  var assignments = [{
    article: ' <strong> Feb. 23, 1952; over North Korea. 11:15 p.m. </strong> Witness: Captain/B-29 navigator. One bluish cylinder, three times long as wide, with a tail and rapid pulsations, came in high and fast, made several turns and levelled out under B-29 which was evading mild antiaircraft fire.  45 second sighting. <br> <br> March 20, 1952; Centreville, Maryland.  10:42 p.m. Witnesses: WWl/WW2 veteran A.D. Hutchinson and son.  One dull orange-yellow saucer-shaped light flew straight and level very fast for 30 seconds. <br> <br> March 23, 1952; Yakima, Washington. 6:56 and 7 p.m. Witnesses:  pilot and radar operator of F-94 jet interceptor. On either occasion, a red fireball increased in brightness and then faded over 45 second span.  Stationary both times.',
  assignmentTopics: {
    topic1: 'Times and Dates',
    topic2: 'Locations',
    topic3: 'Military Intelligence'
  }
 },
 {
    article: 'Ingredients <br> <br>  cups all-purpose flour <br> 1 teaspoon baking powder <br> 1 teaspoon salt <br> 1 cup butter <br> 1 cup shortening <br> 3 cups white sugar <br> 6 large eggs <br> 3/4 cup milk <br> 1 teaspoon lemon extract <br> 1 teaspoon vanilla extract <br> <br> Directions <br> <br> Preheat oven to 325 degrees F (165 degrees C). Grease and flour a 9-inch fluted tube pan (such as a Bundt(R)). <br> <br> Mix flour, baking powder, and salt together in a bowl; sift the flour mixture twice into a separate bowl. Cream butter, shortening, and sugar in another large bowl until smooth; stir eggs and milk into creamed mixture until thoroughly combined. <br> <br> Gradually mix flour into moist ingredients to make a smooth batter; stir lemon and vanilla extracts into batter. Continue mixing until no sugar granules are visible. Pour batter into prepared tube pan. <br> <br> Bake in the preheated oven until top is springy and cake is set in the center, about 90 minutes. Let cake cool in the pan until sides separate from pan; turn out onto a rack to finish cooling.',
  assignmentTopics: {
    topic1: 'Measurements',
    topic2: 'Quantities',
    topic3: 'Foreign Foods'
  }
 }]

  function formatContent() {


    var whichAssignment = assignments[assignmentCount];
    var textArray = (whichAssignment.article).split(" ");

    function insertTopics() {
      $('.t1').html(whichAssignment.assignmentTopics.topic1);
      $('.t2').html(whichAssignment.assignmentTopics.topic2);
      $('.t3').html(whichAssignment.assignmentTopics.topic3);
    }
    insertTopics()

    for (i = 0; i < textArray.length; i++) {
      if (textArray[i].charAt(0) !== '<' ) {
        $('.content').append('<span class="item' + i + '">' + textArray[i] + '</span> ');
        console.log('<span class="item' + i + '">' + textArray[i] + '</span> ')
    } else {
      console.log(textArray[i]);
      $('.content').append(textArray[i]);
    }
  }

  $('span').click(function() {
    var theClass = this.className;
    console.log(theClass);
    $('.' + theClass).addClass('redacted');
  });

  $('.submitButton').click(function() {
    $('.content').empty();
    assignmentCount++
    formatContent();
  })

  } //end formatContent

  formatContent();

}); //end ready
