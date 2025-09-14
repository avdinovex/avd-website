import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Bot, Code, Paintbrush, Smartphone, Zap, MoveUpRight, Quote, Linkedin, Twitter, Github, Mail, Phone, MapPin, Sparkles, Layers, Cpu } from 'lucide-react';

// Animation Variants for Framer Motion
// These can be reused across different components for a consistent feel
const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
};

// A reusable component to trigger animations when elements scroll into view
const AnimatedInView = ({ children, tag: Tag = 'div', variants, once = true, amount = 0.3, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};


// Modern SVG Components (No changes needed, they are great as is!)
const FloatingParticles = () => (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice">
        <defs>
            <linearGradient id="particle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="glow-effect">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        {[...Array(15)].map((_, i) => (
            <circle
                key={i}
                cx={Math.random() * 1000}
                cy={Math.random() * 800}
                r={Math.random() * 4 + 2}
                fill="url(#particle-gradient)"
                filter="url(#glow-effect)"
                className="animate-pulse"
                style={{
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                }}
            />
        ))}
    </svg>
);
const ModernTechPattern = () => (
    <svg viewBox="0 0 400 300" className="w-full h-auto opacity-30" preserveAspectRatio="xMidYMid meet">
        <defs>
            <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="tech-glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g stroke="url(#tech-gradient)" strokeWidth="2" fill="none" filter="url(#tech-glow)">
            <path d="M50,50 L150,50 L150,100 L250,100 L250,150 L350,150" className="animate-pulse" />
            <path d="M50,250 L100,250 L100,200 L200,200 L200,100 L300,100" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M350,50 L300,50 L300,150 L200,150 L200,250 L100,250" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </g>
        {[
            [50, 50], [150, 50], [150, 100], [250, 100], [250, 150], [350, 150],
            [50, 250], [100, 250], [100, 200], [200, 200], [300, 100],
            [350, 50], [300, 50], [200, 150]
        ].map(([x, y], index) => (
            <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="url(#tech-gradient)"
                filter="url(#tech-glow)"
                className="animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
            />
        ))}
    </svg>
);
const GeometricPattern = () => (
    <svg className="absolute top-0 right-0 w-96 h-96 opacity-10" viewBox="0 0 200 200">
        <defs>
            <linearGradient id="geometric-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
        </defs>
        <g fill="url(#geometric-gradient)">
            <polygon points="100,20 120,60 80,60" className="animate-pulse" />
            <polygon points="160,100 180,140 140,140" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <polygon points="40,100 60,140 20,140" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <polygon points="100,180 120,220 80,220" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        </g>
    </svg>
);

// Header Component
const Header = () => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Services', 'AI Specialization', 'Showcase', 'Contact'];
    
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-gray-800/95 backdrop-blur-md shadow-2xl border-b border-gray-600' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-white tracking-wider">AVD INOVEX</div>
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                            {item}
                        </a>
                    ))}
                </nav>
                <button className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                    Get a Quote
                </button>
            </div>
        </header>
    );
};

