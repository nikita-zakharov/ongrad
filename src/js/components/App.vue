<script>

    import Input from "./ui/Input.vue";

    export default {
        name: "app",
        components: {
          'c-input': Input
        },
        data() {
            return {
                a: '',
                message: "Hello"
            };
        }
    };
</script>

<template>
    <div class="wrapper">
    <div class="container">
        <router-view></router-view>
    </div>
    </div>
</template>

