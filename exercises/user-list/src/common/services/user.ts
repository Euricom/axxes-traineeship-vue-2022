/* eslint-disable import/prefer-default-export */
import api from './api';
import { User } from '../models/user';

export interface UsersPayload {
  users: User[];
  total: number;
}

export const getUsers = async (page = 0, sortBy = ''): Promise<UsersPayload> => {
  const res = await api.get<UsersPayload>(`users?page=${page}&pageSize=10&sort=${sortBy}`);
  return res.data;
};
