import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ErrorsModule } from './errors/errors.module';

@Module({
	imports: [CatsModule, ErrorsModule, TypeOrmModule.forRoot({
		type: 'mysql',
		host: '47.97.11.78',
		port: 3306,
		username: 'root',
		password: '_doA4dcB8gYG3',
		database: 'error_log',
		entities: [User],
		synchronize: true
	})],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
