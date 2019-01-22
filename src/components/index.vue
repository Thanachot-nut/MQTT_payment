<template>
  <div class="index">
    <div class="containerc">
      <div class="header">
        <div class="containv">
          <i
            class="fas fa-bars"
            style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);font-size:18px"
          ></i>
        </div>
        <div class="containv">
          <span
            style="font-family:'Open Sans', sans-serif;font-weight: bold;position: absolute;top: 50%;transform: translateY(-50%);left: 5px;font-size: 15px;"
          >Payment</span>
        </div>
        <div class="containr">
          <div class="profile"></div>
        </div>
        <div class="containr">
          <span
            style="font-family:'Open Sans', sans-serif;font-weight: bold;position: absolute;top:50%;transform: translateY(-50%);right: 0;font-size: 15px;"
          >0001</span>
        </div>
      </div>
      <div class="containbody">
        <div
          style="position: relative;background: white;
                    width: 100%;height: 120px;border:1px solid;border-color:rgba(0,0,0,0.06);"
        >
          <input type="number" id="fname" v-model.number="price" class="inputamount" placeholder="จำนวนเงิน">
        </div>
      </div>
      <div class="containclear" @click="button_clearvalue()">
          <span
            style="font-family:'Open Sans', sans-serif;font-weight: bold;font-size: 25px;position: absolute;right: 20px;top:50%;transform: translateY(-50%);"
          >CLEAR</span>
        </div>

      <!-- <qrcode-vue
        :size="size"
        :value="value"
        logo="https://avatars3.githubusercontent.com/u/7104141?v=3&s=80"
        :bgColor="bgColor"
        :fgColor="fgColor"
      ></qrcode-vue>-->
      <button
        style="position: absolute;bottom: 0;background: rgb(0, 161, 255);width:100%;height: 60px;cursor: pointer"
        @click="runtime()"
      >
        <span
          style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);font-family:'Open Sans', sans-serif;font-weight: bold;font-size: 19px;color: white;"
        >SCAN QRCODE</span>
      </button>
    </div>
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header" align="center">
            <h4 class="modal-title" style="position:relative">
              <img
                src="../assets/logo_nopadol.png"
                style="width:50px;height:50px;z-index:99;position:relative;left:0;"
              >
              <span style="font-family:'Open Sans', sans-serif;font-weight: bold">QR CODE</span>
            </h4>
            <button type="button" class="close" data-dismiss="modal" @click="removetime()">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body" align="center">
            <span
              style="font-family:'Open Sans', sans-serif;font-weight: bold;font-size:15px;"
            >Gen Qrcode</span>

            <div style="margin-top:10px;">
              <span
                style="font-family:'Open Sans', sans-serif;font-weight: bold;font-size:15px;"
              >ราคา : {{ this.price }}</span>
            </div>
            <div style="margin-top:10px;">
              <qrcode-vue
                :value="qrcode"
                style="position:relative"
                foreground="#0089D1"
                :size="size"
                level="Q"
              >
                <img src="../assets/logo_nopadol.png" style="width:50px;height:50px;">
              </qrcode-vue>
            </div>
            <div>
              <span
                style="font-family:'Open Sans', sans-serif;font-weight: bold;font-size:15px;"
              >Base 64</span>
              <img :src="qrcodebase64" style="width: 70%;height: 50%;">
            </div>
          </div>
          <!-- Modal footer -->
          <div class="modal-footer" style="position:relative;height:10vh;">
            <button
              style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:50px;"
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
              @click="removetime()"
            >
              <span style="font-size:20px;">
                <i class="fas fa-angle-double-left"></i>
              </span>
              <span
                id="counter"
                style="font-family:'Open Sans', sans-serif;font-weight: bold;font-size: 20px;"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../js/index.js"></script>
<style src="../css/index.css"></style>
