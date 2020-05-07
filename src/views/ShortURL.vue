<template>
    <div class="home">
        <div class="wrap create">
            <h2>生成短网址</h2>
            <el-input placeholder="请输入长网址" v-model="long" @keyup.native.enter="createShort">
                <el-button type="primary" slot="append" @click="createShort">生成</el-button>
            </el-input>
            <div class="result">
                <el-input 
                    class="short-item"
                    v-for="item of shortList"
                    :key="item.type" 
                    :value="item.url"
                >
                    <span class="short-result-prepend" slot="prepend">{{ item.type }}</span>
                    <el-button slot="append" @click="copy(item.url)">复制</el-button>
                </el-input>
            </div>
        </div>
        <div class="wrap restore">
            <h2>还原短网址</h2>
            <el-input placeholder="请输入短网址" v-model="short" @keyup.native.enter="restoreShort">
                <el-button type="primary" slot="append" @click="restoreShort">还原</el-button>
            </el-input>
        </div>
    </div>
</template>

<script>
    import { Input, Button, Message, MessageBox } from 'element-ui';
    import { copy } from '@/utils/common.js';

    export default {
        name: 'Home',
        components: {
            [Input.name]: Input,
            [Button.name]: Button
        },
        data() {
            return {
                long: '', // 长网址
                shortList: [],
                short: '' // 短网址
            };
        },
        methods: {
            // 生成短网址
            createShort() {
                if (!this.long) {
                    Message({
                        message: '请输入长网址',
                        type: 'error'
                    });
                    return;
                }

                this.shortList = [];
                const arr = ['wechat', 'tcn', 'sinaurl', 'suoim', 'suonz', 'mrwso', 'unu'];

                for (let i of arr) {
                    this.$kateGet('https://api.66mz8.com/api/short.php', {
                        dwz: i,
                        url: this.long
                    }).then(res => {
                        this.shortList.push({
                            type: i,
                            url: res.url_short
                        });
                    });
                }
            },

            // 复制
            copy: copy,

            // 还原短网址
            restoreShort() {
                this.$kateGet('https://api.66mz8.com/api/source.php', {
                    url: this.short
                }).then(res => {
                    MessageBox.confirm(res.url_long, {
                        confirmButtonText: '复制',
                        cancelButtonText: '关闭',
                        type: 'success'
                    }).then(() => {
                        copy(res.url_long);
                    }).catch(() => void 0);
                }).catch(() => {
                    Message.error('还原失败');
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .wrap {
        width: 500px;

        h2 {
            margin-bottom: 20px;
            font-weight: normal;
        }

        .result {
            margin-top: 20px;
        }
    }

    .short-result-prepend {
        display: block;
        width: 50px;
    }

    .short-item {
        margin-bottom: 5px;
    }

    .restore {
        margin-top: 50px;
    }
</style>
