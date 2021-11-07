<template>
    <div class="flash-message mt-3" role="alert" v-if="$page.props.flash.success && show" >
            <div class="alert alert-success alert-dismissible fade show"
                 role="alert">
                {{ $page.props.flash.success }}

                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    },
    watch: {
        '$page.props.flash' : {
            handler(){
                this.show = true
            },
            deep: true,
        }
    }
}
</script>

<style scoped>

</style>
