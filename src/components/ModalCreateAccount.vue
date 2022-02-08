<template>
    <div class="container" v-show="isShow" @click.stop="$emit('setIsShow', false)">
        <div class="wrapper" @click.stop>
            <div class="header">
                <p>Create account</p>
                <font-awesome-icon
                    @click="$emit('setIsShow', false)"
                    :icon="['fas', 'times']" 
                    :style="{
                        background: 'none', 
                        color: '#959595', 
                        fontSize: '24px', 
                        cursor: 'pointer'
                    }"
                />
            </div>


            <divider />


            <div class="content">
                <form>
                    <div class="firstname-lastname">
                        <input
                            :style="{margin: '0 5px 0 0'}"
                            class="form-control-input" 
                            placeholder="Firstname" 
                        />
                        <input
                            :style="{margin: '0 0 0 5px'}"
                            class="form-control-input" 
                            placeholder="Lastname" 
                        />
                    </div>

  
                    <input 
                        class="form-control-input" 
                        placeholder="Middlename" 
                    />

                    <divider width="50%"/>

  
                    <input 
                        class="form-control-input" 
                        placeholder="Email address" 
                    />
                    <input 
                        class="form-control-input" 
                        placeholder="Password" 
                    />

                    <divider width="50%"/>
                    
                    <div class="dateOfBirth">
                        <p>Date of Birth</p>
                        <div>
                            <select>
                                <option v-for="(item, index) in dateOfBirth.days" :value="item" :key="item">{{ index + 1 }}</option>
                            </select>
                            <select>
                                <option v-for="month in dateOfBirth.months" :value="month" :key="month">{{ month }}</option>
                            </select>
                            <select>
                                <option v-for="year in dateOfBirth.years()" :value="year" :key="year">{{ year }}</option>
                            </select>
                        </div>
                    </div>


                    <div class="wrapper-sex">
                        <p>Sex</p>
                        <div class="sex">
                            <label>
                                Man <input name="sexRadio" value="man" type="radio"/>
                            </label>
                            <label>
                                Woman <input name="sexRadio" value="woman" type="radio"/>
                            </label>
                        </div>
                    </div>

                    <button class="form-control-button-create-account">
                        Create account
                    </button>
                </form>
            </div>
         </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
//
import MyButton from './UI/MyButton.vue'
import MyInput from './UI/MyInput.vue'


export default {
  components: { MyInput, MyButton },
  mixins: [validationMixin],

  props: {
      isShow: {
          type: Boolean,
          default: () => false
      }
  },

  data() {
      return {
          dateOfBirth: {
              days: 31,
              months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
              years: () => {
                  let arr = []
                  
                  for (let i = 1900; i < new Date().getFullYear(); i++) {
                    arr[i] = i + 1
                  }
                  return arr.filter(el => el !== undefined)
              }
          }
      }
  }
    
}
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.64);
        position: absolute;
        z-index: 1;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wrapper {
        width: 400px;
        height: auto;
        background: #FFFFFF;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        padding: 10px 15px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        background: none;
    }
    .header p {
        text-align: center;
        background: none;
        margin: 0;
        font-size: 30px;
    }


    .firstname-lastname {
        display: flex;
        margin: 5px 0 0 0 ;
    }

    /* S T Y L E   F O R   I N P U T S */

    .form-control-input {
        width: 100%;
        padding: 12px; 
        margin: 10px 0;
        border-radius: 5px;
        outline: none;
        border: 1px solid #c4c4c4;
        background: #FDFDFF;
    }



    .dateOfBirth {
        height: auto;
        margin: 5px 0
    }
    .dateOfBirth p {
        margin: 0 0 2px 0;
        font-size: 12px;
    }
    .dateOfBirth div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .dateOfBirth div select {
        height: 41px;
        width: 30%;
        padding: 0 5px;
        background: none;
        border-radius: 5px;
        border: 1px solid #c4c4c4;
        outline: none;
    }



    .wrapper-sex {
        height: auto;
        margin: 15px 0;
    }

    .wrapper-sex p {
        margin: 0 0 2px 0;
        font-size: 14px;
    }


    .sex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 41px;
    }

    .sex label {
        cursor: pointer;
        
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: 1px solid #c4c4c4;
        color: #525252;
        height: 100%;
        width: 45%;

        border-radius: 5px;
    }


    /* S T Y L E   F O R   B U T T O N S */

    .form-control-button-create-account {
        background-color: #A94CE2;
        color: white;
        border: none;
        cursor: pointer;
        padding: 13px;
        border-radius: 5px;
        outline: none;
        width: 100%;
        height: auto;
        font-size: 18px;
        margin: 20px 0 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }



    /* M E D I A*/

    @media screen and (max-width: 360px) {
        .wrapper {
            width: 300px;
        }
    }
</style>