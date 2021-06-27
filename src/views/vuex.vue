<template>
    <div id="vuex">
        <div class="list">当前 Name 值：{{Name}}</div>
        <input type="text" v-model="name">
        <div class="button-box">
            <button type="default" class="el-button">默认传值</button>
            <button type="default" class="el-button">修改传值</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '苹果派'
        }
    },

    // 实例创建完成
    created() {},

    // 挂载渲染完成
    mounted() {},

    // 事件方法
    methods: {
        // 设置默认名称
        setDefault() {
            this.$store.commit('changeNameWithCurrent')
        },
        // 设置带参
        setNme() {
            // 载荷提交，mutations方法名作为单独参数传入
            this.$store.commit('changeNameWithParam', {
                name: this.name
            })

            // 对象提交
            this.$store.commit({
                type: 'changeNameWithParam',
                name: this.name
            })
        }
    },
}
</script>
