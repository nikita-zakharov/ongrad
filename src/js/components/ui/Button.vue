<script>
    export default {
        name: 'c-btn',
        props: {
            fullWidth: {
                type: Boolean,
                require: false,
                default: false
            },
            color: {
                type: String,
                require: false,
                default: 'teal'
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
    <button class="button" :disabled="disabled"
            :class="{'button_fullwidth': fullWidth,
             'button_disabled': disabled,
             'button_red': color === 'red',
             'button_teal': color === 'teal'}">
        <slot></slot>
    </button>
</template>

<style scoped>
    .button {
        cursor: pointer;
        outline: none;
        border: none;
        background-color: var(--main-color);
        height: 40px;
        min-width: 100px;
        color: white;
        border-radius: 2px;
        text-transform: uppercase;
        font-weight: bold;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }

    .button:hover {
        background-color: #26a69a;
    }

    .button:active {
        background-color: #00695c;
    }

    .button_fullwidth {
        width: 100%;
    }

    .button_disabled {
        box-shadow: none;
        cursor: not-allowed;
        background-color: lightgray;
    }

    .button_disabled:hover, :active {
        background-color: lightgray;
    }

    .button_red {
        background-color: var(--red);
    }

    .button_red:hover {
        background-color: #e57373;
    }

    .button_red:active {
        background-color: #e53935;
    }

</style>