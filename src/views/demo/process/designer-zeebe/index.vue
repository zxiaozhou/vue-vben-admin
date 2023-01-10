<template>
  <div id="app">
    <AnYiBpmnDesignerZeebe @change="handleChange" ref="diagramDesigner" :comps="comps" />
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { AnYiBpmnDesignerZeebe } from 'anyi-process-ee-antvue';
  import type { BpmnDiagramInfo } from 'anyi-process-ee-antvue/dist/types/types/designercommon.d';
  import { Category } from '../components/Category';
  import { Role } from '../components/Role';
  import { User } from '../components/User';
  import { Time } from '../components/Time';
  import { UserSingle } from '../components/UserSingle';
  import { Expression } from '../components/Expression';
  const diagramDesigner = ref();
  const comps = {
    category: Category,
    followUpDate: Time,
    dueDate: Time,
    conditionExpression: Expression,
    candidateStarterGroups: Role,
    candidateStarterUsers: User,
    assignee: UserSingle,
    anYiCopyToUsers: User,
    collection: User,
    candidateGroups: Role,
    candidateUsers: User,
  };
  function handleChange(diagram: BpmnDiagramInfo) {
    console.log('---diagram---', diagram);
  }
  onMounted(() => {
    diagramDesigner.value.createNewDiagram();
  });
</script>

<style lang="less">
  @import 'anyi-process-ee-antvue/dist/style.css';
  @import 'bpmn-js-color-picker/colors/color-picker.css';
  @import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
  @import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
  @import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
  @import 'bpmn-js/dist/assets/bpmn-js.css';
  @import 'bpmn-js/dist/assets/diagram-js.css';
  @import 'bpmn-js-properties-panel/dist/assets/properties-panel.css';
  @import 'bpmn-js-token-simulation/assets/css/bpmn-js-token-simulation.css';
  @import 'diagram-js-minimap/assets/diagram-js-minimap.css';
  @import 'bpmn-js-bpmnlint/dist/assets/css/bpmn-js-bpmnlint.css';
</style>
