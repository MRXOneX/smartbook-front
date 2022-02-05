<template>
    <div class="authorization">
        <div class="logo-form">
            <div class="logo">
                <span class="smart">Smart</span>
                <span class="book">Book</span>
            </div>
            <div class="form">
                form <br>
                <my-button>
                    Log in
                </my-button>
            </div>
        </div>
    </div>    
</template>

<script>
import MyButton from '../components/UI/MyButton.vue'
export default {
  components: { MyButton },
    
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

    .authorization {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        /* common style for text */
        
        font-weight: 400;
        font-family: 'Righteous', cursive;
    }

    /* Style for block with logo and form */
    .logo-form {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 840px;
        height: 100%;
    }

    /* Logo style */
    .smart {
        font-size: 50px;
        color: #A511FF;
    }
    .book {
        font-size: 50px;
        color: #3075FC;
    }

    /* style for form */
    .form {
        width: 330px;
        height: 310px;
        background-color: white;
        box-shadow: 0px 0px 5px rgba(107, 191, 255, 0.25);
        border-radius: 5px;
    }


    /* M E D I A */

    @media screen and (max-width: 850px) {
        .logo-form {
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
 
</style>