<template>
    <div style="background-color: #F6F6EF;">
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
        <!-- 回到顶部按钮 -->
        <el-backtop :right="100" :bottom="100" />
        <!-- 轮播图 -->
        <el-carousel style="height: 560px;margin-top: 15px;">
            <el-carousel-item v-for="item in barList" :key="item.key" style="height: 560px;">
                <img :src=item.url alt="" style="height: 560px;">
            </el-carousel-item>
        </el-carousel>
        <!-- 好物 -->
        <div style="width: 90%;margin: 25px auto;">
            <div>
                <span style="font-size: 40px;font-weight: 700;">好物推荐</span>
            </div>
            <el-tabs v-model="topActiveName" class="top-tabs" @tab-click="handleClickTop" style="margin-top: 15px;">
                <el-tab-pane label="客厅" name="livingRoom" style="height: 600px;">
                    <el-row>
                        <el-col v-for="item in livingImg" :key="item.key" :span="7" style="margin-left: 50px;">
                            <el-card :body-style="{ padding: '0px' }" style="width: 100%;">
                                <img :src=item.url class="image" style="width: 100%;" />
                                <div style="padding: 15px">
                                    <span style="font-size: 25px;">{{ item.name }}</span><br>
                                    <span>￥{{ item.price }}</span>
                                    <div>
                                        <el-tag>{{ item.tag }}</el-tag>
                                    </div>
                                    <div style="width: 100%;height: 40px;">
                                        <el-button style="float: right;" :icon="ShoppingCart"
                                            @click="showCart(item)">加入购物车</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="卧室" name="bedroom">
                    <el-row>
                        <el-col v-for="item in bedroomImg" :key="item.key" :span="7" style="margin-left: 50px;">
                            <el-card :body-style="{ padding: '0px' }" style="width: 100%;">
                                <img :src=item.url class="image" style="width: 100%;" />
                                <div style="padding: 15px">
                                    <span style="font-size: 25px;">{{ item.name }}</span><br>
                                    <span>￥{{ item.price }}</span>
                                    <div>
                                        <el-tag>{{ item.tag }}</el-tag>
                                    </div>
                                    <div style="width: 100%;height: 40px;">
                                        <el-button style="float: right;" :icon="ShoppingCart">加入购物车</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="灯饰" name="lighting">
                    <el-row>
                        <el-col v-for="item in lightingImg" :key="item.key" :span="7" style="margin-left: 50px;">
                            <el-card :body-style="{ padding: '0px' }" style="width: 100%;">
                                <img :src=item.url class="image" style="width: 100%;" />
                                <div style="padding: 15px">
                                    <span style="font-size: 25px;">{{ item.name }}</span><br>
                                    <span>￥{{ item.price }}</span>
                                    <div>
                                        <el-tag>{{ item.tag }}</el-tag>
                                    </div>
                                    <div style="width: 100%;height: 40px;">
                                        <el-button style="float: right;" :icon="ShoppingCart">加入购物车</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- 现代风格 -->
        <div style="margin:60px auto;width: 90%;">
            <div style="text-align: center;">
                <el-icon style="color: black;margin-right: 20px;font-size: 40px;">
                    <MagicStick />
                </el-icon>
                <span style="font-size: 40px;font-weight: 400px;">现代风格</span><br>
                <span style="font-size: 25px;font-weight: 400px;color: rgb(150, 150, 147);">
                    化繁为简，巧妙留白，用流行元素点缀空间构建，是智慧也是境界
                </span>
            </div>
            <div style="margin-top: 30px;">
                <el-row>
                    <el-col :span="14" style="margin-left: 50px;">
                        <el-card :body-style="{ padding: '0px' }" style="width: 100%;margin-top: 15px;">
                            <img src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fmorden-1.jpg"
                                class="image" style="width: 100%;" />
                            <div style="padding: 15px">
                                <span style="font-size: 25px;">现代简约 头层黄牛皮实木框架转角沙发</span><br>
                                <span style="font-size: 20px;font-weight: 600;">￥4658</span>
                                <div style="margin-top: 15px;">
                                    <el-tag>简凡</el-tag>
                                </div>
                                <!-- <div style="width: 100%;height: 40px;">
                                    <el-button style="float: right;" :icon="ShoppingCart"
                                        @click="showCart()">加入购物车</el-button>
                                </div> -->
                            </div>
                        </el-card>
                    </el-col>
                    <el-col v-for="item in modernImg" :key="item.key" :span="7" style="margin-left: 50px;">
                        <el-card :body-style="{ padding: '0px' }" style="width: 100%;margin-top: 15px;">
                            <img :src=item.url class="image" style="width: 100%;" />
                            <div style="padding: 15px">
                                <span style="font-size: 25px;">{{ item.name }}</span><br>
                                <span style="font-size: 20px;font-weight: 600;">￥{{ item.price }}</span>
                                <div style="margin-top: 15px;">
                                    <el-tag>{{ item.tag }}</el-tag>
                                </div>
                                <div style="width: 100%;height: 40px;">
                                    <el-button style="float: right;" :icon="ShoppingCart"
                                        @click="showCart(item)">加入购物车</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 轻奢风格 -->
        <div style="margin:60px auto;width: 90%;">
            <div style="text-align: center;">
                <el-icon style="color: black;margin-right: 20px;font-size: 40px;">
                    <MagicStick />
                </el-icon>
                <span style="font-size: 40px;font-weight: 400px;">轻奢风格</span><br>
                <span
                    style="font-size: 25px;font-weight: 400px;color: rgb(150, 150, 147);">轻是内敛，奢是精致，理性与感性的融合，优雅与高贵兼容</span>
            </div>
            <div style="margin-top: 30px;">
                <el-row>
                    <el-col :span="14" style="margin-left: 50px;">
                        <el-card :body-style="{ padding: '0px' }" style="width: 100%;margin-top: 15px;">
                            <img src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2FlightLuxury-1.jpg"
                                class="image" style="width: 100%;" />
                            <div style="padding: 15px">
                                <span style="font-size: 25px;">轻奢风格 贵族名流实木框架真皮沙发组合</span><br>
                                <span style="font-size: 20px;font-weight: 600;">￥3652.56</span>
                                <div style="margin-top: 15px;">
                                    <el-tag>轻奢风格</el-tag>
                                </div>
                                <!-- <div style="width: 100%;height: 40px;">
                                    <el-button style="float: right;" :icon="ShoppingCart"
                                        @click="showCart()">加入购物车</el-button>
                                </div> -->
                            </div>
                        </el-card>
                    </el-col>
                    <el-col v-for="item in lightLuxuryImg" :key="item.key" :span="7" style="margin-left: 50px;">
                        <el-card :body-style="{ padding: '0px' }" style="width: 100%;margin-top: 15px;">
                            <img :src=item.url class="image" style="width: 100%;" />
                            <div style="padding: 15px">
                                <span style="font-size: 25px;">{{ item.name }}</span><br>
                                <span style="font-size: 20px;font-weight: 600;">￥{{ item.price }}</span>
                                <div style="margin-top: 15px;">
                                    <el-tag>{{ item.tag }}</el-tag>
                                </div>
                                <div style="width: 100%;height: 40px;">
                                    <el-button style="float: right;" :icon="ShoppingCart"
                                        @click="showCart(item)">加入购物车</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 美式风格 -->
        <div style="margin:60px auto;width: 90%;">
            <div style="text-align: center;">
                <el-icon style="color: black;margin-right: 20px;font-size: 40px;">
                    <MagicStick />
                </el-icon>
                <span style="font-size: 40px;font-weight: 400px;">美式风格</span><br>
                <span style="font-size: 25px;font-weight: 400px;color: rgb(150, 150, 147);">不为繁杂所累，不失浪漫与个性，邂逅旖旎田园乡村风光</span>
            </div>
            <div style="margin-top: 30px;">
                <el-row>
                    <el-col :span="14" style="margin-left: 50px;">
                        <el-card :body-style="{ padding: '0px' }" style="width: 100%;margin-top: 15px;">
                            <img src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Famerican-1.jpg"
                                class="image" style="width: 100%;" />
                            <div style="padding: 15px">
                                <span style="font-size: 25px;">美式风格 头层真皮+布艺 北美鹅掌楸木框架 纯铜装饰沙发组合</span><br>
                                <span style="font-size: 20px;font-weight: 600;">￥3652.56</span>
                                <div style="margin-top: 15px;">
                                    <el-tag>美式风格</el-tag>
                                </div>
                                <!-- <div style="width: 100%;height: 40px;">
                                    <el-button style="float: right;" :icon="ShoppingCart"
                                        @click="showCart()">加入购物车</el-button>
                                </div> -->
                            </div>
                        </el-card>
                    </el-col>
                    <el-col v-for="item in americanImg" :key="item.key" :span="7" style="margin-left: 50px;">
                        <el-card :body-style="{ padding: '0px' }" style="width: 100%;margin-top: 15px;">
                            <img :src=item.url class="image" style="width: 100%;" />
                            <div style="padding: 15px">
                                <span style="font-size: 25px;">{{ item.name }}</span><br>
                                <span style="font-size: 20px;font-weight: 600;">￥{{ item.price }}</span>
                                <div style="margin-top: 15px;">
                                    <el-tag>{{ item.tag }}</el-tag>
                                </div>
                                <div style="width: 100%;height: 40px;">
                                    <el-button style="float: right;" :icon="ShoppingCart"
                                        @click="showCart(item)">加入购物车</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 固钉 购物车 -->
        <el-affix position="bottom" :offset="20">
            <el-button type="danger" size="large" style="margin-left: 20px;" @click="showCartTable()">
                <el-icon style="color: black;margin-right: 15px;">
                    <ShoppingCartFull />
                </el-icon>
                购物车
            </el-button>
        </el-affix>
        <!-- 页脚部分 -->
        <el-footer style="background-color: rgb(231, 231, 231);margin-top: 70px;text-align: center;line-height: 60px;">
            <span style="color: inherit;">制作人：lyq</span>
        </el-footer>
        <!-- 添加购物车的对话框 -->
        <el-dialog v-model="cartDialogFormVisible" title="添加商品">
            <!-- 添加到购物车的表单 -->
            <el-form ref="cartRuleFormRef" :model="cartRuleForm" :rules="cartRules" label-width="120px"
                class="demo-ruleForm" :size="cartFormSize" status-icon>
                <el-form-item label="name" prop="name">
                    <el-input v-model="cartRuleForm.name" disabled />
                </el-form-item>
                <el-form-item label="price" prop="price">
                    <el-input v-model="cartRuleForm.price" disabled />
                </el-form-item>
                <el-form-item label="count" prop="count">
                    <el-input-number v-model="cartRuleForm.count" :min="1" :max="10"
                        @change="cartRuleFormCountHandleChange" />
                </el-form-item>
                <el-form-item label="desc" prop="desc">
                    <el-input v-model="cartRuleForm.desc" disabled />
                </el-form-item>
                <el-form-item label="desc" prop="desc">
                    <img :src=cartRuleForm.imgurl alt="">
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitCartForm(ruleFormRef)">
                        Create
                    </el-button>
                    <el-button @click="resetCartForm(ruleFormRef)">Reset</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <!-- 购物车表格 -->
        <el-dialog v-model="cartDialogTableVisible" title="购物车" style="padding: 15px;">
            <el-table :data="cartTable">
                <el-table-column property="name" label="name" />
                <el-table-column property="price" label="price" />
                <el-table-column property="count" label="count" />
                <el-table-column>
                    <template #default="scope">
                        <el-button type="danger" @click="handleDleteCartClick(scope.$index)">移除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="width: 100%;margin-top: 25px;" v-if="cartTable.length != 0">
                <div style="float: left;">
                    <span>总价为：</span>
                    <span>{{ totalPrice }}</span>
                </div>
                <div style="float: right;">
                    <el-button type="success" @click="resultSuccess()">结算</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref, onMounted, onUnmounted } from "vue";
