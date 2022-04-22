<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 10:41:59
 * @LastEditTime: 2022-04-22 11:46:44
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
                <a-select placeholder="Please select ...">
                  <a-option
                    v-for="(item, index) of data"
                    :key="index"
                    :value="item.value"
                    :label="item.label"
                  />
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="name" label="查询姓名">
                <a-select placeholder="Please select ..." multiple :max-tag-count="2" allow-clear>
                  <a-option v-for="(item, index) of data" :key="index">{{ item.label }}</a-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="name" label="查询姓名">
                <a-range-picker />
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
    <a-table
      :data="tableData"
      :bordered="false"
      :loading="false"
      page-position="bl"
      :filter-icon-align-left="false"
      ><template #columns>
        <a-table-column title="姓名" data-index="name"></a-table-column>
        <a-table-column
          title="薪资"
          data-index="salary"
          :sortable="{
            sortDirections: ['ascend'],
          }"
          :filterable="{
            filters: [
              {
                text: '> 20000',
                value: '20000',
              },
              {
                text: '> 30000',
                value: '30000',
              },
            ],
            filter: (value, record) => record.salary > value,
            multiple: true,
          }"
        ></a-table-column>
        <a-table-column title="住址" data-index="address"></a-table-column>
        <a-table-column title="邮件地址" data-index="email"></a-table-column>
        <a-table-column title="操作">
          <template #cell="{ record }">
            <a-space>
              <a-button
                type="text"
                size="mini"
                @click="$modal.info({ title: 'Name', content: record.name })"
                >详情</a-button
              >
              <a-button
                status="success"
                size="mini"
                @click="$modal.info({ title: 'Name', content: record.name })"
                >编辑</a-button
              >
              <a-button
                type="primary"
                status="danger"
                size="mini"
                @click="$modal.info({ title: 'Name', content: record.name })"
                >删除</a-button
              >
            </a-space>
          </template>
        </a-table-column>
      </template></a-table
    >
  </a-card>
</template>

<script setup lang="ts">
import breadcrumb from "@/components/breadcrumb.vue"
const formModel = reactive({
  name: "",
  age: "",
  address: "",
})
const data = reactive([
  {
    label: "Beijing",
    value: "1",
  },
  {
    label: "Shanghai",
    value: "2",
  },
  {
    label: "Guangzhou",
    value: "3",
  },
  {
    label: "Shenzhen",
    value: "4",
  },
])
const tableData = reactive([
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "6",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "7",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "8",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "9",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "10",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "11",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "12",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "13",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
])
</script>

<style lang="less" scoped></style>
