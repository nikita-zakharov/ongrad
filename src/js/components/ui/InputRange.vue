<script>
    export default {
        name: 'c-input',
        model: {
            prop: 'modelValue',
            event: 'change'
        },
        props: {
            startValue: {
                type: [Number, String],
                require: false,
                default: ''
            },
            endValue: {
                type: [Number, String],
                require: false,
                default: ''
            },
            hasCheckbox: {
                type: Boolean,
                require: false,
                default: false
            },
            checkboxTitle: {
                type: String,
                require: false,
                default: ''
            },
            modelValue: {
                type: [String, Array, Boolean, Number],
                default: ''
            },
            checkboxValue: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                require: false,
                default: 'text'
            },
            startPlaceholder: {
                type: String,
                require: false,
                default: ''
            },
            endPlaceholder: {
                type: String,
                require: false,
                default: ''
            },
            startLabel: {
                type: String,
                require: false,
                default: ''
            },
            endLabel: {
                type: String,
                require: false,
                default: ''
            },
            checked: {
                type: Boolean,
                require: false,
                default: false
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
        },
        methods: {
            onChange(event) {
                const isChecked = event.target.checked
                if (isChecked) {
                    this.$emit('updateCheckbox', event.target.checked)
                } else {
                    this.$emit('updateCheckbox', isChecked)
                }
            }
        },

    }
</script>

<template>
    <div class="c-range-wrapper">
        <div v-if="hasCheckbox"
             class="c-range__checkbox">
            <label class="c-range__label"
                   :class="{'c-range__label_active': checkboxValue}">
                <input class="c-range__input"
                       :class="{'c-filter_disabled': disabled}"
                       :value="checkboxValue"
                       @change="onChange"
                       type="checkbox"
                       :required="required"
                       :disabled="disabled">
                {{ checkboxTitle }}
            </label>
        </div>
        <label class="c-input__label">
            {{ startLabel }}
            <input class="c-input"
                   :class="{'c-input_disabled': disabled}"
                   :value="startValue"
                   @input="$emit('updateStartValue', $event.target.value)"
                   :type="type"
                   :placeholder="startPlaceholder"
                   :required="required"
                   :disabled="disabled">
        </label>
        <label class="c-input__label">
            {{ endLabel }}
            <input class="c-input"
                   :class="{'c-input_disabled': disabled}"
                   :value="endValue"
                   @input="$emit('updateEndValue', $event.target.value)"
                   :type="type"
                   :placeholder="endPlaceholder"
                   :required="required"
                   :disabled="disabled">
        </label>
    </div>
</template>

<style lang="scss" scoped>
    .c-range-wrapper {
        display: flex;
    }
    .c-range__input {
        display: none;
    }
    .c-range__label {
        display: flex;
        align-items: center;
        padding: 0 5px;
        width: 70px;
        font-size: 12px;
        height: 100%;
        cursor: pointer;
        &_active {
            background-color: rgba(0, 214, 214, 0.74);
         }
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