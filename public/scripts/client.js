
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  
  const handleUserTweet = (event) => {
    event.preventDefault();
    const userTweet = $("#user-tweet").serialize();

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: userTweet,
      success: (response) => {
        console.log('Success: ',response);
      },
      error: (error) => {
        console.error('Error',error);
      }
    })
  };
  const loadTweets = () => {
    $.ajax ({
      method: 'GET',
      url: '/tweets',
      dataType: 'JSON',
      success: (data) => {
        renderTweets(data);
        
      },
      error: (error) => {
        console.log('this request failed and this was the error', error);
      },
    });
  }
  loadTweets();
  $('#user-tweet').submit(handleUserTweet);
  


  const createTweetElement = (tweet) => {

      const $article = $("<article></article>").addClass("tweet");
      const $header = $("<header></header>");
      const $contentHeaderDiv = $("<div></div>").addClass("content-header");
      const $img = $("<img>").attr("src", tweet.user.avatars);
      const $h2 = $("<h2></h2>").text(tweet.user.name);
      const $h3 = $("<h3></h3>").text(tweet.user.handle);
      const $p = $("<p></p>").text(tweet.content.text);

      //Footer with the icons and span
      const $footer = $("<footer></footer>");
      const $iconDiv = $("<div></div>");
      const $faHeart = $("<i class='fa-solid fa-heart'></i>");
      const $faFlag = $("<i class='fa-solid fa-flag'></i>");
      const $faRetweet = $("<i class='fa-solid fa-retweet'></i>");

      //Post Time
      const createdAtTime = timeago.format(tweet.created_at);
      const $span = $("<span></span>").text(createdAtTime);


      $contentHeaderDiv.append($img).append($h2);

      $iconDiv.append($faHeart).append($faFlag).append($faRetweet);

      $header.append($contentHeaderDiv).append($h3);

      $footer.append($span).append($iconDiv);
      
      $article.append($header).append($p).append($footer);

      return $article;
  }

  const renderTweets = function(tweets) {
    for (const $tweet of tweets) {
      $('.tweets-container').append(createTweetElement($tweet));
    }
  }
});
