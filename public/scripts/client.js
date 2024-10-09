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
      const $contentHeaderDiv = $("<div></div>").addClass("content-header");
      const $img = $("<img>").attr("src", tweet.user.avatars);
      const $h2 = $("<h2></h2>").text(tweet.user.name);
      const $h3 = $("<h3></h3>").text(tweet.user.handle);
      const $p = $("<p></p>").text(tweet.content.text);

      //Footer with the icons 
      const $footer = $("<footer></footer>");
      const $iconDiv = $("<div></div>");
      const $faHeart = $("<i class='fa-solid fa-heart'></i>");
      const $faFlag = $("<i class='fa-solid fa-flag'></i>");
      const $faRetweet = $("<i class='fa-solid fa-retweet'></i>");
      const $span = $("<span></span>").text(tweet.created_at);

      $contentHeaderDiv.append($img).append($h2);

      $iconDiv.append($faHeart).append($faFlag).append($faRetweet);

      $header.append($contentHeaderDiv).append($h3);

      $footer.append($span).append($iconDiv);
      
      $article.append($header).append($p).append($footer);

      return $article;
  }

  const $tweet = createTweetElement(tweetData);
  console.log($tweet); // to see what it looks like
  $('.tweet-container').append($tweet);
});
