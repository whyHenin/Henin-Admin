<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 10:41:59
 * @LastEditTime: 2022-04-21 11:18:49
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\list\table\index.vue
-->
<template>
  <breadcrumb />
  <!-- 卡片区 -->
  <a-card class="general-card" :bordered="false" title="表格列表">
    <a-row>
      <a-col :flex="1">
        <a-form
          :model="formModel"
          :label-col-props="{ span: 6 }"
          :wrapper-col-props="{ span: 18 }"
          label-align="left"
        >
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item field="name" label="查询姓名">
                <a-input v-model="formModel.name" placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="name" label="查询姓名">
                <a-input v-model="formModel.name" placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="name" label="查询姓名">
                <a-input v-model="formModel.name" placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="name" label="查询姓名">
                <a-input v-model="formModel.name" placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="name" label="查询姓名">
                <a-input v-model="formModel.name" placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="name" label="查询姓名">
                <a-input v-model="formModel.name" placeholder="请输入" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-col>
      <a-divider style="height: 84px" direction="vertical" />
      <a-col flex="86px" style="text-align: right">
        <a-space direction="vertical" :size="18">
          <a-button type="primary">
            <template #icon>
              <icon-search />
            </template>
            搜索
          </a-button>
          <a-button>
            <template #icon>
              <icon-refresh />
            </template>
            重置
          </a-button>
        </a-space>
      </a-col>
    </a-row>
    <a-divider style="margin-top: 0" />
    <a-row style="margin-bottom: 16px">
      <a-col :span="16">
        <a-space>
          <a-button type="primary">
            <template #icon>
              <icon-plus />
            </template>
            新建
          </a-button>
          <a-upload action="/">
            <template #upload-button>
              <a-button
                ><template #icon>
                  <icon-upload />
                </template>
                上传
              </a-button>
            </template>
          </a-upload>
        </a-space>
      </a-col>
      <a-col :span="8" style="text-align: right">
        <a-button>
          <template #icon>
            <icon-download />
          </template>

          导出
        </a-button>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import breadcrumb from "@/components/breadcrumb.vue"
// import searchForm from "./searchForm.vue"
// import operation from "./operation.vue"
import { reactive } from "vue"
const formModel = reactive({
  name: "",
  age: "",
  address: "",
})
</script>

<style lang="less" scoped>
.arco-col {
}
</style>
