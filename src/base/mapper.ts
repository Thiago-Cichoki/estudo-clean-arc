export abstract class Mapper<TEntity, ResponseDto> {  
  abstract mapResponse(param: TEntity): ResponseDto;
}
