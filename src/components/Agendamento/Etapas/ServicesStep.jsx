import CustomCard from "@/components/UI-Components/CustomCard";
import servicesData from '@/assets/data/servicesData';

const ServicesStep = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        {servicesData.services.map((service, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CustomCard
              key={index}
              title={service.title}
              description={s.description}
              image={service.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesStep;
