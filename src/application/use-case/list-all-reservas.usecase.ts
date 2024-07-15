import { UseCase } from "../../base/use-case";
import { Reserva } from "../../domain/entities/reserva.entity";
import { ReservaRepository } from "../../domain/repositories/reserva.repository";
import { ReservaResponseDto } from "../dto/response/reserva-response.dto";
import { ReservaResponseMapper } from "../mappers/reserva-response.mapper";

export class ListAllReservasUsecase implements UseCase<any, ReservaResponseDto[]> {
  private reservaResponseMapper: ReservaResponseMapper;

  constructor(private readonly reservaRepo: ReservaRepository) {
    this.reservaResponseMapper = new ReservaResponseMapper();
  }
  
  async execute(): Promise<ReservaResponseDto[]> {
    const reservas = await this.reservaRepo.getAll(); 
    return reservas.map(elm => this.reservaResponseMapper.mapResponse(elm));
  }
}
