<script>
    export default {
        props: {
            title: {
                type: String,
                required: false,
                default: ''
            },
            items: {
                type: Array,
                required: true,
                default: () => []
            }
        },
        data () {
            return {
                opened: false
            }
        },
        computed: {
            checkedItems() {
                return this.items.filter(item => item.checked)
            },
            checkedList () {
                return this.checkedItems.map(item => item.value).join(', ')
            }
        },
        methods: {
            openDropdown() {
                this.opened = !this.opened
            }
        }
    }
</script>

<template>
    <div class="c-dropdown">
        <div @click="openDropdown"
             class="c-dropdown__header">
            <div class="c-dropdown__header-title"
                 :class="{'c-dropdown__header-title_small': checkedList.length}">
                {{ title }}
            </div>
            <div class="c-dropdown__header-list">
                {{ checkedList }}
            </div>
        </div>
        <div v-show="opened"
             class="c-dropdown__body">
                <slot name="checkbox"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .c-dropdown {
        border-radius: 5px;
        &__header {
            padding: 5px;
            border: 1px solid #ccc;
            cursor: pointer;
            border-radius: 5px;
        }
        &__header-title_small {
            transition: font-size .1s;
            font-size: 12px;
        }
        &__body {
            padding: 5px;
            border: 1px solid #ccc;
            border-top: none;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
</style>