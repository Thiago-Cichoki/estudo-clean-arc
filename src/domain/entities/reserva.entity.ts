import { GenerateIdUtil } from "../../shared/utils/generate-ids.util";

export class Reserva {
  id: string;
  name: string;
  email: string;
  phone: string;
  datetime: Date;
  status: string;
  people_qtd: number;
  lugares_disponiveis: number;

  private constructor(
    id: string,
    name: string,
    email: string,
    phone: string,
    status: string,
    people_qtd: number,
  ) {
    if (!this.id) {
      this.id = id;
    }

    this.name = name;

    if (!this.email) {
      this.email = email;
    }

    this.phone = phone;
    this.status = status;

    if (!this.lugares_disponiveis) {
      this.lugares_disponiveis = 10;
      if (people_qtd) {        
          this.lugares_disponiveis -= people_qtd;
      }
    } else {
      const lugares_disponiveis = this.lugares_disponiveis - people_qtd;
      if (lugares_disponiveis <= 0) {
        this.lugares_disponiveis = 0;
        throw new Error("Acabou os lugares");        
      }
    }
  }

  static create(
    name: string,
    email: string,
    phone: string,
    people_qtd: number,
  ): Reserva {   
    if (!name) {
      throw new Error("name is required");
      
    }
    const id = GenerateIdUtil.generateUniqueNumericId();
    const status = 'reserved';
    return new Reserva(id, name, email, phone, status, people_qtd);
  }

  /*static aprovarReserva(rese): Reserva {
    const status = 'aproved';
    return new Reserva()
  }*/
}
