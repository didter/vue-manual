<template>
    <div class="authority">
        当前为新增权限的按钮：
        <a type="primary" v-has="'新增权限'">新增</a>
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
                let authorityList = {
                    '新增权限': 'xxxxx'
                }
                console.log(value)
                if(authorityList[value]) {
                    console.log('有权限')
                }else{
                    el.parentNode.removeChild(el);
                    console.log('无权限')
                }
                // 当前绑定元素的父元素移除当前子元素（被绑定元素自身）
            }
        }
    },

    components: {

    },

    data() {
        return {
            authorityList: {

            }
        }
    }
}
</script>