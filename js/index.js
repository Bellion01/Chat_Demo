let about = document.querySelector(".About");
let Contact = document.querySelector(".Contact");
let Log = document.querySelector(".Log");
let Sign = document.querySelector(".Sign");
let Sign_in = document.querySelector(".Sign_in");
let Log_in = document.querySelector(".Log_in");
let block_about_us = document.querySelector(".block_about_us");
let block_contact_us = document.querySelector(".block_contact_us");
let block_log_in = document.querySelector(".block_log_in");
let block_sign_in = document.querySelector(".block_sign_in");

about.onclick = () => {
  block_about_us.classList.toggle("block_about_us_act");
  block_contact_us.classList.remove("block_contact_us_act");
  block_log_in.classList.remove("block_log_in_act");
  block_sign_in.classList.remove("block_sign_in_act");
};
Contact.onclick = () => {
  block_about_us.classList.remove("block_about_us_act");
  block_contact_us.classList.toggle("block_contact_us_act");
  block_log_in.classList.remove("block_log_in_act");
  block_sign_in.classList.remove("block_sign_in_act");
};
Log.onclick = () => {
  block_about_us.classList.remove("block_about_us_act");
  block_contact_us.classList.remove("block_contact_us_act");
  block_log_in.classList.toggle("block_log_in_act");
  block_sign_in.classList.remove("block_sign_in_act");
};
Log_in.onclick = () => {
  block_about_us.classList.remove("block_about_us_act");
  block_contact_us.classList.remove("block_contact_us_act");
  block_log_in.classList.toggle("block_log_in_act");
  block_sign_in.classList.remove("block_sign_in_act");
};
Sign.onclick = () => {
  block_about_us.classList.remove("block_about_us_act");
  block_contact_us.classList.remove("block_contact_us_act");
  block_log_in.classList.remove("block_log_in_act");
  block_sign_in.classList.toggle("block_sign_in_act");
};
Sign_in.onclick = () => {
  block_about_us.classList.remove("block_about_us_act");
  block_contact_us.classList.remove("block_contact_us_act");
  block_log_in.classList.remove("block_log_in_act");
  block_sign_in.classList.toggle("block_sign_in_act");
};
