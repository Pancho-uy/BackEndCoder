import express from "express";
const router = express.Router();
import { fork } from 'child_process';
import { cpus } from 'os';

const procesadores = cpus().length;

router.get('/info', (_req, res) => {
    const processInfo = {
        args: process.argv.slice(2),
        platform: process.platform,
        version: process.version,
        title: process.title,
        execPath: process.execPath,
        processId: process.pid,
        rss: Math.round(process.memoryUsage().rss/(1024*1024))+"MB",
        cpus: procesadores,
    };
    
    res.status(200).json(processInfo);
})

const randomNumbersGeneratorFork = fork('./src/functions/randomNumbersGenerator.js')

router.get('/randoms', (req, res) => {
    
    const cant = req.query.cant || 100000;
    
    randomNumbersGeneratorFork.on('message', (resultado) => {
        res.status(200).json(resultado);
    })
    randomNumbersGeneratorFork.send(cant);
    
})

export default router;