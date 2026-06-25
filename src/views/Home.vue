<script setup>
import { ref, onMounted } from 'vue';
import db from '../data/data.json';

const sales = ref([]);
const newItems = ref([]);
const services = ref([]);
const isLoading = ref(true);

const images = import.meta.glob(
    '../images/**/*.{png,jpg,jpeg,svg}',
    { eager: true }
);

const getImageUrl = (path) => {
  const key = Object.keys(images).find((k) => k.includes(path));
  return images[key]?.default || '';
};

onMounted(() => {
  sales.value = db.sales;
  newItems.value = db.newItems;
  services.value = db.services;

  isLoading.value = false;
});
</script>

<template>
<section class="slider">
  <div class="slider-container">
    <img class="slider-left" src="../images/Home/button-slider.png"/>
    <img src="../images/Home/slider.png" height="274" width="1170"/>
    <img class="slider-right" src="../images/Home/button-slider.png"/>
  </div>
  <div class="slider-progress">
    <img src="../images/Home/active-slide.png" height="5" width="5"/>
    <img src="../images/Home/slide.png" height="5" width="5"/>
    <img src="../images/Home/slide.png" height="5" width="5"/>
    <img src="../images/Home/slide.png" height="5" width="5"/>
    <img src="../images/Home/slide.png" height="5" width="5"/>
    <img src="../images/Home/slide.png" height="5" width="5"/>
  </div>
