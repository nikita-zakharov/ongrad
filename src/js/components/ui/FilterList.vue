<script>
    import FilterButton from "./FilterButton.vue";

    export default {
        components: {
          'c-filter-button': FilterButton
        },
        props: {
            title: {
                type: String,
                required: false,
                default: ''
            },
            name: {
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
    <div class="c-filter-buttons">
        <c-filter-button v-for="item in items"
                          :key="item.value"
                          v-model="item.checked"
                          :value="item.value"
                          :checked="item.checked"
                          :name="name"
                          :label="item.name"/>
    </div>
</template>

<style scoped>
    .c-filter-buttons {
        display: flex;
    }
</style>