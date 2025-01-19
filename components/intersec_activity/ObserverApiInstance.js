"use client";
const ObserverApiInstance = () => {
  const section = document.querySelectorAll("section");

  const styleMap = {
    "position-absolute bottom-70 end-0 p-3 z-1 d-none d-md-block":
      "mission-corner-intersectin-style",
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.replaceState(null, null, `#${entry.target.id}`);
          const section = entry.target;
          section.querySelectorAll("*").forEach((child) => {
            const styleClass = styleMap[child.className];
            if (styleClass) {
              child.classList.add(styleClass);
            }
          });
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  section.forEach((sect) => {
    observer.observe(sect);
  });

  return () => {
    section.forEach((sect) => {
      observer.unobserve(sect);
    });
  };
};

export default ObserverApiInstance;
