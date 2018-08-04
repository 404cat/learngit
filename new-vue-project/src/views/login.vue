<template>
<div class="bg-box">
    <div>
        <form >
            <input v-model="name" type="text" placeholder="please enter your name">
            <input v-model='password' type="password" placeholder="please enter your password">
            <button type="button" v-on:click='submit' >Login</button>
        </form>
    </div>
</div>
</template>

<script lang='ts'>
    import {
        Component,
        Vue,
        Provide,
    } from "vue-property-decorator";
    import axios  from 'axios';
    import Router from "vue-router";
    import router from '@/router';



    @Component
    export default class login extends Vue {
        
        name:string = '';
        password:string = '';
        data:any = {};

        submit(): boolean {
            let putData = `name=${this.name}&pwd=${this.password}`;
            axios
            .post('/carrots-admin-ajax/a/login',putData)
            .then(response => {
                this.data = response;
                if(this.data.data.message === 'success') {
                    console.log('success');
                    // router.push({name: 'backend'});
                }
            })
            return false;
        }
    }


    /* @Component 修饰符注明了此类为一个 Vue 组件
    所有的组件选项（子组件之类的）都可以放在这里 */
    /* prop 可以接受父级传进来的数据 
  如果使用ts的话，所有的声明出来的class就是组件吗？所有组件都继承与 Vue？
  方法都是/ 组件方法也可以直接声明为实例的方法/ 初始数据可以直接声明为实例的属性*/

</script>

<style scoped lang="scss">
    /* 加上scoped属性是为了把css的属性限制在这个组件中 */
    .bg-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: url(../iamge/bgphoto.jpg) no-repeat center;
        background-size: cover;
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 30px;
            width: 500px;
            height: 310px;
            background: rgba(255, 255, 255, 0.2);
            input {
                margin: 10px 0;
                padding: 3px 10px;
                height: 30px;
                transition:border .2s ease-in-out,box-shadow .2s ease-in-out;
                background: #fff;
                border-radius: 4px;
                border: 1px solid #dcdee2;
                font-size: 12px;
                &:hover,&:focus{
                   border-color: #57a3f3; 
                }
            }
            button {
                margin: 10px 0;
                height: 30px;
                background:  #2d8cf0;
                color: #fff;
                font-size: 13px;
                border-radius: 4px;
                &:hover {
                background: #57a3f3;
                }
            }
        }
    }
</style>

