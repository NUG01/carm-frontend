// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "Hello!",
      please_input_username: "Please input your username!",
      please_input_password: 'Please input your password!',
      please_input_surname: 'Please input your surname!',
      please_input_number: 'Please input your mobile number!',
      please_input_email: 'Please input your email!',
      name: "Name",
      username: "Username",
      email: "Email",
      password: "Password",
      surname: "Surname",
      mobile_number: "Mobile Number",
      submit: "Submit",
      page_not_found: "Page not found",
      sorry_we_couln_not_find_the_page_you_are_looking_for: "Sorry, we couldn’t find the page you’re looking for.",
      back_to_home: "Back to home",
      auction: "Auction",
      port: "Port",
      copart: "Copart",
      iai: "IAI",
      calculator: "Calculator",
      registration: "Registration",
      login: "Login",
    },
  },
  ru: {
    translation: {
      greeting: "Привет!",
      please_input_username: "Пожалуйста, введите ваше имя пользователя!",
      please_input_password: 'Пожалуйста, введите ваш пароль!',
      please_input_surname: 'Пожалуйста, введите вашу фамилию!',
      please_input_number: 'Пожалуйста, введите ваш номер телефона!',
      please_input_email: 'Пожалуйста, введите вашу электронную почту!',
      name: "Имя",
      username: "Имя пользователя",
      email: "Электронная почта",
      password: "Пароль",
      surname: "Фамилия",
      mobile_number: "Мобильный номер",
      submit: "Отправить",
      page_not_found: "Страница не найдена",
      sorry_we_couln_not_find_the_page_you_are_looking_for: "Извините, мы не смогли найти страницу, которую вы ищете.",
      back_to_home: "Вернуться на главную",
      auction: "Аукцион",
      port: "Порт",
      copart: "Copart",
      iai: "IAI",
      calculator: "Калькулятор",
      registration: "Регистрация",
      login: "Логин",
    },
  },
  ka: {
    translation: {
      greeting: "გამარჯობა!",
      please_input_username: "გთხოვთ, შეიყვანეთ თქვენი სახელი!",
      please_input_password: 'გთხოვთ, შეიყვანეთ თქვენი პაროლი!',
      please_input_surname: 'გთხოვთ, შეიყვანეთ თქვენი გვარი!',
      please_input_number: 'გთხოვთ, შეიყვანეთ თქვენი ნომერი!',
      please_input_email: 'გთხოვთ, შეიყვანეთ თქვენი ელ-ფოსტა!',
      name: "სახელი",
      username: "მომხმარებელი",
      email: "ელ-ფოსტა",
      password: "პაროლი",
      surname: "გვარი",
      mobile_number: "მობილური ნომერი",
      submit: "გაგზავნა",
      page_not_found: "გვერდი ვერ მოიძებნა",
      sorry_we_couln_not_find_the_page_you_are_looking_for: "სამწუხაროდ, ჩვენ ვერ ვპოვეთ გვერდს, რომელსაც თქვენ ეძებთ.",
      back_to_home: "დაბრუნება მთავარ გვერდზე",
      auction: "აუქციონი",
      port: "პორტი",
      copart: "Copart",
      iai: "IAI",
      calculator: "კალკულატორი",
      registration: "რეგისტრაცია",
      login: "შესვლა",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
