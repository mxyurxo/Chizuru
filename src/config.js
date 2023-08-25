require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "ODI4NjA1MzczODI4MzAwODEw.GqLIXC.jM7N9t_M6ox-VTKYOY3Lpw05MNkEWFSJSK0-xY",  // your bot token
    clientID: process.env.CLIENT_ID || "828605373828300810", // your bot client id
    prefix: process.env.PREFIX || "$", // bot prefix
    ownerID: process.env.OWNERID || "812588118313795604", //your discord id
    SpotifyID: process.env.SPOTIFYID || "e6f84fbec2b44a77bf35a20c5ffa54b8",
    SpotifySecret: process.env.SPOTIFYSECRET || "498f461b962443cfaf9539c610e2ea81",
    mongourl: process.env.MONGO_URI || "mongodb+srv://arjunn:premiumop123@cluster0.dpw1dmi.mongodb.net/?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || 0x303236, // embed colour
    logs: process.env.LOGS || "1112665707528859738", // channel id for guild create and delete logs
    links: {
        img: process.env.IMG || 'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg', //setup system background image 
        support: process.env.SUPPORT || 'https://discord.gg/JT5UpDrcuv', //support server invite link
        invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1112270337548230738&permissions=39722008444992&scope=bot' //bot invite link
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "lava.link",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "kronix",
            secure: parseBoolean(process.env.NODE_SECURE || "flase"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
