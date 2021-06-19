<template>
    <div class="authority">
        <van-button type="primary">权限按钮</van-button>
    </div>
</template>

<script>
// 按需引入
import { Button } from 'vant'
export default {
    // 局部指令，在当前组件内生效
    directives: {
        has: {  // 指令名称 v-xxxx
            // 当被绑定元素插入到DOM时.....
            inserted(el, binding) {
                const value = binding.value
                console.log(value)
                // 当前绑定元素的父元素移除当前子元素（被绑定元素自身）
                // el.parentNode.removeChild(el);
            }
        }
    },

    components: {
        [Button.name]: Button
    },

    data() {
        return {

        }
    }
}
</script>