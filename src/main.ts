import express, { Express, Request, Response } from 'express';
import { rebotNukihub } from './nukihub/nukihub.service';

const app: Express = express();
const port: number = 3000; // El puerto en el que escuchará el servidor

app.use(express.json());

// Ruta POST para iniciar el proceso de compra
app.post('/reboot-nukihub', async (req: Request, res: Response) => {

    try {
        const resultado = await rebotNukihub();
        res.json({ mensaje: resultado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al reniciar nukihub: ' + error });
    }

});


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
