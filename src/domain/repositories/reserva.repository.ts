import { Reserva } from "../entities/reserva.entity";

export interface ReservaRepository {
  get(id: string): Promise<Reserva>;
  create(data: Reserva): Promise<Reserva>;
  getAll(): Promise<Reserva[]>;
}
