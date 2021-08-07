// const google = require("googleapis")
// const path = require("path");
// const fs = require("fs");
// const { drive } = require("googleapis/build/src/apis/drive");

// const CLIENT_ID = "47124253210-scd3q3p79rnkla5suo0520s1htu517cf.apps.googleusercontent.com";
// const CLIENT_SECRET = "acsujoE1ogJlA9jXjSpuC4jZ";
// const REDIRECT_URI = "https://developers.google.com/oauthplayground";
// const REFRESH_TOKEN = "1//04e_80qkz6kywCgYIARAAGAQSNwF-L9Irxq7Mru-gdiimrzD6jfGfp2pBTDOlVoxAZaSKREkEmgRpxgiHWNPRx-Y0vsd7KRxugPY";
// const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// oauth2Client.setCredentials({refresh_token : REFRESH_TOKEN});

// const filePath = path.join(__dirname) // path requre

// var count = 1
// async function uploadFile() {
//     try {
//         const response = await drive.files.create({
//             requestBody : {
//                 name : `profile_pic${count}`,
//                 mimeType : "image/JPG"
//             },
//             media : {
//                 mimeType : "image/JPG",
//                 body : fs.createReadStream(filePath)
//             }
//         });
//         console.log(response.data);
//         count++
//     }
//     catch(error) {
//         console.log(error.message);
//     }
// }

// uploadFile();