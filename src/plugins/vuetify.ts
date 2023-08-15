import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    },
    // icons: {
    //     defaultSet: 'mdi',
    //     aliases,
    //     sets: {
    //         mdi,
    //     },
    // }
})

export default vuetify;