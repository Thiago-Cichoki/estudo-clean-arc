import { Column, PrimaryColumn } from 'typeorm';
import { Reserva } from '../../../../domain/entities/reserva.entity';

export class ReservaTypeOrmSchema implements Reserva {
  @PrimaryColumn()
  id: string;

  @Column({ type: String })
  name: string;

  @Column({ type: String })
  email: string;
  @Column({ type: String })
  phone: string;
  @Column({ type: Date })
  datetime: Date;
  @Column({ type: String })
  status: string;
  @Column({ type: Number })
  people_qtd: number;
  @Column({ type: Number })
  lugares_disponiveis: number;
}
