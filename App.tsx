
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, Settings, AlertCircle, WifiOff, Construction, RotateCcw
} from 'lucide-react';

// Component Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoCarousel from './components/PromoCarousel';
import Features from './components/Features';
import Courses from './components/Courses';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Mentors from './components/Mentors';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import WhatsAppFloating from './components/WhatsAppFloating';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ErrorPage from './components/ErrorPage';
import ProfileModal from './components/ProfileModal';
import InHouseTraining from './components/InHouseTraining';
import PrivateTraining from './components/PrivateTraining';
import OnlinePrivateTraining from './components/OnlinePrivateTraining';
import OnlineTraining from './components/OnlineTraining';
import ECourse from './components/ECourse';
import CourseDetail from './components/CourseDetail';
import Cart from './components/Cart';
import PaymentConfirmation from './components/PaymentConfirmation';
import ThankYou from './components/ThankYou';
import FeaturesHub from './components/FeaturesHub';
import { translations } from './translations';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'payment' | 'admin' | 'promo';
  timestamp: string;
  isRead: boolean;
}

type ErrorType = 'none' | '404' | 'offline' | 'maintenance';
type PageView = 'landing' | 'inhouse' | 'private' | 'online-private' | 'online' | 'ecourse' | 'course-detail' | 'cart' | 'payment-confirmation' | 'thank-you' | 'features';
export type Language = 'id' | 'en';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('id');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [activeError, setActiveError] = useState<ErrorType>('none');
  const [currentView, setCurrentView] = useState<PageView>('landing');
  const [previousView, setPreviousView] = useState<PageView>('landing');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [user, setUser] = useState<{name: string, avatar: string, email?: string, contact?: string, address?: string} | null>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [checkoutData, setCheckoutData] = useState<any>(null);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Selamat Datang!',
      message: 'Terima kasih telah bergabung dengan Kelas Engineer Indonesia.',
      type: 'admin',
      timestamp: 'Baru saja',
      isRead: false
    }
  ]);

  useEffect(() => {
    const handleOnline = () => {
        setIsOffline(false);
        if (activeError === 'offline') setActiveError('none');
    };
    const handleOffline = () => {
        setIsOffline(true);
        setActiveError('offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (!navigator.onLine) setActiveError('offline');

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [activeError]);

  const handleOpenLogin = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
  };

  const handleOpenSignUp = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  const handleCloseAll = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setIsProfileOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setUser({
      name: "Thomas Shelby Baharudin",
      avatar: "https://i.pravatar.cc/150?u=engineer1",
      email: "thomasshelby332@gmail.com",
      contact: "(555) 555-1234",
      address: "92319 Randy Fields, Leschburgh, KS 47046"
    });
    handleCloseAll();
  };

  const handleUpdateUser = (updatedData: any) => {
    setUser(updatedData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCartItems([]);
    setNotifications([]);
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'id' ? 'en' : 'id');
  };

  const openCourseDetail = (course: any) => {
    setPreviousView(currentView);
    setSelectedCourse(course);
    setCurrentView('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (course: any) => {
    if (!isLoggedIn) {
      handleOpenLogin();
      return;
    }
    
    const isExist = cartItems.find(item => item.title === course.title);
    if (!isExist) {
      setCartItems(prev => [...prev, course]);
    }
    
    setCurrentView('cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleProceedToConfirmation = (data: any) => {
    setCheckoutData(data);
    setCurrentView('payment-confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinalConfirmation = (finalData: any) => {
    setCheckoutData(finalData);
    
    // Tambahkan notifikasi pembayaran
    const newNotif: Notification = {
      id: Date.now().toString(),
      title: 'Pembayaran Terkonfirmasi',
      message: `Konfirmasi pembayaran untuk ${finalData.items.length} kelas telah dikirim ke admin.`,
      type: 'payment',
      timestamp: 'Baru saja',
      isRead: false
    };
    setNotifications(prev => [newNotif, ...prev]);

    setCurrentView('thank-you');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReturnToHome = () => {
    setCartItems([]);
    setCheckoutData(null);
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMarkNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const renderContent = () => {
    switch (currentView) {
      case 'inhouse':
        return <InHouseTraining lang={lang} onBack={() => setCurrentView('landing')} onRegister={handleOpenLogin} />;
      case 'private':
        return <PrivateTraining lang={lang} onBack={() => setCurrentView('landing')} onRegister={handleOpenLogin} />;
      case 'online-private':
        return <OnlinePrivateTraining lang={lang} onBack={() => setCurrentView('landing')} onRegister={handleOpenLogin} />;
      case 'online':
        return <OnlineTraining onCourseSelect={openCourseDetail} onBack={() => setCurrentView('landing')} onRegister={handleOpenLogin} />;
      case 'ecourse':
        return <ECourse lang={lang} onBack={() => setCurrentView('landing')} onRegister={handleOpenLogin} onCourseSelect={openCourseDetail} />;
      case 'course-detail':
        return <CourseDetail course={selectedCourse} lang={lang} onBack={() => setCurrentView(previousView)} onRegister={() => handleAddToCart(selectedCourse)} />;
      case 'cart':
        return <Cart items={cartItems} onRemove={handleRemoveFromCart} onBack={() => setCurrentView('landing')} onProceed={handleProceedToConfirmation} />;
      case 'payment-confirmation':
        return <PaymentConfirmation checkoutData={checkoutData} onBack={() => setCurrentView('cart')} onConfirm={handleFinalConfirmation} />;
      case 'thank-you':
        return <ThankYou checkoutData={checkoutData} user={user} onHome={handleReturnToHome} />;
      case 'features':
        return <FeaturesHub lang={lang} onBack={() => setCurrentView('landing')} />;
      default:
        return (
          <>
            <Hero lang={lang} />
            <PromoCarousel lang={lang} />
            <Features lang={lang} />
            <Courses onCourseSelect={openCourseDetail} />
            <WhyUs lang={lang} />
            <Testimonials lang={lang} />
            <Mentors lang={lang} />
            <div className="bg-white py-8 text-center border-t border-gray-50">
                <a href="#" className="text-lg font-bold text-[#D4AF00] hover:text-black transition-colors inline-flex items-center gap-2">
                    <span>{lang === 'id' ? 'Bergabung Menjadi Trainer Sekarang' : 'Join as a Trainer Now'}</span>
                    <span className="animate-bounce-x">→</span>
                </a>
            </div>
            <Partners lang={lang} />
          </>
        );
    }
  };

  if (activeError !== 'none') {
    return <ErrorPage type={activeError as any} onRetry={() => setActiveError('none')} />;
  }

  return (
    <div className="relative min-h-screen selection:bg-[#F4CE14]/30">
      <Navbar 
        lang={lang}
        onLanguageToggle={toggleLanguage}
        onLoginClick={handleOpenLogin} 
        onSignUpClick={handleOpenSignUp} 
        onProfileClick={() => setIsProfileOpen(true)}
        isLoggedIn={isLoggedIn}
        user={user}
        onLogout={handleLogout}
        cartCount={cartItems.length}
        notifications={notifications}
        onMarkNotificationsRead={handleMarkNotificationsRead}
        onCartClick={() => {
          if (isLoggedIn) setCurrentView('cart');
          else handleOpenLogin();
        }}
        onViewChange={(view) => {
          setCurrentView(view as PageView);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      
      <main>
        {renderContent()}
      </main>
      
      <ContactForm 
        lang={lang} 
        isLoggedIn={isLoggedIn} 
        user={user} 
      />
      
      <Footer lang={lang} onLoginClick={handleOpenLogin} />

      <AIConsultant lang={lang} />
      <WhatsAppFloating />

      <Login 
        lang={lang}
        isOpen={isLoginOpen} 
        onClose={handleCloseAll} 
        onSwitchToSignUp={handleOpenSignUp}
        onLoginSuccess={handleLoginSuccess}
      />
      <SignUp 
        lang={lang}
        isOpen={isSignUpOpen} 
        onClose={handleCloseAll} 
        onSwitchToLogin={handleOpenLogin}
      />
      <ProfileModal 
        lang={lang}
        isOpen={isProfileOpen} 
        onClose={handleCloseAll} 
        user={user} 
        onUpdateUser={handleUpdateUser} 
      />
    </div>
  );
};

export default App;
