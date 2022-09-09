<template>
    <header class="head-nav">
        <el-row>
            <el-col :span="6" class="logo-container">
                <img src="../assets/logo.jpg" alt="" class="logo" />
                <span class="title">Cz在线投票系统后台管理</span>
            </el-col>
            <el-col :span="6" class="user">
                <div class="userinfo">
                    <img src="../assets/logo.jpg" class="avatar" alt="" />
                    <div class="welcome">
                        <p class="name comename">welcome</p>
                        <p class="name avatarname" >{{user.name}}</p>
                    </div>
                    <span class="username">
                        <el-dropdown trigger="click" @command="setDialogInfo">
                            <span class="el-dropdown-link">     
                                <i class="el-icon-caret-down el-icon-caret-bottom"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                                <el-dropdown-item command="logout">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                </div>
            </el-col>
        </el-row>
    </header>
</template>

<script>
export default {
    name: "head-nav",
    computed:{
        user(){
            // console.log(this.$store.getters.user);
            return this.$store.getters.user;
        }
    },
    methods:{
        setDialogInfo(cmdItem){
            switch(cmdItem){
                case"info":
                    this.showInfoList();
                    break;
                case 'logout':
                    this.logout();
                    break;
            }
        },
        showInfoList(){
            this.$router.push('/infoshow')
        },
        logout(){
            //清除token
            localStorage.removeItem('eleToken');

            //设置vuex store
            this.$store.dispatch('clearCurrentState');

            //跳转
            this.$router.push('/login');
        }

    }
    
};
</script>
<style scoped>
.head-nav {
    width: 100%;
    height: 60px;
    min-width: 600px;
    padding: 5px;
    background: #303133;
    color: #fff;
    border-bottom: 1px solid #1f2;
}

.username {
    cursor: pointer;
    margin-right: 5px;
}

.avatarname {
    color: rgb(227, 231, 236);
    font-weight: bolder;
}

.comename {
    font-size: 12px;
}

.logo-container {
    line-height: 60px;
    min-width: 400px;
}

.logo {
    height: 60px;
    width: 60px;
    margin-right: 5px;
    vertical-align: middle;
    display: inline-block;
    border-radius: 20%;
}

.name {
    line-height: 20px;
    text-align: center;
    font-size: 14px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
}

.welcome {
    display: inline-block;
    width: auto;
    vertical-align: middle;
    padding: 0 5px;
}

.title {
    vertical-align: middle;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    font-size: 26px;
    color: rgb(160, 144, 144);
}

.user {
    line-height: 60px;
    text-align: center;
    float: right;
    padding-right: 10px;
}
/* .el-dropdown-link{ 
    color: rgb(219, 15, 15);
    margin-left: 5px;
} */
.el-dropdown-link {
    color: #ffffff;
  }
  .el-icon-caret-down {
    font-size: 12px;
  }
</style>