// Hero Section Component
const HeroSection = () => (
    <section className="relative min-h-screen flex items-center bg-gray-800 overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <FloatingParticles />
        </div>
        <GeometricPattern />
        <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
        }}></div>

        <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div 
                className="max-w-5xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={variants.staggerContainer}
            >
                <motion.div variants={variants.fadeInUp} className="mb-6">
                    <span className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 font-semibold rounded-full border border-blue-400/30">
                        <Sparkles className="w-4 h-4 mr-2" />
                        AI-Powered Innovation
                    </span>
                </motion.div>
                <motion.h1 variants={variants.fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-white">
                    Engineering Digital Excellence with{' '}
                    <TypeAnimation
                        sequence={['Websites.', 1500, 'AI Apps.', 1500, 'Software.', 1500, 'Intelligent Solutions.', 1500,]}
                        wrapper="span"
                        speed={50}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400"
                        repeat={Infinity}
                    />
                </motion.h1>
                <motion.p variants={variants.fadeInUp} className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                    AVD Inovex is your strategic partner in crafting bespoke websites, powerful web applications, and cutting-edge AI-driven platforms that redefine industries.
                </motion.p>
                <motion.div variants={variants.fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/25">
                        Explore Our Work
                    </button>
                    <button className="bg-gray-700/80 backdrop-blur-sm border-2 border-gray-500 text-gray-200 py-4 px-8 rounded-xl text-lg font-semibold hover:bg-gray-600 hover:border-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                        Contact Us <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </button>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

// Services Section Component
const ServicesSection = () => {
    const services = [
        { icon: Paintbrush, title: 'Custom Websites', description: 'Visually stunning, responsive websites that tell your brand\'s story and convert visitors into customers.', gradient: 'from-pink-500 to-rose-500' },
        { icon: Code, title: 'Web Applications', description: 'Robust, scalable, and secure web applications tailored to your complex business requirements.', gradient: 'from-blue-500 to-cyan-500' },
        { icon: Smartphone, title: 'Mobile Development', description: 'Intuitive and high-performance mobile apps for iOS and Android that engage users on the go.', gradient: 'from-green-500 to-emerald-500' },
        { icon: Bot, title: 'AI Integration', description: 'Leverage the power of Artificial Intelligence to automate processes, gain insights, and create smarter products.', gradient: 'from-purple-500 to-indigo-500' },
    ];

    return (
        <section id="services" className="py-20 bg-gray-700">
            <div className="container mx-auto px-6">
                <AnimatedInView tag="div" variants={variants.staggerContainer} className="text-center mb-16">
                    <motion.span variants={variants.fadeInUp} className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 font-semibold rounded-full mb-4 border border-blue-400/30">
                        Our Expertise
                    </motion.span>
                    <motion.h2 variants={variants.fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Services</motion.h2>
                    <motion.p variants={variants.fadeInUp} className="text-gray-300 text-lg max-w-2xl mx-auto">From concept to deployment, we provide end-to-end solutions that drive growth and efficiency.</motion.p>
                </AnimatedInView>
                <AnimatedInView tag="div" variants={variants.staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            variants={variants.fadeInUp}
                            whileHover={{ y: -16, scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                            className="group"
                        >
                            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-600 transition-colors duration-500 group-hover:border-blue-500/50 h-full shadow-lg">
                                <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatedInView>
            </div>
        </section>
    );
};

// AI Specialization Section
const AiSpecializationSection = () => (
    <section id="ai-specialization" className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedInView tag="div" variants={variants.staggerContainer}>
                    <motion.span variants={variants.fadeInUp} className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 font-semibold rounded-full mb-4 border border-purple-400/30">
                        Our Edge
                    </motion.span>
                    <motion.h2 variants={variants.fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Specialization in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"> Artificial Intelligence</span>
                    </motion.h2>
                    <motion.p variants={variants.fadeInUp} className="text-gray-300 text-lg mb-8 leading-relaxed">
                        We don't just use AI; we innovate with it. Our dedicated AI/ML team pioneers solutions in natural language processing, computer vision, and predictive analytics to solve real-world challenges.
                    </motion.p>
                    <div className="space-y-4">
                        {[
                            { icon: Cpu, text: 'Machine Learning Models' },
                            { icon: Layers, text: 'Natural Language Processing (NLP)' },
                            { icon: Zap, text: 'Data Science & Predictive Analytics' },
                            { icon: Sparkles, text: 'Generative AI Solutions' }
                        ].map((item, index) => (
                            <motion.div key={index} variants={variants.fadeInUp} className="flex items-center group">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <item.icon className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-gray-300 font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedInView>
                <AnimatedInView tag="div" variants={variants.fadeInUp} className="relative">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-600 p-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-40"><ModernTechPattern /></div>
                        <div className="relative z-10">
                            <div className="bg-gray-800/80 rounded-2xl p-6 font-mono text-sm border border-gray-600">
                                <div className="text-cyan-400 mb-3 flex items-center"><span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>// AI Innovation Engine</div>
                                <div className="space-y-2">
                                    <div className="text-gray-300"><span className="text-purple-400">const</span> <span className="text-cyan-300">solution</span> = <span className="text-yellow-400"> createAI</span>({'{'}</div>
                                    <div className="text-gray-300 ml-4">problem: <span className="text-green-400">'your_challenge'</span>,</div>
                                    <div className="text-gray-300 ml-4">model: <span className="text-green-400">'Custom-GPT'</span>,</div>
                                    <div className="text-gray-300 ml-4">impact: <span className="text-green-400">'Exponential Growth'</span></div>
                                    <div className="text-gray-300">{'}'});</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedInView>
            </div>
        </div>
    </section>
);

// Showcase Section
const ShowcaseSection = () => {
    const projects = [
        { title: 'Fintech AI Platform', category: 'Web Application', color: 'from-blue-600 to-cyan-600' },
        { title: 'E-commerce Recommender', category: 'AI Integration', color: 'from-purple-600 to-pink-600' },
        { title: 'SaaS Enterprise Dashboard', category: 'Web Application', color: 'from-green-600 to-teal-600' },
        { title: 'Healthcare Mobile App', category: 'Mobile Development', color: 'from-orange-600 to-red-600' },
    ];

    return (
        <section id="showcase" className="py-20 bg-gray-700">
            <div className="container mx-auto px-6">
                <AnimatedInView tag="div" variants={variants.staggerContainer} className="text-center mb-16">
                    <motion.span variants={variants.fadeInUp} className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 font-semibold rounded-full mb-4 border border-cyan-400/30">Portfolio</motion.span>
                    <motion.h2 variants={variants.fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">Our Showcase</motion.h2>
                    <motion.p variants={variants.fadeInUp} className="text-gray-300 text-lg max-w-2xl mx-auto">We've partnered with forward-thinking companies to build exceptional digital products.</motion.p>
                </AnimatedInView>
                <AnimatedInView tag="div" variants={variants.staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={variants.fadeInUp} className="group">
                             <motion.div whileHover={{ y: -8 }} transition={{type: 'spring', stiffness: 300}} className="relative bg-gray-800 rounded-3xl overflow-hidden border border-gray-600 hover:border-blue-500/50 transition-colors duration-500 shadow-lg">
                                <div className={`h-64 md:h-80 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gray-800/20 backdrop-blur-sm"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
                                        <div className="absolute w-20 h-20 bg-white/20 rounded-full animate-ping"></div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-2 border border-white/30">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                </div>
                                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileHover={{ opacity: 1, scale: 1 }} className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-sm rounded-full transition-opacity duration-300 border border-white/30">
                                    <MoveUpRight className="w-6 h-6 text-white" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatedInView>
            </div>
        </section>
    );
};


// Testimonials Section
const TestimonialsSection = () => {
    // Testimonial data
    const testimonials = [
        { 
            quote: "AVD Inovex transformed our legacy system into a modern, AI-powered platform, boosting our efficiency by 200%. Their expertise is unmatched.", 
            name: "John Carter", 
            title: "CEO, Innovate Corp",
            avatar: "JC"
        },
        { 
            quote: "The team's dedication and communication were incredible. They delivered a world-class mobile app that our users love. Highly recommended.", 
            name: "Sophia Chen", 
            title: "Founder, Tech Startups",
            avatar: "SC"
        },
        { 
            quote: "Working with them was a game-changer. The final product exceeded all our expectations and their attention to detail was impeccable.", 
            name: "David Lee", 
            title: "CTO, Future Solutions",
            avatar: "DL"
        }
    ];

    // We duplicate the testimonials to create a seamless, infinite scrolling effect
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-20 bg-gray-800 overflow-hidden">
            <motion.div 
                className="container mx-auto px-6 text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={variants.staggerContainer}
            >
                <motion.span variants={variants.fadeInUp} className="inline-block px-4 py-2 bg-green-500/20 text-green-300 font-semibold rounded-full mb-4 border border-green-400/30">
                    Testimonials
                </motion.span>
                <motion.h2 variants={variants.fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
                    What Our Clients Say
                </motion.h2>
            </motion.div>

            <div 
                className="group w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
            >
                {/* Here we apply the .animate-scroll utility class from our CSS.
                  The animation is paused on hover using Tailwind's group-hover utility.
                */}
                <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div key={index} className="w-[clamp(20rem,35vw,28rem)] mx-4 flex-shrink-0">
                            <div className="bg-gray-700/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-600 transition-all duration-300 hover:!scale-105 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                                <Quote className="w-12 h-12 text-blue-400 mb-6" />
                                <p className="text-gray-300 text-lg mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center mt-auto">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4 shadow-lg">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{testimonial.name}</p>
                                        <p className="text-gray-400">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// Contact Section
const ContactSection = () => (
    <section id="contact" className="py-20 bg-gray-700 relative overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
            <AnimatedInView tag="div" variants={variants.staggerContainer} className="text-center mb-16">
                <motion.span variants={variants.fadeInUp} className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 font-semibold rounded-full mb-4 border border-orange-400/30">Get In Touch</motion.span>
                <motion.h2 variants={variants.fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build Together</motion.h2>
                <motion.p variants={variants.fadeInUp} className="text-gray-300 text-lg max-w-2xl mx-auto">Have a project in mind? We'd love to hear about it. Reach out to us for a consultation.</motion.p>
            </AnimatedInView>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <AnimatedInView tag="div" variants={variants.staggerContainer} className="text-white">
                    <motion.p variants={variants.fadeInUp} className="text-gray-300 mb-8 leading-relaxed">We're open for any suggestions or just to have a chat. Feel free to reach out directly or use the contact form.</motion.p>
                    <motion.div variants={variants.fadeInUp} className="space-y-6">
                        {[
                            { icon: Phone, title: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                            { icon: Mail, title: "Email", value: "contact@avdinovex.com", href: "mailto:contact@avdinovex.com" },
                            { icon: MapPin, title: "Address", value: "123 Innovation Drive, Tech City, 10101" }
                        ].map(item => (
                            <div key={item.title} className="flex items-center">
                                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4 shadow-lg flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">{item.title}</p>
                                    {item.href ? (
                                        <a href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors">{item.value}</a>
                                    ) : (
                                        <p className="text-gray-300">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatedInView>
                <AnimatedInView tag="div" variants={variants.fadeInUp} className="bg-gray-800/80 backdrop-blur-md border border-gray-600 p-8 md:p-12 rounded-3xl shadow-2xl">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input type="text" placeholder="Your Name" className="bg-gray-700/80 backdrop-blur-sm text-white placeholder-gray-400 p-4 rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all" />
                            <input type="email" placeholder="Your Email" className="bg-gray-700/80 backdrop-blur-sm text-white placeholder-gray-400 p-4 rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all" />
                        </div>
                        <textarea placeholder="Tell us about your project..." rows="5" className="w-full bg-gray-700/80 backdrop-blur-sm text-white placeholder-gray-400 p-4 rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all mb-6"></textarea>
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/25">Send Message</button>
                    </form>
                </AnimatedInView>
            </div>
        </div>
    </section>
);

// Footer Component
const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-8 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">AVD INOVEX</h3>
                    <p className="text-gray-400">© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>
                <div className="flex space-x-6">
                    {[
                        { icon: Twitter, href: "#", label: "Twitter" },
                        { icon: Github, href: "#", label: "GitHub" },
                        { icon: Linkedin, href: "#", label: "LinkedIn" }
                    ].map((social, index) => (
                        <a key={index} href={social.href} className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-400 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg" aria-label={social.label}>
                            <social.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

// Main App Component
const App = () => {
    return (
        <div className="bg-gray-800 font-sans antialiased">
            <Header />
            <main>
                <HeroSection />
                <ServicesSection />
                <AiSpecializationSection />
                <ShowcaseSection />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;