</section>
  <section class="sales">
    <h2>Хиты продаж</h2>

    <div v-if="isLoading">Загрузка товаров...</div>

    <div v-else class="sales-cards">
      <div v-for="card in sales" :key="card.id" class="sales-card">
        <div class="sales-card-image-wrapper">
          <div class="sales-card-discount">Скидка 10%</div>
          <div class="sales-card-actions">
            <button
                class="action-btn-favorite"
                :class="{ 'active': card.isFavorite }"
                @click="card.isFavorite = !card.isFavorite">
            </button>
            <button
                class="action-btn-tune"
                :class="{ 'active': card.isTune }"
                @click="card.isTune = !card.isTune">
            </button>
          </div>
          <img class="sales-card-img" :src="getImageUrl(card.image)"/>
        </div>

        <div class="sales-card-info">
          <h3 class="sales-card-title">{{ card.title }}</h3>

          <div class="sales-card-rating">
            <img src="../images/Home/section-sales/star.png" height="16" width="16"/>
            <span class="rating-score">{{ card.rating }}</span>
            <a href="#" class="rating-reviews">{{ card.reviews }} отзыв</a>
          </div>

          <div class="sales-card-price">{{ card.price }} р.</div>

          <button class="btn-buy">Купить в один клик</button>
          <button class="btn-card">В корзину</button>
        </div>
      </div>


    </div>
  </section>
  <section class="slider">
    <div class="slider-container">
      <img class="slider-left" src="../images/Home/button-slider.png"/>
      <img src="../images/Home/slider2.png" height="289" width="1170"/>
      <img class="slider-right" src="../images/Home/button-slider.png"/>
    </div>
    <div class="slider-progress">
      <img src="../images/Home/slide.png" height="5" width="5"/>
      <img src="../images/Home/slide.png" height="5" width="5"/>
      <img src="../images/Home/active-slide.png" height="5" width="5"/>
      <img src="../images/Home/slide.png" height="5" width="5"/>
      <img src="../images/Home/slide.png" height="5" width="5"/>
      <img src="../images/Home/slide.png" height="5" width="5"/>
    </div>
  </section>
  <section class="item-category">
    <h2>
      Категории товаров
    </h2>
    <div class="items-category">
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/complects.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Комплекты
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-ballons.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые баллоны
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-reductors.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые редукторы
          </h1>
        </div>
      </div>
    </div>
    <div class="items-category">
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-plites.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые плиты
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-heaters.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые обогреватели
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-burners.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые горелки
          </h1>
        </div>
      </div>
    </div>
    <div class="items-category">
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-ramps.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые рампы
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-fitings.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые фитинги
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-hones.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Подводки и шланги
          </h1>
        </div>
      </div>
    </div>
  </section>
  <section class="advantages">
    <h1>
      Преимущества работы с нами
    </h1>
    <div class="advantage-items">
      <div class="advantage-item">
        <div class="advantage-item-left">
          <img src="../images/Home/section-advantages/item-1.svg" height="50" width="50">
        </div>
        <div class="advantage-item-right">
          <h3>
            Более 1000 товаров
          </h3>
          <p>
            Все для комплектации и сборки<br> автономной газовой системы
          </p>
        </div>
      </div>
      <div class="advantage-item">
        <div class="advantage-item-left">
          <img src="../images/Home/section-advantages/item-2.png" height="50" width="50">
        </div>
        <div class="advantage-item-right">
          <h3>
            Собственные разработки
          </h3>
          <p>
            Производственная линия и<br> испытательная лаборатория в Чехии.
          </p>
        </div>
      </div>
      <div class="advantage-item">
        <div class="advantage-item-left">
          <img src="../images/Home/section-advantages/item-3.svg" height="50" width="50">
        </div>
        <div class="advantage-item-right">
          <h3>
            На связи 24х7
          </h3>
          <p>
            Консультации и помощь в подборе<br> оборудования, сборке газовых систем.
          </p>
        </div>
      </div>
    </div>
    <div class="advantage-items">
      <div class="advantage-item">
        <div class="advantage-item-left">
          <img src="../images/Home/section-advantages/item-4.png" height="50" width="50">
        </div>
        <div class="advantage-item-right">
          <h3>
            Срочная доставка
          </h3>
          <p>
            Срочная доставка от 3 часов<br>по Москве и Московской области
          </p>
        </div>
      </div>
      <div class="advantage-item">
        <div class="advantage-item-left">
          <img src="../images/Home/section-advantages/item-5.png" height="50" width="50">
        </div>
        <div class="advantage-item-right">
          <h3>
            Доставка по России
          </h3>
          <p>
            4-5 дней — среднее время выполнения<br> заказа от обращения до вручения.
          </p>
        </div>
      </div>
      <div class="advantage-item">
        <div class="advantage-item-left">
          <img src="../images/Home/section-advantages/item-6.png" height="50" width="50">
        </div>
        <div class="advantage-item-right">
          <h3>
            Поддержка клиентов
          </h3>
          <p>
            Поддержка по вопросам, связанным<br>с газом и газовым оборудованием.
          </p>
        </div>
      </div>
    </div>
    <div class="advantage-services-cards">
      <div v-for="item in services" :key="item.id" class="service-card">
        <img :src="getImageUrl(item.image)" class="card-image" height="169" width="370">
        <div class="card-content">
          <h3>{{ item.title }}</h3>
          <ul>
            <li v-for="(point, index) in item.list" :key="index">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="help">
    <div class="help-window">
      <div class="help-title">
        <h1>
          Нужна помощь в подборе оборудования?
        </h1>
        <p>
          Запишитесь на консультацию. Наш специалист перезвонит вам.
        </p>
      </div>
      <div class="help-inputs">
        <input class="help-name" placeholder="Ваше имя">
        <input class="help-number" placeholder="Номер телефона">
        <button class="help-button">Записаться</button>
      </div>
      <div class="help-description">
        <p>
          Нажимая на кнопку «Записаться» вы соглашаетесь на обработку персональных данных,<br> получение sms и email с предложениями о новых акциях нашей компании.
        </p>
      </div>
    </div>
  </section>
  <section class="new-items">
    <h2>Новинки</h2>

    <div v-if="isLoading">Загрузка...</div>

    <div v-else class="sales-cards">
      <div v-for="card in newItems" :key="card.id" class="sales-card">
        <div class="sales-card-image-wrapper">
          <div class="sales-card-discount">
            Скидка 10%
          </div>
          <div class="sales-card-actions">
            <button
                class="action-btn-favorite"
                :class="{ active: card.isFavorite }"
                @click="card.isFavorite = !card.isFavorite"
            ></button>

            <button
                class="action-btn-tune"
                :class="{ active: card.isTune }"
                @click="card.isTune = !card.isTune"
            ></button>
          </div>

          <img
              class="sales-card-img"
              :src="getImageUrl(card.image)"
          />
        </div>

        <div class="sales-card-info">
          <h3 class="sales-card-title">
            {{ card.title }}
          </h3>

          <div class="sales-card-rating">
            <img
                src="../images/Home/section-sales/star.png"
                height="16"
                width="16"
            />

            <span class="rating-score">
            {{ card.rating }}
          </span>

          </div>

          <div class="sales-card-price">
            {{ card.price }} р.
          </div>

          <button class="btn-buy">
            Купить в один клик
          </button>

          <button class="btn-card">
            В корзину
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@font-face {
  font-family: 'roboto';
  src: url('../fonts/Roboto-VariableFont_wdth,wght.ttf') format('truetype');
  font-style: normal;
}
* {
  font-family: 'roboto';
}
.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 25px;
}
.slider-container img {
  margin: 0;
}
.slider-left, .slider-right {
  height: 50px;
  width: 50px;
  box-shadow: 0 4px 15px #0000000D;
  cursor: pointer;
}
.slider-left {
  transform: translateX(35px)
}
.slider-right {
  transform: translateX(-35px) rotatey(180deg);
}
.slider-progress {
  display: flex;
  gap: 16px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 70px;
}
.slider-progress img {
  margin: 0;
}
.sales h2 {
  font-size: 28px;
  text-align: center;
  transform: translateX(-495px);
  margin: 0;
}
.sales-cards {
  display: flex;
  gap: 30px;
  justify-content: center;
  padding-bottom: 80px;
  padding-top: 30px;
}
.sales-card {
  width: 270px;
  height: 590px;
  border: 1px solid #E1F0FE;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0;

}

