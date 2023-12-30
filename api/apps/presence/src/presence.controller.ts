import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

import { AuthGuard, SharedService } from '@app/shared';

import { PresenceService } from './presence.service';

@Controller()
export class PresenceController {
  constructor(
    private readonly presenceService: PresenceService,
    private readonly sharedService: SharedService,
    //TEMP
    private readonly authGuard: AuthGuard,
  ) {}

  @MessagePattern({ cmd: 'get-presence' })
  async getUser(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context);

    // TEMP
    console.log(123, this.authGuard.hasJwt);
    return this.presenceService.getHello();
  }
}
