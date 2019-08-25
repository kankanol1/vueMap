<template>
  <div class="content">
    <div id="contPar" class="contPar">
      <div id="page1" style="z-index:1;">
        <div class="title0">
          <div class="imgGroug">
            <div id="main-wrapper">
              <div id="smallcube" class="cube" style="--cubesize:47px;--anim:subcuberotation;">
                <div class="front"></div>
                <div class="back"></div>
                <div class="right"></div>
                <div class="left"></div>
                <div class="top"></div>
                <div class="bottom"></div>
              </div>
            </div>
          </div>
          吸毒人员探索分析模型
        </div>
        <!--<div class="title1">旅游、交通、气象、公共安全、大数据</div>-->
        <!--        <img alt="" class="img3 png" src="@/assets/page1_3.jpg">-->
      </div>
    </div>

    <div class="bg">
      <div class="tyg-div-denglv">
        <div class="tyg-div-form">
          <form action="">
            <!--<h2>登录</h2>-->
            <div style="margin:0px 0px;">
              <input type="text" id="username" placeholder="请输入账号..."/>
            </div>
            <div style="margin:0px 0px;">
              <input type="text" id="password" placeholder="请输入密码..." @keyup.13="jump"/>
            </div>
            <button @click="login()" type="submit" @keyup.13="login()">登<span style="width:20px;"></span>录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        username: '',
        password: '',
      }
    },
    mounted() {
      document.title = "吸毒人员探索分析模型";
      this.jump('username');
    },
    beforeCreate() {
      sessionStorage.clear();
    },
    methods: {
      jump(id) {
        document.getElementById(id).focus();
      },
      login() {
        if (!this.username || !this.password) {
          this.$message({showClose: true, type: 'warning', message: '请输入用户名和密码!',});
          !this.username ? this.jump('username') : this.jump('password');
          return;
        }

        this.$set(this, 'loading', true);
        this.$http.post('/api/self/logon', {username: this.username, password: this.password}).then((response) => {
          this.$set(this, 'loading', false);

          if (!!response && response.status === 200) {

            if ((response.data.status & 0b00001111) === 0b00000001) {
              this.$set(this, 'loading', true);

              this.$http.post('/api/self/infomation').then((response) => {
                this.$set(this, 'loading', false);

                if (!!response && response.status === 200) {
                  if ((response.data.status & 0b00001111) === 0b00000001) {
                    sessionStorage.setItem('userInfo', JSON.stringify(response.data.data));
                    this.$router.push({name: 'index'});
                  } else {
                    this.$message({showClose: true, type: 'warning', message: response.data.msg,});
                  }
                }

              }).catch(() => this.$set(this, 'loading', false));

            } else {
              this.$message({showClose: true, type: 'warning', message: response.data.msg,});
            }

          }

        }).catch(() => this.$set(this, 'loading', false));
      }
    }
  }

</script>


