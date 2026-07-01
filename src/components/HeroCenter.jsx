import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Search, BookOpen, FlaskConical, Users } from 'lucide-react';

export default function HeroCenter() {
  const [coursesCount, setCoursesCount] = useState(0);
  const [labsCount, setLabsCount] = useState(0);
  const [learnersCount, setLearnersCount] = useState(0);

  useEffect(() => {
    const counts = { courses: 0, labs: 0, learners: 0 };
    
    gsap.to(counts, {
      courses: 150,
      labs: 75,
      learners: 10,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        setCoursesCount(Math.floor(counts.courses));
        setLabsCount(Math.floor(counts.labs));
        setLearnersCount(Math.floor(counts.learners));
      }
    });
  }, []);

  return (
    <div className="center-content">
      {/* Title */}
      <h1 className="center-title">
        <span className="title-line-white">Master Cyber Security.</span><br />
        <span className="title-word-red">Choose </span>
        <span className="title-word-blue">Your Path.</span>
      </h1>

      {/* Subtitle */}
      <p className="center-tagline">
        Interactive courses, hands-on labs, real-world projects, and a community of learners.
      </p>

      {/* Search Input Box */}
      <div className="search-wrapper">
        <div className="search-input-container">
          <Search size={16} className="search-icon-inside" />
          <input 
            type="text" 
            placeholder="Search courses, labs, tools..." 
            className="search-field"
          />
        </div>
      </div>

      {/* Stats Container */}
      <div className="stats-container select-none">
        {/* Courses */}
        <div className="stat-item">
          <BookOpen size={20} className="stat-icon" />
          <div className="stat-text-wrapper">
            <span className="stat-number">{coursesCount}+</span>
            <span className="stat-label">Courses</span>
          </div>
        </div>

        {/* Labs */}
        <div className="stat-item">
          <FlaskConical size={20} className="stat-icon" />
          <div className="stat-text-wrapper">
            <span className="stat-number">{labsCount}+</span>
            <span className="stat-label">Labs</span>
          </div>
        </div>

        {/* Learners */}
        <div className="stat-item">
          <Users size={20} className="stat-icon" />
          <div className="stat-text-wrapper">
            <span className="stat-number">{learnersCount}K+</span>
            <span className="stat-label">Learners</span>
          </div>
        </div>
      </div>
    </div>
  );
}
