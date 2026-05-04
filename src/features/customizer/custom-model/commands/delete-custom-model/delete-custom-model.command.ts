import { Command } from '@nestjs/cqrs';

export class DeleteCustomModelCommand extends Command<void> {
  id!: number;
}
