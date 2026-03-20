import { useState, useEffect } from 'react';
import { 
  Home, Info, BookOpen, ImageIcon, Grid, MessageSquare, Users, Mail, Layout,
  ChevronRight, Save, Plus, Trash2, LogOut, Star, Upload, Trash, Download, Settings,
  Menu, X, Sun, Bell, Music
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const SECTIONS = [
  { id: 'hero', name: 'Hero Section', icon: <Home className="w-5 h-5" /> },
  { id: 'about', name: 'About Us', icon: <Info className="w-5 h-5" /> },
  { id: 'programs', name: 'Programs', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'howItWorks', name: 'How It Works', icon: <Layout className="w-5 h-5" /> },
  { id: 'features', name: 'Features', icon: <Grid className="w-5 h-5" /> },
  { id: 'gallery', name: 'Gallery', icon: <ImageIcon className="w-5 h-5" /> },
  { id: 'testimonials', name: 'Testimonials', icon: <MessageSquare className="w-5 h-5" /> },
  { id: 'admission', name: 'Admission', icon: <Users className="w-5 h-5" /> },
  { id: 'enquiry', name: 'Enquiry', icon: <Mail className="w-5 h-5" /> },
  { id: 'settings', name: 'Site Settings', icon: <Settings className="w-5 h-5" /> },
  { id: 'homePopup', name: 'Home Pop-up', icon: <Bell className="w-5 h-5 text-indigo-500" /> },
  { id: 'summerCamp', name: 'Summer Camp', icon: <Sun className="w-5 h-5 text-orange-500" /> },
  { id: 'footer', name: 'Footer', icon: <Layout className="w-5 h-5" /> },
  { id: 'musicPlayer', name: 'Music Player', icon: <Music className="w-5 h-5 text-fuchsia-500" /> },
];

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [savingSection, setSavingSection] = useState(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (confirm('Are you sure you want to log out?')) {
      await logout();
      navigate('/admin/login');
    }
  };


  const [content, setContent] = useState({
    settings: {
      siteName: 'Chithode Happykids',
      logo: '/fav/apple-touch-icon.png',
      seo: {
        metaTitle: 'Best Playschool & Pre-KG in Chithode – Chithode Happykids🐻',
        metaDesc: 'Looking for the best playschool or daycare in Chithode? Chithode Happykids offers premium Pre-KG with live monitoring and daily activity reports. Enroll now!',
        keywords: 'best playschool chithode, pre-kg erode, daycare kumilamparappu, kids school erode'
      }
    },
    hero: [
      { id: 1, eyebrow: 'LET THE LEARNING BEGIN', title: 'LET THE\nLEARNING\nBEGIN', desc: 'Explore various programs and complete fun activities to unlock achievements. Learn with friends and grow together in a nurturing environment.', image: '/hero_slide1.png', ctaText: 'Enroll Now', ctaLink: '#admission' },
      { id: 2, eyebrow: 'WHERE CURIOSITY MEETS FUN', title: 'WHERE\nCURIOSITY\nMEETS FUN', desc: 'Our unique curriculum blends play and education to spark creativity, critical thinking, and a lifelong love of learning.', image: '/hero_slide2.png', ctaText: 'Our Programs', ctaLink: '#programs' },
      { id: 3, eyebrow: 'GROW TOGETHER EVERY DAY', title: 'GROW\nTOGETHER\nEVERY DAY', desc: 'Join our vibrant community of learners. Programs designed to help every child thrive academically, socially, and creatively.', image: '/hero_slide3.png', ctaText: 'Contact Us', ctaLink: '#enquiry' },
    ],
    about: {
      trialTitle: '2 Days Free Trial',
      trialDesc: 'Learning together is a great way for kids to bond with their parents. Play and learn every single day in a positive way.',
      mascotImage: '/mascot.png',
      features: [
        { icon: '⭐', title: 'ALL PROGRAMS, ALL SEASON', desc: 'Most importantly, our renowned programs are always accessible.' },
        { icon: '📺', title: 'IT LOOKS GREAT ON THE BIG SCREEN', desc: 'Explore our curriculum on any device, anytime.' },
        { icon: '🕐', title: 'ANY TIME IS A GOOD TIME TO LEARN', desc: 'Flexible schedules designed around your child\'s needs.' },
      ]
    },
    programs: {
      eyebrow: 'LET THE LEARNING BEGIN',
      title: 'MEET OUR LEARNING PROGRAMS',
      desc: "From creative arts to STEM, our programs are thoughtfully crafted to develop every child's unique potential in a fun and supportive environment.",
      items: [
        { id: 1, icon: '🧩', title: 'PLAY BECAUSE YOU WANT TO', desc: 'Engaging curriculum designed to ignite curiosity and a love for learning in every child.' },
        { id: 2, icon: '📚', title: 'COOL UNDER PRESSURE', desc: 'Build resilience and problem-solving skills through exciting, real-world challenges.' },
        { id: 3, icon: '🎁', title: 'REWARDS & RECOGNITION', desc: 'Learning is to empower your child. The future is now — the best way to grow.' },
      ]
    },
    howItWorks: {
      tabs: [
        { id: 'enroll', label: '📋 Enroll', icon: '📋' },
        { id: 'visit', label: '🏫 Visit Us', icon: '🏫' },
        { id: 'join', label: '🎒 Join Class', icon: '🎒' },
        { id: 'grow', label: '🌟 Grow', icon: '🌟' },
      ],
      content: {
        enroll: { step: '01', title: 'FILL THE\nENROLLMENT FORM', desc: 'Start your child\'s journey by filling our simple online admission form. Share basic details about your child and we\'ll get back to you within 24 hours. No complicated paperwork — just a fresh start!', cta: 'Enroll Now →', highlight: 'Simple & Quick' },
        visit: { step: '02', title: 'VISIT OUR\nSCHOOL', desc: 'Come visit Chithode Happykids and see the magic in person! Our team will guide you through our colorful classrooms, play areas, and activity zones. Meet our caring teachers and explore what makes us special.', cta: 'Book a Visit →', highlight: '2-Day Free Trial' },
        join: { step: '03', title: 'JOIN THE\nHAPPY CLASS', desc: 'Once enrolled, your child steps into a world of joy and learning. From day one, they\'re welcomed by friendly teachers and fun activities designed to make every child feel safe, loved, and excited to learn.', cta: 'See Programs →', highlight: 'Day 1 Ready' },
        grow: { step: '04', title: 'WATCH YOUR\nCHILD GROW', desc: 'Track your child\'s progress through our digital parent app. Get daily activity reports, live monitoring, in/out notifications, and milestone updates — all in real time, right on your phone.', cta: 'Learn More →', highlight: 'Live App Access' },
      },
      illustration: '/hero_slide3.png'
    },
    features: {
      eyebrow: 'WHY CHOOSE US',
      title: 'FEATURES OF CHITHODE HAPPYKIDS',
      desc: "We believe every parent deserves peace of mind. Here's what makes Chithode Happykids the smarter, safer choice for your child's early education.",
      items: [
        { icon: '📹', title: 'Live Monitoring', desc: 'Watch your child live from anywhere in the world. Real-time camera access lets parents see exactly what their kids are doing inside the playschool at any time.', badge: 'LIVE' },
        { icon: '📱', title: 'Digital Mobile App', desc: 'Our dedicated parent app keeps you connected 24/7. Access all school information, updates, reports and live feeds from the comfort of your smartphone.', badge: null },
        { icon: '🏃', title: 'In & Out Tracking', desc: 'Get instant alerts the moment your child arrives or leaves school. Real-time check-in and check-out time stamps sent directly to your phone.', badge: 'REAL-TIME' },
        { icon: '🔔', title: 'Smart Notifications', desc: 'Never miss a moment. Receive instant push notifications for attendance, activity updates, meal times, nap times and important school announcements.', badge: null },
        { icon: '📊', title: 'Activity Reports', desc: 'Detailed daily activity reports covering learning progress, meals, play sessions and behavior — all delivered to your app every evening.', badge: null },
        { icon: '🌐', title: 'Remote Access', desc: 'Whether you are at work, traveling or at home — stay connected to your child\'s day from any device, anywhere in the world, at any time.', badge: null },
        { icon: '🏫', title: 'Modern Infrastructure', desc: 'State-of-the-art classrooms, activity halls and safe play areas designed for 21st century early childhood learning.', badge: null },
        { icon: '👩‍🏫', title: 'Expert Educators', desc: 'Highly qualified, caring teachers who bring passion and expertise to nurture every child\'s unique potential every single day.', badge: null },
      ]
    },
    gallery: {
      eyebrow: 'OUR SCHOOL LIFE',
      title: 'GALLERY',
      desc: 'A peek into the vibrant, joyful world of Chithode Happykids — where every day is an adventure.',
      items: [
        { id: 1, label: 'Art Class', img: '/gallery_art.png' },
        { id: 2, label: 'Science Lab', img: '/gallery_science.png' },
        { id: 3, label: 'Music Room', img: '/gallery_music.png' },
        { id: 4, label: 'Sports Day', img: '/gallery_sports.png' },
        { id: 5, label: 'Drama Club', img: '/gallery_drama.png' },
        { id: 6, label: 'Reading Time', img: '/gallery_reading.png' },
        { id: 7, label: 'Garden Club', img: '/gallery_garden.png' },
        { id: 8, label: 'Dance Class', img: '/gallery_dance.png' },
      ]
    },
    testimonials: {
      eyebrow: 'HAPPY FAMILIES',
      title: 'WHAT PARENTS SAY',
      desc: "Don't just take our word for it — hear from the families who have experienced the Chithode Happykids difference firsthand.",
      rating: '4.9',
      ratingDesc: 'from 200+ reviews',
      items: [
        { id: 1, name: 'Priya Sharma', role: 'Parent of Aarav, Grade 2', avatar: '👩', rating: 5, text: 'Chithode Happykids has transformed my son\'s attitude towards learning. He now wakes up excited to go to school!' },
        { id: 2, name: 'Rajesh Kumar', role: 'Parent of Ananya, Grade 4', avatar: '👨', rating: 5, text: 'The curriculum here is outstanding. My daughter\'s creativity has skyrocketed since joining Chithode Happykids.' },
        { id: 3, name: 'Sunita Patel', role: 'Parent of Rohan, Grade 1', avatar: '👩', rating: 5, text: 'As a working parent, I was so worried about my child\'s development. Chithode Happykids has been a blessing!' },
        { id: 4, name: 'Amit Verma', role: 'Parent of Diya, Grade 3', avatar: '👨', rating: 5, text: 'The sports and extracurricular programs at Chithode Happykids are exceptional. My daughter has developed confidence.' },
        { id: 5, name: 'Meena Reddy', role: 'Parent of Kiran, Grade 5', avatar: '👩', rating: 5, text: 'Chithode Happykids\'s teachers truly care about each child. The personal attention my son receives has helped him.' },
        { id: 6, name: 'Vivek Singh', role: 'Parent of Pooja, Grade 2', avatar: '👨', rating: 5, text: 'We have been with Chithode Happykids for 3 years now. The consistent quality of education keeps us coming back.' },
      ]
    },
    admission: {
      steps: [
        { step: '01', icon: '📋', title: 'Fill the Form', desc: 'Quick online inquiry — takes just 2 minutes.' },
        { step: '02', icon: '📞', title: 'We Call You', desc: 'Our team calls within 24 hours to guide you.' },
        { step: '03', icon: '🏫', title: 'Visit & Trial', desc: 'Enjoy a 2-day free trial at our school.' },
        { step: '04', icon: '🎒', title: 'Get Enrolled', desc: 'Complete admission and your child is ready!' },
      ],
      grades: ['Playschool', 'Pre-KG', 'Daycare'],
      image: '/admission_img.png',
      info: [
        { icon: '📍', text: '37/2 Vinayaga Residency, Chithode, Erode' },
        { icon: '📞', text: '+91 97877 51430' },
        { icon: '📧', text: 'chithodehappykids@gmail.com' },
        { icon: '🕐', text: 'Mon–Sat: 8 AM – 5 PM' },
      ]
    },
    summerCamp: {
      hero: {
        title: 'SUMMER CAMP 2026',
        eyebrow: 'Hurry Up! Registration Open',
        desc: 'Make your child\'s summer unforgettable with our action-packed camp! From creativity to exploration, we have something for every little adventurer.',
        date: 'April 15, 2026',
        age: '3 - 10 Years'
      },
      seo: {
        metaTitle: 'Summer Camp 2026 – Fun & Learning at Chithode Happykids',
        metaDesc: 'Enroll your child in our exciting 2026 Summer Camp in Chithode! Fun arts, crafts, science experiments, and outdoor games for kids aged 3-10 years.',
        keywords: 'summer camp 2026, kids summer class chithode, playschool activities erode, child development summer camp'
      },
      activities: [
        { image: '/summer_camp_arts.png', title: 'Arts & Crafts', desc: 'Unleash creativity with painting, clay modeling, and DIY projects.' },
        { image: '/summer_camp_dance.png', title: 'Dance & Music', desc: 'Fun dance sessions and musical games to keep kids active and happy.' },
        { image: '/summer_camp_yoga.png', title: 'Yoga & Wellness', desc: 'Mindfulness and easy yoga poses designed for young children.' },
        { image: '/summer_camp_science.png', title: 'Science Experiments', desc: 'Cool, safe science magic that sparks curiosity and wonder.' },
        { image: '/summer_camp_games.png', title: 'Outdoor Games', desc: 'Team-building sports and active fun under the summer sun.' },
        { image: '/summer_camp_chef.png', title: 'Junior Chef Skills', desc: 'Fireless cooking and fun fruit-arrangements for little chefs.' },
      ],
      benefits: {
        title: 'WHY JOIN OUR SUMMER CAMP?',
        items: [
          'Safe & Secured Environment',
          'Expert Caring Mentors',
          'Healthy Refreshments Provided',
          'Creative Skill Development',
          'Fun-Filled Social Interaction',
          'Completion Certificates',
        ]
      }
    },
    enquiry: {
      image: '/enquiry_img.png',
      contactInfo: [
        { icon: '📍', label: 'Address', value: '37/2 No 1 Vinayaga Residency, Kumilamparappu Pirivu, Chithode, Erode' },
        { icon: '📞', label: 'Phone', value: '+91 97877 51430' },
        { icon: '📧', label: 'Email', value: 'chithodehappykids@gmail.com' },
        { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 8 AM – 5 PM' },
      ],
      socials: [
        { icon: 'f', label: 'Facebook', color: 'bg-blue-600', link: 'https://facebook.com' },
        { icon: '▶', label: 'YouTube', color: 'bg-red-600', link: 'https://youtube.com' },
        { icon: '📷', label: 'Instagram', color: 'bg-pink-500', link: 'https://instagram.com' },
      ],
      submissions: [
        { 
          id: 1, 
          name: 'Dinesh Kumar', 
          phone: '9787751430', 
          email: 'dinesh@example.com',
          subject: 'Admission Query',
          program: 'Playschool', 
          date: '2026-03-08', 
          message: 'I want to know about the school timings and fee structure for playschool.',
          status: 'New',
          remarks: 'Called once, will visit tomorrow.'
        },
        { 
          id: 2, 
          name: 'Sathish Admin', 
          phone: '9842751430', 
          email: 'sathish@example.com',
          subject: 'Pre-KG Seat',
          program: 'Pre-KG', 
          date: '2026-03-07', 
          message: 'Is there any vacancy for Pre-KG 2026 batch?',
          status: 'In Progress',
          remarks: 'Needs discount information.'
        },
        { 
          id: 3, 
          name: 'Anu Radha', 
          phone: '9003551430', 
          email: 'anu@example.com',
          subject: 'Daycare Service',
          program: 'Daycare', 
          date: '2026-03-05', 
          message: 'Looking for daycare service from 9am to 6pm.',
          status: 'Enrolled',
          remarks: 'Admitted on 10th March.'
        },
      ]
    },
    footer: {
      schoolEvents: ['Annual Day', 'Sports Day', 'Exhibitions', 'Parent Day'],
      quickLinks: ['Programs', 'Activities', 'Schedule', 'Events'],
      contact: {
        address: '37/2 No 1 Vinayaga Residency, Kumilamparappu Pirivu, Chithode, Erode',
        phone: '+91 97877 51430',
        email: 'chithodehappykids@gmail.com'
      }
    },
    homePopup: {
      enabled: true,
      image: '/summer_camp_promo_2026.png',
      title: 'Summer Camp 2026',
      desc: 'Registration is now open for our exciting 2026 Summer Camp! Limited seats available.',
      ctaText: 'Learn More',
      ctaLink: '/summer-camp',
      ctaColor: 'yellow'
    },
    musicPlayer: {
      enabled: true,
      audioUrl: '/bg_music.m4a',
      autoplay: true
    }
  });

  const handleHeroUpdate = (index, field, value) => {
    const newHero = [...content.hero];
    newHero[index][field] = value;
    setContent(prev => ({ ...prev, hero: newHero }));
  };

  const handleFileUpload = (section, field, file, index = null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      if (index !== null) {
        const target = content[section];
        if (Array.isArray(target)) {
          const newList = [...target];
          newList[index][field] = result;
          setContent(prev => ({ ...prev, [section]: newList }));
        } else {
          // It's an object with nested arrays (like howItWorks)
          const newObj = { ...target };
          if (newObj[field] && Array.isArray(newObj[field])) {
             newObj[field][index] = result;
          } else {
             newObj[field] = result; // Direct field in object
          }
          setContent(prev => ({ ...prev, [section]: newObj }));
        }
      } else {
        setContent(prev => ({
          ...prev,
          [section]: { ...prev[section], [field]: result }
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const updateNested = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/site-content`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });
        if (response.ok) {
          const data = await response.json();
          if (Object.keys(data).length > 0) {
            setContent(prev => {
              const normalizedData = { ...data };
              ['programs', 'features', 'gallery', 'testimonials', 'settings'].forEach(section => {
                if (normalizedData[section]) {
                  // If backend returns an array, wrap it in the new object structure
                  if (Array.isArray(normalizedData[section])) {
                    normalizedData[section] = { 
                      ...(prev[section] || {}), 
                      items: normalizedData[section] 
                    };
                  }
                  
                  // Ensure 'items' always exists
                  if (!normalizedData[section].items) {
                    normalizedData[section].items = [];
                  }

                  // Testimonials-specific property normalization (legacy support)
                  if (section === 'testimonials') {
                    normalizedData[section].items = normalizedData[section].items.map(item => ({
                      ...item,
                      role: item.role || item.child || '',
                      text: item.text || item.message || ''
                    }));
                  }
                } else if (prev[section]) {
                  // If section is missing from response, keep our current state
                  normalizedData[section] = prev[section];
                }
              });
              return { ...prev, ...normalizedData };
            });
          }
        }
      } catch (err) {
        console.error('Failed to fetch content:', err);
      }
    };
    fetchContent();
  }, []);

  const handleSave = async () => {
    setSavingSection('all');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/site-content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(content)
      });
      
      if (response.ok) {
        setShowSaveToast(true);
        setTimeout(() => setShowSaveToast(false), 3000);
      } else {
        throw new Error('Save failed');
      }
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save changes. Please check if the backend is running.');
    } finally {
      setSavingSection(null);
    }
  };

  const handleSaveSection = async (sectionId) => {
    setSavingSection(sectionId);
    try {
      const sectionData = { [sectionId]: content[sectionId] };
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/site-content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(sectionData)
      });
      
      if (response.ok) {
        setShowSaveToast(true);
        setTimeout(() => setShowSaveToast(false), 3000);
      } else {
        throw new Error('Save failed');
      }
    } catch (error) {
      console.error('Error saving section content:', error);
      alert(`Failed to save ${sectionId} changes.`);
    } finally {
      setSavingSection(null);
    }
  };

  const handleExportCSV = () => {
    const submissions = content.enquiry?.submissions || [];
    if (submissions.length === 0) {
      alert('No enquiries to export.');
      return;
    }

    const headers = ['ID', 'Date', 'Name', 'Phone', 'Email', 'Subject', 'Program', 'Status', 'Message'];
    const csvRows = [
      headers.join(','),
      ...submissions.map(sub => [
        sub.id,
        `"${sub.date || ''}"`,
        `"${sub.name || ''}"`,
        `"${sub.phone || ''}"`,
        `"${sub.email || ''}"`,
        `"${sub.subject || ''}"`,
        `"${sub.program || ''}"`,
        `"${sub.status || ''}"`,
        `"${(sub.message || '').replace(/"/g, '""')}"`
      ].join(','))
    ];

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `enquiries_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const SectionSaveButton = ({ sectionId }) => (
    <div className="pt-10 flex justify-end border-t border-slate-100 mt-10">
      <button 
        onClick={() => handleSaveSection(sectionId)}
        disabled={savingSection === sectionId}
        className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold text-xs shadow-xl shadow-slate-200 hover:bg-primary hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {savingSection === sectionId ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            Saving...
          </span>
        ) : (
          <>
            <Save className="w-4 h-4 group-hover:rotate-12 transition-transform" /> 
            Save {SECTIONS.find(s => s.id === sectionId)?.name} Changes
          </>
        )}
      </button>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-nunito overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:relative inset-y-0 left-0 ${isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 lg:w-20 -translate-x-full lg:translate-x-0'} bg-white border-r border-slate-100 flex flex-col transition-all duration-300 z-50 shadow-sm overflow-hidden`}>
        <div className="p-8 pb-10 flex items-center justify-between lg:justify-start gap-4">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-fredoka shadow-lg shadow-primary/20 text-sm">HK</div>
            {isSidebarOpen && <span className="font-fredoka text-lg text-slate-800 tracking-tight">Admin Portal</span>}
          </div>
          <button 
            className="lg:hidden p-2 text-slate-400 hover:text-primary transition-colors"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                if (window.innerWidth < 1024) setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-300 group ${
                activeSection === section.id 
                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
              }`}
            >
              <span className={`text-xl transition-all duration-300 ${activeSection === section.id ? 'scale-110' : 'group-hover:scale-110 group-hover:text-primary'}`}>{section.icon}</span>
              {(isSidebarOpen || window.innerWidth >= 1024) && <span className={`font-bold text-[13px] tracking-wide flex-1 text-left ${!isSidebarOpen && 'lg:hidden'}`}>{section.name}</span>}
            </button>
          ))}
        </nav>
        <div className="p-6 mt-auto">
          <button 
            className="w-full flex items-center justify-center lg:justify-start gap-3.5 px-4 py-3 text-slate-400 font-bold text-[13px] hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all" 
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-4 lg:px-10 z-20">
          <div className="flex items-center gap-4">
            <button 
              className="p-2 -ml-2 text-slate-400 hover:text-primary transition-colors"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h2 className="text-lg lg:text-xl font-fredoka text-slate-800 tracking-tight truncate max-w-[150px] sm:max-w-none">{SECTIONS.find(s => s.id === activeSection)?.name}</h2>
            <div className="hidden sm:flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-emerald-600 tracking-widest uppercase truncate">Live Status</span>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <button 
              onClick={() => {
                const fetchContent = async () => {
                  try {
                    const token = localStorage.getItem('token');
                    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/site-content`, {
                      headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json'
                      }
                    });
                    if (response.ok) {
                      const data = await response.json();
                      if (Object.keys(data).length > 0) {
                        setContent(prev => ({ ...prev, ...data }));
                      }
                    }
                  } catch (err) {
                    console.error('Failed to fetch content:', err);
                  }
                };
                fetchContent();
              }}
              className="group flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-3 lg:px-6 py-2.5 lg:py-3 rounded-full font-bold text-[11px] lg:text-[13px] hover:bg-slate-50 transition-all shadow-sm active:scale-95"
            >
              <span className="hidden lg:inline">🔄 Refresh</span>
              <span className="lg:hidden">🔄</span>
            </button>
            <button 
              onClick={handleSave}
              disabled={savingSection === 'all'}
              className="group flex items-center gap-2 bg-primary text-white px-4 lg:px-7 py-2.5 lg:py-3 rounded-full font-bold text-[11px] lg:text-[13px] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {savingSection === 'all' ? (
                <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <Save className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              )}
              <span className="hidden sm:inline">{savingSection === 'all' ? 'Saving...' : 'Save All'}</span>
              <span className="sm:hidden">{savingSection === 'all' ? '...' : 'Save'}</span>
            </button>
          </div>
        </header>

        {showSaveToast && (
          <div className="fixed top-24 right-10 bg-slate-900 text-white px-6 py-4 rounded-[24px] shadow-2xl flex items-center gap-4 animate-in slide-in-from-right duration-500 z-50 border border-white/10">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
              <Save className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-fredoka font-bold text-sm">Update Successful!</p>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">Website content is now synchronized.</p>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-2 sm:p-8 lg:p-12 bg-[#F8FAFC]/50">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-[32px] sm:rounded-[48px] p-4 sm:p-10 lg:p-12 shadow-sm border border-slate-100 relative overflow-hidden min-h-[calc(100vh-160px)] sm:min-h-[calc(100vh-200px)]">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 opacity-50" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-50 rounded-full -ml-24 -mb-24 opacity-50" />
              
              <div className="relative z-10 space-y-12">
                
                {activeSection === 'hero' && (
                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-gray-50 rounded-2xl w-full sm:w-fit">
                        {content.hero.map((_, i) => (
                          <button key={i} onClick={() => setActiveHeroSlide(i)} className={`px-4 sm:px-6 py-2 rounded-xl text-[10px] sm:text-xs font-black transition-all flex-1 sm:flex-none ${activeHeroSlide === i ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>SLIDE {i + 1}</button>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button 
                          onClick={() => {
                            const newSlide = { 
                              id: Date.now(), 
                              eyebrow: 'NEW SLIDE', 
                              title: 'NEW TITLE', 
                              desc: 'New description here...', 
                              image: '/hero_slide1.png',
                              ctaText: 'Learn More',
                              ctaLink: '#'
                            };
                            setContent(prev => ({ ...prev, hero: [...prev.hero, newSlide] }));
                            setActiveHeroSlide(content.hero.length);
                          }}
                          className="flex-1 sm:flex-none bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-[10px] sm:text-xs font-black flex items-center justify-center gap-2 hover:bg-emerald-100 transition-all"
                        >
                          <Plus className="w-4 h-4" /> ADD
                        </button>
                        {content.hero.length > 1 && (
                          <button 
                            onClick={() => {
                              const newHero = content.hero.filter((_, i) => i !== activeHeroSlide);
                              setContent(prev => ({ ...prev, hero: newHero }));
                              setActiveHeroSlide(Math.max(0, activeHeroSlide - 1));
                            }}
                            className="flex-1 sm:flex-none bg-red-50 text-red-600 px-4 py-2 rounded-xl text-[10px] sm:text-xs font-black flex items-center justify-center gap-2 hover:bg-red-100 transition-all"
                          >
                            <Trash className="w-4 h-4" /> DELETE
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-8">
                      {/* Image Upload */}
                      <div className="space-y-6">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-1">Slide Visual</label>
                        <div className="flex flex-col md:flex-row items-center gap-8 p-6 sm:p-10 bg-slate-50/50 rounded-[40px] border border-slate-100">
                           <div className="w-full max-w-[240px] h-48 bg-white rounded-[32px] shadow-sm overflow-hidden flex-shrink-0 border border-slate-100 p-4">
                            <img src={content.hero[activeHeroSlide].image} alt="Hero" className="w-full h-full object-contain" />
                          </div>
                          <div className="flex-1 space-y-4 text-center md:text-left">
                            <h5 className="font-fredoka text-lg text-slate-800">Slide {activeHeroSlide + 1} Image</h5>
                            <p className="text-[11px] text-slate-400 font-medium leading-relaxed">Recommended size: 1200x800px. Supports PNG, JPG or WebP.</p>
                            <label className="inline-block bg-slate-900 text-white px-8 py-3 rounded-2xl text-[10px] font-black tracking-widest hover:bg-primary transition-all cursor-pointer shadow-lg shadow-slate-200">
                              REPLACE IMAGE
                              <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*"
                                onChange={(e) => handleFileUpload('hero', 'image', e.target.files[0], activeHeroSlide)}
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="grid gap-6">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Eyebrow Text (Small Heading)</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/30 rounded-[24px] p-4 sm:p-6 outline-none font-fredoka text-lg text-slate-800 transition-all block shadow-sm shadow-slate-50" 
                            value={content.hero[activeHeroSlide].eyebrow} 
                            onChange={e => handleHeroUpdate(activeHeroSlide, 'eyebrow', e.target.value)} 
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Main Heading (Use \n for new line)</label>
                          <textarea 
                            className="w-full bg-white border border-slate-100 focus:border-primary/30 rounded-[24px] p-4 sm:p-6 outline-none font-fredoka text-2xl sm:text-3xl text-slate-800 transition-all block shadow-sm shadow-slate-50 h-32" 
                            value={content.hero[activeHeroSlide].title} 
                            onChange={e => handleHeroUpdate(activeHeroSlide, 'title', e.target.value)} 
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Description</label>
                          <textarea 
                            className="w-full bg-white border border-slate-100 focus:border-primary/30 rounded-[24px] p-6 outline-none text-slate-600 font-medium leading-relaxed shadow-sm shadow-slate-50 h-32" 
                            value={content.hero[activeHeroSlide].desc} 
                            onChange={e => handleHeroUpdate(activeHeroSlide, 'desc', e.target.value)} 
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-3">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Button Text</label>
                             <input 
                               className="w-full bg-white border border-slate-100 focus:border-primary/30 rounded-[20px] p-5 outline-none font-bold text-slate-800 transition-all block shadow-sm shadow-slate-50" 
                               value={content.hero[activeHeroSlide].ctaText || ''} 
                               onChange={e => handleHeroUpdate(activeHeroSlide, 'ctaText', e.target.value)} 
                             />
                           </div>
                           <div className="space-y-3">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Button Link (e.g. #admission)</label>
                             <input 
                               className="w-full bg-white border border-slate-100 focus:border-primary/30 rounded-[20px] p-5 outline-none font-bold text-slate-800 transition-all block shadow-sm shadow-slate-50" 
                               value={content.hero[activeHeroSlide].ctaLink || ''} 
                               onChange={e => handleHeroUpdate(activeHeroSlide, 'ctaLink', e.target.value)} 
                             />
                           </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 flex justify-center">
                       <button 
                         onClick={() => handleSaveSection('hero')}
                         disabled={savingSection === 'hero'}
                         className="bg-primary text-white px-12 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                       >
                         {savingSection === 'hero' ? <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <Save className="w-5 h-5" />}
                         SAVE HERO CHANGES
                       </button>
                    </div>
                  </div>
                )}

                {activeSection === 'about' && (
                  <div className="space-y-12">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-100 pb-8 gap-4">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">About School</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">Update your school profile and key value propositions</p>
                      </div>
                    </div>
                    <div className="grid gap-8">
                       <div className="space-y-3">
                         <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Page Headline</label>
                         <input className="w-full bg-white border border-slate-100 focus:border-primary/30 rounded-[24px] p-6 outline-none font-fredoka text-2xl text-slate-800 transition-all block shadow-sm shadow-slate-50" value={content.about.trialTitle} onChange={e => updateNested('about', 'trialTitle', e.target.value)} />
                       </div>
                       <div className="space-y-3">
                         <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Page Subtext</label>
                         <textarea className="w-full bg-white border border-slate-100 focus:border-primary/30 rounded-[24px] p-6 outline-none h-32 text-slate-600 font-medium leading-relaxed shadow-sm shadow-slate-50" value={content.about.trialDesc} onChange={e => updateNested('about', 'trialDesc', e.target.value)} />
                       </div>
                    </div>

                    <div className="space-y-6">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-1">Brand Mascot</label>
                      <div className="flex flex-col md:flex-row items-center gap-10 p-6 sm:p-10 bg-slate-50/50 rounded-[40px] border border-slate-100">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-[32px] shadow-sm overflow-hidden flex-shrink-0 flex items-center justify-center p-4 border border-slate-100">
                          <img src={content.about.mascotImage} alt="Mascot" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 space-y-4 text-center md:text-left">
                          <h5 className="font-fredoka text-lg sm:text-xl text-slate-800">School Character</h5>
                          <p className="text-[11px] sm:text-[13px] text-slate-400 font-medium leading-relaxed max-w-sm">This character represents your school across the site. Use a high-quality transparent PNG.</p>
                          <label className="inline-block bg-slate-900 text-white px-8 py-3 rounded-2xl text-[10px] font-black tracking-widest hover:bg-primary transition-all cursor-pointer shadow-lg shadow-slate-200">
                            REPLACE MASCOT
                            <input 
                              type="file" 
                              className="hidden" 
                              accept="image/*"
                              onChange={(e) => handleFileUpload('about', 'mascotImage', e.target.files[0])}
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8 pt-6">
                      <div className="flex justify-between items-baseline">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Core Pillars</label>
                        <button 
                          onClick={() => {
                            const newF = [...content.about.features, { icon: '✨', title: 'New Pillar', desc: 'Detail about this pillar' }];
                            updateNested('about', 'features', newF);
                          }}
                          className="text-primary font-black text-[10px] uppercase tracking-widest hover:underline"
                        >
                          + Add New Pillar
                        </button>
                      </div>
                      <div className="grid gap-6">
                        {content.about.features.map((f, i) => (
                          <div key={i} className="p-8 bg-white border border-slate-100 rounded-[32px] hover:border-primary/10 transition-all space-y-6 group">
                            <div className="flex items-center gap-6">
                              <input 
                                className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl text-center outline-none border border-transparent focus:border-primary/20 group-hover:bg-primary/5 transition-all"
                                value={f.icon}
                                onChange={(e) => {
                                  const newF = [...content.about.features];
                                  newF[i].icon = e.target.value;
                                  updateNested('about', 'features', newF);
                                }}
                              />
                              <div className="flex-1 space-y-1">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Pillar Title</label>
                                <input 
                                  className="w-full bg-transparent font-fredoka text-xl text-slate-800 outline-none focus:text-primary transition-colors font-bold"
                                  value={f.title}
                                  onChange={(e) => {
                                    const newF = [...content.about.features];
                                    newF[i].title = e.target.value;
                                    updateNested('about', 'features', newF);
                                  }}
                                />
                              </div>
                              <button 
                                onClick={() => {
                                  const newF = content.about.features.filter((_, idx) => idx !== i);
                                  updateNested('about', 'features', newF);
                                }}
                                className="p-2 text-slate-200 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                            <textarea 
                              className="w-full bg-transparent p-0 text-[13px] text-slate-500 font-medium leading-relaxed outline-none resize-none h-20"
                              value={f.desc}
                              onChange={(e) => {
                                const newF = [...content.about.features];
                                newF[i].desc = e.target.value;
                                updateNested('about', 'features', newF);
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <SectionSaveButton sectionId="about" />
                  </div>
                )}

                {activeSection === 'programs' && (
                  <div className="space-y-10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-6 gap-4">
                      <div className="text-left text-wrap">
                        <h3 className="font-fredoka text-2xl text-slate-800">Learning Programs</h3>
                        <p className="text-slate-400 text-sm">Customize the {content.programs.items?.length || 0} active learning tracks</p>
                      </div>
                      <button 
                        onClick={() => {
                          const newItems = [...(content.programs.items || [])];
                          newItems.push({ id: Date.now(), icon: '🎁', title: 'New Program', desc: 'Description of the new program' });
                          setContent(prev => ({ ...prev, programs: { ...prev.programs, items: newItems } }));
                        }}
                        className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 hover:bg-primary transition-all shadow-lg shadow-slate-200 w-full sm:w-auto justify-center"
                      >
                        <Plus className="w-4 h-4" /> ADD PROGRAM
                      </button>
                    </div>

                    {/* Section Header Content */}
                    <div className="bg-slate-50/50 rounded-[32px] p-8 border border-slate-100 space-y-6">
                      <h4 className="font-fredoka text-lg text-slate-700">Section Cover Content</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Eyebrow</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-xl p-3.5 text-[13px] font-bold text-slate-700 outline-none"
                            value={content.programs.eyebrow}
                            onChange={(e) => updateNested('programs', 'eyebrow', e.target.value)}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Main Heading</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-xl p-3.5 text-[13px] font-bold text-slate-700 outline-none"
                            value={content.programs.title}
                            onChange={(e) => updateNested('programs', 'title', e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Description</label>
                          <textarea 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-xl p-4 text-[13px] font-medium text-slate-500 outline-none h-20"
                            value={content.programs.desc}
                            onChange={(e) => updateNested('programs', 'desc', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6">
                      {(content.programs.items || (Array.isArray(content.programs) ? content.programs : [])).map((p, i) => (
                        <div key={p.id} className="p-6 bg-white border border-slate-100 rounded-[28px] hover:border-primary/10 transition-all flex flex-col sm:flex-row gap-6 group shadow-sm">
                          <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shrink-0 group-hover:bg-primary/5 transition-colors relative overflow-hidden border border-slate-50 mx-auto sm:mx-0">
                            {p.icon?.length > 2 ? <img src={p.icon} className="w-full h-full object-cover" /> : p.icon}
                            <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity">
                              <Upload className="w-5 h-5 text-white" />
                              <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                      const newItems = [...content.programs.items];
                                      newItems[i].icon = reader.result;
                                      setContent(prev => ({ ...prev, programs: { ...prev.programs, items: newItems } }));
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                            </label>
                          </div>
                          <div className="flex-1 space-y-3">
                            <input 
                              className="w-full font-fredoka text-xl outline-none focus:text-primary transition-colors bg-transparent font-bold text-slate-800" 
                              value={p.title} 
                              onChange={e => {
                                const newItems = [...content.programs.items]; 
                                newItems[i].title = e.target.value; 
                                setContent(c => ({...c, programs: { ...c.programs, items: newItems }}));
                              }} 
                            />
                            <textarea 
                              className="w-full text-[13px] text-slate-500 font-medium outline-none h-16 resize-none bg-transparent leading-relaxed" 
                              value={p.desc} 
                              onChange={e => {
                                const newItems = [...content.programs.items]; 
                                newItems[i].desc = e.target.value; 
                                setContent(c => ({...c, programs: { ...c.programs, items: newItems }}));
                              }} 
                            />
                          </div>
                          <button 
                            onClick={() => {
                              const newItems = content.programs.items.filter(item => item.id !== p.id);
                              setContent(prev => ({ ...prev, programs: { ...prev.programs, items: newItems } }));
                            }}
                            className="text-slate-200 hover:text-red-500 transition-colors self-start p-2"
                          >
                            <Trash2 className="w-6 h-6" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <SectionSaveButton sectionId="programs" />
                  </div>
                )}

                {activeSection === 'features' && (
                  <div className="space-y-12">
                    <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">Advanced Features</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">Manage the {content.features.items?.length || 0} unique characteristics of your school</p>
                      </div>
                      <button 
                        onClick={() => {
                          const newItems = [...(content.features.items || [])];
                          newItems.push({ icon: '✨', title: 'New Feature', desc: 'Feature description', badge: null });
                          setContent(prev => ({ ...prev, features: { ...prev.features, items: newItems } }));
                        }}
                        className="bg-slate-900 text-white px-8 py-3 rounded-full text-[13px] font-bold shadow-lg shadow-slate-200 hover:bg-primary hover:scale-[1.02] transition-all"
                      >
                        <Plus className="w-4 h-4 inline-block mr-2" />
                        ADD FEATURE
                      </button>
                    </div>

                    {/* Section Header Content */}
                    <div className="bg-slate-50/50 rounded-[40px] p-10 border border-slate-100 space-y-8">
                      <h4 className="font-fredoka text-xl text-slate-700 mb-6">Section Cover Content</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Eyebrow</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none"
                            value={content.features.eyebrow}
                            onChange={(e) => updateNested('features', 'eyebrow', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Main Heading</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none"
                            value={content.features.title}
                            onChange={(e) => updateNested('features', 'title', e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Description</label>
                          <textarea 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-5 text-[13px] font-medium text-slate-500 outline-none h-24 leading-relaxed"
                            value={content.features.desc}
                            onChange={(e) => updateNested('features', 'desc', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {(content.features.items || (Array.isArray(content.features) ? content.features : [])).map((f, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-100 rounded-[32px] hover:border-primary/10 transition-all space-y-6 group shadow-sm">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-5">
                              <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:bg-primary/5 transition-colors relative overflow-hidden border border-slate-100`}>
                                {(f.icon && (f.icon.length > 2 || f.icon.startsWith('data:image'))) ? (
                                  <img src={f.icon} className="w-full h-full object-cover" />
                                ) : (
                                  f.icon
                                )}
                                <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity">
                                  <Upload className="w-5 h-5 text-white" />
                                  <input 
                                    type="file" 
                                    className="hidden" 
                                    accept="image/*"
                                    onChange={(e) => {
                                      const file = e.target.files[0];
                                      if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                          const newItems = [...content.features.items];
                                          newItems[i].icon = reader.result;
                                          setContent(prev => ({ ...prev, features: { ...prev.features, items: newItems } }));
                                        };
                                        reader.readAsDataURL(file);
                                      }
                                    }}
                                  />
                                </label>
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Badge</label>
                                <input 
                                  className="w-full bg-slate-50/50 border border-transparent focus:border-primary/20 rounded-xl px-3 py-1.5 text-[10px] font-black outline-none placeholder:text-slate-300"
                                  placeholder="e.g. LIVE"
                                  value={f.badge || ''}
                                  onChange={(e) => {
                                    const newItems = [...content.features.items];
                                    newItems[i].badge = e.target.value || null;
                                    setContent(prev => ({ ...prev, features: { ...prev.features, items: newItems } }));
                                  }}
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Color Theme</label>
                                <div className="flex gap-2">
                                  {['pink', 'blue', 'orange', 'purple', 'emerald'].map(c => (
                                    <button
                                      key={c}
                                      onClick={() => {
                                        const newItems = [...content.features.items];
                                        newItems[i].color = c;
                                        setContent(prev => ({ ...prev, features: { ...prev.features, items: newItems } }));
                                      }}
                                      className={`w-6 h-6 rounded-full border-2 ${f.color === c ? 'border-slate-900 scale-110' : 'border-transparent hover:scale-105'} transition-all`}
                                      style={{ backgroundColor: c === 'pink' ? '#E31C78' : c === 'blue' ? '#3b82f6' : c === 'orange' ? '#f97316' : c === 'purple' ? '#a855f7' : '#10b981' }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <button 
                              onClick={() => {
                                const newItems = content.features.items.filter((_, idx) => idx !== i);
                                setContent(prev => ({ ...prev, features: { ...prev.features, items: newItems } }));
                              }}
                              className="p-2 text-slate-200 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="space-y-4">
                            <input 
                              className="w-full bg-transparent font-fredoka text-xl text-slate-800 outline-none focus:text-primary transition-colors font-bold"
                              value={f.title}
                              onChange={(e) => {
                                const newItems = [...content.features.items];
                                newItems[i].title = e.target.value;
                                setContent(prev => ({ ...prev, features: { ...prev.features, items: newItems } }));
                              }}
                            />
                            <textarea 
                              className="w-full bg-transparent p-0 text-[13px] text-slate-500 font-medium leading-relaxed outline-none resize-none h-20"
                              value={f.desc}
                              onChange={(e) => {
                                const newItems = [...content.features.items];
                                newItems[i].desc = e.target.value;
                                setContent(prev => ({ ...prev, features: { ...prev.features, items: newItems } }));
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <SectionSaveButton sectionId="features" />
                  </div>
                )}

                {activeSection === 'howItWorks' && (
                  <div className="space-y-12">
                    <div className="flex justify-between items-start border-b border-slate-100 pb-8">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">Process & Workflow</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">Customize the 4-step "How It Works" journey for parents</p>
                      </div>
                    </div>
                    
                    <div className="space-y-12">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {content.howItWorks.tabs.map((tab, i) => (
                            <div key={tab.id} className="p-8 bg-white border border-slate-100 rounded-[32px] hover:border-primary/10 transition-all space-y-8 group">
                               <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-5">
                                     <span className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary/5 transition-colors">{tab.icon}</span>
                                     <h4 className="font-fredoka text-lg text-slate-800 uppercase tracking-wide">Step {content.howItWorks.content[tab.id].step}</h4>
                                  </div>
                               </div>
                               <div className="space-y-6">
                                  <div className="space-y-2">
                                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Headline</label>
                                     <textarea 
                                        className="w-full bg-slate-50/50 border border-slate-100 focus:border-primary/20 rounded-[20px] p-5 text-sm font-bold text-slate-700 outline-none h-28 leading-relaxed"
                                        value={content.howItWorks.content[tab.id].title}
                                        onChange={(e) => {
                                           const newContent = { ...content.howItWorks.content };
                                           newContent[tab.id].title = e.target.value;
                                           setContent(prev => ({ ...prev, howItWorks: { ...prev.howItWorks, content: newContent } }));
                                        }}
                                     />
                                  </div>
                                  <div className="space-y-2">
                                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Detailed Description</label>
                                     <textarea 
                                        className="w-full bg-slate-50/50 border border-slate-100 focus:border-primary/20 rounded-[20px] p-5 text-[12px] font-medium text-slate-500 outline-none h-36 leading-relaxed"
                                        value={content.howItWorks.content[tab.id].desc}
                                        onChange={(e) => {
                                           const newContent = { ...content.howItWorks.content };
                                           newContent[tab.id].desc = e.target.value;
                                           setContent(prev => ({ ...prev, howItWorks: { ...prev.howItWorks, content: newContent } }));
                                        }}
                                     />
                                  </div>
                                  <div className="grid grid-cols-2 gap-6">
                                     <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Section Badge</label>
                                        <input 
                                           className="w-full bg-slate-50/50 border border-slate-100 focus:border-primary/20 rounded-xl p-4 text-[11px] font-bold text-slate-700 outline-none"
                                           value={content.howItWorks.content[tab.id].highlight}
                                           onChange={(e) => {
                                              const newContent = { ...content.howItWorks.content };
                                              newContent[tab.id].highlight = e.target.value;
                                              setContent(prev => ({ ...prev, howItWorks: { ...prev.howItWorks, content: newContent } }));
                                           }}
                                        />
                                     </div>
                                     <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Action Button</label>
                                        <input 
                                           className="w-full bg-slate-50/50 border border-slate-100 focus:border-primary/20 rounded-xl p-4 text-[11px] font-bold text-slate-700 outline-none"
                                           value={content.howItWorks.content[tab.id].cta}
                                           onChange={(e) => {
                                              const newContent = { ...content.howItWorks.content };
                                              newContent[tab.id].cta = e.target.value;
                                              setContent(prev => ({ ...prev, howItWorks: { ...prev.howItWorks, content: newContent } }));
                                           }}
                                        />
                                     </div>
                                  </div>
                               </div>
                            </div>
                          ))}
                       </div>

                       <div className="space-y-6 pt-12 border-t border-slate-100">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-1">Journey Map Illustration</label>
                          <div className="flex flex-col md:flex-row items-center gap-10 p-10 bg-slate-50/50 rounded-[40px] border border-slate-100">
                            <div className="w-56 h-56 bg-white rounded-[32px] shadow-sm overflow-hidden flex-shrink-0 flex items-center justify-center p-4 border border-slate-100">
                              <img src={content.howItWorks.illustration} alt="Illustration" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1 space-y-4 text-center md:text-left">
                              <h5 className="font-fredoka text-xl text-slate-800">Process Visual</h5>
                              <p className="text-[13px] text-slate-400 font-medium leading-relaxed max-w-md">This illustration appears alongside the journey map. Use a clean, educational SVG or transparent PNG.</p>
                              <label className="inline-block bg-slate-900 text-white px-8 py-3 rounded-2xl text-[10px] font-black tracking-widest hover:bg-primary transition-all cursor-pointer shadow-lg shadow-slate-200">
                                UPDATE VISUAL
                                <input 
                                  type="file" 
                                  className="hidden" 
                                  accept="image/*"
                                  onChange={(e) => handleFileUpload('howItWorks', 'illustration', e.target.files[0])}
                                />
                              </label>
                            </div>
                          </div>
                      </div>
                    </div>
                    <SectionSaveButton sectionId="howItWorks" />
                  </div>
                )}

                {activeSection === 'gallery' && (
                  <div className="space-y-10">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-6">
                      <div className="space-y-1 text-left">
                        <h3 className="font-fredoka text-2xl text-slate-800">School Gallery</h3>
                        <p className="text-slate-400 text-sm">Managing the {content.gallery.items?.length || 0} active moments</p>
                      </div>
                      <label className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-[10px] font-black tracking-widest shadow-lg shadow-slate-200 hover:bg-primary transition-all cursor-pointer">
                        <Plus className="w-4 h-4 inline-block mr-2" />
                        UPLOAD NEW PHOTO
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                const newItems = [...(content.gallery.items || [])];
                                newItems.push({ id: Date.now(), label: 'New Moment', img: reader.result });
                                setContent(prev => ({ ...prev, gallery: { ...prev.gallery, items: newItems } }));
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </label>
                    </div>

                    {/* Section Header Content */}
                    <div className="bg-slate-50/50 rounded-[32px] p-8 border border-slate-100 space-y-6">
                      <h4 className="font-fredoka text-lg text-slate-700">Section Cover Content</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Eyebrow</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-xl p-3.5 text-[13px] font-bold text-slate-700 outline-none"
                            value={content.gallery.eyebrow}
                            onChange={(e) => updateNested('gallery', 'eyebrow', e.target.value)}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Main Heading</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-xl p-3.5 text-[13px] font-bold text-slate-700 outline-none"
                            value={content.gallery.title}
                            onChange={(e) => updateNested('gallery', 'title', e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Description</label>
                          <textarea 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-xl p-4 text-[13px] font-medium text-slate-500 outline-none h-20"
                            value={content.gallery.desc}
                            onChange={(e) => updateNested('gallery', 'desc', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                      {(content.gallery.items || (Array.isArray(content.gallery) ? content.gallery : [])).map((img, i) => (
                        <div key={img.id} className="group relative aspect-square rounded-[32px] overflow-hidden border-4 border-white shadow-sm hover:shadow-xl transition-all">
                          <img src={img.img} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-3">
                            <input 
                              className="bg-white/20 border border-white/30 rounded-lg px-2 py-1 text-[10px] text-white font-bold w-3/4 text-center outline-none backdrop-blur-sm"
                              value={img.label}
                              onChange={(e) => {
                                const newItems = [...content.gallery.items];
                                newItems[i].label = e.target.value;
                                setContent(prev => ({ ...prev, gallery: { ...prev.gallery, items: newItems } }));
                              }}
                            />
                            <div className="flex gap-2">
                              <label className="p-2 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform cursor-pointer">
                                <Upload className="w-3.5 h-3.5" />
                                <input 
                                  type="file" 
                                  className="hidden" 
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onloadend = () => {
                                        const newItems = [...content.gallery.items];
                                        newItems[i].img = reader.result;
                                        setContent(prev => ({ ...prev, gallery: { ...prev.gallery, items: newItems } }));
                                      };
                                      reader.readAsDataURL(file);
                                    }
                                  }}
                                />
                              </label>
                              <button 
                                onClick={() => {
                                  const newItems = content.gallery.items.filter(item => item.id !== img.id);
                                  setContent(prev => ({ ...prev, gallery: { ...prev.gallery, items: newItems } }));
                                }}
                                className="p-2 bg-white rounded-full text-red-500 hover:scale-110 transition-transform"
                              >
                                <Trash className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-[10px] text-white font-black tracking-wider uppercase truncate">{img.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <SectionSaveButton sectionId="gallery" />
                  </div>
                )}

                {activeSection === 'footer' && (
                  <div className="space-y-12">
                    <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">Footer & Links</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">Update contact information and school event links</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                      <div className="space-y-8">
                        <div className="flex items-center justify-between pl-1">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">School Events Links</label>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                          {content.footer.schoolEvents.map((event, i) => (
                            <div key={i} className="flex gap-4 group/entry">
                              <input 
                                className="flex-1 bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none transition-all shadow-sm shadow-slate-50"
                                value={event}
                                onChange={(e) => {
                                  const newEvents = [...content.footer.schoolEvents];
                                  newEvents[i] = e.target.value;
                                  setContent(prev => ({ ...prev, footer: { ...prev.footer, schoolEvents: newEvents } }));
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-8">
                         <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Quick Contact</label>
                         <div className="space-y-5">
                           <div className="space-y-1.5">
                             <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                             <input className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none" value={content.footer.contact.email} onChange={e => updateNested('footer', 'contact', { ...content.footer.contact, email: e.target.value })} />
                           </div>
                           <div className="space-y-1.5">
                             <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Phone Number</label>
                             <input className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none" value={content.footer.contact.phone} onChange={e => updateNested('footer', 'contact', { ...content.footer.contact, phone: e.target.value })} />
                           </div>
                           <div className="space-y-1.5">
                             <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Physical Address</label>
                             <textarea className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none h-32 leading-relaxed" value={content.footer.contact.address} onChange={e => updateNested('footer', 'contact', { ...content.footer.contact, address: e.target.value })} />
                           </div>
                          </div>
                       </div>
                    </div>
                    <SectionSaveButton sectionId="footer" />
                  </div>
                )}

                {activeSection === 'testimonials' && (
                  <div className="space-y-12">
                    <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">Parent Reviews</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">Manage review content and the {content.testimonials.items?.length || 0} testimonials</p>
                      </div>
                      <button 
                        onClick={() => {
                          const newItems = [...(content.testimonials.items || [])];
                           newItems.push({ id: Date.now(), name: 'New Parent', role: 'Parent of Child, Grade X', text: 'Enter testimonial content here...', rating: 5, avatar: '👩‍🦳' });
                          setContent(prev => ({ ...prev, testimonials: { ...prev.testimonials, items: newItems } }));
                        }}
                        className="bg-slate-900 text-white px-8 py-3 rounded-full text-[13px] font-bold shadow-lg shadow-slate-200 hover:bg-primary hover:scale-[1.02] transition-all flex items-center gap-2"
                      >
                         <Plus className="w-4 h-4" /> ADD TESTIMONIAL
                      </button>
                    </div>

                    {/* Section Header Content */}
                    <div className="bg-slate-50/50 rounded-[40px] p-10 border border-slate-100 space-y-8">
                      <h4 className="font-fredoka text-xl text-slate-700 mb-6">Section Cover Content</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Eyebrow (Small Title)</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none"
                            value={content.testimonials.eyebrow}
                            onChange={(e) => updateNested('testimonials', 'eyebrow', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Main Heading</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none"
                            value={content.testimonials.title}
                            onChange={(e) => updateNested('testimonials', 'title', e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Introductory Description</label>
                          <textarea 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-5 text-[13px] font-medium text-slate-500 outline-none h-24 leading-relaxed"
                            value={content.testimonials.desc}
                            onChange={(e) => updateNested('testimonials', 'desc', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Overall Rating (e.g. 4.9)</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none"
                            value={content.testimonials.rating}
                            onChange={(e) => updateNested('testimonials', 'rating', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Rating Description</label>
                          <input 
                            className="w-full bg-white border border-slate-100 focus:border-primary/20 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none"
                            value={content.testimonials.ratingDesc}
                            onChange={(e) => updateNested('testimonials', 'ratingDesc', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {(content.testimonials.items || (Array.isArray(content.testimonials) ? content.testimonials : [])).map((t, i) => (
                         <div key={t.id} className="p-8 bg-white border border-slate-100 rounded-[40px] hover:border-primary/10 transition-all space-y-8 group relative shadow-sm shadow-slate-50">
                            <button 
                               onClick={() => {
                                  const newItems = content.testimonials.items.filter(item => item.id !== t.id);
                                  setContent(prev => ({ ...prev, testimonials: { ...prev.testimonials, items: newItems } }));
                               }}
                               className="absolute top-8 right-8 p-2 text-slate-200 hover:text-red-500 transition-colors"
                            >
                               <Trash2 className="w-5 h-5" />
                            </button>
                            <div className="flex justify-center md:justify-start">
                               <div className="relative group/avatar">
                                  <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl overflow-hidden border border-slate-100 group-hover/avatar:bg-primary/5 transition-colors">
                                     {t.avatar?.length > 2 ? <img src={t.avatar} className="w-full h-full object-cover" /> : t.avatar}
                                  </div>
                                  <label className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center rounded-3xl cursor-pointer transition-opacity backdrop-blur-[2px]">
                                     <Upload className="w-6 h-6 text-white" />
                                     <input 
                                        type="file" 
                                        className="hidden" 
                                        accept="image/*"
                                        onChange={(e) => {
                                          const file = e.target.files[0];
                                          if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                              const newItems = [...content.testimonials.items];
                                              newItems[i].avatar = reader.result;
                                              setContent(prev => ({ ...prev, testimonials: { ...prev.testimonials, items: newItems } }));
                                            };
                                            reader.readAsDataURL(file);
                                          }
                                        }}
                                     />
                                  </label>
                               </div>
                            </div>
                            <div className="space-y-6">
                               <div className="flex gap-1 justify-center md:justify-start">
                                  {[1,2,3,4,5].map(star => (
                                     <Star 
                                      key={star} 
                                      onClick={() => {
                                        const newItems = [...content.testimonials.items];
                                        newItems[i].rating = star;
                                        setContent(prev => ({ ...prev, testimonials: { ...prev.testimonials, items: newItems } }));
                                      }}
                                      className={`w-4 h-4 cursor-pointer transition-all hover:scale-125 ${star <= t.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                                     />
                                  ))}
                                </div>
                                <div className="space-y-5">
                                 <div className="space-y-1.5">
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Parent Identity</label>
                                    <input 
                                       className="w-full bg-transparent font-fredoka text-lg text-slate-800 outline-none focus:text-primary transition-colors font-bold"
                                       value={t.name}
                                       onChange={(e) => {
                                          const newItems = [...content.testimonials.items];
                                          newItems[i].name = e.target.value;
                                          setContent(prev => ({ ...prev, testimonials: { ...prev.testimonials, items: newItems } }));
                                       }}
                                    />
                                 </div>
                                 <div className="space-y-1.5">
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Role</label>
                                    <input 
                                       className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-2 text-[10px] text-primary font-black uppercase tracking-widest outline-none shadow-sm shadow-slate-50"
                                       value={t.role || t.child || ''}
                                       onChange={(e) => {
                                          const newItems = [...content.testimonials.items];
                                          newItems[i].role = e.target.value;
                                          newItems[i].child = e.target.value; // Sync with legacy field
                                          setContent(prev => ({ ...prev, testimonials: { ...prev.testimonials, items: newItems } }));
                                       }}
                                    />
                                 </div>
                                 <div className="space-y-1.5">
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Testimonial Text</label>
                                    <textarea 
                                       className="w-full bg-transparent p-0 text-[13px] text-slate-500 font-medium leading-relaxed outline-none resize-none h-32"
                                       value={t.text || t.message || ''}
                                       onChange={(e) => {
                                          const newItems = [...content.testimonials.items];
                                          newItems[i].text = e.target.value;
                                          newItems[i].message = e.target.value; // Sync with legacy field
                                          setContent(prev => ({ ...prev, testimonials: { ...prev.testimonials, items: newItems } }));
                                       }}
                                    />
                                 </div>
                                </div>
                             </div>
                         </div>
                        ))}
                    </div>
                    <SectionSaveButton sectionId="testimonials" />
                  </div>
                )}

                {activeSection === 'admission' && (
                  <div className="space-y-12">
                    <div className="flex justify-between items-start border-b border-slate-100 pb-8">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">Admissions Management</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">Manage the inquiry flow and process steps</p>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Enrollment Pipeline</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.admission.steps.map((step, i) => (
                          <div key={i} className="p-6 bg-white border border-slate-100 rounded-[32px] hover:border-primary/10 transition-all space-y-5 group">
                            <div className="flex items-center justify-between">
                              <input
                                className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl text-center outline-none group-hover:bg-primary/5 transition-colors"
                                value={step.icon}
                                onChange={(e) => {
                                  const newSteps = [...content.admission.steps];
                                  newSteps[i].icon = e.target.value;
                                  setContent(prev => ({ ...prev, admission: { ...prev.admission, steps: newSteps } }));
                                }}
                              />
                              <span className="text-[9px] font-black text-primary px-3 py-1 bg-pink-50 rounded-full tracking-widest uppercase">Step {step.step}</span>
                            </div>
                            <input
                              className="w-full bg-transparent font-fredoka text-base text-slate-700 outline-none focus:text-primary transition-colors font-bold"
                              value={step.title}
                              onChange={(e) => {
                                const newSteps = [...content.admission.steps];
                                newSteps[i].title = e.target.value;
                                setContent(prev => ({ ...prev, admission: { ...prev.admission, steps: newSteps } }));
                              }}
                            />
                            <textarea
                              className="w-full bg-transparent p-0 text-[11px] text-slate-400 outline-none resize-none h-20 font-medium leading-relaxed"
                              value={step.desc}
                              onChange={(e) => {
                                const newSteps = [...content.admission.steps];
                                newSteps[i].desc = e.target.value;
                                setContent(prev => ({ ...prev, admission: { ...prev.admission, steps: newSteps } }));
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10 border-t border-slate-100">
                      <div className="space-y-6">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Target Programs</label>
                        <div className="bg-slate-50/30 p-6 rounded-[32px] border border-slate-100 space-y-4">
                          {content.admission.grades.map((grade, i) => (
                            <div key={i} className="flex gap-2 group/grade">
                              <input
                                className="flex-1 bg-white border border-slate-100 rounded-xl p-4 text-[13px] font-bold text-slate-700 outline-none focus:border-primary/20 transition-all"
                                value={grade}
                                onChange={(e) => {
                                  const newGrades = [...content.admission.grades];
                                  newGrades[i] = e.target.value;
                                  setContent(prev => ({ ...prev, admission: { ...prev.admission, grades: newGrades } }));
                                }}
                              />
                              <button
                                onClick={() => {
                                  const newGrades = content.admission.grades.filter((_, idx) => idx !== i);
                                  setContent(prev => ({ ...prev, admission: { ...prev.admission, grades: newGrades } }));
                                }}
                                className="p-2 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover/grade:opacity-100"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              setContent(prev => ({ ...prev, admission: { ...prev.admission, grades: [...prev.admission.grades, 'New Grade'] } }));
                            }}
                            className="w-full py-4 border border-dashed border-slate-200 rounded-2xl text-[10px] text-slate-400 font-black uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all flex items-center justify-center gap-2"
                          >
                            <Plus className="w-3 h-3" /> Add Program
                          </button>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Hero Asset</label>
                        <div className="flex flex-col items-center gap-6 p-6 bg-slate-50/50 rounded-[40px] border border-slate-100">
                          <div className="w-full aspect-square bg-white rounded-[32px] shadow-sm overflow-hidden flex items-center justify-center p-4 border border-slate-100">
                            <img src={content.admission.image} alt="Admission" className="w-full h-full object-contain" />
                          </div>
                          <div className="w-full text-center space-y-3 px-4">
                            <label className="block w-full bg-slate-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors cursor-pointer shadow-lg shadow-slate-200">
                              Update Image
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleFileUpload('admission', 'image', e.target.files[0])}
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Direct Outreach</label>
                        <div className="grid gap-3">
                          {content.admission.info.map((info, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-2xl group hover:border-primary/10 transition-colors">
                              <input
                                className="w-10 h-10 bg-slate-50 rounded-xl text-center text-xl outline-none group-hover:bg-primary/5 transition-colors"
                                value={info.icon}
                                onChange={(e) => {
                                  const newInfo = [...content.admission.info];
                                  newInfo[i].icon = e.target.value;
                                  setContent(prev => ({ ...prev, admission: { ...prev.admission, info: newInfo } }));
                                }}
                              />
                              <div className="flex-1">
                                <input
                                  className="w-full bg-transparent font-bold text-slate-700 text-[13px] outline-none focus:text-primary transition-colors h-10"
                                  value={info.text}
                                  onChange={(e) => {
                                    const newInfo = [...content.admission.info];
                                    newInfo[i].text = e.target.value;
                                    setContent(prev => ({ ...prev, admission: { ...prev.admission, info: newInfo } }));
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <SectionSaveButton sectionId="admission" />
                  </div>
                )}
                
                {activeSection === 'enquiry' && (
                  <div className="space-y-12">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-100 pb-8 gap-6">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">Leads & Enquiries</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">View and manage admission inquiries received from the website</p>
                      </div>
                      <div className="flex gap-3 w-full sm:w-auto">
                        <button 
                          onClick={handleExportCSV}
                          className="flex-1 sm:flex-none justify-center bg-white border border-slate-200 text-slate-600 px-6 py-2.5 rounded-full text-xs font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
                        >
                          <Download className="w-4 h-4" /> EXPORT CSV
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                      <div className="xl:col-span-2 space-y-8">
                        <div className="flex items-baseline justify-between">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block">Inbound Channels ({content.enquiry?.submissions?.length || 0})</label>
                          <span className="text-[10px] font-bold text-primary px-3 py-1 bg-pink-50 rounded-full tracking-widest uppercase">Filter: All Time</span>
                        </div>
                        <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 scrollbar-hide">
                          {content.enquiry?.submissions?.map((sub, i) => (
                            <div key={sub.id} className="p-8 bg-white border border-slate-100 rounded-[32px] hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 space-y-8 group">
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                <div className="flex items-center gap-5">
                                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-fredoka font-bold text-slate-400 text-lg group-hover:bg-primary/5 group-hover:text-primary transition-colors shrink-0">
                                    {i + 1}
                                  </div>
                                  <div>
                                    <h4 className="font-fredoka text-xl text-slate-800 group-hover:text-primary transition-colors">{sub.name}</h4>
                                    <div className="flex flex-wrap items-center gap-3 mt-1">
                                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest whitespace-nowrap">{sub.date}</span>
                                      <span className="hidden sm:inline w-1 h-1 bg-slate-300 rounded-full" />
                                      <span className="text-[10px] text-primary font-black uppercase tracking-widest whitespace-nowrap">{sub.program}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
                                  <select
                                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] outline-none border border-transparent transition-all ${
                                      sub.status === 'New' ? 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100' :
                                      sub.status === 'In Progress' ? 'bg-yellow-50 text-yellow-700 border-yellow-100 hover:bg-yellow-100' :
                                      'bg-green-50 text-green-600 border-green-100 hover:bg-green-100'
                                    }`}
                                    value={sub.status}
                                    onChange={(e) => {
                                      const newS = [...content.enquiry.submissions];
                                      newS[i].status = e.target.value;
                                      setContent(prev => ({ ...prev, enquiry: { ...prev.enquiry, submissions: newS } }));
                                    }}
                                  >
                                    <option value="New">New Lead</option>
                                    <option value="In Progress">Contacted</option>
                                    <option value="Enrolled">Enrolled</option>
                                  </select>
                                  <button 
                                    onClick={() => {
                                      if (confirm('Are you sure you want to delete this enquiry?')) {
                                        const newS = content.enquiry.submissions.filter(item => item.id !== sub.id);
                                        setContent(prev => ({ ...prev, enquiry: { ...prev.enquiry, submissions: newS } }));
                                      }
                                    }}
                                    className="p-2 text-slate-200 hover:text-red-500 transition-colors"
                                  >
                                    <Trash2 className="w-5 h-5" />
                                  </button>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center justify-between bg-zinc-50/50 border border-slate-100 rounded-2xl p-4 transition-colors">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm">📞</div>
                                    <span className="font-fredoka font-bold text-slate-700">{sub.phone}</span>
                                  </div>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(sub.phone);
                                      alert('Number copied: ' + sub.phone);
                                    }}
                                    className="px-4 py-2 bg-white text-[10px] font-black text-slate-600 rounded-xl shadow-sm hover:text-primary transition-all border border-transparent active:border-primary/20"
                                  >
                                    COPY
                                  </button>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center gap-3 bg-zinc-50/50 border border-slate-100 rounded-2xl p-4 transition-colors truncate overflow-hidden">
                                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm flex-shrink-0">📧</div>
                                  <span className="font-bold text-[11px] text-slate-500 truncate">{sub.email}</span>
                                </div>
                              </div>

                              <div className="p-6 bg-slate-50/30 rounded-[24px] border border-slate-50 relative">
                                <div className="absolute -top-3 left-6 bg-white px-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-50 rounded-full">Message Details</div>
                                <div className="space-y-4">
                                  <div>
                                    <h5 className="text-[13px] font-black text-slate-800 leading-tight mb-2 underline decoration-primary/10 underline-offset-4">{sub.subject}</h5>
                                    <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                                      <span className="text-primary/30 text-2xl font-serif mr-1 leading-none">“</span>
                                      {sub.message}
                                      <span className="text-primary/30 text-2xl font-serif ml-1 leading-none">”</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-3">
                                <div className="flex items-center gap-2 pl-1 mb-1">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block">Follow-up Timeline</label>
                                </div>
                                <textarea
                                  className="w-full bg-white border border-slate-100 rounded-[24px] p-5 text-[13px] text-slate-600 outline-none focus:border-primary/30 focus:shadow-lg focus:shadow-primary/5 transition-all resize-none h-32 font-medium"
                                  value={sub.remarks || ''}
                                  onChange={(e) => {
                                    const newS = [...content.enquiry.submissions];
                                    newS[i].remarks = e.target.value;
                                    setContent(prev => ({ ...prev, enquiry: { ...prev.enquiry, submissions: newS } }));
                                  }}
                                  placeholder="Add notes about the discussion or next steps..."
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-12">
                        <div className="space-y-6">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Configuration</label>
                          <div className="space-y-4">
                            {content.enquiry.contactInfo.map((info, i) => (
                              <div key={i} className="p-6 bg-slate-50/30 border border-slate-100 rounded-3xl space-y-3 group hover:border-primary/10 transition-colors">
                                <div className="flex items-center gap-4">
                                  <span className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-xl">{info.icon}</span>
                                  <div className="flex-1">
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">{info.label}</label>
                                    <input
                                      className="w-full bg-transparent font-bold text-slate-700 text-[13px] outline-none focus:text-primary transition-colors"
                                      value={info.value}
                                      onChange={(e) => {
                                        const newC = [...content.enquiry.contactInfo];
                                        newC[i].value = e.target.value;
                                        setContent(prev => ({ ...prev, enquiry: { ...prev.enquiry, contactInfo: newC } }));
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-6">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Social Footprint</label>
                          <div className="space-y-3">
                            {content.enquiry.socials.map((s, i) => (
                              <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-[24px] border border-slate-100 group hover:border-primary/10 transition-all">
                                <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-105 transition-transform`}>{s.icon}</div>
                                <div className="flex-1">
                                  <input
                                    className="w-full bg-transparent font-bold text-slate-600 text-[11px] outline-none focus:text-primary transition-colors"
                                    value={s.link}
                                    onChange={(e) => {
                                      const newSocials = [...content.enquiry.socials];
                                      newSocials[i].link = e.target.value;
                                      setContent(prev => ({ ...prev, enquiry: { ...prev.enquiry, socials: newSocials } }));
                                    }}
                                    placeholder={`${s.label} Link`}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-8 border-t border-slate-100">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-6 pl-1">Section Visual</label>
                          <div className="relative group/visual">
                            <div className="relative bg-white border border-slate-100 rounded-[32px] p-6 shadow-sm">
                              <div className="w-full aspect-square bg-slate-50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center border border-slate-50">
                                <img src={content.enquiry.image} alt="Enquiry" className="w-full h-full object-contain p-2" />
                              </div>
                              <label className="block w-full text-center bg-slate-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors cursor-pointer shadow-lg shadow-slate-200">
                                Replace Illustration
                                <input
                                  type="file"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={(e) => handleFileUpload('enquiry', 'image', e.target.files[0])}
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SectionSaveButton sectionId="enquiry" />
                  </div>
                )}

                {activeSection === 'homePopup' && (
                  <div className="space-y-12">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-100 pb-8 gap-6">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">Home Screen Pop-up</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">Manage the promotional notification shown to visitors on arrival</p>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 ${content.homePopup.enabled ? 'text-green-500' : 'text-slate-400'}`}>
                          {content.homePopup.enabled ? 'Active' : 'Disabled'}
                        </span>
                        <button 
                          onClick={() => updateNested('homePopup', 'enabled', !content.homePopup.enabled)}
                          className={`w-12 h-6 rounded-full transition-all relative ${content.homePopup.enabled ? 'bg-indigo-500' : 'bg-slate-200'}`}
                        >
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${content.homePopup.enabled ? 'left-7' : 'left-1'}`} />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div className="space-y-6">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Popup Content</label>
                          <div className="space-y-4">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Headline</label>
                              <input 
                                className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500/20 transition-all shadow-sm"
                                value={content.homePopup.title}
                                onChange={(e) => updateNested('homePopup', 'title', e.target.value)}
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Description Message</label>
                              <textarea 
                                className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500/20 transition-all shadow-sm h-24"
                                value={content.homePopup.desc}
                                onChange={(e) => updateNested('homePopup', 'desc', e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Call to Action (Button)</label>
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1.5">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Button Text</label>
                                <input 
                                  className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-[12px] font-bold text-slate-700 outline-none"
                                  value={content.homePopup.ctaText}
                                  onChange={(e) => updateNested('homePopup', 'ctaText', e.target.value)}
                                />
                              </div>
                              <div className="space-y-1.5 flex-1">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Destination URL / Page Tag</label>
                                <div className="space-y-3">
                                  <input 
                                    className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-[12px] font-bold text-slate-700 outline-none focus:border-indigo-500/20 shadow-sm"
                                    value={content.homePopup.ctaLink}
                                    onChange={(e) => updateNested('homePopup', 'ctaLink', e.target.value)}
                                    placeholder="/path or #tag"
                                  />
                                  <div className="flex flex-wrap gap-2">
                                    {[
                                      { label: 'Home', val: '/' },
                                      { label: 'Summer Camp', val: '/summer-camp' },
                                      { label: 'Programs', val: '/#programs' },
                                      { label: 'Admission', val: '/#admission' },
                                      { label: 'Enquiry', val: '/#enquiry' },
                                    ].map(tag => (
                                      <button 
                                        key={tag.val}
                                        onClick={() => updateNested('homePopup', 'ctaLink', tag.val)}
                                        className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${content.homePopup.ctaLink === tag.val ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                                      >
                                        {tag.label}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Theme Palette</label>
                              <div className="flex gap-4">
                                {[
                                  { n: 'indigo', c: 'bg-indigo-600' },
                                  { n: 'yellow', c: 'bg-yellow-400' },
                                  { n: 'pink', c: 'bg-[#E31C78]' },
                                  { n: 'orange', c: 'bg-orange-500' }
                                ].map(color => (
                                  <button
                                    key={color.n}
                                    onClick={() => updateNested('homePopup', 'ctaColor', color.n)}
                                    className={`w-10 h-10 rounded-xl transition-all border-2 ${content.homePopup.ctaColor === color.n ? 'border-indigo-600 scale-110 shadow-lg' : 'border-transparent hover:scale-105'} ${color.c}`}
                                    aria-label={`Select ${color.n} color`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Visual Media</label>
                        <div className="bg-white border border-slate-100 rounded-[40px] p-8 shadow-sm space-y-6">
                          <div className="aspect-[4/3] bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 relative group">
                            <img src={content.homePopup.image} alt="Popup Preview" className="w-full h-full object-cover" />
                            <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-white font-black text-xs uppercase tracking-widest">
                              Change Image
                              <input 
                                type="file" className="hidden" accept="image/*"
                                onChange={(e) => handleFileUpload('homePopup', 'image', e.target.files[0])}
                              />
                            </label>
                          </div>
                          <p className="text-[10px] text-slate-400 text-center font-medium">Recommended size: 800x600px or similar ratio</p>
                        </div>
                      </div>
                    </div>

                    <SectionSaveButton sectionId="homePopup" />
                  </div>
                )}

                {activeSection === 'summerCamp' && (
                  <div className="space-y-12">
                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-100 pb-8 gap-6">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">Summer Camp 2026</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">Customize your seasonal programs, activities, and benefits</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-2 pl-1">
                        <Star className="w-5 h-5 text-indigo-500" />
                        <label className="text-[11px] font-black text-slate-800 uppercase tracking-widest">SEO Meta Data (Organic Leads)</label>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-indigo-50/30 p-8 rounded-[40px] border border-indigo-100/50 shadow-sm">
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Meta Title</label>
                           <input 
                             className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none focus:border-indigo-500/20 shadow-sm"
                             value={content.summerCamp.seo?.metaTitle || ''}
                             onChange={(e) => updateNested('summerCamp', 'seo.metaTitle', e.target.value)}
                           />
                        </div>
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Meta Description</label>
                           <textarea 
                             className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none focus:border-indigo-500/20 shadow-sm h-14"
                             value={content.summerCamp.seo?.metaDesc || ''}
                             onChange={(e) => updateNested('summerCamp', 'seo.metaDesc', e.target.value)}
                           />
                        </div>
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Keywords (comma separated)</label>
                           <input 
                             className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none focus:border-indigo-500/20 shadow-sm"
                             value={content.summerCamp.seo?.keywords || ''}
                             onChange={(e) => updateNested('summerCamp', 'seo.keywords', e.target.value)}
                           />
                        </div>
                      </div>
                    </div>

                    {/* Hero Section */}
                    <div className="space-y-6">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Camp Hero Details</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 p-8 rounded-[40px] border border-slate-100">
                        <div className="space-y-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block pl-1">Main Heading</label>
                          <input 
                            className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-slate-700 outline-none focus:border-primary/20 transition-all shadow-sm"
                            value={content.summerCamp.hero.title}
                            onChange={(e) => {
                               const newHero = { ...content.summerCamp.hero, title: e.target.value };
                               updateNested('summerCamp', 'hero', newHero);
                            }}
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block pl-1">Eyebrow Text</label>
                          <input 
                            className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-slate-700 outline-none focus:border-primary/20 transition-all shadow-sm"
                            value={content.summerCamp.hero.eyebrow}
                            onChange={(e) => {
                               const newHero = { ...content.summerCamp.hero, eyebrow: e.target.value };
                               updateNested('summerCamp', 'hero', newHero);
                            }}
                          />
                        </div>
                        <div className="space-y-4 md:col-span-2">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block pl-1">Hero Description</label>
                          <textarea 
                            className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-slate-700 outline-none focus:border-primary/20 transition-all shadow-sm h-24"
                            value={content.summerCamp.hero.desc}
                            onChange={(e) => {
                               const newHero = { ...content.summerCamp.hero, desc: e.target.value };
                               updateNested('summerCamp', 'hero', newHero);
                            }}
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block pl-1">Camp Date</label>
                          <input 
                            className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-slate-700 outline-none focus:border-primary/20 transition-all shadow-sm"
                            value={content.summerCamp.hero.date}
                            onChange={(e) => {
                               const newHero = { ...content.summerCamp.hero, date: e.target.value };
                               updateNested('summerCamp', 'hero', newHero);
                            }}
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block pl-1">Age Group</label>
                          <input 
                            className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-slate-700 outline-none focus:border-primary/20 transition-all shadow-sm"
                            value={content.summerCamp.hero.age}
                            onChange={(e) => {
                               const newHero = { ...content.summerCamp.hero, age: e.target.value };
                               updateNested('summerCamp', 'hero', newHero);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Activities List */}
                    <div className="space-y-8">
                       <div className="flex justify-between items-baseline">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Camp Activities ({content.summerCamp.activities.length})</label>
                        <button 
                          onClick={() => {
                            const newAct = [...content.summerCamp.activities, { image: '/summer_camp_arts.png', title: 'New Activity', desc: 'Description' }];
                            updateNested('summerCamp', 'activities', newAct);
                          }}
                          className="text-primary font-black text-[10px] uppercase tracking-widest hover:underline"
                        >
                          + Add Activity
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {content.summerCamp.activities.map((act, i) => (
                          <div key={i} className="p-6 bg-white border border-slate-100 rounded-[32px] hover:border-primary/20 transition-all space-y-6 group">
                            <div className="flex gap-6">
                              <div className="w-24 h-24 bg-slate-50 rounded-2xl overflow-hidden shadow-sm relative shrink-0">
                                <img src={act.image} alt="Activity" className="w-full h-full object-cover" />
                                <label className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-[9px] font-black uppercase">
                                  Replace
                                  <input 
                                    type="file" className="hidden" accept="image/*"
                                    onChange={(e) => handleFileUpload('summerCamp', 'image', e.target.files[0], i)}
                                  />
                                </label>
                              </div>
                              <div className="flex-1 space-y-3">
                                <div className="flex justify-between items-center">
                                  <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Activity Name</label>
                                  <button 
                                    onClick={() => {
                                      const newAct = content.summerCamp.activities.filter((_, idx) => idx !== i);
                                      updateNested('summerCamp', 'activities', newAct);
                                    }}
                                    className="p-1 text-slate-200 hover:text-red-500 transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                                <input 
                                  className="w-full bg-transparent font-fredoka text-base text-slate-800 outline-none focus:text-primary transition-all font-bold"
                                  value={act.title}
                                  onChange={(e) => {
                                    const newAct = [...content.summerCamp.activities];
                                    newAct[i].title = e.target.value;
                                    updateNested('summerCamp', 'activities', newAct);
                                  }}
                                />
                              </div>
                            </div>
                            <textarea 
                              className="w-full bg-slate-50 border-none rounded-2xl p-4 text-[12px] text-slate-500 font-medium leading-relaxed outline-none h-20"
                              value={act.desc}
                              onChange={(e) => {
                                const newAct = [...content.summerCamp.activities];
                                newAct[i].desc = e.target.value;
                                updateNested('summerCamp', 'activities', newAct);
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Why Join Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-100">
                      <div className="space-y-6">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Benefits List</label>
                        <div className="space-y-4">
                          <input 
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 font-fredoka text-lg text-slate-800 outline-none focus:bg-white transition-all shadow-sm"
                            placeholder="Why Join Title..."
                            value={content.summerCamp.benefits.title}
                            onChange={(e) => {
                              const newB = { ...content.summerCamp.benefits, title: e.target.value };
                              updateNested('summerCamp', 'benefits', newB);
                            }}
                          />
                          <div className="bg-white border border-slate-100 p-6 rounded-[32px] space-y-3 shadow-sm">
                            {content.summerCamp.benefits.items.map((item, i) => (
                              <div key={i} className="flex gap-2 group/item">
                                <input 
                                  className="flex-1 bg-slate-50 border border-slate-50 rounded-xl px-4 py-3 text-[13px] font-bold text-slate-600 outline-none focus:bg-white focus:border-primary/20 transition-all"
                                  value={item}
                                  onChange={(e) => {
                                    const newItems = [...content.summerCamp.benefits.items];
                                    newItems[i] = e.target.value;
                                    const newB = { ...content.summerCamp.benefits, items: newItems };
                                    updateNested('summerCamp', 'benefits', newB);
                                  }}
                                />
                                <button 
                                  onClick={() => {
                                    const newItems = content.summerCamp.benefits.items.filter((_, idx) => idx !== i);
                                    const newB = { ...content.summerCamp.benefits, items: newItems };
                                    updateNested('summerCamp', 'benefits', newB);
                                  }}
                                  className="p-2 text-slate-200 hover:text-red-500 transition-colors opacity-0 group-hover/item:opacity-100"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                            <button 
                              onClick={() => {
                                const newItems = [...content.summerCamp.benefits.items, 'New Benefit'];
                                const newB = { ...content.summerCamp.benefits, items: newItems };
                                updateNested('summerCamp', 'benefits', newB);
                              }}
                              className="w-full py-3 border border-dashed border-slate-200 rounded-xl text-[9px] text-slate-400 font-black uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all flex items-center justify-center gap-2"
                            >
                              <Plus className="w-3 h-3" /> Add Benefit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <SectionSaveButton sectionId="summerCamp" />
                  </div>
                )}
                
                {activeSection === 'settings' && (
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 pl-1 mb-6">
                        <Star className="w-5 h-5 text-indigo-500" />
                        <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-widest pl-1">Global SEO Meta (Main Site)</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-50 p-8 rounded-[40px] border border-slate-100 mb-12">
                         <div className="space-y-1.5">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Default Meta Title</label>
                            <input 
                              className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none focus:border-indigo-500/20 shadow-sm"
                              value={content.settings.seo?.metaTitle || ''}
                              onChange={(e) => updateNested('settings', 'seo.metaTitle', e.target.value)}
                            />
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Default Meta Description</label>
                            <textarea 
                              className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none focus:border-indigo-500/20 shadow-sm h-14"
                              value={content.settings.seo?.metaDesc || ''}
                              onChange={(e) => updateNested('settings', 'seo.metaDesc', e.target.value)}
                            />
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Global Keywords</label>
                            <input 
                              className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-[13px] font-bold text-slate-700 outline-none focus:border-indigo-500/20 shadow-sm"
                              value={content.settings.seo?.keywords || ''}
                              onChange={(e) => updateNested('settings', 'seo.keywords', e.target.value)}
                            />
                         </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-start border-b border-slate-100 pb-8">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">Site Settings</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">Manage global website configuration and assets</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div className="space-y-6">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Website Identity</label>
                           <div className="space-y-4 p-8 bg-slate-50/50 rounded-[32px] border border-slate-100">
                             <div className="space-y-1.5">
                               <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Site Title</label>
                               <input 
                                 className="w-full bg-white border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-primary/20 transition-all shadow-sm shadow-slate-50"
                                 value={content.settings?.siteName}
                                 onChange={(e) => updateNested('settings', 'siteName', e.target.value)}
                               />
                             </div>
                           </div>
                        </div>

                        <div className="space-y-6">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Favicon Management</label>
                           <div className="flex flex-col items-center gap-8 p-10 bg-slate-50/50 rounded-[40px] border border-slate-100">
                             <div className="w-24 h-24 bg-white rounded-3xl shadow-sm overflow-hidden flex items-center justify-center p-4 border border-slate-100 relative group">
                               {content.settings?.favicon ? (
                                 <img src={content.settings.favicon} alt="Favicon" className="w-full h-full object-contain" />
                               ) : (
                                 <div className="text-3xl">🌟</div>
                               )}
                             </div>
                             <div className="w-full space-y-4">
                               <label className="block w-full bg-slate-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors cursor-pointer shadow-lg shadow-slate-200 text-center">
                                 Upload New Favicon
                                 <input
                                   type="file"
                                   className="hidden"
                                   accept="image/*"
                                   onChange={(e) => handleFileUpload('settings', 'favicon', e.target.files[0])}
                                 />
                               </label>
                               <p className="text-[10px] text-slate-400 text-center font-medium px-4 leading-relaxed">Recommended size: 32x32px or 64x64px. Format: .ico, .png, or .svg</p>
                             </div>
                           </div>
                        </div>

                        <div className="space-y-6">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block pl-1">Navbar Logo</label>
                           <div className="flex flex-col items-center gap-8 p-10 bg-slate-50/50 rounded-[40px] border border-slate-100">
                             <div className="w-full h-32 bg-white rounded-[32px] shadow-sm overflow-hidden flex items-center justify-center p-6 border border-slate-100 relative group">
                               {content.settings?.logo ? (
                                 <img src={content.settings.logo} alt="Logo" className="w-full h-full object-contain" />
                               ) : (
                                 <div className="text-4xl font-fredoka text-slate-200 uppercase tracking-tighter italic">No Logo</div>
                               )}
                             </div>
                             <div className="w-full space-y-4">
                               <label className="block w-full bg-slate-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors cursor-pointer shadow-lg shadow-slate-200 text-center">
                                 Upload Navbar Logo
                                 <input
                                   type="file"
                                   className="hidden"
                                   accept="image/*"
                                   onChange={(e) => handleFileUpload('settings', 'logo', e.target.files[0])}
                                 />
                               </label>
                               <p className="text-[10px] text-slate-400 text-center font-medium px-4 leading-relaxed">Transparent PNG or SVG recommended. Will appear at the top left of your website.</p>
                             </div>
                           </div>
                        </div>
                      </div>

                      <div className="space-y-8 bg-white border border-slate-100 rounded-[40px] p-10 shadow-sm shadow-slate-50">
                        <div className="space-y-4">
                           <h4 className="font-fredoka text-xl text-slate-800">Preview</h4>
                           <p className="text-slate-400 text-xs">How your site identifies in the browser tab</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                           <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm w-fit max-w-full">
                             <div className="w-5 h-5 flex-shrink-0">
                               <img src={content.settings?.favicon || '/favicon.ico'} className="w-full h-full object-contain" alt="" />
                             </div>
                             <span className="text-xs font-medium text-slate-600 truncate">{content.settings?.siteName || 'Chithode Play School'}</span>
                             <div className="w-3 h-3 text-slate-300 ml-4 rotate-45 border-t border-r border-slate-400"></div>
                           </div>
                        </div>
                      </div>
                    </div>
                    <SectionSaveButton sectionId="settings" />
                  </div>
                )}

                {activeSection === 'musicPlayer' && (
                  <div className="space-y-12">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-100 pb-8 gap-6">
                      <div className="space-y-1.5 text-left">
                        <h3 className="font-fredoka text-3xl text-slate-800 tracking-tight">Background Music</h3>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">Control the website's audio experience and player visibility</p>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 ${content.musicPlayer.enabled ? 'text-green-500' : 'text-slate-400'}`}>
                          {content.musicPlayer.enabled ? 'Enabled' : 'Disabled'}
                        </span>
                        <button 
                          onClick={() => updateNested('musicPlayer', 'enabled', !content.musicPlayer.enabled)}
                          className={`w-12 h-6 rounded-full transition-all relative ${content.musicPlayer.enabled ? 'bg-fuchsia-500' : 'bg-slate-200'}`}
                        >
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${content.musicPlayer.enabled ? 'left-7' : 'left-1'}`} />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div className="bg-slate-50/50 p-8 rounded-[40px] border border-slate-100 space-y-8">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <h4 className="text-sm font-bold text-slate-700">Autoplay Music</h4>
                              <p className="text-[11px] text-slate-400 font-medium">Attempt to play music automatically on site load (browsers may restrict)</p>
                            </div>
                            <button 
                              onClick={() => updateNested('musicPlayer', 'autoplay', !content.musicPlayer.autoplay)}
                              className={`w-10 h-5 rounded-full transition-all relative shrink-0 ${content.musicPlayer.autoplay ? 'bg-fuchsia-500' : 'bg-slate-200'}`}
                            >
                              <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${content.musicPlayer.autoplay ? 'left-5.5' : 'left-0.5'}`} />
                            </button>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Audio File URL (m4a, mp3, etc.)</label>
                            <div className="flex gap-2">
                              <input 
                                className="flex-1 bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-slate-700 outline-none focus:border-fuchsia-500/20 transition-all shadow-sm"
                                value={content.musicPlayer.audioUrl}
                                onChange={(e) => updateNested('musicPlayer', 'audioUrl', e.target.value)}
                                placeholder="/path/to/music.mp3"
                              />
                               <label className="bg-slate-900 text-white px-6 py-4 rounded-2xl text-[10px] font-black tracking-widest shadow-lg shadow-slate-200 hover:bg-fuchsia-500 transition-all cursor-pointer flex items-center gap-2">
                                <Upload className="w-4 h-4" />
                                UPLOAD
                                <input 
                                  type="file" className="hidden" accept="audio/*"
                                  onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                      // Note: Standard handling for local preview, but usually this needs backend upload
                                      const reader = new FileReader();
                                      reader.onloadend = () => updateNested('musicPlayer', 'audioUrl', reader.result);
                                      reader.readAsDataURL(file);
                                    }
                                  }}
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center p-12 bg-fuchsia-50/30 rounded-[40px] border border-fuchsia-100/50">
                        <div className={`w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center relative border-4 border-white ${content.musicPlayer.enabled ? 'animate-[spin_8s_linear_infinite]' : ''}`}>
                          <img src="/summer_sun_3d.png" className="w-full h-full object-cover p-1" alt="Mascot Preview" />
                          {!content.musicPlayer.enabled && (
                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] rounded-full flex items-center justify-center">
                              <span className="text-white text-[10px] font-black uppercase tracking-widest">Off</span>
                            </div>
                          )}
                        </div>
                        <p className="mt-8 text-slate-400 text-xs font-medium text-center max-w-[200px]">Music Player will appear on the bottom left of the screen.</p>
                      </div>
                    </div>
                    <SectionSaveButton sectionId="musicPlayer" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
