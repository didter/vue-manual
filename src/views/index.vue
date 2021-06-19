<template>
    <div class="index">
        <!-- 动态渲染列表 -->
        <router-link v-for="(item, index) in routerList" :key="index" :to="item.route" class="list">{{item.title}}</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            routerList: [{
                title: 'v-has 权限控制',
                route: '/authority'
            }]
        }
    }
}
</script>

<style scoped>
 .index{
    width: 100vw;
    height: 100vh;
    background: rgb(247, 247, 247);
}
a {
    color: rgb(0, 185, 218);
}
</style>