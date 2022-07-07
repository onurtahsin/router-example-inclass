import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InstructorDetail from './pages/InstructorDetail';
import { Navigate } from 'react-router-dom';
import Paths from './pages/Paths';
import FullStack from './pages/FullStack';
import Aws from './pages/Aws';
import PrivateRouter from './pages/PrivateRouter';

//* İc ice sayfalari gsotermek icin Nested Route kullanilabilir.

//? Link, NavLink ve Navigate componentleri declerative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapılan bir
//? componentlerdir. (Nav v.b)

//? Navigate sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirmesi icin kullanilir. (v5 -> Redirect)

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="instructors/:id" element={<InstructorDetail />} />

          {/* Nested Route */}
          <Route path="paths" element={<Paths />}>
                        {/* index element sayfa açıldığında defoult olarak açılan element demektir */}
            <Route index element={<FullStack />} />
            <Route path="fullstack" element={<FullStack />} />
            <Route path="aws" element={<Aws />} />
          </Route>

          <Route path="contact" element={<PrivateRouter />}>
            <Route path="" element={<Contact />} />
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
          {/* hatalı bir root girdiğimizde bizi ana sayfaya atar ancak bu durum INSTRUCTOR için durum farklıdır not fount çalışır */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

//! rootlara / koyarsak kesin absolute adresleri vermiş oluruz / bizim home sayfamız ama / den sonra courses yazarsak ana dizinden coursese geç demek yanına/courses1 dersek yine aynı mantıkta çalışır mutlak adrese gider ancak /koymazsak relative path olur ve daha kısadır ancak hata yapma payı daha yüksektir 
//? ayrıyetten önceki url değişirse relative de düzeltme yapmanıza gerek kalmaz
//! parenti sabit tutarak nasted rooting kullanabiliriz

//? lazyload performans için kullanılır sitenin yükleme süresi uzunsa kullanıcı memnuniyeti için tıklanan segmeler tıklantıktan sonra yüklenirler bu da sayfa ilk açıldığında  kullanıcının uzun süre beklemesinden ziyade kullanıcı her işlem yaptığında kısa kısa bekleme yaparak kullanıcının siteden uzaklaşmasını veya sıkılmasını engellemeyi amaçlar