import { groups } from './groups';
import { students } from './students';
import { auth } from './auth';

export const handlers = [...groups, ...students, ...auth];
