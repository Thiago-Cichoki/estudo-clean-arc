import { UseCase } from "../../base/use-case";
import { Reserva } from "../../domain/entities/reserva.entity";
import { ReservaRepository } from "../../domain/repositories/reserva.repository";
import { ICreateReservaDto } from "../dto/request/create-reserva.dto";
import { ReservaResponseDto } from "../dto/response/reserva-response.dto";
import { ReservaResponseMapper } from "../mappers/reserva-response.mapper";

export class CreateReservaUsecase implements UseCase<ICreateReservaDto, ReservaResponseDto> {
  private createdReservaMapper: ReservaResponseMapper;

  constructor(private readonly reservaRepository: ReservaRepository) {
    this.createdReservaMapper = new ReservaResponseMapper();
  }

  async execute(params: ICreateReservaDto): Promise<ReservaResponseDto> {  
    const reserva = await Reserva.create(params.name, params.email, params.phone, params.people_qtd);
    const reservaCreated = await this.reservaRepository.create(reserva);
    return this.createdReservaMapper.mapResponse(reservaCreated);
    //processar o pagamento da reserva
    //joga para fila de pagamento    
    // enviar item para a fila do rabbit, para enviar o email de reserva efetuada
    // chamar o usecase para diminuir a quantidade de lugares disponiveis
    // mapear retorno    
  }
}
