<template>
    <div class="infoshow">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="8">
                <div class="user">
                    <img src="../assets/logo.jpg" alt="" class="avatar">
                </div>
            </el-col>
            <el-col :span="16">
                <div class="userinfo">
                    <div class="user-item">
                        <i class="fa fa-user"></i>
                        <span>{{user.name}}</span>
                    </div>
                    <div class="user-item">
                        <i class="fa fa-user"></i>
                        <span>{{user.identity =="manger"?"管理员":"普通员工"}}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default{
        name:'infoshow',
        computed:{
            user(){
                return this.$store.getters.user
            }
        }
    }
</script>

<style scoped>
    .userinfo{
        height: 100%;
        background-color: #eee;
    }
    .user-item{
        position: relative;
        top: 30%;
        padding: 26px;
        font-size: 28px;
        color: #333;
    }
    .user span{
        display: block;
        text-align: center;
        margin-top: 20px;
        font-size: 20px;
        font-weight: bold;    
    }
    .user img{
        width: 150px;
        border-radius: 50%;
    }
    .user{
        text-align: center;
        position: relative;
        top: 30%;
    }
    .infoshow{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .row-bg{
        width: 100%;
        height: 100%;
    }
</style>