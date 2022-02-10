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
                <form @submit.prevent="handleSubmit">
                    <div class="firstname-lastname">
                        <input
                            :class="v$.form.fullName.firstName.$error ? 'error' : ''"
                            v-model="form.fullName.firstName"
                            :style="{margin: '0 5px 0 0'}"
                            class="form-control-input" 
                            placeholder="Firstname" 
                        />

                        
                        <input
                            :class="v$.form.fullName.lastName.$error ? 'error' : ''"
                            v-model="form.fullName.lastName"
                            :style="{margin: '0 0 0 5px'}"
                            class="form-control-input" 
                            placeholder="Lastname" 
                        />
                    </div>

  
                    <input
                        :class="v$.form.fullName.middleName.$error ? 'error' : ''"
                        v-model="form.fullName.middleName"
                        class="form-control-input" 
                        placeholder="Middlename" 
                    />
                    <div class="error-text" v-for="(error, index) of v$.form.fullName.middleName.$errors" :key="index">
                        {{ error.$message }}
                    </div>


                    <divider width="50%"/>

  
                    <input
                        :class="v$.form.emailAndPassword.email.$error ? 'error' : ''"
                        type="email"
                        v-model="form.emailAndPassword.email"
                        class="form-control-input" 
                        placeholder="Email address" 
                    />
                    <div class="error-text" v-for="(error, index) of v$.form.emailAndPassword.email.$errors" :key="index">
                            {{ error.$message }}
                    </div>


                    <input
                        :class="v$.form.emailAndPassword.password.$error ? 'error' : ''"
                        type="password"
                        v-model="form.emailAndPassword.password"
                        class="form-control-input" 
                        placeholder="Password" 
                    />
                    <div class="error-text" v-for="(error, index) of v$.form.emailAndPassword.password.$errors" :key="index">
                            {{ error.$message }}
                    </div>


                    <divider width="50%"/>
                    

                    <div class="dateOfBirth">
                        <p>Date of Birth</p>
                        <div>
                            <select v-model="form.dateOfBirth.selectedDay">
                                <option 
                                    v-for="(item, index) in form.dateOfBirth.days" 
                                    :value="item" 
                                    :key="item"
                                >
                                    {{ index + 1 }}
                                </option>
                            </select>
                            <select v-model="form.dateOfBirth.selectedMonth">
                                <option 
                                    v-for="month in form.dateOfBirth.months" 
                                    :value="month" 
                                    :key="month"
                                >
                                    {{ month }}
                                </option>
                            </select>
                            <select v-model="form.dateOfBirth.selectedYear">
                                <option 
                                    v-for="year in form.dateOfBirth.years()" 
                                    :value="year" 
                                    :key="year"
                                >
                                    {{ year }}
                                </option>
                            </select>
                        </div>
                    </div>


                    <div class="wrapper-gender">
                        <p>Gender</p>
                        <div class="gender">
                            <label :class="v$.form.gender.$error ? 'error' : ''">
                                Man <input v-model="form.gender" name="genderRadio" value="man" type="radio"/>
                            </label>
                            <label :class="v$.form.gender.$error ? 'error' : ''">
                                Woman <input v-model="form.gender" name="genderRadio" value="woman" type="radio"/>
                            </label>
                        </div>
                        <div class="error-text" v-for="(error, index) of v$.form.gender.$errors" :key="index">
                            {{ error?.$message }}
                        </div>
                    </div>

                    <button type="submit" class="form-control-button-create-account">
                        Create account
                    </button>
                </form>
            </div>
         </div>
    </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
//
import { mapActions } from "vuex"
//
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
        v$: useVuelidate(),
        form: {
            fullName: {
                firstName: '',
                lastName: '',
                middleName: ''
            },
            emailAndPassword: {
                email: '',
                password: ''
            },
            dateOfBirth: {
                days: 31,
                selectedDay: '1',

                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                selectedMonth: 'Январь',

                years: () => {
                    let arr = []
                    
                    for (let i = 1900; i < new Date().getFullYear(); i++) {
                        arr[i] = i + 1
                    }
                    return arr.filter(el => el !== undefined)
                },
                selectedYear: new Date().getFullYear()
            },
            gender: '',

            isRegistration: false
        }
    }
  },

  validations() {
      return {
          form: {
            fullName: {
                firstName: { required },
                lastName: { required },
                middleName: { required }
            },
            emailAndPassword: {
                email: { required, email },
                password: { required, minLength: minLength(6) }
            },
            dateOfBirth: {
                selectedDay: { required },
                selectedMonth: { required },
                selectedYear: { required }
            },
            gender: { required }
          }
      }
  },


  methods: {
    ...mapActions({
        registration: 'auth/registration'
    }),
    handleSubmit() {
          this.v$.form.$touch()
          if (!this.v$.form.$error) {
            const payload = {
                firstname: this.form.fullName.firstName,
                lastname: this.form.fullName.lastName,
                middlename: this.form.fullName.middleName,
                email: this.form.emailAndPassword.email,
                password: this.form.emailAndPassword.password,
                dateOfBirth: `${this.form.dateOfBirth.selectedDay}.${this.form.dateOfBirth.months.indexOf(this.form.dateOfBirth.selectedMonth) + 1}.${this.form.dateOfBirth.selectedYear}`,
                gender: this.form.gender
            }
            this.registration(payload)
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
        cursor: pointer;
    }



    .wrapper-gender {
        height: auto;
        margin: 15px 0;
    }

    .wrapper-gender p {
        margin: 0 0 2px 0;
        font-size: 14px;
    }


    .gender {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 41px;
    }

    .gender label {
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



    /* S T Y L E   F O R   V A L I D A T I O N */

    
    .error {
        border: 1px solid red;
        box-shadow: 0px 0px 4px rgba(255, 11, 11, 0.25);
    }
    .error::placeholder {
        color: red;
    }

    .error-text {
        color: red;
        font-size: 12px;
    }



    /* M E D I A*/

    /* 360 */
    @media screen and (max-width: 420px) {
        .wrapper {
            width: 310px;
        }
    }


    /* 1600 */
    @media screen and (min-width: 1600px) {

        .wrapper {
            width: 480px;
        }

        .header p {
            font-size: 38px;
        }


        .form-control-input {
            margin: 12px 0;
            padding: 19px 15px; 
            font-size: 20px;
        }

        .dateOfBirth div select {
            height: 60px;
            font-size: 20px;
        }

        .gender {
            height: 60px;
            font-size: 20px;
        }

        .gender label input {
            height: 40px;
        }

        .form-control-button-create-account {
            margin: 20px 0 14px 0;
            padding: 19px 13px;
            font-size: 23px;
        }
    }
    
</style>