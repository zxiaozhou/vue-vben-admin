<template>
  <PageWrapper title="流程实例预览">
    <AnYiBpmnPreviewInstance
      ref="diagramInstanceDomRef"
      :createHtml="getHtml"
      tagId="Activity_1s3ocxk:e63351bb-faaa-11ec-9f3a-0242ac1f090f"
    />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { AnYiBpmnPreviewInstance } from 'anyi-process-ee-antvue';
  import type {
    CreateHtmlFuncArgs,
    BpmnInstanceInfo,
  } from 'anyi-process-ee-antvue/dist/types/types/instance.d';
  import instancesdata from './instancesdata.json';
  import { ref, onMounted } from 'vue';
  const diagramInstanceDomRef = ref();
  function getHtml(info: CreateHtmlFuncArgs) {
    console.log('-----info-------', info);
    return '<scan>Nihao</scan>';
  }
  onMounted(() => {
    diagramInstanceDomRef.value.viewInstance(instancesdata.data as BpmnInstanceInfo);
  });
</script>

<style lang="less">
  @import 'anyi-process-ee-antvue/dist/style.css';
  @import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
  @import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
  @import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
  @import 'bpmn-js/dist/assets/bpmn-js.css';
  @import 'bpmn-js/dist/assets/diagram-js.css';
  @import 'diagram-js-minimap/assets/diagram-js-minimap.css';
</style>
