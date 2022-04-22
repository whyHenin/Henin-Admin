<!--
 * @Author: Chen Xin
 * @Date: 2022-04-22 13:40:32
 * @LastEditTime: 2022-04-22 18:27:31
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\list\card\testCard.vue
-->
<script lang="tsx">
import { h, resolveComponent } from "vue"
export default defineComponent({
  setup() {
    const ButtonCounter = resolveComponent("icon-apps")
    return () => {
      return h(ButtonCounter)
    }
  },
})
</script>
