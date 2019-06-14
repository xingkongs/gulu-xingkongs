<template>
    <div class="g-slide">
        <div class="g-slide-window">
            <div class="g-slide-inner" style="width:200px;height:200px;">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slide",
        data() {
            return {
                arr: []
            };
        },
        mounted() {
            this.arr = this.$children.map((e, i) => i);
            this.$children[this.arr[0]].visible = true;
            setInterval(() => {
                this.$children[this.arr[0]].visible = false;
                this.$children[this.arr[1]].visible = true;
                let firstItem = this.arr.splice(0, 1)[0];
                this.arr.push(firstItem);
            }, 3000);
        }
    };
</script>

<style scoped lang="scss">
    .g-slide {
        display: inline-block;
        vertical-align: middle;
        &-window {
            overflow: hidden;
        }
        &-inner {
            position: relative;
        }
    }
</style>