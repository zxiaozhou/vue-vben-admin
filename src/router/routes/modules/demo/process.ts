import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const comp: AppRouteModule = {
  path: '/process',
  name: 'process',
  component: LAYOUT,
  redirect: '/process/camunda',
  meta: {
    orderNo: 30,
    icon: 'ion:layers-outline',
    title: '流程',
  },

  children: [
    {
      path: 'camunda',
      name: 'CamundaDemo',
      component: () => import('/@/views/demo/process/designer-camunda/index.vue'),
      meta: {
        title: 'camunda建模',
      },
    },
    {
      path: 'zeebe',
      name: 'ZeebeDemo',
      component: () => import('/@/views/demo/process/designer-zeebe/index.vue'),
      meta: {
        title: 'zeebe建模',
      },
    },
    {
      path: 'instance',
      name: 'InstanceDemo',
      component: () => import('/@/views/demo/process/processinstance/index.vue'),
      meta: {
        title: '流程实例',
      },
    },
  ],
};

export default comp;
