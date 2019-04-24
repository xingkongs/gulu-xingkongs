<template>
    <div class="input--wrapper" :class="{error:error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)">
        <template v-if="error">
            <g-icon class="icon-error" name="error"></g-icon>
            <p class="error_message">{{error}}</p>
        </template>
    </div>
</template>

<script>
    import Icon from './gulu-icon'

    export default {
        name: "GuluInput",
        components: {
            'g-icon': Icon
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            value: {
                type: String
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./style/var";

    .input--wrapper {
        font-size: $font-size;
        display: inline-flex;
        vertical-align: middle;
        align-items: center;
        justify-content: center;

        > :not(:last-child) {
            margin-right: 0.5em;
        }

        > input {
            border: 1px solid $input-border-color;
            padding: 8px 16px;
            font-size: inherit;
            &:hover {
                border: 1px solid $input-border-color-hover;
            }
            &:focus {
                background-color: #fefffe;
                border-color: #3bb4f2;
                outline: none;
                box-shadow: $input-box-shadow;
            }

            &[disabled], &[readonly] {
                pointer-events: none;
                border-color: transparent;
                cursor: not-allowed;
                opacity: .45;
                -webkit-box-shadow: none;
                box-shadow: none;
            }
        }

        &.error {
            color: #dd514c;

            > .icon-error {
                fill: #dd514c;
            }

            > input {
                &:focus {
                    border-color: #dd514c;
                    box-shadow: $input-box-shadow-error;
                    outline: none;
                }
            }
        }
    }
</style>