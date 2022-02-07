<template>
    <div class="container">
        <div class="wrapper">
            <div class="header">
                <p>Create account</p>
                <font-awesome-icon
                    :icon="['fas', 'times']" 
                    :style="{
                        background: 'none', 
                        color: '#959595', 
                        fontSize: '24px', 
                        cursor: 'pointer'
                    }" />
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

                    <my-input 
                        placeholder="date of birth"
                        padding="10px" margin="5px 0"
                    />
                    <my-input 
                        placeholder="sex"
                        padding="10px" margin="5px 0"
                    />

                    <my-button margin="10px 0">
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
        font-size: 33px;
    }

    .content {background: none}
    form {background: none}

    .firstname-lastname {
        display: flex;
        background: none;
    }

    /* M E D I A*/

    @media screen and (max-width: 360px) {
        .wrapper {
            width: 300px;
        }
    }
</style>