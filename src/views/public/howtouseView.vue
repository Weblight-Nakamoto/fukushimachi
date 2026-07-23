<!-- src/views/public/howtouseView.vue -->
<!-- 使い方ページ -->
<template>
  <body class="howtouse is-seeker">
    <div class="wrap">
      <AppHeader data-app-header />
      <HamburgerMenu />
      <FooterNav />

      <main>
        <section class="l-sec howtouse">
          <!-- ===== lead ===== -->
          <div class="l-about-lead">
            <div class="inner">
              <div class="about-title-img">
                <img src="/src/assets/images/howtouse/about-title.svg" alt="" @error="onImgErr" />
              </div>
              <div class="page-title maru">ふくしまちとは</div>
              <p>
                福島県のどこかにある、<br />
                介護の仕事をしている人と<br />
                介護の仕事を探している人が集まる街。
              </p>
              <p>
                介護の仕事に就きたい人と介護施設を結び<br />
                介護の仕事に役立つ情報を伝え<br />
                そして、介護の未来を良くするWeb サイトです。
              </p>
            </div>
            <div class="about-lead-bg">
              <img src="/src/assets/images/howtouse/about-bg01.png" alt="" @error="onImgErr" />
            </div>
          </div>

          <!-- ===== sec 01 ===== -->
          <div class="l-about-sec01">
            <div class="l-about-sec01-bg">
              <div class="inner">
                <div class="sec01-img">
                  <img src="/src/assets/images/howtouse/about-ill01.png" alt="" @error="onImgErr" />
                </div>
                <div class="sec-title maru key-c">まずは求人情報を見てみましょう。</div>
                <p>
                  ふくしまちは、福島県が運営するサイトです。<br />
                  安心して働くことができる<br />
                  福島県内の介護施設の求人情報をご紹介しています。<br />
                  まずは求人情報をチェックして<br />
                  どんな募集があるか見てみましょう。
                </p>
              </div>
            </div>
          </div>

          <!-- ===== sec 02 ===== -->
          <div class="l-about-sec02">
            <div class="l-about-sec02-bg">
              <div class="inner">
                <div class="sec-title maru key-c">求人情報を検索してみましょう。</div>
                <p>
                  あなたが働きたい場所はどこですか？<br />
                  あなたが働きたい施設はどんなところですか？<br />
                  エリアや条件を選択して<br />
                  あなたに合った求人情報を探してください。
                </p>
                <div class="about-ss">
                  <img src="/src/assets/images/howtouse/about-ss.png" alt="" @error="onImgErr" />
                </div>
              </div>
            </div>
          </div>
          <!-- ===== sec 03 ===== -->
          <div class="l-about-sec03">
            <div class="l-about-sec03-bg">
              <div class="inner">
                <div class="sec-title maru key-c">介護施設にあなたの思いを伝えましょう。</div>
                <p class="sec-lead">
                  求人情報のページには5つのボタンがあります。<br />
                  ※ボタンは登録後に押すことができます。
                </p>

                <!-- クリップ -->
                <div class="home-about-item">
                  <div class="home-about-item-copy">
                    <img src="/src/assets/images/home/item-clip-copy.svg" />
                  </div>
                  <div class="home-about-item-detail flex">
                    <div class="home-about-item-ico">
                      <img src="/src/assets/images/home/clip.png" />
                    </div>
                    <div class="home-about-item-txt">
                      <div class="home-about-item-name">
                        <img src="/src/assets/images/home/clip-name.svg" />
                        <span class="home-about-item-name-sub home-about-item-name-sub--clip">
                          気軽に保存
                        </span>
                      </div>
                      <p class="home-about-item-desc home-about-item-desc">
                        あとでもう一度見返したい求人を、<br />
                        気軽に保存できます。
                      </p>
                    </div>
                  </div>
                </div>
                <!-- グッド -->
                <div class="home-about-item">
                  <div class="home-about-item-copy">
                    <img src="/src/assets/images/home/good-copy.svg" />
                  </div>
                  <div class="home-about-item-detail flex">
                    <div class="home-about-item-ico">
                      <img src="/src/assets/images/home/good.png" />
                    </div>
                    <div class="home-about-item-txt">
                      <div class="home-about-item-name">
                        <img src="/src/assets/images/home/good-name.svg" />
                        <span class="home-about-item-name-sub home-about-item-name-sub--good">
                          施設に興味を伝える
                        </span>
                      </div>
                      <p class="home-about-item-desc home-about-item-desc">
                        「興味があります」の気持ちを<br />
                        施設へ伝えられます。<br />
                        送信前に確認画面が表示されるので、安心して利用できます。
                      </p>
                    </div>
                  </div>
                </div>
                <!-- トーク -->
                <div class="home-about-item home-about-item--talk">
                  <div class="home-about-item-copy">
                    <img src="/src/assets/images/home/talk-copy.svg" />
                  </div>

                  <div class="home-about-item-detail flex">
                    <div class="home-about-item-ico">
                      <img src="/src/assets/images/home/talk.svg" />
                    </div>

                    <div class="home-about-item-txt">
                      <div class="home-about-item-name home-about-item-name--with-sub">
                        <img src="/src/assets/images/home/talk-name.svg" />
                        <span class="home-about-item-name-sub home-about-item-name-sub--talk">
                          気軽に相談
                        </span>
                      </div>

                      <p class="home-about-item-desc home-about-item-desc">
                        応募前でも、質問だけの利用でも<br />
                        大丈夫。気になることを施設へ直<br />
                        接相談できます。
                      </p>
                    </div>
                  </div>

                  <!-- 見学希望・応募する 説明枠 -->
                  <div class="home-talk-action-box">
                    <div class="home-talk-action-row">
                      <div class="home-talk-action-ico">
                        <img src="/src/assets/images/home/visit.png" alt="見学希望" />
                      </div>

                      <div class="home-talk-action-text">
                        <div class="home-talk-action-title">見学希望</div>
                        <p>まずは見学してみたい</p>
                      </div>
                    </div>

                    <div class="home-talk-action-row">
                      <div class="home-talk-action-ico">
                        <img src="/src/assets/images/home/Apply.png" alt="応募する" />
                      </div>

                      <div class="home-talk-action-text">
                        <div class="home-talk-action-title">応募する</div>
                        <p>さっそく応募してみたい</p>
                      </div>
                    </div>

                    <p class="home-talk-action-lead">
                      求人に対してボタンを押すだけで、<br />
                      見学の希望や応募メッセージを<br />
                      自動で入力できるから、文章に悩まなくてOK!
                    </p>
                  </div>

                  <!-- 5つのボタン説明まとめ文 -->
                  <div class="home-action-summary">
                    <p>
                      積極的にアクションすることで<br />
                      あなたの理想の就職先が見つかるかも！？<br />
                      どんどん活用してください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ===== sec 04 ===== -->
          <div class="l-about-sec04">
            <div class="l-about-sec04-bg">
              <div class="inner">
                <div class="sec-title maru key-c">特集を読んでみましょう。</div>
                <p>
                  特集を読んでみましょう。求人募集をしている介護施設をくわしく紹介する記事や福島県の取組み、イベント情報、資格取得情報など
                  様々な介護にまつわる記事を掲載しています。
                </p>
                <p>
                  介護の仕事への<br />モチベーションUPにつながる特集です。<br />ぜひご覧ください。
                </p>
                <div class="sec03-img">
                  <img src="/src/assets/images/howtouse/about-ill02.png" alt="" @error="onImgErr" />
                </div>
              </div>
            </div>
          </div>

          <!-- back -->
          <div class="btn-back">
            <a href="#" @click.prevent="goBack">
              <span class="ico">
                <img src="/src/assets/images/common/ico-back.svg" alt="" @error="onImgErr" />
              </span>
              戻る
            </a>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>

    <div class="body-bg pc">
      <img src="/src/assets/images/common/bg-pc.png" alt="" />
    </div>
  </body>
  <PcModel />
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, onBeforeUnmount } from "vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import HamburgerMenu from "@/components/layout/HamburgerMenu.vue";
import FooterNav from "@/components/layout/FooterNav.vue";
import PcModel from "@/components/layout/PcModel.vue";

