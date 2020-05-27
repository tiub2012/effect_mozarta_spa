<template>
    <div class="content">
        <components :is="pageName"></components>
    </div>
</template>

<script>
import start from '@/views/start'
import page1 from '@/views/page1'
import page2 from '@/views/page2'
import page3 from '@/views/page3/page3'

import {mapGetters, mapMutations} from 'vuex'

export default {
    computed: {
        ...mapGetters(['pageName'])
    },
    components: {
        start,
        page1,
        page2,
        page3
    }
}
</script>

<style scoped>
.content{
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>