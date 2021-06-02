import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroDeExcecaoHttp } from './common/filtros/filtro-de-excecao-http.filter';
import { TransformaRespostaInteceptor } from './core/transforma-resposta.inteceptor';
import { UsuarioModule } from './usuario/usuario.module';
//top
@Module({
  imports: [
    UsuarioModule
  ],
  controllers: [
                                  
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInteceptor
    }           
  ],
})
export class AppModule {}
