<template>
    <section class='section_four flex bg-section-margin flex-direction-column justify-content-s '>
        <head-box></head-box>
        <div class="no-wrap">
          <div class="box inline-block width-20"  v-for="rank in ranklist" >
            <ranking :rank='rank' :index=$index></ranking>
          </div>
        </div>
<!-- <div>{{ ranklist | json }}</div> -->
    </section>
</template>
<script>
  import {getMemberRankList} from '../../../../vuex/actions'
  import headBox from './headBox.vue'
  import ranking from './ranking.vue'
  export default{
    vuex:{
      getters:{
        ranklist: ({member}) => member.ranklist
      },
      actions:{
        getMemberRankList
      }
    },
    data(){
      return{
        
      }
    },
    components:{
       ranking,
       headBox
    },
    ready(){
      let top = {top:3}

      this.getMemberRankList(top)
     


    }

  }
</script>

<style lang="sass">
  .section_four {
    .box{
    }
  }
  .width-20 {
    width: 20%;
	  padding: 0 10px;
  }
</style>
