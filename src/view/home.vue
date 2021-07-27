<template>
    <div>
        <div v-for="route in routes" :key="route.key">
            <ul class="routes">
                <li v-for="item in route" :key="item.name">
                    <router-link :to="item.path">{{ item.meta.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import routerMain from '@/router/index.js';

export default {
    data() {
        return {
            routes: []
        };
    },
    mounted() {
        let ths = this;
        let route = [];

        routerMain.options.routes.forEach((el, idx) => {
            if (el.name !== 'home') {
                if (el.meta.title.indexOf('(') === -1) {
                    el.meta.title = '(' + idx + ') ' + el.meta.title;
                }
                route.push(el);
                if ((idx / 15) % 1 === 0) {
                    ths.routes.push(route);
                    route = [];
                }
            }
        });

        ths.routes.push(route);
    }
};
</script>

<style lang="scss" scoped>
.routes {
    margin-top: 10px;
    width: 300px;
    display: block;
    float: left;
    margin-left: 20px;
    // text-align: left;
    li {
        width: 100%;
        margin-top: 10px;
        display: inline-block;
        a {
            display: block;
            font-size: 16px;
            margin-left: 20px;
        }
    }
}
</style>
