import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/type-orm.config';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './config/env.config';
import { CustomModule } from './features/customizer/custom.module';

@Module({
  imports: [
    CqrsModule.forRoot(),
    // JwtModule.register(jwtModuleConfig),
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot(configModuleOptions),
    CustomModule,
  ],
})
export class AppModule {}