import type { TabsPaneContext } from 'element-plus'
import { ShoppingCart, ShoppingCartFull, MagicStick } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

// 页头导航栏
const activeIndex = ref("shop");

// 选择不同的导航栏，跳转到不同的页面
function handleSelect(key: string, keyPath: Array<string>) {
    console.log(key, keyPath);
    router.push({
        path: `/${key}`,
    });

};

// 轮播图的图片列表
const barList = [
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fbar-1.jpg",
        key: 1,
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fbar-2.jpg",
        key: 2,
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fbar-3.jpg",
        key: 3,
    },
];

// 好物推荐
const topActiveName = ref('livingRoom')

// 切换好物推荐的标签页
const handleClickTop = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

// 客厅商品
const livingImg = [
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fliving-1.jpg",
        key: 1,
        name: "极简风格 飞翼扶手Minotti钢琴键沙发",
        price: 13459.00,
        tag: "直排沙发",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fliving-2.jpg",
        key: 2,
        name: "现代简约 异形创意Moroso鹅卵石沙发",
        price: 22219.00,
        tag: "异形沙发",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fliving-3.jpg",
        key: 3,
        name: "极简风格 香奈儿亮光岩板面茶几组合 ",
        price: 1929.01,
        tag: "组合茶几",
    },
];

