<template>
    <button class="gulu-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
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
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            }
        },
        components: {
            "g-icon": Icon
        }
    }
</script>

<style lang="scss" scoped>
    @import './style/_var.scss';
    .gulu-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;

        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color: $button-active-bg;
        }

        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
            padding:0;
        }

        > .icon {
            order: 1;
            margin-right: 0.2em;
        }
        &.icon-right{
            >.content{
                order:1;
            }
            >.icon{
                order:2;
                margin-left:0.2em;
                margin-right:0;
            }
        }
        .loading {
            @include loading
        }
    }
</style>