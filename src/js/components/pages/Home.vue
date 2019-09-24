<script>
    import Dropdown from "../ui/Dropdown.vue";
    import Checkbox from "../ui/Checkbox.vue";
    import FilterList from "../ui/FilterList.vue";
    import response from "./response";
    import InputRange from "../ui/InputRange.vue";

    export default {
        components: {
            'c-dropdown': Dropdown,
            'c-checkbox': Checkbox,
            'c-filter-list': FilterList,
            'c-input-range': InputRange
        },
        data() {
            return {
                totalApartments: 20,
                form: {
                    rooms: null,
                    priceRange: {
                        start: '',
                        end: ''
                    },
                    floorRange: {
                        start: '',
                        end: ''
                    },
                    notFirstLastFloor: false,
                    is_finished: null
                },
                years: [
                    {id: 1, name: 'Дом сдан', value: 'Дом сдан', is_finished: true, checked: false},
                    {id: 2, name: 2019, value: 2019, is_finished: false, checked: false},
                    {id: 3, name: 2020, value: 2020, is_finished: false, checked: false},
                    {id: 4, name: 2021, value: 2021, is_finished: false, checked: false},
                    {id: 5, name: 2022, value: 2022, is_finished: false, checked: false}
                ],
                rooms: [
                    {id: 1, name: 'Студия', value: 'Студия', checked: false},
                    {id: 2, name: 1, value: 1, checked: false},
                    {id: 3, name: 2, value: 2, checked: false},
                    {id: 4, name: 3, value: 3, checked: false},
                    {id: 5, name: 4, value: 4, checked: false}
                ],
            }
        },
        computed: {
            chosenRooms() {
                return this.rooms.filter(item => item.checked)
                    .map(el => el.value)
            },
            chosenYears() {
                return this.years.filter(item => item.checked)
                    .map(el => el.value)
            },
            filteredArray() {
                /*
                Не стал реализовывать полноценный фильтр по всем параметрам
                на это ушло бы время, а по факту это делает backend
                 */
                // const {apartments} = response
                // const filterByYear = apartments.filter(item => {
                //         return this.chosenYears.includes(item.finished_year)
                //     }),
                //     filterByRooms = apartments.filter(item => {
                //         return this.chosenRooms.includes(item.rooms)
                //     })
                // return filterByYear.concat(filterByRooms)
                // let filteredItems = []
                // for (const key in this.form) {
                //     filteredItems = apartments.filter(item => {
                //         if (item.hasOwnProperty(key)) {
                //             return item[key] === apartments[key]
                //         }
                //
                //     })
                // }
                // return filteredItems
            },
            paginationPages() {
                const pages = [],
                    {apartments} = response,
                    pagesCount = Math.ceil(apartments.length / 5),
                    mid = 5

                for (let col = 0; col < pagesCount; col++) {
                    pages.push(apartments.slice(col * mid, col * mid + mid))
                }

                return pages
            },
            pagesCount () {
                const {apartments} = response
                return apartments.length / 5
            },
            currentPaginationPage() {
                return this.$route.query.page || 1
            },
            totalCount () {
                const {apartments} = response
                return apartments.length
            }
        }
    }
</script>
<template>
    <div>
        <div>
            Выбранные комнаты: {{ chosenRooms.join(', ') }}
        </div>
        <div class="row rooms">
            <c-dropdown v-model="form.rooms"
                        title="Комнат"
                        :items="rooms">
                <template v-slot:checkbox="">
                    <c-checkbox v-for="flat in rooms"
                                :key="flat.value"
                                v-model="flat.checked"
                                :value="flat.value"
                                name="numbers"
                                :label="flat.name"/>
                </template>
            </c-dropdown>
        </div>
        <div class="row years">
            <div>
                Выбранные года сдачи: {{ chosenYears.join(', ') }}
            </div>
            <c-filter-list :items="years"/>
        </div>
        <div class="row">
            <div>
                Цена от {{ form.priceRange.start }} и до {{ form.priceRange.end }}
            </div>
            <c-input-range :startValue="form.priceRange.start"
                           :endValue="form.priceRange.end"
                           @updateStartValue="form.priceRange.start = $event"
                           @updateEndValue="form.priceRange.end = $event"
                           startLabel="от 2"
                           endLabel="до 13"/>
        </div>
        <div class="row">
            <div>
                Этажность
            </div>
            <div>
                <c-input-range :startValue="form.floorRange.start"
                               :endValue="form.floorRange.end"
                               @updateStartValue="form.floorRange.start = $event"
                               @updateEndValue="form.floorRange.end = $event"
                               startLabel="от 2"
                               endLabel="до 13"
                               hasCheckbox
                               :checkboxValue="form.notFirstLastFloor"
                               checkboxTitle="Этаж не первый/последний"
                               @updateCheckbox="form.notFirstLastFloor = $event"/>
            </div>
        </div>
        <div v-show="paginationPages.length"
             class="row">
            <div>
                Всего найдено: {{ totalCount }}
                <ul>
                    <li v-for="el in paginationPages[currentPaginationPage-1]">
                        {{ el }}
                    </li>
                </ul>
                <ul class="pagination">
                    <router-link v-for="(page, index) in pagesCount"
                                 :key="index"
                                 :to="`/?page=${page}`">
                        {{ page }}
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
