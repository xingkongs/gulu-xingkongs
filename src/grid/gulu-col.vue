<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border:1px solid green;height:100%;">
        <slot></slot>
        </div>
    </div>
</template>

<script>
    function validator(value) {
        let keys = Object.keys(value)
        let valide =  true
        keys.map((key) => {
            if( ['span', 'offset'].indexOf(key) < 0){
                valide = false
                console.warn(`参数不是 span 或者 offset 你的参数 是 ${key}`)
            }
        })
        return valide

    }
    export default {
        name: "gulu-col",
        data() {
            return {
                gutter: 0
            }
        },
        methods:{
            createClasses(obj,string=""){
                if(!obj){return []}
                let array =  []
                if(obj.span){
                    array.push(`col-${string}${obj.span}`)
                }
                if(obj.offset){
                    array.push(`offset-${string}${obj.offset}`)
                }
                return array
            }
        },
        computed: {
            colStyle() {
                let {gutter} = this
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                }
            },
            colClass () {
                let {span, offset, ipad, narrowPc, pc, widePc} = this
                let createClasses = this.createClasses
                return [
                    ...createClasses({span,offset}),
                    ...createClasses(ipad,'ipad-'),
                    ...createClasses(narrowPc,'narrow-pc-'),
                    ...createClasses(pc,'pc-'),
                    ...createClasses(widePc,'wide-pc-'),
                ]
            }
        },
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            ipad: {
                type: Object,
                validator
            },
            narrowPc: {
                type: Object,
                validator
            },
            pc: {
                type: Object,
                validator
            },
            widePc: {
                type: Object,
                validator
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
        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media(min-width: 769px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media(min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media(min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
    }

</style>