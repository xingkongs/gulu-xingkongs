<template>
    <div class="g-slide" @mouseenter="onMouseEnter" @mouseleave="startPlay" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
        <div class="g-slide-window">
            <div class="g-slide-inner">
                <slot></slot>
            </div>
        </div>
        <div class="g-slide-slots" v-if="childrenLength">
            <span @click="onClickPrev" class="g-slide-slots_icon"> <g-icon name="left"></g-icon> </span>
            <span v-for="n in childrenLength" :class="{active:selectedIndex===(n-1)}" @click="select(n-1,true)">{{n-1}}</span>
            <span @click="onClickNext" class="g-slide-slots_icon"> <g-icon name="right"></g-icon> </span>
        </div>
    </div>
</template>

<script>
    import GIcon from "../gulu-icon";
    export default {
        name: "Slide",
        components: {GIcon},
        data() {
            return {
                timeId: undefined,
                childrenLength: 0,
                lastSelectedIndex: undefined,
                startTouch: undefined,
                serial: true
            };
        },
        props: {
            autoPlay: {
                type: Boolean,
                default: true
            },
            selected: {
                type: String
            },
            autoPlayDelay: {
                type: Number,
                default: 5000
            }
        },
        mounted() {
            this.childrenLength = this.items.length;
            this.updateChildren();
            if (this.autoPlay) {
                this.playAutomatically();
            }
        },
        updated() {
            this.updateChildren();
        },
        computed: {
            selectedIndex() {
                return this.names.indexOf(this.selected) || 0;
            },
            names() {
                return this.items.map(item => item.name);
            },
            items() {
                return this.$children.filter(vm => vm.$options.name === "slide-item") || [];
            }
        },
        methods: {
            onMouseEnter() {
                this.pause();
            },
            startPlay() {
                this.playAutomatically();
            },
            onTouchStart(e) {
                this.pause();
                this.startTouch = e.changedTouches[0];
            },
            onTouchMove() {
                this.serial = true;
            },
            onTouchEnd(e) {
                let {clientX: x1, clientY: y1} = this.startTouch;
                let {clientX: x2, clientY: y2} = e.changedTouches[0];
                let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
                let deltaY = Math.abs(y1 - y2);
                let rate = distance / deltaY;
                if (rate > 2) {
                    if (x1 > x2) {
                        this.select(this.selectedIndex + 1);
                    } else {
                        this.select(this.selectedIndex - 1);
                    }
                }
                this.$nextTick(() => {
                    this.startPlay();
                });
            },
            playAutomatically() {
                if (this.timeId) {return;}
                let run = () => {
                    let index = this.names.indexOf(this.selected);
                    let newIndex = index + 1;
                    this.select(newIndex);
                    this.timeId = setTimeout(run, this.autoPlayDelay);
                };
                this.timeId = setTimeout(run, this.autoPlayDelay);
            },
            pause() {
                window.clearTimeout(this.timeId);
                this.timeId = undefined;
            },
            onClickPrev() {
                this.select(this.selectedIndex - 1);
            },
            onClickNext() {
                this.select(this.selectedIndex + 1);
            },
            select(index, isSerial) {
                this.serial = !isSerial;
                this.lastSelectedIndex = this.selectedIndex;
                if (index === -1) {index = this.names.length - 1;}
                if (index === this.names.length) { index = 0; }
                this.$emit("update:selected", this.names[index]);
            },
            updateChildren() {
                let first = this.items[0];
                let selected = this.selected || first.name;
                this.items.forEach(item => {
                    let reverse = this.lastSelectedIndex > this.selectedIndex;
                    if (this.serial) {
                        if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
                            reverse = false;
                        }
                        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
                            reverse = true;
                        }
                    }
                    item.reverse = reverse;
                    this.$nextTick(() => {
                        //解决更改方向后 reverse不会立即更新 bug
                        item.selected = selected;
                    });
                });
            }
        }
    };
</script>

<style scoped lang="scss">
    .g-slide {
        display: block;
        vertical-align: middle;
        &-window {
            overflow: hidden;
        }
        &-inner {
            position: relative;
        }
        &-slots {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
            & > * {
                width: 20px;
                height: 20px;
                margin: 0 5px;
                border-radius: 50%;
                background: #ddd;
                cursor: pointer;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                user-select: none;
                &.active {
                    background: black;
                    color: #fff;
                    cursor: default;
                }
            }
        }
        &-slots_icon {
            font-size: 12px;
        }
    }
</style>