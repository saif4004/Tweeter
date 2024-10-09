/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }


  const createTweetElement = (tweet) => {

      const $article = $("<article></article>").addClass("tweet");
      const $header = $("<header></header>");
      const $footer = $("<footer></footer>");
      const $img = $("<img>").attr("src", tweet.user.avatars);
      const $h2 = $("<h2></h2>").text(tweet.user.name);
      const $h3 = $("<h3></h3>").text(tweet.user.handle);
      const $p = $("<p></p>").text(tweet.content.text);

      $header.append($img).append($h2).append($h3);
      
      $article.append($header).append($p).append($footer);

      return $article;
  }

  const $tweet = createTweetElement(tweetData);
  console.log($tweet); // to see what it looks like
  $('.tweet-container').append($tweet);
});
