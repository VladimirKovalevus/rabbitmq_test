import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport} from '@nestjs/microservices'
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "SERVICE_A",
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://192.168.11.232:5672'],
          queue: 'messages',
          queueOptions:{
            durable: false
          },
          
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