<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: var(--bg);

  }

  :root {
    --bg: rgb(254, 251, 249);
    --maincube: 400px;
    --smallcube: 200px;
  }

  .imgGroug {
    position: relative;
    display: inline-block;
    /*position: absolute;*/
    /*width:   30%;*/
    top: -36px;
    left: -50px;
    /*margin-top: -45px;*/
    /*margin-left: 420px;*/
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .content {
    width: 100%;
    height: 100%;
    font-family: '微软雅黑', '黑体', serif, '宋体';
    font-size: 12px;
    color: #4d6287;
    background: #191c2c;
    overflow: hidden;
  }

  #main-wrapper {
    float: right;
    position: relative;
    /*margin: 9em auto;*/
    width: var(--maincube);
    height: var(--maincube);
    perspective: 1000px;
    /*top: -70px;*/
    /*left: -70%;*/


    .cube {
      position: absolute;
      /*top: -50px;*/
      /*right: calc(50% - var(--cubesize) / 2);*/
      width: var(--cubesize);
      height: var(--cubesize);
      transform-style: preserve-3d;
      transform: translateZ(calc(var(--cubesize) / 2));
      animation: subcuberotation 10s linear infinite alternate-reverse;

      .front {
        /*background:rgba(46,192,246,0.49) !important;*/
        background-image: url("../src/assets/page1_0.png");
        background-size: 47px 47px;
      }

      div:not(.cube) {
        position: absolute;
        /*background:rgba(46,192,246, 0.49);*/
        background-image: url("../src/assets/page1_0.png");
        background-size: 47px 47px;
        width: var(--cubesize);
        height: var(--cubesize);
        border: 1px solid #2ec0f6;
      }

      .front {
        transform: rotateY(0deg) translateZ(calc(var(--cubesize) / 2));
      }

      .back {
        transform: rotateX(180deg) translateZ(calc(var(--cubesize) / 2));
      }

      .right {
        transform: rotateY(90deg) translateZ(calc(var(--cubesize) / 2));
      }

      .left {
        transform: rotateY(-90deg) translateZ(calc(var(--cubesize) / 2));
      }

      .top {
        transform: rotateX(90deg) translateZ(calc(var(--cubesize) / 2));
      }

      .bottom {
        transform: rotateX(-90deg) translateZ(calc(var(--cubesize) / 2));
      }
    }
  }


  @keyframes subcuberotation {
    0% {
      transform: rotateY(0deg);
    }
    20% {
      transform: rotateX(-180deg);
    }
    40% {
      transform: rotateY(-90deg);
    }
    60% {
      transform: rotateY(90deg);
    }
    80% {
      transform: rotateX(-90deg);
    }
    100% {
      transform: rotateX(90deg);
    }
  }

  * {
    margin: 0;
    padding: 0;
  }

  div {
    display: block;
  }

  #page1 .imgGroug,
  #page1 .title0 {
    flex-grow: 1;
  }

  #page1 {
    display: flex;

    text-align: center;

    .img3 {
      /*margin: 0px 0 0 290px;*/
      margin: 0 auto;
      height: 500px;
      width: 60%;
      z-index: 0;
    }
  }

  .tyg-div {
    z-index: -1000;
    /*float: left;*/
    /*position: absolute;*/
    left: 5%;
    top: 20%;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  li {
    list-style-type: none;
  }

  div, li, span {
    font-family: '微软雅黑';
  }

  .contPar .title0 {
    /*left: 0;*/
    width: 100%;
    text-align: center;
    color: #2ec0f6;
    margin-top: 20px;
    padding: 15px;
    font-size: 40px;
    height: 100px;
    line-height: 70px;
    /*margin: -125px 0 0 0;*/
    /*z-index: 999999999;*/
    /*margin-top: 30px;*/
    /*position: absolute;*/
    overflow: hidden;
  }

  .content {
    font-family: '微软雅黑', '黑体', serif, '宋体';
    color: #4d6287;
    font-size: 12px;
    background: #191c2c;
    overflow: hidden;
    /*height: calc(100vh);*/
  }


  .img1, .img0, .img2 {
    position: absolute;
    z-index: 10;
  }

  .bg {
    height: calc(100vh - 110px);
    background-image: url("./assets/page1_3.jpg");
    background-repeat: no-repeat;
    background-position: center 120%;
    /*background-color: black;*/
    padding-top: 20px;

    .tyg-div-denglv {
      width: 300px;
      margin: 0 auto;

      .tyg-div-form {
        padding: 15px;
        background-color: #23305a;
        width: 300px;
        /*height: 250px;*/
        /*height: auto;*/
        /*margin-top: 100px;*/
        /*margin-right: 500px;*/
        color: #2ec0f6;

        form {
          button {
            cursor: pointer;
            width: 270px;
            height: 44px;
            margin-top: 25px;
            padding: 0;
            background: #2ec0f6;
            -moz-border-radius: 6px;
            -webkit-border-radius: 6px;
            border-radius: 6px;
            border: 1px solid #2ec0f6;
            -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .25) inset, 0 2px 7px 0 rgba(0, 0, 0, .2);
            -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .25) inset, 0 2px 7px 0 rgba(0, 0, 0, .2);
            box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .25) inset, 0 2px 7px 0 rgba(0, 0, 0, .2);
            font-family: 'PT Sans', Helvetica, Arial, sans-serif;
            font-size: 14px;
            font-weight: 700;
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, .1);
            -o-transition: all .2s;
            -moz-transition: all .2s;
            -webkit-transition: all .2s;
            -ms-transition: all .2s;
          }

          input [ type = "text" ] {
            width: 270px;
            height: 30px;
            margin: 25px 10px 0px 0px;
          }
        }
      }
    }

  }

  h2 {
    display: block;
    font-size: 1.5em;
    font-weight: bold;
  }


  .tyg-div-form input {
    width: 270px;
    height: 30px;
    margin: 25px 10px 0px 0px;
  }

</style>
