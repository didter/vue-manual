<template>
    <div id="vuex">
        <div class="list">当前页面 Name 值：{{name}}</div>
        <div class="list">Vuex中 Name 值：{{this.$store.state.name}}</div>
        <input type="text" v-model="name">
        <div class="button-box">
            <button type="default" class="d-button" @click="setDefault">默认传值</button>
            <button type="default" class="d-button" @click="setName">修改传值</button>
            <button type="default" class="d-button" @click="setDefaultAsync">异步延迟默认修改</button>
            <button type="default" class="d-button" @click="setNameWithParamAsync">异步延迟带参修改</button>
        </div>
        <div class="list">不带参数getters得到的数据：{{this.$store.getters.formatterName}}</div>
        <div class="list">传入当前页面Namegetters的到的数据：{{this.$store.getters.customFormattrName(name)}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '苹果派',
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
        setName() {
            // 载荷提交，mutations方法名作为单独参数传入
            this.$store.commit('changeNameWithParam', {
                name: this.name
            })

            // 对象提交
            this.$store.commit({
                type: 'changeNameWithParam',
                name: this.name
            })
        },
        // 异步延时设置
        setDefaultAsync() {
            this.$store.dispatch('changeNameAsync')
        },
        // 延时带参设置
        setNameWithParamAsync() {
            this.$store.dispatch('changeNameWithParamAsync', {
                name: this.name
            })
            this.$store.dispatch({
                type: 'changeNameWithParamAsync',
                name: this.name
            })
        }
    },
}
</script>
