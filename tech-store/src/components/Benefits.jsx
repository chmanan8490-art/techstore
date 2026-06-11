export default function Benefits() {
  const benefits = [
    {
      icon: "📦",
      title: "Free Shipping",
      desc: "On orders over $50"
    },
    {
      icon: "⏱️",
      title: "30 Days Returns",
      desc: "Money back guarantee"
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      desc: "100% secure payment"
    },
    {
      icon: "☎️",
      title: "24/7 Support",
      desc: "Dedicated support"
    }
  ];

  return (
    <section className="benefits">
      <div className="benefits-content">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="benefit-item">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
