import { CreateReservaUsecase } from '../../../application/use-case/create-reserva.usecase';
import { ListAllReservasUsecase } from '../../../application/use-case/list-all-reservas.usecase';
import express, { Express, Request, Response } from 'express';
import { ReservaInMemoryRepository } from '../../../infra/db/in-memory/reserva-in-memory.repository';

const app: Express = express();
app.use(express.json());
const port = 3000;

const routeRepo = new ReservaInMemoryRepository();

app.get('/reservas', async (_req: Request, res: Response) => {
  const listAllUseCase = new ListAllReservasUsecase(routeRepo);
  const output = await listAllUseCase.execute();
  res.json(output);
});

app.post('/reservas', async (req: Request, res: Response) => {
  const createUseCase = new CreateReservaUsecase(routeRepo);
  const output = await createUseCase.execute(req.body);
  res.status(201).json(output);
});

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
