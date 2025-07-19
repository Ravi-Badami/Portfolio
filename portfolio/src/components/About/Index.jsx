const About = () => {
  const experience = [
    {
      period: '2024 - Present',
      role: 'Senior Full Stack Developer',
      company: 'Freelance & Consulting',
      description: 'Leading complex web application development projects, architecting scalable solutions.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB']
    },
    {
      period: '2023 - 2024',
      role: 'Full Stack Developer',
      company: 'Tech Innovation Hub',
      description: 'Developed high-performance web applications using modern technologies and best practices.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Redis']
    },
    {
      period: '2022 - 2023',
      role: 'Frontend Developer',
      company: 'Digital Solutions Inc.',
      description: 'Created responsive user interfaces with focus on performance and user experience.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Webpack', 'Jest']
    }
  ];

  const metrics = [
    { label: 'Years of Experience', value: '03', suffix: '+' },
    { label: 'Projects Delivered', value: '25', suffix: '+' },
    { label: 'Client Satisfaction', value: '99', suffix: '%' },
    { label: 'Code Quality Score', value: '98', suffix: '%' }
  ];

  return (
    <section className='section-padding bg-white' id='about'>
      <div className='container'>
        
        {/* Section Header */}
        <div className='text-center mb-20'>
          <h2 className='text-display text-gray-900 mb-6'>
            About <span className='accent-text'>Me</span>
          </h2>
          <div className='w-20 h-1 accent-bg mx-auto mb-8'></div>
          <p className='text-body-large text-gray-600 max-w-3xl mx-auto'>
            A passionate developer who transforms complex problems into elegant solutions. 
            I combine technical expertise with strategic thinking to build applications that matter.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
          {metrics.map((metric, index) => (
            <div key={metric.label} className='text-center card hover-lift'>
              <div className='text-4xl font-bold text-gray-900 font-mono mb-2'>
                {metric.value}<span className='accent-text'>{metric.suffix}</span>
              </div>
              <div className='text-sm text-gray-600'>{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          
          {/* Left Column - About Text */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-title text-gray-900 mb-6'>My Approach</h3>
              <div className='space-y-6 text-body text-gray-600'>
                <p>
                  I believe in writing clean, maintainable code that stands the test of time. 
                  My development philosophy centers around understanding business needs first, 
                  then crafting technical solutions that deliver real value.
                </p>
                <p>
                  With expertise spanning frontend and backend technologies, I architect 
                  full-stack solutions that are both scalable and user-friendly. Every line 
                  of code is written with performance, security, and maintainability in mind.
                </p>
                <p>
                  I'm passionate about staying current with emerging technologies while 
                  leveraging proven patterns and practices. This balance ensures robust 
                  solutions that push boundaries without sacrificing reliability.
                </p>
              </div>
            </div>

            {/* Core Skills */}
            <div>
              <h4 className='text-lg font-semibold text-gray-900 mb-4'>Core Competencies</h4>
              <div className='grid grid-cols-2 gap-3'>
                {[
                  'Full-Stack Development',
                  'System Architecture',
                  'Performance Optimization',
                  'Code Review & Mentoring',
                  'API Design',
                  'Database Design',
                  'Cloud Deployment',
                  'Testing Strategies'
                ].map((skill) => (
                  <div key={skill} className='flex items-center gap-2'>
                    <div className='w-2 h-2 accent-bg rounded-full'></div>
                    <span className='text-sm text-gray-700'>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience Timeline */}
          <div>
            <h3 className='text-title text-gray-900 mb-8'>Experience</h3>
            <div className='space-y-8'>
              {experience.map((exp, index) => (
                <div key={exp.company} className='relative pl-8 border-l-2 border-gray-200 last:border-l-0'>
                  {/* Timeline dot */}
                  <div className='absolute -left-2 top-0 w-4 h-4 accent-bg rounded-full'></div>
                  
                  <div className='card hover-lift'>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-3'>
                      <h4 className='font-semibold text-gray-900'>{exp.role}</h4>
                      <span className='text-sm font-mono text-gray-500'>{exp.period}</span>
                    </div>
                    
                    <div className='accent-text text-sm font-medium mb-3'>{exp.company}</div>
                    
                    <p className='text-gray-600 text-sm mb-4 leading-relaxed'>{exp.description}</p>
                    
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className='bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-mono'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-20'>
          <div className='card max-w-2xl mx-auto'>
            <h3 className='text-title text-gray-900 mb-4'>Let's Build Something Great</h3>
            <p className='text-body text-gray-600 mb-6'>
              Ready to discuss your next project? I'm always interested in tackling new challenges 
              and collaborating with innovative teams.
            </p>
            <button 
              onClick={() => document.getElementById('messages')?.scrollIntoView({ behavior: 'smooth' })}
              className='btn-primary'
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;