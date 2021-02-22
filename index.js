require('dotenv').config({path: __dirname + '/.env'})

const { App } = require('@slack/bolt');

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

app.command('/trailheaduser', async ({ command, ack, say }) => {
    // Acknowledge command request
    await ack();
    await say(`${command.text}`);
  });

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