const router = useRouter();

function goBack() {
  if (window.history.length > 1) router.back();
  else router.push({ name: "Home" });
}

// ===== ヘッダー高さ → CSS 変数（スマホの被り対策）=====
function updateHeaderHeight() {
  const headerEl = document.querySelector("[data-app-header]") || document.querySelector("header");
  if (!headerEl) return;
  const h = Math.round(headerEl.getBoundingClientRect().height);
  if (h > 0) {
    document.documentElement.style.setProperty("--header-height", `${h}px`);
  }
}
onMounted(() => {
  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeaderHeight);
});

function onImgErr(e) {
  const t = e?.target;
  if (t) {
    t.onerror = null;
    t.src = "/stock-images/no-image.png";
  }
}
</script>

<style scoped>
.about-title-img {
  width: 120px;
  margin: 0 auto;
  padding-top: 44px;
}
.page-title {
  font-size: 26px;
}
.l-about-lead {
  background: #fffcda;
}
.l-about-lead p {
  font-size: 14px;
  text-align: center;
}
.l-about-sec01 {
  background: #f2f2f2;
}
.l-about-sec01-bg {
  background: #fff;
  border-radius: 0 0 0 40px;
  padding-bottom: 30px;
}
.sec01-img {
  width: 200px;
  margin: 0 auto;
  padding-bottom: 40px;
}
.key-c {
  color: #fe8365;
}
.l-about-sec01 p {
  font-size: 14px;
  text-align: center;
}
.l-about-sec02 {
  background: #fff;
}
.l-about-sec02-bg {
  background: #f2f2f2;
  border-radius: 0 0 0 40px;
  padding: 40px 0;
}
.l-about-sec02 p {
  font-size: 14px;
  text-align: center;
}
.howtouse .sec-title {
  line-height: 1.5em;
}
.l-about-sec03 {
  background: #fffcda;
}

