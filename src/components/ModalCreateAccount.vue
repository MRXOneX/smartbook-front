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


            <divider/>


            <div class="content">
                <form>
                    <div class="firstname-lastname">
                        <my-input
                            placeholder="Firstname"
                            padding="10px" margin="5px 5px 5px 0" 
                        />
                        <my-input 
                            placeholder="Lastname"
                            padding="10px" margin="5px 0 5px 5px"
                        />
                    </div>

                    <my-input 
                        placeholder="Middlename"
                        padding="10px" margin="5px 0"
                    />


                    <divider width="50%"/>


                    <my-input 
                        placeholder="Email address"
                        padding="10px" margin="5px 0"
                    />
                    <my-input 
                        placeholder="Password"
                        padding="10px" margin="5px 0"
                    />


                    <divider width="50%"/>

                    
                    <div class="dateOfBirth">
                        <p>Date of Birth</p>
                        <div>
                            <select>
                                <option v-for="(item, index) in dateOfBirth.days" :key="item">{{ index + 1 }}</option>
                            </select>
                            <select>
                                <option v-for="month in dateOfBirth.months" :key="month">{{ month }}</option>
                            </select>
                            <select>
                                <option v-for="year in dateOfBirth.years()" :key="year">{{ year }}</option>
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

                    <my-button margin="25px 0 10px 0">
                        Registration
                    </my-button>
                </form>
            </div>
         </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
import MyInput from './UI/MyInput.vue'


export default {
  components: { MyInput, MyButton },

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

    .content {background: none}
    form {background: none}

    .firstname-lastname {
        display: flex;
        background: none;
    }



    .dateOfBirth {
        height: 50px;
        margin: 5px 0;
        background: none;
    }
    .dateOfBirth p {
        margin: 0 0 2px 0;
        font-size: 12px;
        background: none;
    }
    .dateOfBirth div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: none;
    }

    .dateOfBirth div select {
        height: 35px;
        width: 30%;
        padding: 0 5px;
        background: none;
        border-radius: 5px;
        border: 1px solid #c4c4c4;
        outline: none;
    }



    .wrapper-sex {
        background: none;
        height: 55px;
        margin: 15px 0;
    }

    .wrapper-sex p {
        background: none;
        margin: 0 0 2px 0;
        font-size: 14px;
    }


    .sex {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: none;
        height: 35px;
    }

    .sex label {
        cursor: pointer;
        background: none;
        
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: 1px solid #c4c4c4;
        color: #525252;
        height: 100%;
        width: 35%;

        border-radius: 5px;
    }

    /* M E D I A*/

    @media screen and (max-width: 360px) {
        .wrapper {
            width: 300px;
        }
    }
</style>