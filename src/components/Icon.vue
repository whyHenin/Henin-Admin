<!--
 * @Author: Chen Xin
 * @Date: 2022-04-22 23:28:27
 * @LastEditTime: 2022-04-22 23:28:47
 * @LastEditors: Chen Xin
 * @Description: 自定义图标
 * @FilePath: \Henin-Admin\src\components\Icon.vue
-->
<script lang="ts">
import { h, resolveComponent } from "vue"
export default defineComponent({
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const icon = resolveComponent(props.type)
    return () => h(icon)
  },
})
</script>
