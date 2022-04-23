<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 21:05:56
 * @LastEditTime: 2022-04-22 23:32:32
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
          <a-col :span="6">
            <div class="card-wrap">
              <a-card :bordered="false" hoverable>
                <a-space align="start">
                  <a-card-meta>
                    <template #title
                      ><a-avatar :size="24" style="margin-right: 8px; background-color: #626aea">
                        <icon-filter />
                      </a-avatar>
                      <a-typography-text style="margin-right: 10px"> 内容规则 </a-typography-text>
                      <a-tag size="small" color="green">
                        <template #icon>
                          <icon-check-circle-fill />
                        </template>
                        <span>已启用</span>
                      </a-tag>
                    </template>
                    <template #description>
                      <a-typography-paragraph type="secondary">
                        快速诊断用户人群，地域细分情况，了解数据分布的集中度，以及主要的数据分布的区间段是什么。
                      </a-typography-paragraph>
                    </template>
                  </a-card-meta>
                </a-space>
                <template #actions>
                  <a-switch />
                  <a-space>
                    <a-button>测试</a-button>
                    <a-button type="outline"> 测试 </a-button>
                  </a-space>
                </template>
              </a-card>
            </div>
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="2" title="部分1">
        Content of Tab Panel 2
        <testCard type="icon-drag-arrow" />
      </a-tab-pane>
      <a-tab-pane key="3" title="部分2"> Content of Tab Panel 3 </a-tab-pane>
      <template #extra>
        <a-input-search placeholder="搜索" />
      </template>
    </a-tabs>
  </a-card>
</template>

<script setup lang="ts">
import breadcrumb from "@/components/breadcrumb.vue"
</script>

<style lang="less" scoped>
.card-wrap {
  height: 100%;
  transition: all 0.3s;
  border: 1px solid var(--color-neutral-3);
  &:hover {
    transform: translateY(-4px);
  }
  :deep(.arco-card-meta-description) {
    color: rgb(var(--gray-6));
    .arco-descriptions-item-label-inline {
      font-weight: normal;
      font-size: 12px;
      color: rgb(var(--gray-6));
    }
    .arco-descriptions-item-value-inline {
      color: rgb(var(--gray-8));
    }
  }
}
</style>
