import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'rentngo',

      // Automatically detect any *.entity.ts or *.entity.js file
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,

      synchronize: true,
    }),
    CarModule,
  ],
})
export class AppModule {}
