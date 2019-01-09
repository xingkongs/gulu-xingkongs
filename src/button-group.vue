<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "button-group",

    }
</script>

<style lang="scss" scoped>
.button-group{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    border-radius: 0;
    &:not(:first-of-type){
        margin-left:-1px;
    }
    &:first-of-type{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    &:last-of-type{
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
}
</style>