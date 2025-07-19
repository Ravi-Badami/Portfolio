const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Freelance & Consulting',
      description: 'Leading complex web application development projects, specializing in React ecosystems and cloud architecture.',
      achievements: ['Built 15+ production applications', 'Mentored junior developers', 'Increased client efficiency by 40%']
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      company: 'Tech Innovation Hub',
      description: 'Developed scalable web applications using modern technologies and best practices.',
      achievements: ['Reduced load times by 60%', 'Implemented CI/CD pipelines', 'Led team of 3 developers']
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Digital Solutions Inc.',
      description: 'Created responsive and interactive user interfaces with focus on user experience.',
      achievements: ['Improved user engagement by 45%', 'Built component library', 'Optimized performance']
    }
  ];

  const certifications = [
    { name: 'AWS Certified Developer', icon: '☁️', level: 'Associate' },
    { name: 'React Professional', icon: '⚛️', level: 'Advanced' },
    { name: 'Node.js Certified', icon: '🟢', level: 'Professional' },
    { name: 'MongoDB Developer', icon: '🍃', level: 'Certified' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'Focused on delivering measurable business outcomes through technology solutions.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Constantly exploring cutting-edge technologies to solve complex problems.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Believe in the power of teamwork and effective communication.'
    },
    {
      icon: '📈',
      title: 'Growth Mindset',
      description: 'Committed to continuous learning and professional development.'
    }
  ];

  return (
    <section className='py-20 w-full' id='about'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <h2 className='text-5xl md:text-6xl font-black text-gray-900 mb-6'>
            About <span className='gradient-text'>Me</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8'></div>
          <p className='text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium'>
            A passionate technologist with 3+ years of experience crafting digital solutions 
            that make a difference. I transform complex business requirements into elegant, 
            scalable applications that users love.
          </p>
        </div>

        {/* Professional Story */}
        <div className='mb-20'>
          <div className='bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl'>
            <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>My Journey</h3>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  My journey in technology began with a curiosity about how things work. 
                  What started as tinkering with code has evolved into a passion for creating 
                  digital experiences that solve real-world problems.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  I specialize in the React ecosystem, Node.js backend development, and 
                  cloud architecture. My approach combines technical expertise with a 
                  deep understanding of business needs to deliver solutions that drive growth.
                </p>
                <div className='flex flex-wrap gap-3'>
                  <span className='bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold'>Problem Solver</span>
                  <span className='bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold'>Team Player</span>
                  <span className='bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold'>Fast Learner</span>
                  <span className='bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold'>Detail Oriented</span>
                </div>
              </div>
              
              {/* Values Grid */}
              <div className='grid grid-cols-2 gap-6'>
                {values.map((value, index) => (
                  <div key={value.title} className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
                    <div className='text-3xl mb-3'>{value.icon}</div>
                    <h4 className='font-bold text-gray-900 mb-2'>{value.title}</h4>
                    <p className='text-sm text-gray-600'>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className='mb-20'>
          <h3 className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12'>Professional Timeline</h3>
          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600'></div>
            
            <div className='space-y-12'>
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className='absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full z-10'></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                      <div className='flex items-center gap-3 mb-3'>
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold'>{item.year}</span>
                        <h4 className='font-bold text-gray-900 text-lg'>{item.title}</h4>
                      </div>
                      <p className='text-purple-600 font-semibold mb-3'>{item.company}</p>
                      <p className='text-gray-700 mb-4'>{item.description}</p>
                      <ul className='space-y-1'>
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className='text-sm text-gray-600 flex items-center gap-2'>
                            <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className='text-center'>
          <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12'>Certifications & Achievements</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {certifications.map((cert, index) => (
              <div key={cert.name} className='bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'>
                <div className='text-4xl mb-4'>{cert.icon}</div>
                <h4 className='font-bold text-gray-900 mb-2'>{cert.name}</h4>
                <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold'>{cert.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;