<template>
    <nav>
        <router-link v-for="item of navList" :key="item.name" :to="item.url">{{ item.name }}</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'TheNav',
        data() {
            return {
                navList: [
                    { name: '短网址链接', url: '/shorturl' },
                    { name: 'QQ查询', url: '/qq' }
                ]
            };
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

        & + a {
            margin-top: 10px;
        }
    }
</style>