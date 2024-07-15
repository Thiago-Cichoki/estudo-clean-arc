import { Mapper } from '../../base/mapper';
import { Reserva } from '../../domain/entities/reserva.entity';
import { ReservaResponseDto } from '../dto/response/reserva-response.dto';

export class ReservaResponseMapper
  implements Mapper<Reserva, ReservaResponseDto>
{
  mapResponse(param: Reserva): ReservaResponseDto {
    return {      
      id: param.id      
    };
  }
}
