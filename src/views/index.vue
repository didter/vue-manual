<template>
    <div class="index">
        <router-link to="/authoity" v-has="`新建权限`">v-has 权限控制</router-link>
    </div>
</template>

<script>
export default {
    // 局部指令，在当前组件内生效
    directives: {
        has: {  // 指令名称 v-xxxx
            // 当被绑定元素插入到DOM时.....
            inserted(el, binding) {
                const value = binding.value
                console.log(value)
                // 当前绑定元素的父元素移除当前子元素（被绑定元素自身）
                el.parentNode.removeChild(el);
            }
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
a {
    color: rgb(0, 185, 218);
}
</style>