import { useEffect, useState } from "react";

export default function StatsSection() {
  const stats = [
    { value: 20, label: "Technologies worked", suffix: "+" },
    { value: 30, label: "Happy Clients", suffix: "+" },
    { value: 40, label: "Project Completed", suffix: "+" },
    { value: 50, label: "Experts in Team", suffix: "+" },
    { value: 60, label: "Industries", suffix: "+" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1000; 
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const newCounts = stats.map((item) =>
        Math.floor(progress * item.value)
      );

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://sltechnocrats.net/_next/static/media/image.cde601d8.png')",
      }}>

      <div className="absolute inset-0 bg-teal-900/80"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-white ">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-5xl font-bold">
                {counts[index]}
                {counts[index] === item.value && item.suffix}
              </h2>
              <p className="mt-2 text-xl">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
