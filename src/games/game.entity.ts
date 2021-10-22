import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
@Unique(['email'])
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  image: string;

  @Column({ nullable: true, type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => User, (user) => user.games)
  user: User;
}
