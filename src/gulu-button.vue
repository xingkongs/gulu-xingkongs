<template>
    <button class="gulu-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="icon loading" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './gulu-icon'
    export default {
        name: "GuluButton",
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false
            },
            iconPosition:{
                type:String,
                default:'left',
                validate(value){
                    return value === 'left'|| value === 'right'
                }
            }
        },
        components:{
            "g-icon":Icon
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes loading {
        0% {transform: rotate(0)}
        100% {transform: rotate(360deg)}
    }
    .gulu-button{
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        > .content{
            order:2;
        }
        > .icon{
            order:1;
            margin-right:0.2em;
        }
        .loading{
            animation: loading 1s infinite linear;
        }
    }
</style>