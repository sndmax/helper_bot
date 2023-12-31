import dotenv from 'dotenv';

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, DB_NAME, DB_USERNAME, DB_PASSWORD, DISCORD_PLAYER_ROLE } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
    throw new Error('Missing environment variables');
}

if (!DB_NAME || !DB_USERNAME || !DB_PASSWORD) {
    throw new Error('Missing database configuration');
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    DISCORD_PLAYER_ROLE,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
};
