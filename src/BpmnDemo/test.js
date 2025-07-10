export const xmlstr = 
`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.1">
  <process id="performance-001" name="performance" isExecutable="true">
    <extensionElements>
      <flowable:executionListener event="end" class="org.example.flowabledemo.listeners.MyExecutionListener"></flowable:executionListener>
    </extensionElements>
    <startEvent id="startEvent1" name="开始节点" flowable:formFieldValidation="true"></startEvent>
    <endEvent id="sid-26AA20CF-F7D6-4A88-A423-D32010C6F14D" name="结束节点"></endEvent>
    <userTask id="sid-35E21F1A-E300-4293-A815-3B32DE350EF8" name="自评" flowable:assignee="a" flowable:formFieldValidation="true">
      <extensionElements>
        <flowable:executionListener event="start" class="org.example.flowabledemo.listeners.MyExecutionListener"></flowable:executionListener>
        <flowable:executionListener event="end" class="org.example.flowabledemo.listeners.MyExecutionListener"></flowable:executionListener>
        <flowable:executionListener event="take" class="org.example.flowabledemo.listeners.MyExecutionListener"></flowable:executionListener>
        <flowable:taskListener event="complete" class="org.example.flowabledemo.listeners.MyTaskListener"></flowable:taskListener>
        <flowable:taskListener event="create" class="org.example.flowabledemo.listeners.MyTaskListener"></flowable:taskListener>
        <flowable:taskListener event="assignment" class="org.example.flowabledemo.listeners.MyTaskListener"></flowable:taskListener>
        <flowable:taskListener event="delete" class="org.example.flowabledemo.listeners.MyTaskListener"></flowable:taskListener>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler"><![CDATA[false]]></modeler:initiator-can-complete>
      </extensionElements>
    </userTask>
    <userTask id="sid-F2BFCE49-1DBE-4E7B-BB79-9396DB481108" name="上级评" flowable:assignee="b" flowable:formFieldValidation="true">
      <extensionElements>
        <flowable:executionListener event="start" class="org.example.flowabledemo.listeners.MyExecutionListener"></flowable:executionListener>
        <flowable:executionListener event="end" class="org.example.flowabledemo.listeners.MyExecutionListener"></flowable:executionListener>
        <flowable:executionListener event="take" class="org.example.flowabledemo.listeners.MyExecutionListener"></flowable:executionListener>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler"><![CDATA[false]]></modeler:initiator-can-complete>
      </extensionElements>
    </userTask>
    <userTask id="sid-78984A09-D4D4-4BC7-89CF-0FD894CF8C41" name="隔级评" flowable:assignee="c" flowable:formFieldValidation="true">
      <extensionElements>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler"><![CDATA[false]]></modeler:initiator-can-complete>
      </extensionElements>
    </userTask>
    <sequenceFlow id="sid-194B2739-5BB8-4B61-A50E-8197325C03DC" sourceRef="startEvent1" targetRef="sid-35E21F1A-E300-4293-A815-3B32DE350EF8"></sequenceFlow>
    <sequenceFlow id="sid-09BF8E79-C31A-4486-AD9B-3D864F4B47BE" sourceRef="sid-35E21F1A-E300-4293-A815-3B32DE350EF8" targetRef="sid-F2BFCE49-1DBE-4E7B-BB79-9396DB481108"></sequenceFlow>
    <sequenceFlow id="sid-F932721D-4710-4BC8-B4F8-631AAB19B978" sourceRef="sid-F2BFCE49-1DBE-4E7B-BB79-9396DB481108" targetRef="sid-78984A09-D4D4-4BC7-89CF-0FD894CF8C41"></sequenceFlow>
    <sequenceFlow id="sid-88180571-5739-4216-A6FB-48324E1B6837" sourceRef="sid-78984A09-D4D4-4BC7-89CF-0FD894CF8C41" targetRef="sid-26AA20CF-F7D6-4A88-A423-D32010C6F14D"></sequenceFlow>
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_performance-001">
    <bpmndi:BPMNPlane bpmnElement="performance-001" id="BPMNPlane_performance-001">
      <bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
        <omgdc:Bounds height="30.0" width="30.0" x="90.0" y="145.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-26AA20CF-F7D6-4A88-A423-D32010C6F14D" id="BPMNShape_sid-26AA20CF-F7D6-4A88-A423-D32010C6F14D">
        <omgdc:Bounds height="28.0" width="28.0" x="900.0" y="153.5"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-35E21F1A-E300-4293-A815-3B32DE350EF8" id="BPMNShape_sid-35E21F1A-E300-4293-A815-3B32DE350EF8">
        <omgdc:Bounds height="80.0" width="100.0" x="270.0" y="120.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-F2BFCE49-1DBE-4E7B-BB79-9396DB481108" id="BPMNShape_sid-F2BFCE49-1DBE-4E7B-BB79-9396DB481108">
        <omgdc:Bounds height="80.0" width="100.0" x="450.0" y="120.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-78984A09-D4D4-4BC7-89CF-0FD894CF8C41" id="BPMNShape_sid-78984A09-D4D4-4BC7-89CF-0FD894CF8C41">
        <omgdc:Bounds height="80.0" width="100.0" x="630.0" y="127.5"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge bpmnElement="sid-88180571-5739-4216-A6FB-48324E1B6837" id="BPMNEdge_sid-88180571-5739-4216-A6FB-48324E1B6837" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
        <omgdi:waypoint x="729.9499999999274" y="167.5"></omgdi:waypoint>
        <omgdi:waypoint x="900.0" y="167.5"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-09BF8E79-C31A-4486-AD9B-3D864F4B47BE" id="BPMNEdge_sid-09BF8E79-C31A-4486-AD9B-3D864F4B47BE" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="369.95000000000005" y="160.0"></omgdi:waypoint>
        <omgdi:waypoint x="449.99999999997226" y="160.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-194B2739-5BB8-4B61-A50E-8197325C03DC" id="BPMNEdge_sid-194B2739-5BB8-4B61-A50E-8197325C03DC" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="119.94999960454754" y="160.0"></omgdi:waypoint>
        <omgdi:waypoint x="269.9999999999028" y="160.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-F932721D-4710-4BC8-B4F8-631AAB19B978" id="BPMNEdge_sid-F932721D-4710-4BC8-B4F8-631AAB19B978" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="549.9499999999872" y="160.0"></omgdi:waypoint>
        <omgdi:waypoint x="590.0" y="160.0"></omgdi:waypoint>
        <omgdi:waypoint x="590.0" y="167.5"></omgdi:waypoint>
        <omgdi:waypoint x="630.0" y="167.5"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`
