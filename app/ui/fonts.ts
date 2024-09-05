/**
 * fonts.ts
 * hello-world-nestjs
 * Description: TODO:
 *
 * Created by wangjian on 2024/9/5
 * Copyright © wangjian. All rights reserved.
 *
 */

import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
