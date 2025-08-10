<template>
    <div class="shared-ui-loader">
        <div class="shared-ui-loader__block"></div>
        <div class="shared-ui-loader__spinner"></div>
    </div>
</template>

<style lang="sass">
.shared-ui-loader
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0

    &__block
        width: 100%
        height: 100%
        background: rgba(0, 0, 0, 0.4)

    &__spinner
        position: absolute
        border: .75rem solid transparent
        border-top: .75rem solid var(--blue-500)
        top: calc(50% - 4rem)
        left: calc(50% - 4rem)
        border-radius: 50%
        width: 8rem
        height: 8rem
        animation: spin 2s linear infinite

        @keyframes spin
            0%
                transform: rotate(0deg)
            100%
                transform: rotate(360deg)
</style>
