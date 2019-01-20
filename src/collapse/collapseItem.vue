<template>
    <div class="g-collapse-item">
        <div class="title" @click="visible = ! visible">
            {{title}}
        </div>
        <div class="content" v-if="visible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluCollapseItem",
        data(){
          return {
              visible:false
          }
        },
        props:{
            title:{
                type:String,
                required:true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../style/var";
    .g-collapse-item{
        & > .title{
            border: 1px solid $border-color;
            margin-left:-1px;
            margin-right:-1px;
            margin-top:-1px;
            user-select: none;
            cursor: pointer;
        }
        &:first-child .title{
            border-top-left-radius:$border-radius;
            border-top-right-radius:$border-radius;
            margin-top:-1px;
        }
        &:last-child .title:last-child{
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
            margin-bottom:-1px;
        }

    }
</style>