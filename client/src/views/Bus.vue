<template>
    <div class="bus">
        <div class="top">
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
        </div>
        <div class="bottom">
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
            <div class="row">
                <div @click="centerDialogVisible = true"></div>
                <div @click="centerDialogVisible = true"></div>
            </div>
        </div>
    </div>

    <el-dialog
  title="Notice"
  v-model="centerDialogVisible"
  width="30%"
  destroy-on-close
  center>
     Name:
     <el-input placeholder="Please input" v-model="name"></el-input>
    <template #footer>
        <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
        </span>
    </template>
</el-dialog>
</template>

<style scoped>
    .bus {
        width: 1100px;
        height: 400px;
        background-color: snow;
        border-radius: 25px;
    }

    .top {
        background-color:rgba(157, 150, 144, 0.646);
        height: 150px;
        width: 100%;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }

    .top .row div {
        background-color: springgreen;
        width: 50px;
        height: 50px;
        margin: 10px;
    }

    .top .row div:hover {
        background-color: green;
    }

    .bottom {
        background-color:rgba(157, 150, 144, 0.646);
        height: 150px;
        width: 100%;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    .bottom .row div {
        background-color: springgreen;
        width: 50px;
        height: 50px;
        margin: 10px;
    }

    .bottom .row div:hover {
        background-color: green;
    }

    .reserved {
        background-color: red;
    }

    .row {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .buttom {
        background-color:rgba(157, 150, 144, 0.646);
        height: 150px;
        width: 100%;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'bus',
  components: {},
  setup() {
    const centerDialogVisible = ref(false);
    const name = ref('');

    const busConfig = {
      top: {
        seats: 50,
      },
      buttom: {
        seats: 50,
      },
    };

    return {
      busConfig,
      centerDialogVisible,
      name,
    };
  },
});
</script>
