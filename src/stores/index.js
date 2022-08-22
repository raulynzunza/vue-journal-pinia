import journalModule from "@/modules/daybook/stores/journal";
import { defineStore } from "pinia";

const store = defineStore('global', {
    journal: journalModule
})

export default store