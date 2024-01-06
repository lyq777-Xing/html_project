<template>
    <div>
        <!-- 页头 -->
        <el-menu ref="menu" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item>
                <img style="width: 100px" src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/logo-2.png"
                    alt="logo" />
            </el-menu-item>
            <div class="flex-grow"></div>
            <el-menu-item index="index">主页</el-menu-item>
            <el-menu-item index="shop">商城</el-menu-item>
            <el-menu-item index="login">登录</el-menu-item>
            <el-menu-item index="register">注册</el-menu-item>
            <el-menu-item index="aboout">关于我们</el-menu-item>
        </el-menu>
        <!-- 粒子效果 -->
        <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="{
            background: {
                color: {
                    value: '#F6F6EF'
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40
                    },
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: '#88989C'
                },
                links: {
                    color: '#88989C',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: 'bounce',
                    random: false,
                    speed: 6,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    value: { min: 1, max: 5 }
                }
            },
            detectRetina: true
        }" />
        <!-- 登录表单 -->
        <div style="width: 30%;margin:250px auto; background-color: white;;height: 250px;padding: 30px;">
            <el-form ref="formRef" :model="numberValidateForm" label-width="100px" class="demo-ruleForm"
                style="margin-top: 50px;">
                <el-form-item label="username" prop="username" :rules="[
                    { required: true, message: 'username is required' },
                    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
                ]">
                    <el-input v-model.number="numberValidateForm.username" type="text" />
                </el-form-item>
                <el-form-item label="password" prop="password" :rules="[
                    { required: true, message: 'password is required' },
                ]">
                    <el-input v-model.number="numberValidateForm.password" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref, onMounted, onUnmounted } from "vue";
import type { FormInstance } from 'element-plus'
import { reactive } from "vue";
import { ElMessage } from "element-plus";

// 页头导航栏
const activeIndex = ref("login");

// 选择不同的导航栏，跳转到不同的页面
function handleSelect(key: string, keyPath: Array<string>) {
    console.log(key, keyPath);
    router.push({
        path: `/${key}`,
    });

};

// 粒子效果
const particlesLoaded = async (container: any) => {
    console.log("Particles container loaded", container);
};

const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
    username: '',
    password: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
            if (numberValidateForm.username == "admin" && numberValidateForm.password == "123456") {
                router.push({
                    path: `/admin`,
                });
            }
        } else {
            console.log('error submit!')
            ElMessage({
                message: '账号或密码错误',
                type: 'error',
            })
            return false
        }
    })
}

</script>

<style></style>