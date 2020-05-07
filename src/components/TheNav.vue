<template>
    <nav>
        <router-link to="/shorturl">短网址链接</router-link>
        
    </nav>
</template>

<script>
    export default {
        name: 'TheNav',
        data() {
            return {};
        }
    };
</script>

<style scoped lang="scss">
    nav {
        padding: 20px;
        box-shadow: 1px 0 2px rgba(0, 0, 0, .1);
    }

    a {
        $h: 30px;

        display: block;
        border-radius: 15px;
        padding: 0 $h / 2;
        height: $h;
        line-height: $h;
        transition: background .3s;

        &.router-link-active,
        &:hover {
            color: #fff;
            background: $color-primary;
        }
    }
</style>