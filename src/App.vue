<template>
    <div id="app">
        <the-nav/>
        <router-view class="root-view"/>
    </div>
</template>

<script>
    import TheNav from './components/TheNav';

    export default {
        components: {
            TheNav
        }
    };
</script>

<style>
    #app {
        display: flex;
        height: 100vh;
        overflow: hidden;
    }
    
    .root-view {
        flex: 1;
        padding: 30px;
    }
</style>
