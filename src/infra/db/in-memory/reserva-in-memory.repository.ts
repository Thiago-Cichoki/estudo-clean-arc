import { Reserva } from "../../../domain/entities/reserva.entity";
import { ReservaRepository } from "../../../domain/repositories/reserva.repository";

export class ReservaInMemoryRepository implements ReservaRepository {
  reservas: Reserva[];

  constructor() {
    this.reservas = [];
  }

  async create(data: Reserva): Promise<Reserva> {
    await this.reservas.push(data);
    return data;
  }

  async get(id: string): Promise<Reserva> {
    return await this.reservas.find((elm) => elm.id === id);
  }

  async getAll(): Promise<Reserva[]> {
    return this.reservas;
  }  
}
