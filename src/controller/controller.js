import { Router } from "express";
import { readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, "../../utils/list.json");

class Routes {
    constructor () {
        this.router = Router();
        this.initRoutes();
    }
    
    initRoutes () {
        this.router.post("/phones", async(req, res) => {
            try {
                const body = req.body
                const curretFile = JSON.parse(readFile(filePath));
                this.phones.push(curretFile);
                const fileX = await writeFile(curretFile, body, err => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Success!!")
                    }
                })
                res.send(fileX)
            } catch (err) {
                console.error(err);
                res.json(err);
        }
        });

        this.router.get('/', async (req, res) => {
            try {
                const file = await readFile(filePath, "utf-8");
                const phonesFromFile = JSON.parse(file)
                res.json(phonesFromFile)
            }catch (err) {
                res.json(err)
            }
        })
    }
}

const fnRoutes = new Routes();
const fnMain = fnRoutes.router;

export default fnMain;
