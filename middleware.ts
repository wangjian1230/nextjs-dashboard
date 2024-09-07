/**
 * middleware.ts
 * hello-world-nestjs
 * Description: TODO:
 *
 * Created by wangjian on 2024/9/7
 * Copyright © wangjian. All rights reserved.
 *
 */

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
