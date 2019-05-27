<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible"></div>
        <div class="popover" v-if="popoverVisible">

            <ul class="lavel1">
                <li v-for="item1 in source" @click="lavel1Selected=item1">
                    {{item1.name}}
                </li>
            </ul>
            <ul class="lavel2" v-if="lavel2Item.length">
                <li v-for="item2 in lavel2Item" @click="lavel2Selected=item2">
                    {{item2.name}}
                </li>
            </ul>
            <ul class="lavel3" v-if="lavel3Item.length">
                <li v-for="item3 in lavel3Item">
                    {{item3.name}}
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "cascader-demo",
        data() {
            return {
                popoverVisible: false,
                lavel1Selected: null,
                lavel2Selected: null
            };
        },
        props: {
            source: {
                type: Array
            }
        },
        computed: {
            lavel2Item() {
                if (this.lavel1Selected) {
                    return this.lavel1Selected.children;
                } else {
                    return [];
                }
            },
            lavel3Item() {
                if (this.lavel2Selected) {
                    return this.lavel2Selected.children;
                } else {
                    return [];
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .cascader {
        width: 200px;
        .trigger {
            width: 200px;
            height: 32px;
            border: 1px solid red;
        }
        .popover {
            max-width: 100%;
            margin-top: 10px;
            display: flex;
            ul {
                border: 1px solid red;
                padding: 10px;
                margin: 0 2px 0 0;
                text-align: center;
                li {
                    list-style: none;
                    white-space: nowrap;
                }
            }
        }
    }

</style>