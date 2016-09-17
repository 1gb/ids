// click a word to apply redaction styling

$(document).ready(function() {

  var assignment1 = {
    article: ' <strong> Feb. 23, 1952; over North Korea. 11:15 p.m. </strong> Witness: Captain/B-29 navigator. One bluish cylinder, three times long as wide, with a tail and rapid pulsations, came in high and fast, made several turns and levelled out under B-29 which was evading mild antiaircraft fire.  45 second sighting. <br> <br> March 20, 1952; Centreville, Maryland.  10:42 p.m. Witnesses: WWl/WW2 veteran A.D. Hutchinson and son.  One dull orange-yellow saucer-shaped light flew straight and level very fast for 30 seconds. <br> <br> March 23, 1952; Yakima, Washington. 6:56 and 7 p.m. Witnesses:  pilot and radar operator of F-94 jet interceptor. On either occasion, a red fireball increased in brightness and then faded over 45 second span.  Stationary both times.',
  assignment1topics: {
    topic1: 'Communism',
    topic2: 'UFOs',
    topic3: 'Time Travel'
  }
 }

//   $('.content').html(assignment1.article);

  // var bodyText = assignment1.article;
//   var textArray = bodyText.split(" ");
  // $('.content').empty();

  var textArray = (assignment1.article).split(" ");

  for (i = 0; i < textArray.length; i++) {
    if (textArray[i].charAt(0) !== '<' ) {
      $('.content').append('<span class="item' + i + '">' + textArray[i] + '</span> ');
      console.log('<span class="item' + i + '">' + textArray[i] + '</span> ')
    } else {
      console.log(textArray[i]);
      $('.context').append(textArray[i]);
    }
  }

  $('span').click(function() {
    var theClass = this.className;
    console.log(theClass);
    $('.' + theClass).addClass('redacted');
  });
});
