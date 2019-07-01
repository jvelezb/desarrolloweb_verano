import {Entity, model, property, belongsTo} from '@loopback/repository';

import {User} from './user.model';
import {Role} from './role.model';


@model({settings: {}})
export class UserRole extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<UserRole>) {
    super(data);
  }

  @belongsTo(() => User)
  userId: string;

  @belongsTo(() => Role)
  roleId: string;



}

export interface UserRoleRelations {
  // describe navigational properties here
}

export type UserRoleWithRelations = UserRole & UserRoleRelations;
