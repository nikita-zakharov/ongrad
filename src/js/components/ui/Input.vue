<script>
    export default {
        name: 'c-input',
        props: {
            value: {
                type: [Number, String],
                require: false,
                default: ''
            },
            type: {
                type: String,
                require: false,
                default: 'text'
            },
            placeholder: {
                type: String,
                require: false,
                default: ''
            },
            required: {
                type: Boolean,
                require: false,
                default: false
            },
            label: {
                type: String,
                require: false,
                default: 'label'
            },
            disabled: {
                type: Boolean,
                require: false,
                default: false
            }
        }
    }
</script>

<template>
    <div class="c-input-wrapper">
        <label class="c-input__label">
            {{ label }}
            <input class="c-input"
                   :class="{'c-input_disabled': disabled}"
                   :value="value"
                   @input="$emit('input', $event.target.value)"
                   :type="type"
                   :placeholder="placeholder"
                   :required="required"
                   :disabled="disabled">
        </label>
    </div>
</template>

<style scoped>
    .c-input-wrapper {
        margin-bottom: 20px;
    }

    .c-input {
        display: block;
        width: 100%;
        height: 18px;
        padding: 10px 0;
        border-bottom: 1.5px solid lightgray;
        background-color: transparent;
        outline: none;
        border-top: none;
        border-left: none;
        border-right: none;
        transition: .5s border-bottom-color ease;
    }

    .c-input:focus {
        transition: .5s border-bottom-color ease;
        border-bottom: 1.5px solid blue;
    }

    .c-input__label {
        font-size: 14px;
    }

    .c-input_disabled {
        cursor: not-allowed;
    }
</style>