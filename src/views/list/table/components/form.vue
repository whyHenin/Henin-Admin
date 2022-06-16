<!--
 * @Author: Chen Xin
 * @Date: 2022-05-06 15:15:48
 * @LastEditTime: 2022-05-06 18:05:35
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\list\table\components\form.vue
-->
<template>
  <a-modal
    :visible="visible"
    :title="title"
    width="50%"
    draggable
    label-col-props="50px"
    @cancel="handleCancel"
  >
    <a-form ref="form" :model="ruleForm" :disabled="pageType === 1">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item field="name" label="姓名" label-col-flex="60px">
            <a-input v-model="ruleForm.name" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item field="age" label="年龄" label-col-flex="60px">
            <a-input v-model="ruleForm.age" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item field="salary" label="薪资水平" label-col-flex="60px">
            <a-input v-model="ruleForm.salary" /> </a-form-item
        ></a-col>

        <a-col :span="12">
          <a-form-item field="phone" label="联系方式" label-col-flex="60px">
            <a-input v-model="ruleForm.phone" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item field="post" label="邮编" label-col-flex="60px">
            <a-input v-model="ruleForm.post" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item field="isVip" label="会员状态" label-col-flex="60px">
            <a-select v-model="ruleForm.isVip" placeholder="选择状态">
              <a-option value="0" label="未开通" />
              <a-option value="1" label="已开通" />
            </a-select> </a-form-item></a-col
        ><a-col :span="24">
          <a-form-item field="address" label="住址" label-col-flex="60px">
            <a-input v-model="ruleForm.address" /> </a-form-item
        ></a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
const visible = ref(false)
const pageType = ref(0)
const title = computed(() => {
  return pageType.value === 0 ? "新建客户" : pageType.value === 1 ? "查看客户" : "编辑客户"
})
interface Irecoder {
  name?: string
  age?: number
  salary?: number
  phone?: string
  post?: string
  isVip?: number
  address?: string
}
const ruleForm = ref<Irecoder>({})

const init = (type: number, data: Irecoder) => {
  visible.value = true
  pageType.value = type
  ruleForm.value = { ...data }
}
const form = ref<any>(null)
const handleCancel = () => {
  form.value?.resetFields()
  visible.value = false
}
defineExpose({
  init,
})
</script>

<style lang="less" scoped></style>
