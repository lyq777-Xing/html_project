<template>
    <div style="width: 100%;height: 100%;">
        <el-container class="layout-container-demo">
            <el-header style="line-height: 60px;text-align:center;">匠心家具后台管理系统</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-scrollbar>
                        <el-menu :default-openeds="['1']">
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon>
                                        <message />
                                    </el-icon>用户管理
                                </template>
                                <el-menu-item-group>
                                    <template #title>普通用户</template>
                                    <el-menu-item index="userList" @click="save('userList')">用户列表</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="管理员">
                                    <el-menu-item index="adminList" @click="save('adminList')">管理员列表</el-menu-item>
                                </el-menu-item-group>
                            </el-sub-menu>
                            <el-sub-menu index="2">
                                <template #title>
                                    <el-icon><icon-menu /></el-icon>数据统计
                                </template>
                                <el-menu-item index="echarts" @click="save('echarts')">数据统计</el-menu-item>
                            </el-sub-menu>
                        </el-menu>
                    </el-scrollbar>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter();

// 跳转
function save(path: string) {
    router.push({
        path: `/${path}`,
    })
}
</script>

<style scoped>
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}

.el-container {
    height: 100%;
}
</style>