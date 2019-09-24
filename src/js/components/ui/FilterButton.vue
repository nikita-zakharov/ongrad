<script>
    export default {
        name: 'c-filter-button',
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
    <label class="c-filter">
        <div class="c-filter__wrapper"
               :class="{'c-filter__wrapper-active': checked}">
            <input class="c-filter-item"
                   :class="{'c-filter_disabled': disabled}"
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

<style lang="scss" scoped>
    .c-filter {
        margin-bottom: 10px;
        cursor: pointer;
    }

    .c-filter:focus {
        transition: .5s border-bottom-color ease;
        border-bottom: 1.5px solid blue;
    }

    .c-filter__wrapper {
        display: block;
        padding: 10px 20px;
        background-color: white;
        border: 1px solid gray;
        font-size: 14px;

        &-active {
            background-color: rgba(0, 214, 214, 0.74);
        }
    }

    .c-filter-item {
        display: none;
    }

    .c-filter_disabled {
        cursor: not-allowed;
    }
</style>