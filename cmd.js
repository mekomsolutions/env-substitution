const fs = require('fs');
const path = require('path')
const { randomUUID } = require('crypto');
const allowedExtensions = ['.json', '.yml', '.yaml', '.csv', '.xml', '.properties', '.txt'];
let clients = [];
if (process.env.CLIENTS) {
    clients = process.env.CLIENTS.split(',');
}

const processDirs = (dirPath) => {
    fs.readdirSync(dirPath).forEach(item => {
        const itemAbsPath = `${dirPath}/${item}`;
        const itemStat = fs.statSync(itemAbsPath);

        if (itemStat.isDirectory()) {
            processDirs(itemAbsPath);
        } else {
            if (allowedExtensions.includes(path.extname(itemAbsPath))) {
                fileEnvsubst(itemAbsPath);
            }
        }
    });
};

const fileEnvsubst = (itemAbsPath) => {
    let hydratedTemplate = fs.readFileSync(itemAbsPath, 'utf8');

    Object.entries(process.env).forEach(([name, value]) => {
        if (typeof value !== 'string') {
            // stringifying strings adds surrounding dquotes; we don't want that
            value = JSON.stringify(value)
        }

        // replace ${name}
        hydratedTemplate = hydratedTemplate.replace(new RegExp(`\\$\{${name}}`, 'g'), () => value);
        // replace $name
        hydratedTemplate = hydratedTemplate.replace(new RegExp(`\\$${name}`, 'g'), () => value);
    });


    fs.writeFileSync(itemAbsPath, hydratedTemplate);
};

const generateClientSecrets = (clients) => {
    for (let client of clients) {
        
        const key = `${client.toUpperCase()}_CLIENT_SECRET`;
        if(!(key in process.env)){
            process.env[key] = randomUUID();
        }
       
    }
}

generateClientSecrets(clients)

processDirs(process.env.FILE_PATH);