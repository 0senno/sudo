// Function to fetch jokes from the URL and send the request
const sendJokeRequest = () => {
  fetch("https://raw.githubusercontent.com/0senno/sudo/main/senno")
    .then(response => response.text())
    .then(data => {
      // Randomly select a joke from the data
      const jokes = data.split("\n");
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

      // Send the request to the endpoint with the random joke as the content
      fetch("https://www.chat-avenue.com/kids/system/encoded/action_wall.php", {
        "headers": {
          "accept": "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "sec-ch-ua": "\"Chromium\";v=\"112\", \"Not_A Brand\";v=\"24\", \"Opera GX\";v=\"98\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          "cookie": "PHPSESSID=d4c43a72afc067e63a55e472c0ecb5b1; cc_userid=720739; cc_utk=3901fc8dd07018f78e9406e3777f398983d27ec4; tc_userid=10211246; tc_utk=5dd2216438a83952aa81befc11b2ffc13281e782; __stripe_mid=80adecac-e168-40cb-8ed7-4b588ced88595ea745; sc_userid=3829230; sc_utk=5cab16b6feb7ed0b01de33d2ba7927a52bbc2813; dc_userid=1487637; dc_utk=a6c5ae671d86108712bcecf12698c72c8e5975d2; gc_userid=25265531; gc_utk=be5d4ec846417ee6d872728ec50c858f2c45c51b; live_userid=474433; live_utk=6044af026075fb994c53bf362f3ae386dc43fca5; sports_userid=140845; sports_utk=4db466c542784e1676745b33b7a5d2e18fac2783; mc_userid=250355; mc_utk=003722fee4eb27d36fe3a6c04fad42b49843190e; mob_userid=718674; mob_utk=9caedb3d2c7747a0bd88bca8beb51322a06009ae; sex_userid=8336288; sex_utk=a95f71325a59fe517052b8d99ae0e1ffbd77303c; lc_userid=5293606; lc_utk=d49e1f636ce987129012f50767fa30b714ba0277; vgc_userid=357631; vgc_utk=57121080aafbc0f2b9a417e727b22dc63ee685f3; amp_6e403e=rfbT86DFD-K7z8cuz2gAsO.d2VuZGxlMTEyMkBnbWFpbC5jb20=..1guacdt6n.1guacgnha.0.2s.2s; kc_userid=3527668; kc_utk=729041310ad6a3e35edd29bf89a2bdc62ada0888; gen_userid=4828537; gen_utk=f89e35c6e7bf1c50bd49f29c22b385e0ed892968; _ga=GA1.1.1869442822.1680312479; bc_userid=3743158; bc_utk=405ac4614ce1e1e97d38571c893f0d9db56eccfa; _tea_utm_cache_369768=undefined; _ga_7XWWTPFBB6=GS1.1.1685593055.72.1.1685594559.0.0.0; __cf_bm=UgtR8fHdeuEiR9Ps1ZLMwfIVy5hwr45Dqtp6W5P6H8I-1685595743-0-AU2XRM3S0L9a9VS1OgrCf/UEN2OjQ1bd2ZDFawt6331rH7MNzUvfFsNG0L9r7q5LfJRY9hKdwwoZgovI7E/35SnYa2s19WIODIRujOusz9K6",
          "Referer": "https://www.chat-avenue.com/kids/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `content=${encodeURIComponent(randomJoke)}&reply_to_wall=338350&token=32bce7e19bd9e07faab1466a503fe214`,
        "method": "POST"
      })
        .then(response => response.json())
        .then(result => {
          console.log(result); // Handle the response as needed
        })
        .catch(error => {
          console.error(error); // Handle any errors that occur during the request
        });
    })
    .catch(error => {
      console.error(error); // Handle any errors that occur while fetching the jokes
    });
};

// Send the request initially
sendJokeRequest();

// Send the request every 2 seconds
setInterval(sendJokeRequest, 2);
