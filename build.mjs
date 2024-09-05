import file_system from 'fs'
import archiver from 'archiver'



const output = file_system.createWriteStream('./build/backend-api.zip');
const archive = archiver('zip');

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);

//the folder where we taking the files
archive.directory("dist/", false);

archive.finalize();