<template>
    <div class="index">
        <HeadNev></HeadNev>
        <router-view></router-view>
    </div>
</template>

<script>
import HeadNev from "../components/HeadNev.vue";
    export default{
        name:'index',
        components:{ HeadNev }
    }
</script>