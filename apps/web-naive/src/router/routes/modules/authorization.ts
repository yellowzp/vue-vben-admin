import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:layout-dashboard',
      order: 1,
      title: $t('page.authorization.title'),
    },
    name: 'anthorization',
    path: '/user-management',
    children: [
      {
        name: 'user-management',
        path: '/user-management',
        component: () => import('#/views/authorization/user-management.vue'),
        meta: {
          affixTab: true,
          icon: 'lucide:user-round',
          title: $t('page.authorization.user-management'),
        },
      },
      {
        name: 'role-management',
        path: '/role-management',
        component: () => import('#/views/authorization/role-management.vue'),
        meta: {
          icon: 'lucide:square-user-round',
          title: $t('page.authorization.role-management'),
        },
      },
    ],
  },
];

export default routes;
