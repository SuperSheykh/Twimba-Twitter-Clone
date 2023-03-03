import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
const tweetBtn = document.getElementById('tweet-btn')
const feed = document.getElementById('feed')
const newTweetInput = document.getElementById('new-tweet-input')
let replyStatus = 'hidden'

render()

// Creating the render function
function render(){
    let likeStatus = ''
    let retweetStatus =''
    let feetHtml = ''
    let repliesHtml = ''

    tweetsData.forEach(function(tweet){
        if(tweet.isLiked){
            likeStatus = 'liked'
        }
        if(tweet.isRetweeted){
            retweetStatus = 'retweeted'
        }

        if (tweet.replies.length){
            tweet.replies.forEach(function(reply){
                repliesHtml += `
                    
                    <div class="tweet-inner">
                        <img src="${reply.profilePic}" class="profile-pic">
                        <div>
                            <p class="handle">${reply.handle}</p>
                            <p class="tweet-text">${reply.tweetText}</p>
                        </div>
                    </div>
                `
            })
        }
       
        feetHtml += `   
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                        <i class="fa-regular fa-comment" data-reply="reply-${tweet.uuid}"></i>
                        ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                        <i class="fa-solid fa-retweet ${retweetStatus}" data-retweet="retweet-${tweet.uuid}"></i>
                        ${tweet.retweets}
                        </span>
                        <span class="tweet-detail">
                        <i class="fa-solid fa-heart ${likeStatus}" data-like="like-${tweet.uuid}"></i>
                        ${tweet.likes}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>
        <div class="tweet-reply hidden" id="reply-${tweet.uuid}">
            <div class="tweet-inner">
                <img src="images/scrimbalogo.png" class="profile-pic">
                <div>
                    <textarea 
                    class="new-reply" 
                    id="btn-${tweet.uuid}"
                    placeholder="Your reply here"
                    ></textarea>
                    <button 
                    data-btn="btn-${tweet.uuid}"
                    >Reply</button>
                </div>
            </div>
            ${repliesHtml}
        </div>

        `
        likeStatus = ''
        retweetStatus = ''
        repliesHtml = ''
    })
    
        feed.innerHTML = feetHtml
}

// THIS REGISTERS THE BUTTONS CLICKED AND DATA SAVED IN THOSE
// And what to do according to the buttons clicked.

document.addEventListener('click', function(e){
    if (e.target.dataset.like){
        handleLikeBtnClick(e.target.dataset.like)
    } else if (e.target.dataset.retweet) {
        handleRetweetBtnClick(e.target.dataset.retweet)
    } else if (e.target.dataset.reply) {
        handleReplyBtnClick(e.target.dataset.reply)
    } else if(e.target.id === 'tweet-btn'){
        createNewTweet()
    } else if (e.target.dataset.btn){
        newReplyTweet(e.target.dataset.btn)
    }
    
})

function handleLikeBtnClick(x){

const targetTweet = tweetsData.filter(function(tweet){
                    if (x === `like-${tweet.uuid}`){
                    return tweet
                      }
                    })[0]
    if (!targetTweet.isLiked){
        targetTweet.likes++
    } else {
        targetTweet.likes--
    }
    targetTweet.isLiked = !targetTweet.isLiked

    render()
    
}
function handleRetweetBtnClick(x){
    const targetTweet = tweetsData.filter(function(tweet){
        if(x === `retweet-${tweet.uuid}`){
            return tweet
        }
    })[0]
    if(!targetTweet.isRetweeted){
        targetTweet.retweets++
    } else {
        targetTweet.retweets--
    }
    targetTweet.isRetweeted = !targetTweet.isRetweeted
    render()

}
function handleReplyBtnClick(x){
    document.getElementById(x).classList.toggle('hidden')
}

function createNewTweet(){
if (newTweetInput.value){
    const newTweet = {
        handle: `@scrimba 💎`,
        profilePic: `images/scimbalogo.png`,
        likes: 100,
        retweets: 0,
        tweetText: `${newTweetInput.value}`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4()
    }
    tweetsData.unshift(newTweet)
    render()
}
    
}

function newReplyTweet(x){
    console.log('I was called!')
    const inputTweet = document.getElementById(x)
    console.log(inputTweet.value)

    if(inputTweet.value){
    const newTweet = {
            handle: `@scrimba`,
            profilePic: `images/scrimbalogo.png`,
            tweetText: `${inputTweet.value}`
        }

    const targetTweet = tweetsData.filter(function(tweet){
        if (x === `btn-${tweet.uuid}`){
            return tweet
        }
    })[0]
    targetTweet.replies.unshift(newTweet)
}
}