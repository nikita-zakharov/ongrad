<script>
    export default {
        name: 'c-checkbox',
        model: {
            prop: 'modelValue',
            event: 'change'
        },
        props: {
            modelValue: {
                type: [String, Array, Boolean, Number],
                default: ''
            },
            value: {
                type: [String, Array, Boolean, Number],
                default: ''
            },
            label: {
                type: [String, Number],
                require: false,
                default: ''
            },
            required: {
                type: Boolean,
                require: false,
                default: false
            },
            disabled: {
                type: Boolean,
                require: false,
                default: false
            }
        },
        computed: {
            id() {
                return `id${this._uid}`
            }
        },
        methods: {
            onChange(event) {
                const {modelValue, value} = this
                const isChecked = event.target.checked
                if (modelValue instanceof Array) {

                    if (isChecked) {
                        this.$emit('change', modelValue.concat(event.target.value))
                    } else {
                        const elIndex = modelValue.indexOf(modelValue.find(el => el === value)),
                            leftPart = modelValue.slice(0, elIndex),
                            rightPart = modelValue.slice(elIndex + 1),
                            updatedArray = leftPart.concat(rightPart)

                        this.$emit('change', updatedArray)
                    }
                } else {
                    this.$emit('change', isChecked)
                }
            }
        }
    }
</script>

<template>
    <label class="c-checkbox">
        <div class="c-checkbox__wrapper">
            <input class="c-checkbox"
                   :class="{'c-checkbox_disabled': disabled}"
                   :value="value"
                   :id="id"
                   @change="onChange"
                   type="checkbox"
                   :required="required"
                   :disabled="disabled">
            {{ label }}
        </div>
    </label>
</template>

<style scoped>
    .c-checkbox {
        margin-bottom: 10px;
    }

    .c-checkbox:focus {
        transition: .5s border-bottom-color ease;
        border-bottom: 1.5px solid blue;
    }

    .c-checkbox__wrapper {
        font-size: 14px;
    }

    .c-checkbox_disabled {
        cursor: not-allowed;
    }
</style>