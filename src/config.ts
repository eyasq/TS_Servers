import type { MigrationConfig } from "drizzle-orm/migrator";
process.loadEnvFile('../.env')

const migrationConfig:MigrationConfig = {
    migrationsFolder : "./db/migrations"
}

type Config = {
    api: APIConfig,
    db: DBConfig
}

 type APIConfig={
    fileserverHits: number,
    port:number 
};



 type DBConfig={
    url:string,
    migrationConfig:MigrationConfig;
}

export const config:Config = {
    api:{
        fileserverHits: 0,
        port: Number(process.env.PORT)
    },
    db:{
        url: process.env.DBURL ? process.env.DBURL : '',
        migrationConfig: migrationConfig
    }
}

