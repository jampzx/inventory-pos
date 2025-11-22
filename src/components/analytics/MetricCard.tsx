import { motion } from "framer-motion";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  colorScheme: "purple" | "sky" | "yellow";
  index?: number;
}

const MetricCard = ({
  title,
  value,
  subtitle,
  colorScheme,
  index = 0,
}: MetricCardProps) => {
  const colorClasses = {
    purple: {
      border: "border-lamaPurple/40",
      background: "bg-lamaPurpleLight",
    },
    sky: {
      border: "border-lamaSky/40",
      background: "bg-lamaSkyLight",
    },
    yellow: {
      border: "border-lamaYellow/40",
      background: "bg-lamaYellowLight",
    },
  };

  const colors = colorClasses[colorScheme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={`relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm ${colors.border} shadow-sm cursor-pointer`}
    >
      <div
        className={`absolute -right-6 -top-6 h-20 w-20 rounded-full ${colors.background}`}
      />
      <div className="p-4 md:p-5 relative z-10">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          {title}
        </p>
        <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
        <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default MetricCard;
