export const tweetsData = [  
    {
        handle: `@TrollBot66756542 ๐`,
        profilePic: `images/troll.jpg`,
        likes: 27,
        retweets: 10,
        tweetText: `Buy Bitcoin, ETH Make ๐ฐ๐ฐ๐ฐ low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: '4b161eee-c0f5-4545-9c4b-8562944223ee',
    },    
    {
        handle: `@Elon โ`,
        profilePic: `images/musk.png`,
        likes: 6500,
        retweets: 234,
        tweetText: `I need volunteers for a one-way mission to Mars ๐ช. No experience necessary๐`,
        replies: [
                  {
                handle: `@TomCruise โ`,
                profilePic: `images/tcruise.png`,
                tweetText: `Yes! Sign me up! ๐๐ฉ`,
            },
                  {
                handle: `@ChuckNorris โ`,
                profilePic: `images/chucknorris.jpeg`,
                tweetText: `I went last year๐ด`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '3c23454ee-c0f5-9g9g-9c4b-77835tgs2',
    },
        {
        handle: `@NoobCoder12`,
        profilePic: `images/flower.png`,
        likes: 10,
        retweets: 3,
        tweetText: `Are you a coder if you only know HTML?`,
        replies: [
            {
                handle: `@StackOverflower โฃ๏ธ`,
                profilePic: `images/overflow.png`,
                tweetText: `No. Onviosuly not. Go get a job in McDonald's.`,
            },
            {
                handle: `@YummyCoder64`,
                profilePic: `images/love.png`,
                tweetText: `You are wonderful just as you are! โค๏ธ`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '8hy671sff-c0f5-4545-9c4b-1237gyys45',
    },     
]

// BOILER PLATE FOR TWEETS
/*
<div class="tweet">
    <div class="tweet-inner">
        <img src="URL OF PROFILE PIC" class="profile-pic">
        <div>
            <p class="handle">TWEET HANDLE</p>
            <p class="tweet-text">TWEET TEXT</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    NUMBER OF REPLIES
                </span>
                <span class="tweet-detail">
                    NUMBER OF LIKES
                </span>
                <span class="tweet-detail">
                    NUMBER OF RETWEETS
                </span>
            </div>   
        </div>            
    </div>
</div>

*/

// BOILET PLATE FOR REPLIES
/* <div class="tweet-reply">
    <div class="tweet-inner">
        <img src="PROFILE PIC" class="profile-pic">
            <div>
                <p class="handle">HANDLE</p>
                <p class="tweet-text">TWEET TEXT</p>
            </div>
        </div>
</div> */