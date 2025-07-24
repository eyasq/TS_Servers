process.loadEnvFile('../.env');
export const config = {
    api: {
        fileserverHits: 0,
        port: Number(process.env.PORT)
    },
    db: {
        url: process.env.DBURL ? process.env.DBURL : ''
    }
};
