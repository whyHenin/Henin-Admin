<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 10:41:59
 * @LastEditTime: 2022-04-24 22:01:43
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
          <a-button type="primary" @click="handleSearch">
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
      :loading="loading"
      page-position="bl"
      :filter-icon-align-left="false"
      ><template #columns>
        <a-table-column title="姓名" data-index="userName"></a-table-column>
        <a-table-column title="id" data-index="id"></a-table-column>
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
            filter: (value:string[], record) => record.salary > value,
            multiple: true,
          }"
        ></a-table-column>
        <a-table-column title="住址" data-index="address"></a-table-column>
        <a-table-column title="手机号" data-index="phone"></a-table-column>
        <a-table-column title="邮编" data-index="post"></a-table-column>
        <a-table-column title="vip" data-index="isVip"></a-table-column>
        <a-table-column title="操作">
          <template #cell="{ record }">
            <a-space>
              <a-button
                type="text"
                size="mini"
                @click="Modal.info({ title: 'Name', content: record.userName })"
                >详情</a-button
              >
              <a-button
                status="success"
                size="mini"
                @click="Modal.info({ title: 'Name', content: record.userName })"
                >编辑</a-button
              >
              <a-popconfirm
                content="确定删除该条记录吗？"
                position="tr"
                @ok="Modal.info({ title: 'Name', content: record.userName })"
              >
                <a-button type="primary" status="danger" size="mini">删除</a-button>
              </a-popconfirm>
            </a-space>
          </template>
        </a-table-column>
      </template></a-table
    >
  </a-card>
</template>

<script setup lang="ts">
import breadcrumb from "@/components/breadcrumb.vue"
import { Modal, Message } from "@arco-design/web-vue"
import { userList } from "@/api/user"
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
const tableData = ref()
const searchFrom = reactive({
  size: 10,
  page: 1,
  keyWord: "",
})
const loading = ref(true)
const fetchData = () => {
  loading.value = true
  userList(searchFrom)
    .then((res) => {
      if (res.code === 200) {
        tableData.value = res.data
      } else {
        Message.error(res.msg)
      }
    })
    .finally(() => {
      loading.value = false
    })
}
const handleSearch = () => {
  fetchData()
}
onMounted(() => {
  fetchData()
})
</script>

<style lang="less" scoped></style>
