import { Badge } from "@/components/ui/badge";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Requirement",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    },
    {
      number: "02", 
      title: "UI/UX Desing",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    },
    {
      number: "03",
      title: "Prototype", 
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    },
    {
      number: "04",
      title: "Development",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Team Image Header */}
      <div className="relative mb-16">
        <div className="container mx-auto px-4">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
            alt="Team collaboration" 
            className="w-full h-64 object-cover rounded-2xl shadow-elegant"
          />
        </div>
      </div>

      {/* Process Steps */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-white space-y-4">
              <div className="text-6xl font-bold text-white/20 leading-none">
                {step.number}
              </div>
              
              <h3 className="text-2xl font-bold text-white">
                {step.title}
              </h3>
              
              <p className="text-white/90 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
    </section>
  );
};

export default ProcessSection;