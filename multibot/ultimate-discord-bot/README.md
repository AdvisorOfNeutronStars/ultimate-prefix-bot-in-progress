# Ultimate Discord Bot

## Overview
The Ultimate Discord Bot is a multi-function bot built using Node.js and Discord.js. It supports both prefix and slash commands for various functionalities, including moderation and utility commands.

## Features
- **Moderation Commands**: Ban, kick, and mute users.
- **Utility Commands**: Ping and info commands for useful information.
- **Event Handling**: Responds to events such as when the bot is ready.
- **Configuration**: Centralized configuration for easy management.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ultimate-discord-bot.git
   ```

2. Navigate to the project directory:
   ```
   cd ultimate-discord-bot
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your bot token:
   ```
   DISCORD_TOKEN=your_bot_token
   PREFIX=!
   ```

## Usage

To start the bot, run:
```
node src/index.js
```

## Commands

### Moderation Commands
- `!ban @user`: Bans a user from the server.
- `!kick @user`: Kicks a user from the server.
- `!mute @user`: Mutes a user in the server.

### Utility Commands
- `!ping`: Responds with "Pong!".
- `!info`: Provides information about the bot.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.