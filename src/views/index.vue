<template>
    <div>
        <div>
            <!--头部导航栏-->
            <!--  头尾修改成组件 -->
            <my-header/>    
            <!-- 轮播图 -->
            <Carousel/>
            <!-- 房源、日历搜索框 -->
            <div class="lb-fang">
                <div class="mm">
                    <div class="fy-a">
                        <div>房源</div>
                    </div>
                <div class="fy-b">
                    <i class="img-dingw"></i>
                    <input type="text" placeholder="输入目的地、城市" v-model="find" @keydown.enter="findMsg">
                </div>
                <div class="fy-d">
                    <a @click="findMsg" style="cursor:pointer">搜索</a>
                </div>
            </div>
            </div>

            <!-- 主体部分 --><!-- F1 -->
            <div class="zhut">
                <div class="zt-width">
                    <div class="zt-title">
                        <h3>秋季特惠房源</h3>
                        <h6>低至 8 折，可叠加使用礼券</h6>
                    </div>
                    <!-- 导航栏 -->
                    <div class="zt-btn" @click="getInner($event)">
                        <button :data-id="p" :class="{active:p==data}" v-for="(itemtop,p) of listtop" :key="p">{{itemtop}}</button>
                    </div>
                    <!-- 图文区域 -->
                    <div class="zt-tuwen">
                            <!-- 一个详细信息 -->
                            <div class="zt-tu-width" v-for="(item,i) of list1" :key="i">
                            <div class="div-h1" >
                                <!-- 图片 -->
                                <div class="div-img" ><a href="javascript:;"><img :src="item.pics" @click="intoDetail" :data-id="item.id"></a></div>
                                <!-- 详细 -->
                                <div class="div-text">
                                    <span><a href="javascript:;">{{item.type}} · 1张床</a></span>
                                    <p><a href="javascript:;">{{item.details}}</a></p>
                                    <span>￥{{item.price}}</span>
                                    <span>￥424</span>
                                    <span>每晚</span>
                                    <!-- 五星好评 -->
                                    <div class="div-pj">
                                        <span><img src="../../public/img/index/wxhp.png" alt=""></span>
                                        <span>166 · 超赞房东</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 查看更多 -->
                        <div class="zt-chak">
                            <a @click="toList">查看更多重庆房源<img src="../../public/img/index/dayu01.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 主体部分 --><!-- F2 -->
            <div class="zhut">
                <div class="zt-width">
                    <div class="zt-title mt-5">
                        <h3>秋季特惠房源</h3>
                    </div>
                    <!-- 导航栏 -->
                    <div class="zt-btn" @click="getInner2($event)">
                        <button :class="{active:pb==data2}" :data-id = "pb" v-for="(itembto,pb) of listbottom" :key='pb'>{{itembto}}</button>
                    </div>
                    <!-- 图文区域 -->
                    <div class="zt-tuwen">
                        <!-- 一个详细信息 -->
                        <div class="zt-tu-width" v-for="(item2,i) of list2" :key="i">
                            <div class="div-h1" >
                                <!-- 图片 -->
                                <div class="div-img"    @click="intoDetail"><a href="javascript:;"><img :src="item2.pics" :data-id="item2.id"></a></div>
                                <!-- 详细 -->
                                <div class="div-text">
                                    <span><a href="javascript:;">{{item2.type}} · 1张床</a></span>
                                    <p><a href="javascript:;">{{item2.details}}</a></p>
                                    <span>￥{{item2.price}}</span>
                                    <span>￥424</span>
                                    <span>每晚</span>
                                    <!-- 五星好评 -->
                                    <div class="div-pj">
                                        <span><img src="../../public/img/index/wxhp.png"></span>
                                        <span>166 · 超赞房东</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 查看更多 -->
                        <div class="zt-chak">
                            <a @click="toList">查看更多重庆房源<img src="../../public/img/index/dayu01.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>    
            <my-footer/>
        </div> 
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            date:'',
            data:0,  // 上面的
            data2:0,  //  下面的
            list1:[],
            list2:[],
            find:"",
            listtop:['渝中区','渝北区','江北区','南岸区','九龙坡区','沙坪坝区','大渡口区'],
            listbottom:['洪崖洞','解放碑','观音桥','磁器口','朝天门','南滨路','江北机场']
        }
    },
    
    methods: {
        //  点击加载更多  跳转到list
            toList(){
                this.$router.push('/list')
            },
        // 监听用户点击上面的地区时
            getInner(e){
                if(e.target.localName ==="button"){
                    // 给点击的class加上active
                    var  btn = e.target.innerHTML;
                    this.data = e.target.dataset.id
                    var obj={obj:btn}
                    var url = "find"
                    this.axios.get(url,{params:obj}).then(res=>{
                    // 如果没找到数据 提示用户没有查询到当地数据
                    if(res.data.code==-1){
                        alert("暂无该地区的房源信息");
                        return;
                    }else{
                        // 携带 find 中的值 跳转 到list 组件
                        this.list1 = res.data
                     }
                   }
                 )}
            },
            // 监听用户点击上面的地区时
            getInner2(e){
                if(e.target.localName ==="button"){
                    // 给点击的class加上active
                    var  btn = e.target.innerHTML;
                    this.data2 = e.target.dataset.id
                    var obj={obj:btn}
                    var url = "find"
                    this.axios.get(url,{params:obj}).then(res=>{
                    // 如果没找到数据 提示用户没有查询到当地数据
                    if(res.data.code==-1){
                        alert("暂无该地区的房源信息");
                        return;
                    }else{
                        // 携带 find 中的值 跳转 到list 组件
                        this.list2 = res.data
                     }
                   }
                 )}
            },
        // 监听键盘回车时的搜索
            findMsg(){
                //  用 find 中的值  查询数据库
                // 如果没有找到 提示用户没找到相关信息
                // 如果找到
                // 携带参数跳转到 list 页面
                //  list 
                var url="find";
                var obj ={obj:this.find} ;
                this.axios.get(url,{params:obj}).then(res=>{
                    // 如果没找到数据 提示用户没有查询到当地数据
                    if(res.data.code==-1){
                        alert("暂无该地区的房源信息");
                        return;
                    }else{
                        // 携带 find 中的值 跳转 到list 组件
                        this.$router.push({path:"/list",query:{
                                     find:this.find}
                     })
                   }
                })
                
            },
            intoDetail(e){
                var pid = e.target.dataset.id;
                // 将获得的 id 传入 detail 页面
                this.$router.push({path:"/detail",query:{pid:pid}})
            },
            topfind(){
                //  页面创建的时候，查询数据库，获取默认为渝中区的数据
                var obj = {obj:"渝中"}
                this.axios.get("find",{params:obj}).then(res=>{
                    //  遍历加载  
                    this.list1 = res.data;
                })
            },
            btnfind(){
                //  下面部分
                var obj = {obj:"洪崖洞"}
                this.axios.get("find",{params:obj}).then(res=>{
                    //  遍历加载  
                    this.list2 = res.data;
                })
            }
    },
    mounted(){
        
    },
    created() {
        this.topfind()
        this.btnfind()
        
        
    },
}
</script>
<style>

</style>