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
    // migrationConfig:MigrationConfig;
}

export const config:Config = {
    api:{
        fileserverHits: 0,
        port: Number(process.env.PORT)
    },
    db:{
        url: process.env.DBURL ? process.env.DBURL:''
    }
}

