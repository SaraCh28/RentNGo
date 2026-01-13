import { motion } from 'framer-motion';
import { FadeInUp } from './animatedSection';

const brands = [
  { name: 'Toyota', logo: 'https://www.carlogos.org/car-logos/toyota-logo-2019-3700x1200.png' },
  { name: 'BMW', logo: 'https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png' },
  { name: 'Audi', logo: 'https://www.carlogos.org/car-logos/audi-logo-2016-640.png' },
  { name: 'Honda', logo: 'https://www.carlogos.org/car-logos/honda-logo-2000.png' },
  { name: 'Ford', logo: 'https://www.carlogos.org/car-logos/ford-logo-2017.png' },
    { name: 'Chevrolet', logo: 'https://www.carlogos.org/car-logos/chevrolet-corvette-logo-2020-640.png' },
    { name: 'Nissan', logo: 'https://www.carlogos.org/car-logos/nissan-logo.png' },
    {name: 'Volkswagen', logo: 'https://www.carlogos.org/car-logos/volkswagen-logo.png' },
    {name: 'Hyundai', logo: 'https://www.carlogos.org/car-logos/hyundai-logo.png' },
    {name: 'Kia', logo: 'https://www.carlogos.org/car-logos/kia-logo.png' },
    {name: 'Mazda', logo: 'https://www.carlogos.org/car-logos/mazda-logo-2018-vertical-640.png' },
    {name: 'tesla', logo: 'https://www.carlogos.org/car-logos/tesla-logo-2007-full-640.png' },


];

const BrandsCarousel = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-t from-[#3b245e] to-[#0b0118] py-8">
    <FadeInUp>
            <p className="text-center text-gray-300 mb-6">Trusted by leading car brands</p>
            
          </FadeInUp>
      <motion.div
        className="flex gap-16 items-center"
        animate={{
          x: [0, -1200],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {[...brands, ...brands, ...brands].map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 w-32 h-16 flex items-center justify-center text-[#6438c2] hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsCarousel;
