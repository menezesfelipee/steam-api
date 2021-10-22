import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';
import { Game } from 'src/games/game.entity';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Informe um endereço de email.' })
  @IsEmail({}, { message: 'Informe um email válido.' })
  @MaxLength(200, {
    message: 'O endereço de email deve ter menos de 200 caractéres.',
  })
  email: string;

  @IsNotEmpty({ message: 'Informe o nome do usuário.' })
  @MaxLength(200, { message: 'O nome deve ter menos de 200 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'Informe uma senha' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  password: string;

  @IsNotEmpty({ message: 'Informe a confirmação de senha' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  passwordConfirmation: string;

  @IsOptional()
  games: Game[];
}