// 卧室商品
const bedroomImg = [
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fbedroom-1.jpg",
        key: 1,
        name: "极简风格 实木框架头层真皮软床 ",
        price: 3289.00,
        tag: "1.8*2m",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fbedroom-2.jpg",
        key: 2,
        name: "新中式 传家之选进口乌金木舒适软包床 ",
        price: 4949.00,
        tag: "1.8*2m",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fbedroom-3.jpg",
        key: 3,
        name: "奶油风 新型抗菌绒布舒适泡芙床 ",
        price: 3089.01,
        tag: "1.8*2m",
    },
];

// 灯饰商品
const lightingImg = [
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Flighting-1.jpg",
        key: 1,
        name: "现代简约 亚克力飞机造型儿童吸顶灯 ",
        price: 429.00,
        tag: "吸顶灯",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Flighting-2.jpg",
        key: 2,
        name: "新中式 古铜色自由调节吊灯 ",
        price: 1345.00,
        tag: "10头",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Flighting-3.jpg",
        key: 3,
        name: "奶油风 设计师不规则扇形布艺吊灯 ",
        price: 569.45,
        tag: "吊灯",
    },
];

// 现代商品
const modernImg = [
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fmorden-2.jpg",
        key: 2,
        name: "新中式 古铜色自由调节吊灯 ",
        price: 1345.00,
        tag: "10头",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fmorden-3.jpg",
        key: 3,
        name: "奶油风 设计师不规则扇形布艺吊灯 ",
        price: 569.45,
        tag: "吊灯",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fmorden-4.jpg",
        key: 3,
        name: "奶油风 设计师不规则扇形布艺吊灯 ",
        price: 569.45,
        tag: "吊灯",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Fmorden-5.jpg",
        key: 3,
        name: "奶油风 设计师不规则扇形布艺吊灯 ",
        price: 569.45,
        tag: "吊灯",
    },
];

