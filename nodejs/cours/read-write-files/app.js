// importer le filesystem
// import fs from 'node:fs';

/**
 * lecture d'un ficher avec nodejs
 */
// méthode synchrone (attend que le fichier soit lui avant de passer à autre instruction)
// const readContent = fs.readFileSync('demo.txt', 'utf8');
// console.log(readContent);

// méthode asynchrone (exécute les instructions au meme moment)
// const writeContent = fs.readFile('demo.txt', {encoding: 'utf8'}, (err, data) => {
//     console.log(data);
// })

/**
 * l'utilisation des promesses
 */
import { 
    readFile, 
    stat, 
    writeFile,
    open,
    watch,
    readdir
} from 'node:fs/promises';
// const readContentP = await readFile('demo.txt', {encoding: 'utf8'});
// console.log(readContentP)

// const readContentPromiseAll = await Promise.all([
//     readFile('demo.txt', {encoding: 'utf8'}),
//     readFile('package2.json', {encoding: 'utf8'})
// ]);
// console.log(readContentPromiseAll)

/**
 * l'écriture dans les fichiers avec nodejs
 */
// await writeFile('demo.txt', "\nBonjour tout le monde", {
//     flag: 'a'
// });

//avoir les infos sur un fichier
// const infos = await stat('demo.txt');
// console.log(infos)

/**
 * ouverture d'un fichier avec nodejs
 */
// const openFile = await open('demo.txt', 'a');
// openFile.write("\nJe viens d'ajouter une nouvelle ligne !");
// openFile.close();

/**
 * Observer les dossiers/fichiers
 */
// const observe = watch('./');
// for await (const evt of observe) {
//     console.log(evt);
// }

/**
 * Exercice :
 * Lecture d'un dossier avec affichage du contenu
 * en spécifiant si c'est un dossier ou un fichier avec la taille
 * Type - Name - Size
 * F - app.js - 32ko
 * D - demo
 */

async function folderContentInfos(path) {
    try {
        const files = await readdir(path, {withFileTypes: true});
        // console.log(files)
        for (const file of files) {
            // console.log(file)

            // if(file.isFile()) {
            //     const stats = await stat(path+ '/' +file.name);
            //     console.log(`F - ${file.name} - ${stats.size}ko`);
            // } else {
            //     console.log(`D - ${file.name}`);
            // }

            const type = file.isDirectory() ? 'D' : 'F';
            const affichage = [
                type,
                file.name
            ]
            if(file.isFile()) {
                const size = (await stat(path+ '/' + file.name)).size;
                affichage.push(`${size}k0`);
            }
            console.log(affichage.join(' - '))
        }
    } catch (e) {
        console.error(e);
    }
}
console.log(folderContentInfos('./'))

