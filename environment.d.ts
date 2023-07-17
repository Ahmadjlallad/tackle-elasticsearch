declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT: number;
            ELASTIC_USERNAME: string;
            ELASTIC_PASSWORD: string;
            ELASTIC_URL: string;
        }
    }
}
export {}