// 轻奢商品
const lightLuxuryImg = [
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2FlightLuxury-2.jpg",
        key: 2,
        name: "轻奢风格 超柔科技绒布 轻柔羽绒填充 黄金倾斜角度 宽大坐深 组合沙发",
        price: 1345.00,
        tag: "轻奢风格",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2FlightLuxury-3.jpg",
        key: 3,
        name: "轻奢风格 亮光岩板台面金属质感组合茶几",
        price: 3523.45,
        tag: "轻奢风格",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2FlightLuxury-4.jpg",
        key: 3,
        name: "轻奢奶油风 治愈系亮光雪山白岩板餐桌",
        price: 4563.45,
        tag: "轻奢风格",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2FlightLuxury-5.jpg",
        key: 3,
        name: "奶油轻奢风百搭床 猫抓布琴弦齐边床 1.8*2.0米床",
        price: 5675.45,
        tag: "轻奢风格",
    },
];

// 美式商品
const americanImg = [
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Famerican-2.jpg",
        key: 2,
        name: "简美风格 进口全实木框架 金丝柚木色 沉稳厚重 店长推荐 美式转角沙发",
        price: 2342.00,
        tag: "美式风格",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Famerican-3.jpg",
        key: 3,
        name: "简美风格 北美鹅掌楸木 1.3米圆餐台（含转盘）",
        price: 3454.45,
        tag: "美式风格",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Famerican-4.jpg",
        key: 3,
        name: "奶油轻奢风百搭床 猫抓布琴弦齐边床 1.8*2.0米床",
        price: 7867.45,
        tag: "美式风格",
    },
    {
        url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/shop%2Famerican-5.jpg",
        key: 3,
        name: "简美风格 北美进口榉木坚固框架 静音床板布艺床 1.8*2.0米床",
        price: 3431.45,
        tag: "美式风格",
    },
];

