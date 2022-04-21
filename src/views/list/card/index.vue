<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 21:05:56
 * @LastEditTime: 2022-04-22 00:15:19
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\list\card\index.vue
-->
<template>
  <breadcrumb />
  <!-- 卡片区 -->
  <a-card class="general-card" :bordered="false" title="卡片列表">
    <a-tabs type="rounded">
      <a-tab-pane key="1" title="全部">
        <a-typography-title :heading="6">内容质检</a-typography-title>
        <a-row :gutter="20">
          <a-col :span="6"
            ><a-card hoverable class="card-item">
              <a-card-meta title="Card Title">
                <template #description> 2021-12-11 18:30:00 </template>
              </a-card-meta>
              <a-space> <a-button>删除</a-button><a-button type="primary">查看</a-button></a-space>
            </a-card></a-col
          >
          <a-col :span="6"
            ><a-card hoverable class="card-item">
              <a-card-meta title="Card Title">
                <template #description> 2021-12-11 18:30:00 </template>
              </a-card-meta>
              <a-space> <a-button>删除</a-button><a-button type="primary">查看</a-button></a-space>
            </a-card></a-col
          >
          <a-col :span="6"
            ><a-card hoverable class="card-item">
              <a-card-meta title="Card Title">
                <template #description> 2021-12-11 18:30:00 </template>
              </a-card-meta>
              <a-space> <a-button>删除</a-button><a-button type="primary">查看</a-button></a-space>
            </a-card></a-col
          >
          <a-col :span="6"
            ><a-card hoverable class="card-item">
              <a-card-meta title="Card Title">
                <template #description> 2021-12-11 18:30:00 </template>
              </a-card-meta>
              <a-space> <a-button>删除</a-button><a-button type="primary">查看</a-button></a-space>
            </a-card></a-col
          >
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="2" title="部分1"> Content of Tab Panel 2 </a-tab-pane>
      <a-tab-pane key="3" title="部分2"> Content of Tab Panel 3 </a-tab-pane>
      <template #extra>
        <a-input-search placeholder="搜索" />
      </template>
    </a-tabs>
  </a-card>
</template>

<script setup lang="ts">
import breadcrumb from "@/components/breadcrumb.vue"
import { reactive, ref } from "vue"
</script>

<style lang="less" scoped>
.card-item {
  transition-property: all;
  &:hover {
    transform: translateY(-4px);
  }
}
.arco-card-meta {
  .arco-typography {
    color: var(--color-text-1);
    line-height: 1.5715;
  }
  .arco-card-meta-title {
    font-size: 14px;
  }
  .arco-card-meta-description {
    margin-top: 8px;
    color: rgb(var(--gray-6));
    line-height: 20px;
    font-size: 12px;
  }
}
</style>
