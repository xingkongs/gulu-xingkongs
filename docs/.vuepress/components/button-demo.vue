<template>
    <div>
        <g-button :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
        <g-button :loading="loading2" icon="settings" @click="loading2 = !loading2">设置</g-button>
        <g-button :loading="loading3" icon="settings" icon-position="right" @click="loading3 = !loading3">设置</g-button>
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
    </div>

</template>

<script>
    import Button from '../../../src/gulu-button'
    import ButtonGroup from '../../../src/button-group'
    export default {
        name: "button-demo",
        components:{
            'g-button':Button,
            'g-button-group':ButtonGroup,
        },
        data(){
            return {
                loading1: false,
                loading2: false,
                loading3: false,
            }
        }
    }
</script>

<style scoped lang="scss">

</style>