<template>
    <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]" :style="{paddingLeft:gutter/2 + 'px',paddingRight:gutter/2 + 'px'}">
        <div style="outline:1px solid green; height:100%;">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "gulu-col",
        data() {
            return {
                gutter: 0
            }
        },
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style/var";

    .col {
        height: 100px;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/ 24)*100%;
            }
        }

        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }

</style>