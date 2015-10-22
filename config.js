//opciones de configuración y los valores necesarios para nuestra aplicación
var config = {}

config.host = process.env.HOST || "https://nachoiv.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "449JIw2lhDvPptl1BUVIFBL/nPeZKUMu97Ojs3q/VuPXPyxsdIjYFTlbQD2d5uZuA/BbGWsqg1GqCcm6iYi2kQ==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;