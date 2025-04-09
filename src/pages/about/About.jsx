import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { LanguageContext, LanguageProvider } from '../../utils/LanguageContext';
import './About.css'
import { Link } from 'react-router-dom';
import { cv } from '../../utils/SlidersImg';
const About = () => {

  return (
    <LanguageProvider>
      <Navbar/>
      <div className='about-section'>
      <div className='box-title'>
        <div className='back-and-title'>
          <div className='back-button'>
            <Link to={'/'}>
            <i class="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <div className='title-about'>
            <p>Aqvo - sifatli konserva mahsulotlari</p>
          </div>
        </div>
      </div>
      <div className='box-1'>
        <div className='boox'>
            <div className='img-box'>
              <img src="https://www.aqvo.uz/assets/about1-BsQ34AeK.jpg" alt="" />
            </div>
            <div className='titless'>
              <div className='titles-1'>
                <p>AQVO Jiz Mahsulotlari</p>
                <p>AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida mujassam etgan, jiz mahsulotlarini yangicha ta’m va zamonaviy dizaynda taqdim etuvchi yetakchi brend.</p>
              </div>
              <div className='titles-2'>
                <p>AQVO O‘zbekistondagi yetakchi jiz va kanserva mahsulotlari ishlab chiqaruvchi kompaniyalardan biridir. Biz mijozlarimizga sifat va halollikni o‘zida mujassam etgan, xalqaro talab va standartlarga javob beradigan jiz mahsulotlarini taqdim etishga intilamiz. Zamonaviy uskunalar va ilg‘or texnologiyalarni qo‘llagan holda, mahsulotlarimiz ishlab chiqarish jarayoni qat'iy sifat nazorati ostida amalga oshiriladi. Har bir AQVO jiz mahsuloti, uning xavfsizligi va iste’molga yaroqliligini ta'minlash uchun bir nechta sinov va tekshiruv bosqichlaridan o‘tkaziladi. AQVO – bu sifat, halollik va xavfsizlikning ramzi.</p>
              </div>
            </div>
          </div>
      </div>
      <div className='box-2'>
      <div className='boox'>
      <div className='titless'>
              <div className='titles-1'>
                <p>AQVO</p>
                <p>AQVO Jiz Mahsulotlari: Yangi Dizayn, Yangicha Ta’m</p>
              </div>
              <div className='titles-2'>
                <p>AQVO brendi jiz mahsulotlarini yangi, zamonaviy qadoq dizayni va o‘ziga xos ta’mi bilan taqdim etadi. Bizning mahsulotlarimiz nafaqat yuqori sifatli, balki jozibali va ekologik jihatdan toza qadoqlarda taqdim etiladi. Har bir paket AQVO mahsuloti o‘zining betakror ta’mi va o‘zgacha dizayni bilan mijozlarga nafaqat sifatli, balki vizual zavq ham taqdim etadi.</p>
              </div>
            </div>
            <div className='img-box'>
              <img src="https://www.aqvo.uz/assets/about2-CmcAd6HZ.jpg" alt="" />
            </div>
           
          </div>
      </div>
      <div className='box-3'>
        <div className='img-and-text'>
          <div className='imgs'>
            <img src="https://www.aqvo.uz/assets/about-BdVU6kTM.jpg" alt="" />
          </div>
          <div className='text-img'>
            <p>AQVO brendi, jiz mahsulotlarini yangicha ta’m va zamonaviy qadoq dizayni bilan taqdim etadi. Mahsulotlarimiz yuqori sifatli, halol va xavfsiz bo‘lib, har bir qadoq o‘zining innovatsion dizayni bilan ajralib turadi. Bizning jiz mahsulotlarimiz xalqaro sifat standartlariga javob berib, zamonaviy texnologiyalar yordamida ishlab chiqariladi. Har bir mahsulot bir nechta qat'iy tekshiruvlardan o‘tkazilib, ta'mi va sifatiga kafolat beradi. AQVO mahsulotlari nafaqat mazali, balki dizayni va ekotexnologiyasi bilan ham mijozlarimizni qadrlashadi. Biz sifat va dizaynning mukammal uyg‘unligini ta’minlab, har bir iste’molchiga yuqori sifatli mahsulotlarni taqdim etishga intilamiz. AQVO – bu yangicha ta’m va zamonaviy dizaynni</p>
          </div>
        </div>
      </div>
      <div className="box-4">
        <div className='cvs-body'>
          <div className='cvc-title'>
            <h3>Bizning sertifikatlar</h3>
          </div>
        <div className='cvc'>
        {cv.map((item)=>(
                            <img src={item.img} alt="" />
                          ))}
        </div>
        </div>
                          
      </div>
      </div>
      <Footer/>
    </LanguageProvider>
  )
}

export default About