// 购物车对象
interface RuleForm {
    name: String,
    price: Number,
    count: Number,
    desc: String,
    imgurl: String,
}
const cartRuleForm = reactive<RuleForm>({
    name: '',
    price: 0,
    count: 1,
    desc: '',
    imgurl: '',
})

// 购物车对话框是否可见
const cartDialogFormVisible = ref(false);
const cartFormSize = ref('default')

// 监听数量变化
function cartRuleFormCountHandleChange(value: number) {
    console.log(value)
}

// 展示添加购物车的表单
function showCart(item: any) {
    cartDialogFormVisible.value = true;
    cartRuleForm.name = item.name;
    cartRuleForm.price = item.price;
    cartRuleForm.desc = item.tag;
    cartRuleForm.imgurl = item.url;
    console.log(item)
}

// 重置购物车表单
const resetCartForm = (formEl: FormInstance | undefined) => {
    cartRuleForm.count = 1;
}

// 购物车表格是否可见
const cartDialogTableVisible = ref(false);

// 购物车对象
interface Cart {
    name: String,
    price: Number,
    count: Number,
}
const cartTable = reactive<Array<Cart>>([])

// 总价
const totalPrice = ref(0);

// 提交添加购物车的表单
const submitCartForm = async (formEl: FormInstance | undefined) => {
    console.log("submitCartForm");
    cartTable.push({
        name: cartRuleForm.name,
        price: cartRuleForm.price,
        count: cartRuleForm.count,
    })
    const m = (Number)(cartRuleForm.price) * (Number)(cartRuleForm.count);
    totalPrice.value += m;
    cartDialogFormVisible.value = false;
}

// 查看购物车
function showCartTable() {
    console.log("cart...");
    cartDialogTableVisible.value = true;
}

// 移除购物车中的商品
function handleDleteCartClick(index: number) {
    console.log("delete...");
    console.log(cartTable[index]);
    totalPrice.value -= (Number)(cartTable[index].price) * (Number)(cartTable[index].count);
    cartTable.splice(index, 1);
    console.log(index);
}

// 结算事件
function resultSuccess() {
    console.log("resultSuccess");
    cartDialogTableVisible.value = false;
    cartTable.splice(0, cartTable.length);
    totalPrice.value = 0;
    ElMessage({
        message: '结算成功！',
        type: 'success',
    })
}
</script>

<style>
.demonstration {
    color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.top-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.el-tabs__item {
    font-size: 18px !important;
    font-weight: 600;
}

.el-tabs__nav {
    display: flex;
    white-space: nowrap;
    position: relative;
    transition: transform var(--el-transition-duration);
    float: none !important;
    z-index: calc(var(--el-index-normal) + 1);
    margin: auto;
    flex-wrap: nowrap;
    align-items: baseline;
    align-content: stretch;
    justify-content: center !important;
    ;
}
</style>