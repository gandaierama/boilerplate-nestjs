import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth.local';
import { UsersModule } from './users/users.module';
import { JwtStrategy } from './auth.jwt';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';


@Module({
	imports: [
		UsersModule,
		PassportModule,
		JwtModule.register({
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '60s' },
		}),
	],
	providers: [AuthService, LocalStrategy],
	exports: [AuthService],
})
export class AuthModule {}
