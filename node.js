function sendRequest() {
    fetch("https://chat.chatogo.com/system/encoded/action_news.php", {
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
            "cookie": "PHPSESSID=rl4omc0k2vkct2c84mbdeubs2f; __cf_bm=EAo9m9TATTyupQ_ZA.Ze_vBn4j0UShT9PyGQn.qcaIY-1685675481-0-AVMC80qIibo4CU14WdHGiX5mr7akhme8YsNlX+zNgeQJuE+wRrydtW3YMdRyX/U3aKpXgkq00mCkq7X5TBcyTE7sOZuMEYM4d0w9LpvO3MOl; bc_userid=1264887; bc_utk=086631d90eb5ec40ef275ff2e715b9a127916e07",
            "Referer": "https://chat.chatogo.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "content=LMFAO+WHO+GIVES+A+SHIT+L+STAFF%2CL+SITE%2CL+EVERYTHING.CORRUPT+ASS+WHOLES+WHO+EAT+THEIR+OWN+SHIT.COVERING+UP+FOR+THEIR+PREVIOUS+SUPERADMIN.DAMN+OWNER+WHO+SHITS+HIMSELF+AT+NIGHT&reply_news=74&token=7fb88f55b4202a6cae449860d370aba0",
        "method": "POST"
    })
    .then(response => {
        console.log("Request sent successfully");
        // You can add any desired actions here after the request is sent
    })
    .catch(error => {
        console.error("Error sending request:", error);
    });
}

// Send request immediately
sendRequest();

// Send request every 2 seconds
setInterval(sendRequest, 3);
