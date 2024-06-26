#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
    try{
        execSync(`${command}`, {stdio: 'inherit'});
    }catch(e){
        console.error(`Failed to execute ${command}`,e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheck = `git clone --depth 1 https://github.com/Rupa-Rd/Front-end-template.git ${repoName}`;
const installCom = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const check = runCommand(gitCheck);
if(!check) process.exit(-1);

console.log(`Installing dependencies ${repoName}`);
const installDeps = runCommand(installCom);
if(!installDeps) process.exit(-1);

console.log("Congratulations! You're ready to work!");