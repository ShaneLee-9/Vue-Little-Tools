<template>
    <div>
        <el-input placeholder="请输入QQ号" v-model="qq" @keyup.native.enter="getQQInfo">
            <el-button slot="append" icon="el-icon-search" @click="getQQInfo"></el-button>
        </el-input>

        <div class="base-info">
            <img class="avatar" :src="avatar" />
            <div class="info">
                <h3>
                    <span>{{ name }}</span>
                    <img class="gender-icon" :src="require(`@/assets/img/${gender === '男' ? '' : 'fe'}male.svg`)" alt="">
                </h3>
                <p>
                    <img class="level-icon" src="@/assets/img/level.svg" />
                    <span>{{ level }}</span>
                </p>
            </div>
        </div>
        <table>
            <tr>
                <td>QQ邮箱</td>
                <td><a :href="'mailto:' + mail">{{ mail }}</a></td>
            </tr>
            <tr>
                <td>QQ空间</td>
                <td><a :href="zone" target="_blank">{{ zone }}</a></td>
            </tr>
            <tr>
                <td>Q龄</td>
                <td>{{ age }}</td>
            </tr>
            <tr>
                <td>状态</td>
                <td>{{ state }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import { Input, Button } from 'element-ui';

    export default {
        name: 'QQ',
        components: {
            [Input.name]: Input,
            [Button.name]: Button
        },
        data() {
            return {
                qq: '',
                account: '',
                mail: '',
                name: '',
                avatar: '',
                zone: '',
                gender: '男', // 性别
                age: 0, // Q龄
                level: 1, // 等级
                state: ''
            };
        },
        methods: {
            getQQInfo() {
                // 查询QQ相关信息
                this.$kateGet('https://api.66mz8.com/api/qq.info.php', { qq: this.qq })
                    .then(res => {
                        this.account = res.qq;
                        this.mail = res.mail;
                        this.name = res.name;
                        this.avatar = res.qlogo;
                        this.zone = res.qzone;
                    });

                this.$kateGet('https://api.66mz8.com/api/qq.level.php', { qq: this.qq })
                    .then(res => {
                        this.gender = res.gender;
                        this.age = res.qqage;
                        this.level = res.level;
                    });

                this.$kateGet('https://api.66mz8.com/api/qq.state.php', { qq: this.qq })
                    .then(res => {
                        this.state = res.state;
                    });
            }
        }
    };
</script>

<style scoped lang="scss">
    .base-info {
        display: flex;
        align-items: center;
        margin-top: 30px;

        .avatar {
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }

        .info {
            margin-left: 10px;

            h3 {
                span {
                    vertical-align: middle;
                }
            }

            p {
                margin-top: 5px;

                img, span {
                    vertical-align: middle;
                }

                span {
                    margin-left: 2px;
                    color: deepskyblue;
                }
            }

            .gender-icon {
                width: 20px;
                vertical-align: middle;
            }

            .level-icon {
                width: 15px;
            }
        }
    }

    table {
        margin-top: 20px;

        td {
            padding: 3px 10px;

            &:first-child {
                text-align: right;
            }
        }
    }
</style>