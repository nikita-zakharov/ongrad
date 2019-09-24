function prependSassUtils() {
    const utils = [
        '@import "./src/scss/utils/variables";',
        '@import "./src/scss/utils/mixins";'
    ]

    return utils.join(' ')
}

module.exports = prependSassUtils