.l-about-sec03-bg {
  background: #fff;
  border-radius: 0 0 0 40px;
  padding: 40px 0;
}
.l-about-sec03 p.sec-lead {
  font-size: 14px;
  text-align: center;
}
.sec-strong.maru.key-c {
  font-weight: 600;
  text-align: center;
  line-height: 1.6;
  padding-top: 40px;
}
.l-about-sec04 {
  background: #fff;
}

.l-about-sec04-bg {
  background: #fffcda;
  border-radius: 0 0 0 40px;
  padding: 40px 0;
}
.l-about-sec04 p {
  font-size: 14px;
  text-align: center;
}
.sec03-img {
  width: 100%;
  margin: 0 auto;
  text-align: right;
}
.sec03-img img {
  display: inline-block;
  width: 40%;
}

/* =========================================================
   TALK内：見学希望・応募する説明枠
========================================================= */
.home-about-item--talk {
  position: relative;
}

.home-about-item-name-sub--talk {
  color: #ff9794;
}

.home-talk-action-box {
  width: min(100%, 440px);
  margin: 34px auto 0;
  padding: 36px 34px 34px;
  border: 2px solid #ff9794;
  border-radius: 28px;
  background: #fff;
  box-sizing: border-box;
}

.home-talk-action-row {
  display: flex;
  align-items: center;
  gap: 26px;
}

.home-talk-action-row + .home-talk-action-row {
  margin-top: 30px;
}

.home-talk-action-ico {
  flex: 0 0 110px;
  width: 110px;
  height: 110px;
}

.home-talk-action-ico img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.home-talk-action-text {
  flex: 1;
  min-width: 0;
}

.home-talk-action-title {
  color: #ff8c80;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
}

.home-talk-action-row:nth-of-type(2) .home-talk-action-title {
  color: #ff8363;
}

.home-talk-action-text p {
  margin: 0;
  color: #333;
  font-size: 18px;
  line-height: 1.7;
  font-weight: 500;
}

.home-talk-action-lead {
  margin: 34px 0 0;
  color: #333;
  text-align: center;
  font-size: 18px;
  line-height: 1.9;
  font-weight: 500;
}

/* =========================================================
   5つのボタン説明まとめ文
========================================================= */
.home-action-summary {
  margin: 74px auto 0;
  text-align: center;
  color: #ff8c80;
  font-weight: 800;
  font-size: 21px;
  line-height: 2.2;
  letter-spacing: 0.02em;
}

.home-action-summary p {
  margin: 0;
}

.home-action-summary p + p {
  margin-top: 28px;
}

.job-action-link.clip {
  background-color: #ffb07b;
}

.job-action-link.good {
  background-color: #ffa76c;
}

.job-action-link.talk {
  background-color: #ff9794;
  position: relative;
}

.job-action-link.inspection {
  background-color: #ff8c80;
  position: relative;
}

.job-action-link.apply {
  background-color: #ff8363;
  position: relative;
}

/* クリップ名の右横に補足テキストを表示 */
.home-about-item-name--with-sub {
  display: flex;
  align-items: center;
  gap: 12px;
}

.home-about-item-name--with-sub img {
  display: block;
}

.home-about-item-name-sub {
  color: #ff8363;
  margin-left: 6px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

/* クリップ説明文のサイズ調整 */
.home-about-item-desc {
  font-size: 14px;
  line-height: 1.8;
  /* margin-left: 3px; */
}

/* Responsive */
@media (min-width: 880px) {
  .l-about-lead p {
    font-size: 18px;
  }
  .home-about-item-detail.flex {
    justify-content: flex-start;
  }
  .home-about-item-txt p {
    text-align: left;
  }
}

/* ▼ スマホでヘッダーに隠れないよう main を下げる */
@media (max-width: 768px) {
  :root {
    --header-height: 72px;
  } /* 初期値。JS で実測値に上書きされます */
  main {
    padding-top: var(--header-height);
  }
  /* 先頭セクションの相殺マージンを防ぐ保険（必要なら） */
  main > .l-sec:first-child {
    margin-top: 0;
  }
}
</style>
