<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 10:41:59
 * @LastEditTime: 2022-05-06 18:03:20
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
          ref="form"
          :model="searchFrom"
          :label-col-props="{ span: 6 }"
          :wrapper-col-props="{ span: 18 }"
          label-align="left"
        >
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item field="name" label="查询姓名">
                <a-input v-model="searchFrom.name" placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="age" label="查询年龄">
                <a-input v-model="searchFrom.age" placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="address" label="查询地址">
                <a-input v-model="searchFrom.address" placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="test" label="查询位置">
                <a-select v-model="searchFrom.test" placeholder="Please select ...">
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
              <a-form-item field="test2" label="查询位置2">
                <a-select
                  v-model="searchFrom.test2"
                  placeholder="Please select ..."
                  multiple
                  :max-tag-count="2"
                  allow-clear
                >
                  <a-option v-for="(item, index) of data" :key="index">{{ item.label }}</a-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="data" label="查询时间">
                <a-range-picker v-model="searchFrom.data" />
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
          <a-button @click="$refs.form.resetFields()">
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
          <a-button type="primary" @click="handleNew">
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
      :filter-icon-align-left="false"
      :pagination="false"
      ><template #columns>
        <a-table-column title="姓名" data-index="name"></a-table-column>
        <a-table-column title="id" data-index="id"></a-table-column>
        <a-table-column title="年龄" data-index="age"></a-table-column>
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
            filter: (value:string[], record:any) => record.salary > value,
            multiple: true,
          }"
        ></a-table-column>
        <a-table-column title="住址" data-index="address"></a-table-column>
        <a-table-column title="手机号" data-index="phone"></a-table-column>
        <a-table-column title="邮编" data-index="post"></a-table-column>
        <a-table-column title="会员" data-index="isVip">
          <template #cell="{ record }">
            <a-badge
              :status="record.isVip ? 'success' : 'warning'"
              :text="record.isVip ? '已开通' : '未开通'"
            />
          </template>
        </a-table-column>
        <a-table-column title="操作">
          <template #cell="{ record }">
            <a-space>
              <a-button type="text" size="mini" @click="handleDetail(record)">详情</a-button>
              <a-button status="success" size="mini" @click="handleEdit(record)">编辑</a-button>
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
    <pagination :total="50" @change="paginationChange" />
    <Form ref="modal" />
  </a-card>
</template>

<script setup lang="ts">
import Form from "./components/form.vue"
import { Modal, Message } from "@arco-design/web-vue"
import { userList } from "@/api/user"
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
const loading = ref(true)

const modal = ref<{ init: Function } | null>(null)
interface Irecoder {
  name?: string
  age?: number
  salary?: number
  phone?: string
  post?: string
  isVip?: number
  address?: string
}
// 新建数据
const handleNew = () => {
  modal.value?.init(0, null)
}
// 客户详情
const handleDetail = (data: Irecoder) => {
  modal.value?.init(1, data)
}
// 客户编辑
const handleEdit = (data: Irecoder) => {
  modal.value?.init(2, data)
}
// 定义请求数据
interface IsearchFrom {
  size: number
  page: number
  name?: string
  age?: string
  address?: string
  test?: string
  test2?: string[] | string
  data?: string[]
  endTime?: string
  startTime?: string
}
const searchFrom: IsearchFrom = reactive({
  size: 10,
  page: 1,
})

// 获取数据请求
const fetchData = () => {
  loading.value = true
  const params = {
    ...searchFrom,
  }
  params.test2 = params.test2?.toString()
  params.startTime = params.data?.[0]
  params.endTime = params.data?.[1]
  delete params.data
  userList(params)
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
// 搜索事件
const handleSearch = () => {
  fetchData()
}
// 分页事件
const paginationChange = (page: number, size: number) => {
  searchFrom.page = page
  searchFrom.size = size
  fetchData()
}
// 初始化获取数据
onMounted(() => {
  fetchData()
})
</script>

<style lang="less" scoped></style>
