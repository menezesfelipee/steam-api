import { IsOptional, IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateGameDto {
  @IsOptional()
  id: string;

  @IsNotEmpty({ message: 'Informe o nome de usuário.' })
  @MaxLength(200, { message: 'O nome deve ter menos de 200 caracteres' })
  name: string;

  @IsOptional({ message: 'Copie e cole uma URL de imagem.' })
  image: string;
}
