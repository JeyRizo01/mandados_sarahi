import { defineStore } from "pinia";

export const useAlertStore = defineStore({
    id: 'alert',
    state:()=>({
        alert: null
    }),
    actions:{
        success(mesagge){
            this.alert = {mesagge, type:'alert-success'};
        },
        error(mesagge){
            this.alert = {mesagge, type:'alert-danger'};
        },
        clear(){
            this.alert = null;
        }
    }
})