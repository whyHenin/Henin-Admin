<!--
 * @Author: Chen Xin
 * @Date: 2022-05-06 11:25:21
 * @LastEditTime: 2022-05-06 12:12:10
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\components\pagination.vue
-->
<template>
  <a-pagination
    :total="props.total"
    show-page-size
    show-total
    :page-size="size"
    :current="page"
    @change="pageChange"
    @page-size-change="sizeChange"
  />
</template>

<script setup lang="ts">
const page = ref(1)
const size = ref(10)

const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(["change"])

const pageChange = (val: number) => {
  page.value = val
  emit("change", page.value, size.value)
}
const sizeChange = (val: number) => {
  size.value = val
  emit("change", page.value, size.value)
}
</script>

<style lang="less" scoped>
.arco-pagination {
  margin-top: 20px;
}
</style>
