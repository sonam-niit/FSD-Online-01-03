const fs = require("fs").promises;
const path = require("path");

async function createDirectory(dirname) {
    try {
        await fs.mkdir(dirname);
        console.log("Directory Created");
    } catch (error) {
        console.log(error);
    }
}
// createDirectory("sonam");

async function createFile(path,message) {
    await fs.writeFile(path,message);
    console.log("File Created");
}
// createFile(path.join("sonam","file.txt"),"I am FSD Developer");

async function appendFile(path,message) {
    await fs.appendFile(path,message);
    console.log("File Updated");
}

appendFile(path.join("sonam","file.txt")," I am having 15 years of Exp.");

async function moveFile(oldpath,newPath) {
    await fs.rename(oldpath,newPath);
    console.log("File Moved");
}
moveFile(path.join("files","sample.txt"),path.join("files","data.txt"));

// fs.copyFile -> copy file
// fs.unlink -> delete file
// fs.rm() -> delete file or directory