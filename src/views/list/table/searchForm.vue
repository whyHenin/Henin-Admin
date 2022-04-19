<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 14:50:10
 * @LastEditTime: 2022-04-20 00:31:08
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\list\table\searchForm.vue
-->
<template>
  <el-form :inline="true" :model="formInline">
    <el-row>
      <el-col :span="21"
        ><el-row justify="space-between">
          <el-col :span="6"
            ><el-form-item label="集合编号">
              <el-input
                v-model="formInline.user"
                placeholder="集合编号"
                class="search-input"
              /> </el-form-item
          ></el-col>
          <el-col :span="6"
            ><el-form-item label="集合编号">
              <el-input
                v-model="formInline.user"
                placeholder="集合编号"
                class="search-input"
              /> </el-form-item
          ></el-col>
          <el-col :span="6"
            ><el-form-item label="集合类型">
              <el-select v-model="formInline.region" placeholder="集合类型" class="search-input">
                <el-option label="集合类型one" value="shanghai" />
                <el-option label="集合类型two" value="beijing" />
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="6"
            ><el-form-item label="集合类型">
              <el-select v-model="formInline.type" placeholder="集合类型" class="search-input">
                <el-option label="集合类型one" value="shanghai" />
                <el-option label="集合类型two" value="beijing" />
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="6"
            ><el-form-item label="集合类型">
              <el-select v-model="formInline.type" placeholder="集合类型" class="search-input">
                <el-option label="集合类型one" value="shanghai" />
                <el-option label="集合类型two" value="beijing" />
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="6"
            ><el-form-item label="集合类型">
              <el-select v-model="formInline.type" placeholder="集合类型" class="search-input">
                <el-option label="集合类型one" value="shanghai" />
                <el-option label="集合类型two" value="beijing" />
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="6"
            ><el-form-item label="集合类型">
              <el-select v-model="formInline.type" placeholder="集合类型" class="search-input">
                <el-option label="集合类型one" value="shanghai" />
                <el-option label="集合类型two" value="beijing" />
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="6"
            ><el-form-item label="集合类型">
              <el-select v-model="formInline.type" placeholder="集合类型" class="search-input">
                <el-option label="集合类型one" value="shanghai" />
                <el-option label="集合类型two" value="beijing" />
              </el-select> </el-form-item
          ></el-col> </el-row
      ></el-col>
      <el-col :span="1"></el-col>
      <el-col :span="2" class="search-btn-col">
        <el-row>
          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">
                <el-icon> <i-ri-search-line /> </el-icon>查找</el-button
              >
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item>
              <el-button>
                <el-icon> <i-ri-refresh-line /> </el-icon>重置</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from "vue"
const formInline = reactive({
  user: "",
  region: "",
  type: "",
})
const onSubmit = () => {
  console.log("搜索事件")
}
</script>

<style scoped></style>