.sales-card-image-wrapper {
  position: relative;
  background-color: #FAFAFA;
  display: flex;
  width: 270px;
  height: 270px;
  justify-content: center;
  align-items: center;
}

.sales-card-img {
  width: 200px;
  height: 200px;
  padding-top: 35px;
}

.sales-card-discount {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #25A1D3;
  color: #fff;
  font-size: 14px;
  height: 24px;
  width: 104px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sales-card-actions {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.action-btn-favorite, .action-btn-tune {
  background: #fff;
  border: 1px solid #A6B0B9;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px;
  transition: all 0.2s ease;
}

.action-btn-favorite { background-image: url('../images/Home/section-sales/favorite_border.png'); }
.action-btn-favorite:hover { background-image: url('../images/Home/section-sales/favorite_hover.png'); }
.action-btn-favorite.active { background-image: url('../images/Home/section-sales/favorite_selected.png'); border-color: #25A1D3; }

.action-btn-tune { background-image: url('../images/Home/section-sales/tune.png'); }
.action-btn-tune:hover { background-image: url('../images/Home/section-sales/tune_hover.png'); }
.action-btn-tune.active { background-image: url('../images/Home/section-sales/tune_hover.png'); border-color: #25A1D3; }
.sales-card-info {
  width: 230px;
}

.sales-card-title {
  margin: 0;
  font-size: 18px;
  color: #333333;
  padding-top: 17px;
}

.sales-card-rating {
  display: flex;
  font-size: 13px;
  padding-top: 12px;
}

.sales-card-rating img {
  margin: 0;
}
.rating-score {
  color: #E98F10;
  margin: 0;
  font-size: 14px;
  padding-left: 7px;
  padding-bottom: 34px;
}

.rating-reviews {
  color: #333333;
  margin: 0;
  padding-left: 21px;
  font-size: 14px;
}

.sales-card-price {
  font-size: 24px;
  font-weight: 700;
  color: #333333;
  padding-bottom: 16px;
}

.sales-card-info button {
  width: 100%;
  padding: 17px 0;
  border-radius: 62px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-buy {
  background-color: #25A1D3;
  color: #fff;
  border: none;
}

.btn-buy:hover {
  background-color: #012D5A;
}


.btn-card {
  background-color: #fff;
  color: #25A1D3;
  border: 1px solid #25A1D3;
}

.btn-card:hover {
  color: #012D5A;
  border-color: #012D5A;
}

.item-category {
  padding-bottom: 70px;
}
.item-category h2 {
  font-size: 28px;
  text-align: center;
  transform: translateX(-460px);
  margin: 0;
}
.items-category {
  padding-top: 30px;
  display: flex;
  gap: 30px;
  justify-content: center;
}
.item-card {
  height: 74px;
  width: 370px;
  background: white;
  display: flex;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
  margin: 0;
}
.item-card:hover {
  box-shadow: 0 4px 15px #0000000D,
  0 4px 15px #0000000D;
  transition: all 0.5s ease;
}
.item-card-image {
  margin: 0;
  background: #F3F3F3;
  height: 64px;
  width: 64px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
}
.item-card-image img {
  margin: 0;
}
.item-card-title {
  margin: 0;
}
.item-card-title h1 {
  font-size: 20px;
}
.advantages h1 {
  transform: translateX(-380px);
  text-align: center;
  font-size: 28px;
  padding-bottom: 59px;
}

.advantage-items {
  display: flex;
  gap: 32px;
  justify-content: center;
  padding-bottom: 20px;
}
.advantage-item {
  display: flex;
  height: 76px;
  width: 368px;
  margin: 0;
}
.advantage-item-left {
  background: #F5FCFF;
  height: 76px;
  width: 76px;
  margin: 0;
}
.advantage-item-left img {
  padding: 13px 13px;
}

.advantage-item-right {
  margin: 0;
  padding: 5px 0 0 30px;
}
.advantage-item-right h3 {
  font-size: 20px;
  padding-bottom: 12px;
}
.advantage-item-right p {
  font-size: 14px;
}
.advantage-services-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
}
.service-card {
  width: 370px;
  height: 447px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background: #fff;
  margin: 0;
  margin-top:30px;
}

.card-content {
}

.card-content h3 {
  font-size: 20px;
  padding-bottom: 30px;
  padding-left: 22px;
}

.card-content ul {
  padding-left: 40px;
  padding-right: 23px;
}

.card-content li {
  font-size: 14px;
  padding-bottom: 20px;
  color: #333;
}
.help {
  padding-top: 50px;
}
.help-window {
  height: 274px;
  width: 1170px;
  background-image: url('../images/Home/section-help/help-bg.png');
}
.help-title h1 {
  color: white;
  font-size: 28px;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 18px;
}
.help-title p {
  color: white;
  font-size: 20px;
  text-align: center;
  padding-bottom: 40px;
}
.help-inputs {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.help-inputs input {
  margin: 0;
}
.help-name {
  height: 48px;
  width: 270px;
  border-radius: 34px;
  border: none;
  padding-left: 30px;
  color: #A6B0B9;
  font-size: 16px;
}
.help-number {
  height: 48px;
  width: 440px;
  border-radius: 34px;
  border: none;
  padding-left: 30px;
  color: #A6B0B9;
  font-size: 16px;

}
.help-inputs button {
  margin: 0;
  height: 48px;
  width: 200px;
  border-radius: 34px;
  border: none;
  background: #25A1D3;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.help-description {
  color: #A6B0B9;
  font-size: 14px;
  padding-left: 70px;
  padding-top: 18px;
}
.new-items h2 {
  font-size: 28px;
  text-align: center;
  transform: translateX(-528px);
  margin: 0;
  padding-top: 86px;
}
</style>