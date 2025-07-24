process.loadEnvFile('./.env');
const migrationConfig = {
    migrationsFolder: "./db/migrations"
};
export const config = {
    api: {
        fileserverHits: 0,
        port: Number(process.env.PORT),
        platform: process.env.PLATFORM ? process.env.PLATFORM : ''
    },
    db: {
        url: process.env.DBURL ? process.env.DBURL : '',
        migrationConfig: migrationConfig
    }
};
