// Shared JS for the static site
document.addEventListener('DOMContentLoaded', ()=>{

  // Projects data seeded from GitHub (pulled server-side by the assistant)
  const projects = [
    {
      id: 'invisible-cloak',
      title: 'Invisible Cloak',
      desc: 'Real-time color segmentation to create an invisible-cloak effect. Streamlit demo available.',
      tech: ['OpenCV','HSV Masks','Streamlit'],
      repo: 'https://github.com/MUKARRAM-ONE/Computer-Vision/tree/main/invisible-cloak',
      thumb: 'assets/img/invisible-cloak.png'
    },
    {
      id: 'finger-counter',
      title: 'Finger Counter',
      desc: 'Counts number of fingers shown to the camera using contour and convexity defect detection.',
      tech: ['OpenCV','Contours'],
      repo: 'https://github.com/MUKARRAM-ONE/Computer-Vision/tree/main/finger-counter',
      thumb: 'assets/img/finger-counter.png'
    },
    {
      id: 'hand-tracking',
      title: 'Hand Tracking / Gesture Recognition',
      desc: 'MediaPipe-based hand tracking and gesture mapping for simple interactions.',
      tech: ['MediaPipe','JS / Python'],
      repo: 'https://github.com/MUKARRAM-ONE/Computer-Vision/tree/main/hand-tracking',
      thumb: 'assets/img/hand-tracking.png'
    },
    {
      id: 'face-emotion-detector',
      title: 'Face & Emotion Detector',
      desc: 'Face detection + lightweight emotion classifier to recognize basic emotions.',
      tech: ['OpenCV','PyTorch/TensorFlow'],
      repo: 'https://github.com/MUKARRAM-ONE/Computer-Vision/tree/main/face-emotion-detector',
      thumb: 'assets/img/face-emotion.png'
    }
  ];

  // Inject projects into home preview
  const grid = document.getElementById('projectsGrid');
  if(grid){
    projects.slice(0,3).forEach(p=>{
      const el = document.createElement('article');
      el.className = 'card project-card';
      el.innerHTML = `<img src="${p.thumb}" alt="${p.title}" style="width:100%;height:140px;object-fit:cover;border-radius:8px;margin-bottom:.6rem">
        <h3>${p.title}</h3>
        <p class="muted small">${p.desc}</p>
        <p style="margin-top:.4rem"><strong>Tech:</strong> ${p.tech.join(' • ')}</p>
        <div style="margin-top:.6rem"><a class="pill" href="${p.repo}" target="_blank">View repo</a> <a class="pill" href="projects.html#${p.id}">Case</a></div>`;
      grid.appendChild(el);
    });
  }

  // Inject all projects into projects page
  const allProjects = document.getElementById('allProjects');
  if(allProjects){
    projects.forEach(p=>{
      const col = document.createElement('div');
      col.className = 'card project-card';
      col.innerHTML = `<h3 id="${p.id}">${p.title}</h3>
        <p class="muted small">${p.desc}</p>
        <p><strong>Tech:</strong> ${p.tech.join(', ')}</p>
        <p style="margin-top:.6rem"><a class="pill" href="${p.repo}" target="_blank">Source</a> <a class="pill" href="${p.thumb}" target="_blank">Screenshot</a></p>`;
      allProjects.appendChild(col);
    });
  }

  // Simple rating component on homepage
  const ratingValueEl = document.getElementById('ratingValue');
  if(ratingValueEl){
    const rating = 4.8; // you can update this dynamically
    ratingValueEl.textContent = rating.toFixed(1);
    const container = document.createElement('span');
    container.className = 'rating';
    const full = Math.floor(rating);
    for(let i=0;i<5;i++){
      const star = document.createElement('span');
      star.className = 'star';
      if(i < full) star.textContent = '★';
      else if(i < rating) star.textContent = '☆';
      else star.textContent = '☆';
      container.appendChild(star);
    }
    ratingValueEl.insertAdjacentElement('afterend', container);
  }

  // Live background subtle animation (changes gradient over time)
  const bg = document.getElementById('bg-live');
  if(bg){
    const frames = [
      'radial-gradient(circle at 10% 20%, rgba(79,209,197,0.12), transparent 8%), radial-gradient(circle at 80% 80%, rgba(123,92,255,0.12), transparent 8%)',
      'radial-gradient(circle at 20% 30%, rgba(123,92,255,0.12), transparent 8%), radial-gradient(circle at 70% 70%, rgba(79,209,197,0.12), transparent 8%)',
      'radial-gradient(circle at 30% 10%, rgba(255,150,120,0.10), transparent 8%), radial-gradient(circle at 60% 80%, rgba(124,92,255,0.10), transparent 8%)'
    ];
    let idx = 0;
    bg.style.background = frames[idx];
    setInterval(()=>{ idx = (idx+1)%frames.length; bg.style.transition='background 1400ms ease'; bg.style.background = frames[idx]; }, 3000);
  }

});
