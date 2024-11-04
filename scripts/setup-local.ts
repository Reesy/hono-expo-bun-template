import os from 'os';
import fs from 'fs';
import path from 'path';

/**
 * Retrieves the local IP address of the machine.
 * Prioritizes non-internal IPv4 addresses.
 * 
 * @returns {string | null} The local IP address or null if not found.
 */
function getLocalIPAddress(): string | null {
    const networkInterfaces = os.networkInterfaces();
    
    for (const interfaceName of Object.keys(networkInterfaces)) {
        const addresses = networkInterfaces[interfaceName];
        if (!addresses) continue;

        for (const addressInfo of addresses) {
            if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
                return addressInfo.address;
            }
        }
    }
    return null;
}

/**
 * Updates or adds the EXPO_PUBLIC_API_URL variable in the .env file.
 * If the .env file does not exist, it copies from .env-template.
 * 
 * @param {string} expoPublicURL - The URL to set for EXPO_PUBLIC_API_URL.
 */
function setExpoPublicURL(expoPublicURL: string): void {
    const envDirPath = path.join(__dirname, '../mobile');
    const envFilePath = path.join(envDirPath, '.env');
    const envTemplatePath = path.join(envDirPath, '.env-template');

    try {
        // Check if .env file exists; if not, copy from .env-template
        if (!fs.existsSync(envFilePath)) {
            if (fs.existsSync(envTemplatePath)) {
                fs.copyFileSync(envTemplatePath, envFilePath);
                console.log(`.env file not found. Copied from .env-template.`);
            } else {
                console.error('.env-template file does not exist.');
                process.exit(1);
            }
        }

        // Read the existing .env file
        const envFileContent = fs.readFileSync(envFilePath, 'utf-8');
        const envVariables = envFileContent.split('\n');

        let found = false;
        for (let i = 0; i < envVariables.length; i++) {
            if (envVariables[i].startsWith('EXPO_PUBLIC_API_URL=')) {
                envVariables[i] = `EXPO_PUBLIC_API_URL=${expoPublicURL}`;
                found = true;
                break;
            }
        }

        if (!found) {
            envVariables.push(`EXPO_PUBLIC_API_URL=${expoPublicURL}`);
        }

        // Write the updated content back to the .env file
        fs.writeFileSync(envFilePath, envVariables.join('\n'), 'utf-8');
        console.log(`EXPO_PUBLIC_API_URL set to ${expoPublicURL} in .env file.`);
    } catch (err) {
        console.error('Failed to update .env file:', err);
        process.exit(1);
    }
}

/**
 * Main function to retrieve the local IP address and set EXPO_PUBLIC_API_URL.
 */
function main(): void {
    const localIP = getLocalIPAddress();
    
    if (localIP) {
        const expoPublicURL = `http://${localIP}:3000`;
        setExpoPublicURL(expoPublicURL);
    } else {
        console.error('Unable to retrieve local IP address.');
        process.exit(1);
    }
}

// Execute the main function
main(); 